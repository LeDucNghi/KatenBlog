import "./Carousel.scss";

import * as React from "react";

import { Box, Button, Paper } from "@mui/material";

import Carousel from "react-material-ui-carousel";

export interface ICustomCarouselProps {}

export function CustomCarousel(props: ICustomCarouselProps) {
  function Item(props: any) {
    return (
      <Box className="carousel_items">
        <Paper elevation={10} className="carousel_items_content">
          <p className="categories">{props.item.categories}</p>
          <h2 className="title">{props.item.title}</h2>
          <h4 className="subtitle">{props.item.subtitle} </h4>
          <p className="time">{props.item.time} </p>

          <Button className="CheckButton">Check it out!</Button>
        </Paper>

        <div className="carousel_items_img">
          <img src={props.item.image} alt="" />
        </div>
      </Box>
    );
  }

  return (
    <Carousel
      className="carousel_container"
      fullHeightHover={true}
      navButtonsAlwaysVisible={true}
      indicators={false}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

const items = [
  {
    categories: "Random Name #1",
    title: "Probably the most random thing you have ever seen!",
    subtitle: "Sub title",
    time: "May 10, 2020",
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  },
  {
    categories: "Random Name #2",
    title: "Probably the most random thing you have ever seen!",
    subtitle: "Sub title",
    time: "May 10, 2020",
    image:
      "https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
  },
];
