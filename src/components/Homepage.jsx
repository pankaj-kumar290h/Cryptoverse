import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;
const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto States
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto" value={44} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={44} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={44} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24 Hour Volume" value={44} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={44} />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
