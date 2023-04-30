import "./test.scss";

import { ListItemButton, Paper } from "@mui/material";

import { Icons } from "../../components/Common/Icons/Icons";
import { Images } from "../../constants/image";
import { highestList } from "../../mock";

export interface ITestProps {
  // horizontal : ngang
  // vertical : đứng
  direction: "horizontal" | "vertical";
  shape?: "circle" | "square";
  size?: "small" | "big";
  isThumbedNail?: boolean;
}

export function Test({ direction, shape, size, isThumbedNail }: ITestProps) {
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
            <ListItemButton
              className={`${
                direction === "horizontal" && size === "big"
                  ? "items_container large_horizontal"
                  : "items_container"
              }`}
            >
              <div
                className={`${
                  direction === "horizontal" && shape === "circle"
                    ? "items_img circle"
                    : "items_img square"
                }`}
              >
                <p
                  className={
                    isThumbedNail
                      ? "items_categories thumbednail_categories"
                      : "items_categories"
                  }
                >
                  {items.categories}
                </p>

                {!isThumbedNail && (
                  <span>
                    <Icons iconName="image" />
                  </span>
                )}

                <img src={items.image as string} alt="" />

                {direction === "vertical" && isThumbedNail && (
                  <div className="items_thumbednail">
                    <p className="thumbednail_title thumbednail_text">
                      {items.title}{" "}
                    </p>
                    <ul className="thumbednail_meta">
                      <li className="thumbednail_author thumbednail_text">
                        {items.user.fullname}{" "}
                      </li>
                      <li className="thumbednail_time thumbednail_text">
                        {items.createdAt}{" "}
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {!isThumbedNail && (
                <div className="items_text">
                  <ul className="items_meta">
                    <li>
                      <div className="meta_author_avt">
                        <img src={Images.avatar} alt="" />
                      </div>

                      <p className="meta_author text">{items.user.fullname} </p>
                    </li>

                    {direction === "horizontal" && size === "big" && (
                      <li>
                        <p className="meta_categories text">
                          {items.categories}
                        </p>
                      </li>
                    )}

                    <li>
                      <p className="meta_time text">{items.createdAt}</p>
                    </li>
                  </ul>

                  <h2 className="items_title">{items.title}</h2>

                  {direction === "horizontal" && !size && (
                    <p className="items_time">{items.createdAt} </p>
                  )}

                  {(direction === "horizontal" && size === "big") ||
                  direction === "vertical" ? (
                    <p className="items_subtitle">{items.subTitle}</p>
                  ) : null}

                  {direction === "horizontal" && size === "big" && (
                    <div className="items_share_button">
                      <Icons iconName="share" />

                      <Icons iconName="option" />
                    </div>
                  )}
                </div>
              )}
            </ListItemButton>
          </Paper>
        );
      })}
    </>
  );
}
