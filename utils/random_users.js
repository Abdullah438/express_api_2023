import { faker } from "@faker-js/faker";

const randomUsers = async (limit) => {
  const users = [];
  for (let i = 1; i <= limit; i++) {
    const newUser = {
      username: faker.internet.userName(),
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      bio: faker.person.bio(),
      avatar: faker.image.avatar(),
    };
    users.push(newUser);
  }
  return users;
};

const limit = parseInt(process.argv[2] || 1);

randomUsers(limit).then((users) => {
  users.forEach((user) => {
    console.log(JSON.stringify(user));
  });
});
