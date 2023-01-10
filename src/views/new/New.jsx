import { convertToHTML } from "draft-convert";
import { EditorState } from "draft-js";
import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";
const NewBlogPost = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [html, setHTML] = useState(null);
  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setHTML(html);
  }, [editorState]);
  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
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

// import React, { useCallback, useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import "./styles.css";

// const NewBlogPost = (props) => {
//   const [text, setText] = useState("");
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [content, setContent] = useState("");
//   const handleChange = useCallback((value) => {
//     setText(value);
//   });

//   const postArticle = async (postTitle, postCategory, postContent) => {
//     try {
//       await fetch(`${process.env.REACT_APP_BE}/blogPosts`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           category: postCategory,
//           title: postTitle,
//           cover:
//             "https://imageio.forbes.com/specials-images/imageserve/5ef3f7eec4f2390006f0c356/GUI--Graphical-User-Interface--concept-/960x0.jpg?format=jpg&width=960",
//           readTime: {
//             value: 2,
//             unit: "minute",
//           },
//           author: {
//             name: "Aygen Yucel",
//             avatar: "https://ui-avatars.com/api/?name=Aygen+Yucel",
//           },
//           content: postContent,
//           createdAt: "NEW DATE",
//         }),
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleChangeTitle = useCallback((value) => {
//     setTitle(value);
//   });

//   const handleSubmit = () => {
//     postArticle(title, category, content);
//   };

//   return (
//     <Container className="new-blog-container">
//       <Form className="mt-5" onSubmit={handleSubmit}>
//         <Form.Group controlId="blog-form" className="mt-3">
//           <Form.Label value={title} onChange={handleChangeTitle}>
//             Title
//           </Form.Label>
//           <Form.Control size="lg" placeholder="Title" />
//         </Form.Group>
//         <Form.Group controlId="blog-category" className="mt-3">
//           <Form.Label
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             Category
//           </Form.Label>
//           <Form.Control size="lg" as="select">
//             <option>Tech</option>
//             <option>Business</option>
//             <option>Sports</option>
//             <option>Category4</option>
//             <option>Category5</option>
//           </Form.Control>
//         </Form.Group>
//         <Form.Group controlId="blog-content" className="mt-3">
//           <Form.Label
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           >
//             Blog Content
//           </Form.Label>
//           <ReactQuill
//             value={text}
//             onChange={handleChange}
//             className="new-blog-content"
//           />
//         </Form.Group>
//         <Form.Group className="d-flex mt-3 justify-content-end">
//           <Button type="reset" size="lg" variant="outline-dark">
//             Reset
//           </Button>
//           <Button
//             type="submit"
//             size="lg"
//             variant="dark"
//             style={{
//               marginLeft: "1em",
//             }}
//           >
//             Submit
//           </Button>
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// };

// export default NewBlogPost;
