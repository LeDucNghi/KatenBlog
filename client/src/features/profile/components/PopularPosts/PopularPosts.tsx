import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { BlogsSample } from "../../../../mock";
import { selectPopularList } from "../../../addEditBlog/addEditSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IPopularPostsProps {}

export function PopularPosts(props: IPopularPostsProps) {
  const popularPost = useAppSelector(selectPopularList);

  return (
    <>
      {popularPost.length > 0
        ? popularPost.map((blogs, key) => {
            return (
              <BlogItems
                key={key}
                direction="horizontal"
                shape="circle"
                items={blogs}
                showBadge={true}
                fontSize="15px"
                style={{
                  margin: "1em 0",
                  height: "6.5em",
                }}
                id={`${blogs.id}`}
              />
            );
          })
        : BlogsSample.slice(0, 3).map((blogs, key) => {
            return (
              <BlogItems
                key={key}
                direction="horizontal"
                shape="circle"
                items={blogs}
                showBadge={true}
                fontSize="15px"
                style={{
                  margin: "1em 0",
                  height: "6.5em",
                }}
                id={`${blogs.id}`}
              />
            );
          })}
    </>
  );
}
