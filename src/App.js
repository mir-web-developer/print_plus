// AppRouters.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home"; // Import your Home component
import Orders from "./Orders"; // Import your Orders component
import AppPanel from "./AppPanel";
import "./styles.css";
import "custom-cursor-react/dist/index.css";
import CustomCursor from "./CustomCursor";
import StatisticsPage from "./statistics/StatisticsPage";
import Catalog from "./catalog/Catalog";
import TShirt from "./catalog/TShirt";
import Cups from "./catalog/Cups";
import AutoPillows from "./catalog/AutoPillows";
import Balls from "./catalog/Balls";
import Boxes from "./catalog/Boxes";
import Cars from "./catalog/Cars";
import Chocolates from "./catalog/Chocolates";
import Frames from "./catalog/Frames";
import Plates from "./catalog/Plates";
import Watch from "./catalog/Watch";
import Pillows from "./catalog/Pillows";
import BrandPens from "./catalog/BrandPens";

const App = () => {
  return (
    <>
      <AppPanel />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
        <Route path="/statistics" component={StatisticsPage} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/tshirt" component={TShirt} />
        <Route path="/cups" component={Cups} />
        <Route path="/autopillows" component={AutoPillows} />
        <Route path="/balls" component={Balls} />
        <Route path="/Boxes" component={Boxes} />
        <Route path="/cars" component={Cars} />
        <Route path="/chocolates" component={Chocolates} />
        <Route path="/frames" component={Frames} />
        <Route path="/plates" component={Plates} />
        <Route path="/watch" component={Watch} />
        <Route path="/pillows" component={Pillows} />
        <Route path="/brandpens" component={BrandPens} />
        {/* Add more routes if needed */}
      </Switch>
      <CustomCursor />
    </>
  );
};

export default App; // Export as the default export
