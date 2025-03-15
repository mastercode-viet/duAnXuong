import * as React from "react";
import Banner from "../components/layoutForm/Banner";
import BrowseRange from "../components/layoutForm/BrowseRange";
import RoomInspiration from "../components/layoutForm/Roomlnspiration";

import Share from "../components/layoutForm/Share";
import { Footer } from "antd/es/layout/layout";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <BrowseRange />
      <RoomInspiration />
      <Share />
      <Footer />
    </div>
  );
};

export default Home;
