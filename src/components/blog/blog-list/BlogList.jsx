import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
// import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/blogPosts`);
      console.log("xxxx:", process.env.REACT_APP_BE_URL);
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

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <Row>
      {blogPosts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={post._id}
        >
          <BlogItem key={post._id} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
