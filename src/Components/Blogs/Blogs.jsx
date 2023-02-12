////////////////hay safhet l blogs //////////////
import React from "react";
import "./Blogs.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Blogs() {
  const { id } = useParams();

  const [collection, setCollection] = useState("art");

  const selectedCollection = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    setCollection(e.target.name);
  };

  const [data, setblog] = useState([]);

  useEffect(() => {
    loadBlogs();
  }, []);
  const loadBlogs = async () => {
    const res = await axios.get("https://oportfolio.onrender.com/blog/getblog");

    console.log(res.data);
    setblog(res.data);
  };

  return (
    <>
      <div className="bodyblog">
        <p className="title">Blogs</p>

        {
          <div className="blog">
            <div>
              <div className="containerblog">
                {data.map((item, index) => {
                  return (
                    <div className="row" key={index}>
                      <img
                        className="img"
                        src={`https://oportfolio.onrender.com/blog/getblog/${item.image}`}
                        alt="img"
                      />
                      <br />
                      <div className="box-textt">{item.title}</div>
                      <div className="box-textd">{item.description}</div>
                      <div className="box-textd">
                        <div>Comment: {item.comment}</div>
                      </div>
                      <a className="seemore" href={item.blog_url}>
                        Read more
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}

export default Blogs;
