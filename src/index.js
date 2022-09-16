import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
    />
    <script
      src="https://kit.fontawesome.com/2c36e9b7b1.js"
      crossorigin="anonymous"
    ></script>
  </React.StrictMode>
);

reportWebVitals();
