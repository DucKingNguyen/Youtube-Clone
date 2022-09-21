import React from "react";
import classNames from "classnames/bind";

import styles from "./SearchResult.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SearchResult({ data, onClick }) {
  // console.log(data.snippet);
  return (
    <Link id="RouterNavLink" to={`/video/${data.id.videoId}`}>
      <div className={cx("searchResult")} onClick={onClick}>
        <h3>{data.snippet.title} </h3>
      </div>
    </Link>
  );
}

export default SearchResult;
