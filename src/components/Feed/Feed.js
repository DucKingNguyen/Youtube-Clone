import React from "react";

import classNames from "classnames/bind";

import styles from "./Feed.module.scss";
import { categories } from "~/Utils/Constant";

const cx = classNames.bind(styles);

const Feed = ({ selectedCategory, setSelectedCategory, category }) => {
  return (
    <div className={cx("feed")}>
      {categories.map((category, index) => (
        <button
          className={cx("feed-btn")}
          onClick={() => setSelectedCategory(category.name)}
          key={index}
        >
          <span className={cx("btn-icon")}>{category.icon}</span>
          <span className={cx("btn-name")}>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Feed;
