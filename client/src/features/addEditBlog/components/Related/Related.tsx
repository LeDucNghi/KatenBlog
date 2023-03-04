import "./Related.scss";

import { Box, Typography } from "@mui/material";

import { highestList } from "../../../../mock";

export interface IRelatedBlogsProps {}

export function RelatedBlogs(props: IRelatedBlogsProps) {
  return (
    <Box className="addeditblog_foot">
      <Typography>RELATED ARTICLES</Typography>

      <Box className="foot_blogs_related">
        {highestList.slice(0, 4).map((items, key) => {
          return (
            <div key={key} className="blogs_related_items">
              <div className="related_items_img">
                <img src={items.img} alt="" />
              </div>

              <div className="related_items_content">
                <p className="items_content_category">{items.categories} </p>
                <h3 className="items_content_title">{items.title} </h3>
                <p className="items_content_time">{items.time} </p>
                <p className="items_content_subtitle">{items.subtitle} </p>
              </div>
            </div>
          );
        })}
      </Box>
    </Box>
  );
}
