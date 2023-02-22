import "./Footer.scss";

import { Button, IconButton, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <footer>
      <div className="footer_social">
        {links.map((items, key) => {
          return (
            <IconButton
              key={key}
              color="primary"
              component={RouterLink}
              target="_blank"
              to={items.route}
              className="footer_social_button"
            >
              {items.icon}
            </IconButton>
          );
        })}
      </div>

      <Typography className="footer_copyright" variant="h5">
        Copyright ©2023 All rights reserved
      </Typography>

      <div className="footer_term_policy">
        <Typography>Terms & Conditions</Typography> /{" "}
        <Typography>Privacy Policy</Typography>
      </div>
    </footer>
  );
}

const links = [
  {
    id: 1,
    icon: <FacebookIcon />,
    route: "https://www.facebook.com/nghile.genji/",
  },
  {
    id: 2,
    icon: <LinkedInIcon />,
    route:
      "https://www.linkedin.com/in/ngh%E1%BB%8B-%C4%91%E1%BB%A9c-85a19b254/",
  },
  {
    id: 3,
    icon: <TwitterIcon />,
    route: "",
  },
  {
    id: 4,
    icon: <YouTubeIcon />,
    route: "",
  },
];
