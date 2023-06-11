import { faker } from "@faker-js/faker";

const randomPosts = async (limit) => {
  const posts = [];
  for (let i = 1; i <= limit; i++) {
    const newPost = {
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      author: faker.person.fullName(),
    };
    posts.push(newPost);
  }
  return posts;
};

const limit = parseInt(process.argv[2] || 1);

randomPosts(limit).then((posts) => {
  posts.forEach((post) => {
    console.log(JSON.stringify(post));
  });
});