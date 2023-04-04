import "./Other.scss";

import * as React from "react";

import { BlogItems } from "../../../../components/Common/BlogItems/BlogItems";
import { highestList } from "../../../../mock";

export interface IOtherProps {}

export function Other(props: IOtherProps) {
  return (
    <div className="other_categories_container">
      <div className="categories_above">
        <div className="category life">
          <h3 className="category_title">LIFESTYLE</h3>
          {highestList.slice(0, 3).map((items, key) => {
            return (
              <BlogItems
                direction="horizontal"
                items={items}
                key={key}
                route={`/post/${items.id}`}
              />
            );
          })}
        </div>
        <div className="category travel">
          <h3 className="category_title">TRAVEL</h3>
          {highestList.slice(0, 3).map((items, key) => {
            return (
              <BlogItems
                direction="horizontal"
                items={items}
                key={key}
                route={`/post/${items.id}`}
              />
            );
          })}
        </div>
      </div>
      <div className="food_category">
        <h3 className="category_title">FOOD AND DRINK</h3>

        <div className="category_content">
          {highestList.slice(0, 4).map((items, key) => {
            return (
              <BlogItems
                direction="vertical"
                items={items}
                key={key}
                route={`/post/${items.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
