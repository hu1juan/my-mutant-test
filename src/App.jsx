import { useState } from "react";
import reactLogo from "./assets/logo/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FeaturedCakes from "./components/featured-cakes";
import AboutMe from "./components/about-me";
import CakeList from "./components/cake-list";
import Landing from "./components/landing";

function App() {
  return (
    <>
      <Landing />
      <FeaturedCakes />
      <AboutMe />
      <CakeList />
    </>
  );
}

export default App;
