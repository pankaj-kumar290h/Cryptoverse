import { Routes, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Navbar />
      </nav>
      <section className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>

              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>

              <Route path="/exchanges" element={<Exchanges />}></Route>

              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            </Routes>
          </div>
        </Layout>
        <footer className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto
            <br />
            Fell free to use this webapp for your projects
          </Typography.Title>
        </footer>
      </section>
    </div>
  );
}

export default App;
