import "./test.scss";

import { ListItemButton, Paper } from "@mui/material";

import { Icons } from "../../components/Common/Icons/Icons";
import { highestList } from "../../mock";
import { images } from "../../constants/image";

export interface ITestProps {
  // horizontal : ngang
  // vertical : đứng
  direction: "horizontal" | "vertical";
  shape?: "circle" | "square";
}

export function Test({ direction, shape }: ITestProps) {
  return (
    <>
      {highestList.slice(0, 3).map((items, key) => {
        return (
          <Paper
            elevation={8}
            key={key}
            className={`${
              direction === "vertical"
                ? "category_items vertical"
                : "category_items horizontal"
            }`}
          >
            <ListItemButton>
              <div
                className={`${
                  direction === "horizontal" && shape === "circle"
                    ? "items_img circle"
                    : "items_img square"
                }`}
              >
                <p>{items.categories}</p>

                <span>
                  <Icons iconName="image" />
                </span>

                <img src={items.image as string} alt="" />
              </div>

              <div className="items_text">
                <div className="items_meta">
                  <div className="meta_author_avt">
                    <img src={images.avatar} alt="" />
                  </div>

                  <p className="meta_author">{items.user.fullname} </p>

                  <div className="meta_time">{items.createdAt}</div>
                </div>

                <h2 className="items_title">{items.title}</h2>

                <p className="items_time">{items.createdAt} </p>

                <p className="items_subtitle">{items.subTitle}</p>
              </div>
            </ListItemButton>
          </Paper>
        );
      })}
    </>
  );
}
