import "./Other.scss";

import * as React from "react";

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
              <div key={key} className="category_items">
                <div className="items_img">
                  <img src={items.img} alt="" />
                </div>

                <div className="items_text">
                  <p className="items_categories">{items.categories} </p>
                  <h2 className="items_title">{items.title}</h2>
                  <p className="items_time">{items.time} </p>
                  <p className="items_subtitle">{items.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="category travel">
          <h3 className="category_title">TRAVEL</h3>
          {highestList.slice(0, 3).map((items, key) => {
            return (
              <div key={key} className="category_items">
                <div className="items_img">
                  <img src={items.img} alt="" />
                </div>

                <div className="items_text">
                  <p className="items_categories">{items.categories} </p>
                  <h2 className="items_title">{items.title}</h2>
                  <p className="items_time">{items.time} </p>
                  <p className="items_subtitle">{items.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="food_category">
        <h3 className="category_title">FOOD AND DRINK</h3>

        <div className="category_content">
          {highestList.slice(0, 4).map((items, key) => {
            return (
              <div key={key} className="category_items">
                <div className="items_img">
                  <img src={items.img} alt="" />
                </div>

                <div className="items_text">
                  <p className="items_categories">{items.categories} </p>
                  <h2 className="items_title">{items.title}</h2>
                  <p className="items_time">{items.time} </p>
                  <p className="items_subtitle">{items.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
