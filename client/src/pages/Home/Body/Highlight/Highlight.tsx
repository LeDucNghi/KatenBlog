import "./Highlight.scss";

import { Button, Paper, TextField, Typography } from "@mui/material";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../../mock";

export interface IHighlightProps {}

export function Highlight(props: IHighlightProps) {
  return (
    <div className="highlight_container">
      <h3 className="highlight_title">TODAY'S HIGHLIGHT</h3>

      <div className="highlight_blog">
        <div className="highlight_highest">
          {BlogsSample.slice(0, 2).map((items, key) => {
            return (
              <div key={key} className="highlight_highest_items">
                <div className="highest_img">
                  <img src={items.image as string} alt="" />
                </div>

                <div className="highest_text">
                  <p className="highest_categories">{items.categories} </p>
                  <h2 className="highest_title">{items.title}</h2>
                  <p className="highest_time">{items.createdAt} </p>
                  <p className="highest_subtitle">{items.subTitle}</p>
                </div>
              </div>
            );
          })}

          <div className="highlight_attach">
            {BlogsSample.slice(2, 6).map((items, key) => {
              return (
                <BlogItems direction="horizontal" items={items} key={key} />
                // <div key={key} className="highlight_attach_items">
                //   <div className="attach_img">
                //     <img src={items.img} alt="" />
                //   </div>

                //   <div className="attach_text">
                //     <p className="attach_categories">{items.categories} </p>
                //     <h2 className="attach_title">{items.title}</h2>
                //     <p className="attach_time">{items.createdAt} </p>
                //     <p className="attach_subtitle">{items.subTitle}</p>
                //   </div>
                // </div>
              );
            })}
          </div>
        </div>

        <div className="highlight_advertise">
          <Paper elevation={3} className="advertise_container">
            <div className="advertise_img">
              <img
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                alt=""
              />
            </div>

            <Typography className="advertise_title" variant="h3">
              Subscribe to Newsletter
            </Typography>

            <Typography className="advertise_subtitle" variant="h4">
              Far far away behind the word mountains far from.
            </Typography>

            <TextField
              id="outlined-basic"
              label="Enter email"
              variant="outlined"
            />

            <Button className="advertise_button" type="button">
              Subscribe
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
}
