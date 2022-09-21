import {
  CodeOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  HomeOutlined,
  PlayCircleOutlined,
  PlaySquareOutlined,
  ReadOutlined,
  RedditOutlined,
} from "@ant-design/icons";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";
export const categories = [
  { name: "Trang Chủ", icon: <HomeOutlined /> },
  { name: "Coding", icon: <CodeOutlined />, path: "coding" },
  { name: "Music", icon: <PlayCircleOutlined />, path: "music" },
  { name: "Education", icon: <ReadOutlined /> },
  { name: "Podcast", icon: <CustomerServiceOutlined /> },
  { name: "Movie", icon: <PlaySquareOutlined /> },
  { name: "Game", icon: <RedditOutlined /> },
  { name: "Sport", icon: <GiftOutlined /> },
];
