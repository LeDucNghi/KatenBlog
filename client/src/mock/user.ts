import { Profile } from "../models";
import { faker } from "@faker-js/faker";

export const UsersData = [
  ...Array(10).map((index) => ({
    id: faker.helpers.arrayElement([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ]),
    fullname: faker.name.fullName(),
    avatar: faker.image.avatar(),

    description: faker.name.jobDescriptor(),
  })),
];
