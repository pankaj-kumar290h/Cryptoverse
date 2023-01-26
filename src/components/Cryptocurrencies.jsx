import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Spin } from "antd";
import { useGetCryptosQuery } from "../services/cryptoAPI";

const Cryptocurrencies = ({ count }) => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setcryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchterm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setcryptos(filterData);
  }, [cryptosList, searchTerm]);

  if (isFetching) {
    return (
      <div className="loading">
        <Spin size="large" />
      </div>
    );
  }
  return (
    <>
      {!count && (
        <div className="search-crypto">
          <Input
            placeholder="Search Coin"
            onChange={(e) => {
              setSearchterm(e.target.value);
            }}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos &&
          cryptos.map((currency, i) => {
            if (i >= count) {
              return;
            }

            return (
              <Col
                sx={24}
                sm={12}
                lg={6}
                className="crypto-card"
                key={currency.uuid}
              >
                <Link to={`/crypto/${currency.uuid}`}>
                  <Card
                    title={`${currency.rank}. ${currency.name}`}
                    extra={
                      <img className="crypto-image" src={currency.iconUrl} />
                    }
                    hoverable
                    className="card-effect"
                    style={{
                      backgroundColor: currency.color
                        ? `${currency.color}`
                        : "green",

                      color: "white",
                    }}
                  >
                    <p>Price: ${millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                  </Card>
                </Link>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
