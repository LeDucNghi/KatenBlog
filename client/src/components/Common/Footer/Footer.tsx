import "./Footer.scss";

import { useEffect, useState } from "react";

import { Icons } from "../Icons/Icons";
import { IconsListWidget } from "../../../widgets/ListWidget/IconsListWidget";
import { ScrollTo } from "../ScrollToTop/ScrollTo";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  const { pathname } = useLocation();

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    if (window.innerHeight < 800) {
      setIsScroll(false);
    }
  }, [isScroll]);

  if (pathname === "/signin") return <></>;
  if (pathname === "/signup") return <></>;

  return (
    <>
      {isScroll && <ScrollTo x={0} y={0} />}

      <footer>
        <Typography className="footer_copyright footer_items" variant="h5">
          Copyright ©2023 All rights reserved
        </Typography>

        <div className="footer_social footer_items">
          <IconsListWidget iconsSpace="0 0.5em" />
        </div>

        <div
          className="footer_term_policy footer_items"
          onClick={() => setIsScroll(!isScroll)}
        >
          <button>
            <Icons iconName="arrowup" />
            Back to top
          </button>
        </div>
      </footer>
    </>
  );
}
