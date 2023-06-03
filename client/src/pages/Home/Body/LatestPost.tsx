import * as React from "react";

import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { BlogItems } from "../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../mock";
import { CustomPagination } from "../../../components/Common/Pagination/Pagination";
import { RoundedWidget } from "../../../widgets/RoundedWidget/RoundedWidgets";
import { fetchLatestPost } from "../../../features/addEditBlog/addEditThunk";
import { selectPaginate } from "../../../features/addEditBlog/addEditSlice";

export interface ILatestPostProps {}

export function LatestPost(props: ILatestPostProps) {
  const dispatch = useAppDispatch();
  const latestPostPagination = useAppSelector(selectPaginate);

  const handlePageChange = (value: number) => {
    dispatch(
      fetchLatestPost({
        page: value,
        limit: 4,
      })
    );
  };

  return (
    <RoundedWidget
      title="Latest Post"
      isDivider
      anchorTitle="left"
      style={{ width: "100%" }}
    >
      {BlogsSample.slice(0, 4).map((blogs, key) => {
        return (
          <BlogItems
            key={key}
            direction="horizontal"
            size="big"
            showBadge={false}
            items={blogs}
            isThumbedNail={false}
            style={{
              marginBottom: "1em",
            }}
            fontSize="15px"
            id={`${blogs.id}`}
          />
        );
      })}

      <CustomPagination
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1em 0",
        }}
        handlePageChange={handlePageChange}
        paginate={latestPostPagination}
      />
    </RoundedWidget>
  );
}
