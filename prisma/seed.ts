import { PrismaClient } from "@prisma/client";
import { places, posts } from "./mocks";

const prisma = new PrismaClient();

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seed() {
  await prisma.post.deleteMany();
  await prisma.place.deleteMany();

  const createdPlaces = await Promise.all(
    places.map(async (place) => {
      return prisma.place.create({
        data: {
          slug: place.slug,
          title: place.title,
          description: place.description,
          image: place.image,
        },
      });
    })
  );

  posts.map(async (post) => {
    const placeId = createdPlaces[getRandomInt(0, createdPlaces.length - 1)].id;
    return prisma.post.create({
      data: {
        slug: post.slug,
        title: post.title,
        image: post.image,
        excerpt: post.excerpt,
        placeId,
      },
    });
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
