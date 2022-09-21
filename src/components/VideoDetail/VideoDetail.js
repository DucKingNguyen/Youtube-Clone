import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import { Typography } from "antd";

import styles from "./VideoDetail.module.scss";
import { request } from "~/Utils/request";
import ReactPlayer from "react-player/lazy";
import Videos from "../Video/Videos";
import { CheckCircleOutlined, LikeOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

const VideoDetail = ({ selectedCategory, setSelectedCategory }) => {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState([]);

  useEffect(() => {
    request(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  console.log(videoDetail);

  return (
    <div className={cx("wrapper")}>
      {/* <h3 className={cx("title")}>Video Detail</h3> */}
      <div className={cx("inner")}>
        <ReactPlayer
          className={cx("reactPlayer")}
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          playing
          height={"500px"}
          width={"90%"}
        />

        <Typography className={cx("decription")}>
          <span className={cx("titleVideo")}>
            {videoDetail?.snippet?.title}
          </span>
          <span className={cx("channelVideo")}>
            {videoDetail?.snippet?.channelTitle}{" "}
            <CheckCircleOutlined className={cx("checkCrircle")} />
          </span>
          <span className={cx("viewVideo")}>
            {videoDetail?.statistics?.viewCount} lượt xem
          </span>
        </Typography>
        <div className={cx("boxBtn")}>
          <button className={cx("likeBtn")}>
            <LikeOutlined className={cx("likeIcon")} />
            {videoDetail?.statistics?.likeCount}
          </button>
        </div>
      </div>
      <div className={cx("videoSideBar")}>
        <Videos />
      </div>
    </div>
  );
};

export default VideoDetail;
