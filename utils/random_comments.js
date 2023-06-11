import { faker } from "@faker-js/faker";

const randomComments = (count, postId) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      postId: postId,
      content: faker.lorem.paragraph(),
      author: faker.person.fullName(),
      createdAt: new Date().getTime(),
    });
  }
  return comments;
};

const limit = process.argv[2] || 1;
const postId = process.argv[3];
if (postId === undefined) throw new Error("Post id is required");

randomComments(limit, postId).forEach((comment) => {
  console.log(JSON.stringify(comment));
});
