import React, { useEffect, useState } from "react";
import HomeGrid from "../components/HomeGrid";
import Slider from "../components/Slider";
import axios from "axios";
import API from "../API";

function Home() {
  const [blogData, setBlogData] = useState([]);
  const blogs = blogData;
  console.log(blogs)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API}/blog/getall`
        );

        setBlogData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="p-2">
      <Slider/>
<section>
  <div className="relative mx-auto max-w-7xl z-0">
    <div className="grid max-w-lg gap-12 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
    {blogData.map((blog) => (
              <HomeGrid key={blog?._id} Img={blog?.img} Heading={blog?.title} Summery={blog?.summery} URL={blog?._id} DateTime={blog?.createdAt}/>
            ))}
    </div>
  </div>
</section>
    </div>
  );
}

export default Home;
