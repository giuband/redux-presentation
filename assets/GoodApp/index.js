import React from "react";
import { Provider } from "react-redux";
import Calendar from "./connected-components/Calendar";
import configureStore from "./store";
import "../index.css";

const store = configureStore();

export default class GoodApp extends React.Component {
  render() {
    return (
      <div className="redux-app">
        <Provider store={store}>
          <Calendar />
        </Provider>
      </div>
    );
  }
}
