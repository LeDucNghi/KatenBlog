import { faker } from "@faker-js/faker";
import moment from "moment";

export const highestList = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020 • 5 mins read",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020 • 5 mins read",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020 • 5 mins read",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020 • 5 mins read",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    createdAt: "May 10, 2020 • 5 mins read",
    subTitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
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
