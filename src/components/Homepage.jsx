import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Spin } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoAPI";
import Cryptocurrencies from "./Cryptocurrencies";

const { Title } = Typography;

const Homepage = () => {
  const { data, isLoading } = useGetCryptosQuery();

  if (isLoading) {
    return (
      <div className="loading">
        <Spin size="large" />
      </div>
    );
  }

  const stats = data?.data?.stats;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto States
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Crypto" value={millify(stats.total)} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(stats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(stats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24 Hour Volume"
            value={millify(stats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={stats.totalMarketCap} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Crypto Currencies
        </Title>
        <Title level={3} className="show-more">
          <Link to={"/cryptocurrencies"}>Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies count={10} />
    </>
  );
};

export default Homepage;
