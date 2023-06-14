import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { selectPopularList } from "../../../addEditBlog/addEditSlice";
import { useAppSelector } from "../../../../app/hooks";

export interface IPopularPostsProps {}

export function PopularPosts(props: IPopularPostsProps) {
  const popularPost = useAppSelector(selectPopularList);

  return (
    <>
      {popularPost &&
        popularPost.map((blogs, key) => {
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
