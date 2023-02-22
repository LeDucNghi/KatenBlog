import { faker } from "@faker-js/faker";

export const highestList = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    time: "May 10, 2020 • 5 mins read",
    subtitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    time: "May 10, 2020 • 5 mins read",
    subtitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },

  {
    id: 3,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    time: "May 10, 2020 • 5 mins read",
    subtitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    time: "May 10, 2020 • 5 mins read",
    subtitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    categories: "Food and Drink",
    title: "Far far away behind the Word Mountains far from Away.",
    time: "May 10, 2020 • 5 mins read",
    subtitle:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
  },
];

export const blogs = [...Array(6)].map((_, index) => ({
  id: faker.datatype.uuid(),
  img: faker.image.nightlife(),
}));
