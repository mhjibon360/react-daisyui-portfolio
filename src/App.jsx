import React from "react";
import Home from "./pages/Home";
import ScrollBarIndicator from "scroll-bar-indicator";

const App = () => {
  return (
    <div>
      <ScrollBarIndicator
        barColor="#b3b3b3"
        barHeight="2rem"
        indicatorColor="#8e32ff"
        infoColor="#333333"
        zindex="9999"
        showInfo={true}
        info="Page"
      />
      <Home />
    </div>
  );
};

export default App;
