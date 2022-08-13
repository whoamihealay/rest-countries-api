import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";
import "./index.css";
import { getCountries } from "./features/countries/countriesSlice";

store.dispatch(getCountries());

const container = document.querySelector("#root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
