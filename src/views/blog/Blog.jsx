import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import BlogAuthor from "../../components/blog/blog-author/BlogAuthor";
import BlogLike from "../../components/likes/BlogLike";
// import posts from "../../data/posts.json";
import "./styles.css";
const Blog = (props) => {
  const [blog, setBlog] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  async function fetchBlog() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/blogPosts/${params.id}`
      );
      console.log("xxxvvvvvvvvvxx", process.env.REACT_APP_BE_URL);
      if (response.ok) {
        const data = await response.json();
        setBlog(data);
      } else {
        navigate("/404");

        console.log("error when fetching :(");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="blog-details-root">
      <Container>
        <Image className="blog-details-cover" src={blog.cover} fluid />
        <h1 className="blog-details-title">{blog.title}</h1>

        <div className="blog-details-container">
          <div className="blog-details-author">
            <BlogAuthor {...blog.author} />
          </div>
          <div className="blog-details-info">
            <div>{blog.createdAt}</div>
            {/* <div>{`${blogvalue.readTime.} ${blog.readTime.unit} read`}</div> */}
            <div
              style={{
                marginTop: 20,
              }}
            >
              <BlogLike defaultLikes={["123"]} onChange={console.log} />
            </div>
          </div>
        </div>

        {/* <div
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        ></div> */}
        <div>
          <a href={`http://localhost:3001/blogPosts`}>DOWNLOAD AS A PDF</a>
        </div>
      </Container>
    </div>
  );
};

export default Blog;
