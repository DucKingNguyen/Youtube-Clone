import React from "react";
import { Link } from "react-router-dom";
import {
  BellOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { logo } from "~/Utils/Constant";
import { Tooltip, Avatar } from "antd";
import SearchDetail from "../SearchDetail/SearchDetail";

const cx = classnames.bind(styles);

const HeaderCustom = () => {
  return (
    <div className={cx("header")}>
      <Link to="/">
        <img src={logo} className={cx("logo")} alt="logo" height={30} />
      </Link>

      <SearchDetail />

      <div className={cx("header-btn")}>
        <Tooltip color={"#717171"} title="Tạo Video" placement="bottom">
          <VideoCameraAddOutlined className={cx("createVideo")} />
        </Tooltip>

        <Tooltip color={"#717171"} title="Thông Báo" placement="bottom">
          <BellOutlined className={cx("createVideo")} />
        </Tooltip>

        <Avatar size={32} icon={<UserOutlined />} className={cx("account")} />
      </div>
    </div>
  );
};

export default HeaderCustom;
