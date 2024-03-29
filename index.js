import React from 'react';
import store from "./src/redux/store"
import { Provider } from "react-redux";

import App from "./App.js"

export default function Index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}