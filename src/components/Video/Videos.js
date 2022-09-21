import React, { useState, useEffect } from "react";

import classNames from "classnames/bind";
import styles from "./Videos.module.scss";
import { request } from "~/Utils/request";
import { VideoCard } from "~/components";

const cx = classNames.bind(styles);

const Videos = ({ selectedCategory }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    request(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);


  return (
    <>
      {videos.map((item, indx) => (
        <div className={cx("formVideo")} key={indx}>
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </>
  );
};

export default Videos;
