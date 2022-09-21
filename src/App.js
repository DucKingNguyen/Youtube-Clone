// import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import { Feed, SearchFeed, VideoDetail, Home } from "~/components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import HeaderCustom from "./components/Header/Header";

const { Sider, Header, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Trang Chủ");
  const [videos, setVideos] = useState([]);

  return (
    <div className="App">
      <Layout>
        <Sider
          collapsible
          trigger={null}
          collapsed={collapsed}
          theme="light"
          collapsedWidth="55"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <Feed
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Sider>

        <Layout>
          <Header>
            <HeaderCustom />
          </Header>
          <Content>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    videos={videos}
                    setVideos={setVideos}
                  />
                }
              />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/search/:searchVideos" element={<SearchFeed />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
