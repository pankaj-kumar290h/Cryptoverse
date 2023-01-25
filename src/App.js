import { Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import "./App.css";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
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
            </Routes>
            <Routes>
              <Route path="/exchanges" element={<Exchanges />}></Route>
            </Routes>
            <Routes>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
            </Routes>
            <Routes>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
            </Routes>
            <Routes>
              <Route path="/news" element={<News />}></Route>
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
