import React from "react";
import HeaderNav from "./components/HeaderNav";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import Featuring from "./components/Featuring";
import Location from "./components/Location";
import SlidingCategory from "./components/SlidingCategory";
import MainMenu from "./components/MainMenu";
import Checkout from "./components/Checkout";
import OfferingAndSpecial from "./components/OfferingAndSpecial";
import Footer from "./components/Footer";

const App = () => {
   return (
      <>
         <HeaderNav />
         <Searchbar />
         <Featuring />
         {/* <Navbar /> */}
         <Location />
         <SlidingCategory />
         <MainMenu />
         <Checkout />
         <OfferingAndSpecial />
         <Footer />
      </>
   );
};

export default App;
