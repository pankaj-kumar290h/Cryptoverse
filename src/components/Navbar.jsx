import React from "react";
import { Button, Typography, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  UserOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar size={"large"} icon={<UserOutlined />} />
        <Typography.Title level={2} className="logo">
          <Link to={"/"}>Cryptoverse</Link>
        </Typography.Title>
      </div>
      {/* <Button className="menu-control-container"></Button> */}
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
    </div>
  );
};

export default Navbar;
