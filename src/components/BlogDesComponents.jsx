import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import key from "../api";
import long2 from "../assests/long2.jpg";

const BlogDesComponents = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${key}api/blogs/${id}/`);
        setDetail(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="mt-40 mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <div className=" flex items-center ">
        <div className="p-2">
          <img
            src={long2}
            className="h-16 w-16 object-cover rounded-full"
            alt="author"
          ></img>
        </div>

        <div>
          <p className="text-xl font-extrabold">{"Tulika Mall"}</p>
          <p>
            {detail && detail.publish_time && detail.publish_time.slice(0, 10)}
          </p>
        </div>
      </div>

      <p className="py-4 text-4xl font-extrabold">{detail.title}</p>
      <p className="mb-10">{detail.info}</p>
      <img src={detail.image} className="rounded-3xl" alt="image"></img>
      <p className="mt-10" dangerouslySetInnerHTML={{ __html: detail.content }}/>
    </div>
  );
};

export default BlogDesComponents;
