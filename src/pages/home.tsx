import * as React from "react";
import BrowseRange from "../components/layoutForm/Main";
import Footers from "../components/layoutForm/Footer";
import NewCollectionHero from "../components/layoutForm/Header";
import RoomInspiration from "../components/layoutForm/1";
import ProductGrid from "../components/layoutForm/ProductGrid";



const Home: React.FC = () => {
  return (
    <div>
      {/* header */}
      <NewCollectionHero />  
      
      {/* main */}
      <BrowseRange />
      <RoomInspiration />
      <ProductGrid />
    
      {/* footer */}
      <Footers />
    </div>
  );
};

export default Home;
