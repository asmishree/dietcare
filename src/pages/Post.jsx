import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../API";
import { useNavigate, useParams } from "react-router-dom";
import PublishBy from "../components/PublishBy";


function Post() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const options = { month: "short", day: "numeric", year: "numeric" };
const formattedDate = new Date(blog?.createdAt).toLocaleString("en-US", options);
  

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`${API}/blog/getblog/${id}`);
        setBlog(response.data)
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [id]);
  return (
    <section className="blog-css">
      <div className="container m-auto">
        <h5 className="my-8 tracking-widest text-lg">BLOG POST</h5>
        <div className="blog-title">
          <h1>{blog?.title}</h1>
          <div>
            <PublishBy />
            <p className="font-bold">{formattedDate}</p>
          </div>
        </div>
      </div>

      <div className="blog-body">
        <img src={blog?.img} />

        <div className="container m-auto">
          <h2 className="py-10 text-3xl font-semibold">
            {blog?.summery}
          </h2>
          <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
    </section>
  );
}


export default Post;
