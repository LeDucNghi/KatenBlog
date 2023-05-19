import "./Related.scss";

import { Box, Typography } from "@mui/material";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../../mock";

export interface IRelatedBlogsProps {}

export function RelatedBlogs(props: IRelatedBlogsProps) {
  return (
    <Box className="addeditblog_foot">
      <Typography className="foot_title">RELATED ARTICLES</Typography>

      <Box className="foot_blogs_related">
        {BlogsSample.slice(0, 4).map((blogs, key) => {
          return (
            <BlogItems
              direction="vertical"
              items={blogs}
              key={key}
              showBadge={false}
              style={{
                margin: "0 1em",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
