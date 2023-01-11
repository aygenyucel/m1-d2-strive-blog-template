import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(
        "https://m2-d7-cloud-deployment-production.up.railway.app/blogPosts"
      );
      console.log(process.env.REACT_APP_BE);
      if (response.ok) {
        const data = await response.json();
        setBlogPosts(data);
        console.log(data);
      } else {
        console.log("error when fetching :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchBlogPosts(), []);

  return (
    <Row>
      {blogPosts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
