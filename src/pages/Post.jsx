import axios from "axios";
import React, { useEffect, useState } from "react";
import API from "../API";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

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
    <section>
      <div className="container m-auto">
        <h5 className="my-8 tracking-widest text-lg">BLOG POST</h5>
        <div className="blog-title">
          <h1>{blog?.title}</h1>
          <div>
            {/* <PublishBy />
            <FormattedDate createdAt={blog?.createdAt} /> */}
          </div>
        </div>
      </div>

      <div className="blog-body">
        <img src={blog?.img} />

        <div className="container m-auto">
          <h2 className="py-10 ">
            {blog?.summery}
          </h2>
          <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
    </section>
  );
}


export default Post;
