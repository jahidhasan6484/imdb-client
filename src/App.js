import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturesToday from "./Components/FeaturesToday/FeaturesToday";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Watch from "./Components/Watch/Watch";
import FromWatchlist from "./Components/FromWatchlist/FromWatchlist";
import FanFavourite from "./Components/FanFavourite/FanFavourite";
import More from "./Components/More/More";
import Exclusive from "./Components/Exclusive/Exclusive";
import ExploreStreaming from "./Components/ExploreStreaming/ExploreStreaming";
import Shows from "./Components/Shows/Shows";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import MoreExplore from "./Components/MoreExplore/MoreExplore";
import BornToday from "./Components/BornToday/BornToday";
import TopNews from "./Components/TopNews/TopNews";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <FeaturesToday />
      <Watch />
      <FromWatchlist />
      <FanFavourite />
      <More />
      <Exclusive />
      <ExploreStreaming />
      <Shows />
      <ComingSoon />
      <MoreExplore />
      <BornToday />
      <TopNews />
      <Footer />
    </Router>
  );
}

export default App;
