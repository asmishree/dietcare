import React from "react";
import HomeGrid from "../components/HomeGrid";

function Home() {
  return (
    <div>
      <div>Slider</div>
<section>
  <div className="relative mx-auto max-w-7xl z-0">
    <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
      <HomeGrid/>
      <HomeGrid/>
      <HomeGrid/>
      <HomeGrid/>
      <HomeGrid/>
      <HomeGrid/>
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
