import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import "./App.css";
import "./css/style.css";
import "./css/responsive.css";

const baseAppJsonUrl = process.env.REACT_APP_URL + "App.json";

export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(baseAppJsonUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        alert(
          "Loading app js data failed" + error + ", base url" + baseAppJsonUrl
        );
      });
  }, []);

  return <Layout data={data}></Layout>;
}
