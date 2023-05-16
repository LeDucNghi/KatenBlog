import { faker } from "@faker-js/faker";
import moment from "moment";

export const BlogsSample = [
  {
    id: 1,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 1,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },
  {
    id: 2,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 2,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },

  {
    id: 3,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 3,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },
  {
    id: 4,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 4,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },
  {
    id: 5,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 5,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },

  {
    id: 6,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 6,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },

  {
    id: 7,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 7,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },

  {
    id: 8,
    image: faker.image.image(),
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    user: {
      id: 8,
      fullname: faker.name.fullName(),
      avatar:
        "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },
];

export const blogs = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  image: faker.image.nightlife(),
}));

export const comments = [...Array(3)].map((_, index) => ({
  id: faker.datatype.uuid(),
  image: faker.image.avatar(),
  name: faker.name.fullName(),
  date: moment(faker.date.recent()).format("LL"),
  comment: faker.lorem.paragraph(),
}));

export const BlogsData = [
  ...Array(4).map((index) => ({
    id: faker.datatype.uuid(),
    title: "THIS IS MY THIRD BLOG",
    subTitle: "HOPE YOU GUYS ENJOY IT AGAIN & AGAIN",
    image: faker.image.image(),
    categories: [
      "LifeStyle",
      "Inspiration",
      "Fashion",
      "Politic",
      "Trending",
      "Culture",
    ],
  })),
];
