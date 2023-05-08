import { PrismaClient } from "@prisma/client";

import { places, posts } from "./mocks";

const prisma = new PrismaClient();

async function seed() {
  await prisma.place.deleteMany();
  for (const place of places) {
    await prisma.place.create({
      data: place,
    });
  }

  await prisma.post.deleteMany();
  for (const post of posts) {
    await prisma.post.create({
      data: post,
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
