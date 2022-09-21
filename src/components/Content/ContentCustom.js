import React from "react";
import classNames from "classnames/bind";

import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

const ContentCustom = ({ selectedCategory }) => {
  return (
    <div className={cx("content")}>
      {selectedCategory} <span>Videos</span>
    </div>
  );
};

export default ContentCustom;
