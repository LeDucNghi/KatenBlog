import "./InnerWrapper.scss";

import * as React from "react";

import { AboutWidget } from "../AboutWidget/AboutWidget";
import { BlogTopicWidget } from "../../constants";
import { CustomAccordion } from "../../components/Common/Accordion/CustomAccordion";
import { PopularPosts } from "../../features/profile/components/PopularPosts/PopularPosts";
import { RoundedWidget } from "../RoundedWidget/RoundedWidgets";
import { selectUserProfile } from "../../features/auth/authSlice";
import { useAppSelector } from "../../app/hooks";

export interface IInnerWrapperProps {
  width: string;
}

export function InnerWrapper({ width }: IInnerWrapperProps) {
  const userProfile = useAppSelector(selectUserProfile);

  return (
    <div className="inner_wrapper" style={{ width: width }}>
      <RoundedWidget>
        <AboutWidget user={userProfile!} />
      </RoundedWidget>

      <RoundedWidget isDivider title="Popular Posts" >
        <PopularPosts />
      </RoundedWidget>

      <RoundedWidget isDivider title="Explore Topics">
        <div className="topic_contents">
          <CustomAccordion topic={BlogTopicWidget} />
        </div>
      </RoundedWidget>

      <RoundedWidget isDivider title="Newsletter">
        <div className="inner_subscribe">
          <span>Join 70,000 subscribers!</span>

          <input type="text" placeholder="Email address..." />

          <button type="button">Sign Up </button>

          <span>
            By signing up, you agree to our <a href="/">Privacy Policy</a>{" "}
          </span>
        </div>
      </RoundedWidget>

      <RoundedWidget isDivider title="Tag Clouds">
        <div className="inner_tags">
          <a href="/">#Trending</a>
          <a href="/">#Video</a>
          <a href="/">#Featured</a>
          <a href="/">#Gallery</a>
          <a href="/">#Celebrities</a>
        </div>
      </RoundedWidget>
    </div>
  );
}
