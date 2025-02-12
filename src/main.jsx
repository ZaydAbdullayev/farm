import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./home/app";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./context/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

