import React, { useState, useEffect } from "react";
import { Typography, Menu, Avatar, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  FundOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size={"large"} icon={<UserOutlined />} />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Button
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />
      </Button>

      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to={"/"}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to={"/exchanges"}>Exchanges</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
