import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = (props) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const handleChange = useCallback((value) => {
    setText(value);
  });

  const postArticle = async () => {
    try {
      let response = await fetch("http://localhost:3001/blogPosts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          title: title,
          cover:
            "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960",
          readTime: {
            value: 2,
            unit: "minute",
          },
          author: {
            name: "Aygen Yucel",
            avatar: "https://ui-avatars.com/api/?name=Aygen+Yucel",
          },
          content: content,
          createdAt: "NEW DATE",
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSumbit = () => {
    postArticle();
  };
  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={handleSumbit}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label value={title} onChange={() => setTitle(title)}>
            Title
          </Form.Label>
          <Form.Control size="lg" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label value={category} onChange={() => setCategory(category)}>
            Category
          </Form.Label>
          <Form.Control size="lg" as="select">
            <option>Tech</option>
            <option>Business</option>
            <option>Sports</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label value={content} onChange={() => setContent(content)}>
            Blog Content
          </Form.Label>
          <ReactQuill
            value={text}
            onChange={handleChange}
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
