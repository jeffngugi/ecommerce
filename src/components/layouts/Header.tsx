import React from "react";
import TopBanner from "./headers/TopBanner";
import ContactNav from "./headers/ContactNav";
import NavBar from "./headers/NavBar";
import CategoryNav from "./headers/CategoryNav";

const Header = () => {
  return (
    <header>
      <TopBanner />
      <ContactNav />
      <NavBar />
      <CategoryNav />
    </header>
  );
};

export default Header;
