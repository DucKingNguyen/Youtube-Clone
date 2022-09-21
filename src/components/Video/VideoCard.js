/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

import classNames from "classnames/bind";
import styles from "./VideoCard.module.scss";

const { Meta } = Card;
const cx = classNames.bind(styles);

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log("kin", snippet.title);
  return (
    <>
      <Link id="RouterNavLink" to={`/video/${videoId}`}>
        <Card
          className={cx("cardVideo")}
          cover={
            <img
              className={cx("imgVideo")}
              alt="example"
              src={snippet.thumbnails.high.url}
            />
          }
        >
          <div className={cx("contentVideo")}>
            <a>
              <img
                className={cx("avaIcon")}
                src={snippet.thumbnails.default.url}
              />
            </a>

            <Meta
              className={cx("titleCard")}
              title={snippet.title}
              description={snippet.channelTitle}
            />
          </div>
        </Card>
      </Link>
    </>
  );
};

export default VideoCard;
