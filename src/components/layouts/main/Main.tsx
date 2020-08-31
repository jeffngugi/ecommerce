import React from "react";
import LandingInfo from "./LandingInfo";
import SelectedProducts from "./SelectedProducts";
import LatestBlogs from "./LatestBlogs";
import FeaturedProds from "./FeaturedProds";
import SiteBanner from "./SiteBanner";

const Main = () => {
  return (
    <main>
      <SiteBanner />
      <LandingInfo />
      <SelectedProducts />
      <FeaturedProds />
      <LatestBlogs />
    </main>
  );
};

export default Main;
