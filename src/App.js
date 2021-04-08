import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ImageCompare from "./components/ImageCompare/index";

function App() {
  return (
    <Provider store={store}>
      <ImageCompare />
    </Provider>
  );
}

export default App;
