import "./Contact.scss";

import * as React from "react";

import { CategoriesBanner } from "../../components/Common/Banners/CategoriesBanner";
import { Icons } from "../../components/Common/Icons/Icons";
import { RoundedWidget } from "../../widgets/RoundedWidget/RoundedWidgets";
import { TextField } from "@mui/material";

export interface IContactProps {
  style?: React.CSSProperties;
  hasBanner?: boolean;
}

export function Contact({ style, hasBanner }: IContactProps) {
  return (
    <>
      {hasBanner && <CategoriesBanner categoriesName="Contact" />}

      <div className="contact_wrapper" style={style}>
        <div className="contact_info">
          <div className="info_items">
            <span className="icon">
              <Icons iconName="phone" />
            </span>

            <div className="info_content">
              <h3>Phone</h3>
              <p>+1-202-555-0135</p>
            </div>
          </div>
          <div className="info_items">
            <span className="icon">
              <Icons iconName="mail" />
            </span>

            <div className="info_content">
              <h3>E-Mail</h3>
              <p>hello@example.com</p>
            </div>
          </div>
          <div className="info_items">
            <span className="icon">
              <Icons iconName="location" />
            </span>

            <div className="info_content">
              <h3>Location</h3>
              <p>California, USA</p>
            </div>
          </div>
        </div>

        <RoundedWidget
          title="Send Message"
          isDivider
          anchorTitle="left"
          style={{
            width: "100%",

            marginTop: "1em",
          }}
        >
          <div className="contact_fields">
            <TextField
              color="error"
              className="field_item"
              id="outlined-basic"
              label="Your name"
              variant="outlined"
              type="text"
            />
            <TextField
              color="error"
              className="field_item"
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              type="email"
            />
            <TextField
              color="error"
              className="field_item"
              id="outlined-basic"
              label="Subject"
              variant="outlined"
              type="text"
            />
            <TextField
              color="error"
              className="field_item"
              id="outlined-basic"
              label="Your message here..."
              variant="outlined"
              type="text"
              multiline
              rows={10}
            />
          </div>

          <button type="button">Submit message</button>
        </RoundedWidget>
      </div>
    </>
  );
}
