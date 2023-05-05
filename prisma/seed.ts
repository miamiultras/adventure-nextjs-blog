import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const places = [
  {
    slug: "place-1",
    title: "Beach Paradise",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ny.jpg",
  },
  {
    slug: "place-2",
    title: "Mountain Retreat",
    description: "Sydney is the largest city in Australia and is known for its beautiful beaches, harbor, and landmarks. Some of the top attractions in Sydney include the Sydney Opera House, the Sydney Harbour Bridge, and Bondi Beach. Sydney also has a vibrant arts and culture scene.",
    image: "/images/lapaz.jpg",
  },
  {
    slug: "place-3",
    title: "City Escape",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ee.jpg",
  },
  {
    slug: "place-4",
    title: "Nature's Beauty",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ny.jpg",
  },
  {
    slug: "place-5",
    title: "Island Adventure",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/sag.jpg",
  },
  {
    slug: "place-6",
    title: "Historic Wonders",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/holly.jpg",
  },
  {
    slug: "place-7",
    title: "Desert Oasis",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/background.jpg",
  },
  {
    slug: "place-8",
    title: "Tropical Paradise",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ny.jpg",
  },
  {
    slug: "place-9",
    title: "Countryside Retreat",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ee.jpg",
  },
  {
    slug: "place-10",
    title: "Countryside Retreat",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/holly.jpg",
  },
  {
    slug: "place-11",
    title: "Countryside Retreat",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/ny.jpg",
  },
  {
    slug: "place-12",
    title: "Countryside Retreat",
    description: "Tokyo is the capital of Japan and is known for its vibrant culture, food, and technology. Some of the top attractions in Tokyo include the Tokyo Tower, the Imperial Palace, and the Meiji Shrine. Tokyo is also famous for its anime and manga culture.",
    image: "/images/background.jpg",
  },
];

const posts = [
  {
    slug: 'post-1',
    title: "10 Best Hiking Trails in the Rocky Mountains",
    image: "/images/ee.jpg",
    excerpt:
      "The Rocky Mountains offer some of the most breathtaking hiking trails in North America. From stunning vistas to challenging terrain, here are the top 10 hiking trails to explore.",
  },
  {
    slug: 'post-2',
    title: "Discovering the Magic of Machu Picchu",
    image: "/images/holly.jpg",
    excerpt:
      "Machu Picchu is one of the world's most iconic archaeological sites, and a must-see destination for any traveler. Learn about the history of this amazing place and what you can expect on your visit.",
  },
  {
    slug: 'post-3',
    title: "Exploring the Wonders of the Great Barrier Reef",
    image: "/images/lapaz.jpg",
    excerpt:
      "The Great Barrier Reef is one of the world's most stunning natural wonders, and a must-see destination for any nature lover. Discover the incredible marine life and vibrant coral reefs of this amazing place.",
  },
  {
    slug: 'post-4',
    title: "Safari Adventure: A Journey Through the Serengeti",
    image: "/images/ny.jpg",
    excerpt:
      "Embark on a once-in-a-lifetime safari adventure through the vast plains of the Serengeti. Experience the thrill of spotting some of Africa's most iconic wildlife, from majestic lions to graceful giraffes.",
  },
  {
    slug: 'post-5',
    title: "Cruising the Fjords of Norway",
    image: "/images/sag.jpg",
    excerpt:
      "The fjords of Norway offer some of the most breathtaking scenery in the world, and a cruise through these majestic waterways is an unforgettable experience. Discover the beauty and wonder of Norway's fjords.",
  },
  {
    slug: 'post-6',
    title: "Cruising the Fjords of Norway",
    image: "/images/holly.jpg",
    excerpt:
      "The fjords of Norway offer some of the most breathtaking scenery in the world, and a cruise through these majestic waterways is an unforgettable experience. Discover the beauty and wonder of Norway's fjords.",
  },
];

async function seed() {
  await prisma.place.deleteMany()
  for (const place of places) {
    await prisma.place.create({
      data: place,
    });
  }

  await prisma.post.deleteMany()
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
