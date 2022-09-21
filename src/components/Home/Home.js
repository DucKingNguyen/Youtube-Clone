import React from "react";

import classNames from "classnames/bind";
import styles from "./Home.module.scss";
// import ContentCustom from "../Content/ContentCustom";
import Videos from "../Video/Videos";

const cx = classNames.bind(styles);

function Home({ selectedCategory, setSelectedCategory, videos, setVideos }) {
  return (
    <>
      <div className={cx("titleVideos")}>{selectedCategory}</div>
      <div className={cx("contentVideo")}>
        <Videos
          videos={videos}
          setVideos={setVideos}
          selectedCategory={selectedCategory}
        />
      </div>
    </>
  );
}

export default Home;
