import "./HomeBanner.scss";

import * as React from "react";

import { BlogItems } from "../../BlogItems/BlogItems";
import { BlogsSample } from "../../../../mock";
import { CustomBackdrop } from "../../Backdrop/CustomBackdrop";
import { RoundedWidget } from "../../../../widgets/RoundedWidget/RoundedWidgets";

export interface IHomeBannerProps {}

export function HomeBanner(props: IHomeBannerProps) {
  const [isActive, setIsActive] = React.useState<number>(1);
  const [openBackdrop, setOpenBackdrop] = React.useState<boolean>(false);

  const activeNavButtons = (navNums: number) => {
    setIsActive(navNums);
    setOpenBackdrop(!openBackdrop);
  };

  React.useEffect(() => {
    setTimeout(() => {
      if (openBackdrop) {
        setOpenBackdrop(false);
      }
    }, 1000);
  }, [openBackdrop]);

  return (
    <div className="homebanner_wrapper">
      <div className="homebanner_container">
        <div className="homebanner_thumbnail">
          {BlogsSample.slice(0, 1).map((blogs, key) => {
            return (
              <BlogItems
                key={key}
                items={blogs}
                direction="vertical"
                isThumbedNail={true}
                showBadge={false}
                style={{
                  height: "100%",
                  padding: 0,
                }}
              />
            );
          })}
        </div>

        <div className="homebanner_post_tabs">
          <CustomBackdrop
            style={{
              position: "absolute",
              width: "90%",
              height: "100%",
              margin: "0 auto",
            }}
            open={openBackdrop}
            close={() => setOpenBackdrop(!openBackdrop)}
          />

          <RoundedWidget
            title={
              <div className="post_tabs_nav">
                <button
                  className={
                    isActive === 1 ? "nav_buttons isActive" : "nav_buttons"
                  }
                  onClick={() => activeNavButtons(1)}
                >
                  Popular
                </button>
                <button
                  className={
                    isActive === 2 ? "nav_buttons isActive" : "nav_buttons"
                  }
                  onClick={() => activeNavButtons(2)}
                >
                  Recent
                </button>
              </div>
            }
            isDivider={false}
            style={{
              height: "100%",
              padding: 0,
            }}
          >
            {BlogsSample.slice(0, 4).map((blogs, key) => {
              return (
                <BlogItems
                  key={key}
                  items={blogs}
                  shape="circle"
                  direction="horizontal"
                  isThumbedNail={false}
                  showBadge={false}
                  fontSize="15px"
                  style={{
                    margin: "1em 0",
                    height: "6.5em",
                  }}
                />
              );
            })}
          </RoundedWidget>
        </div>
      </div>
    </div>
  );
}
