import React, { useState } from "react";
import "./styles.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log("ufshdyeshfnskjdfsdhfsjgshgsh");
  };

  return (
    <div>
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <a href="http://localhost:3001/authors/auth/google">
          <div className="mt-3">
            <Button className="d-flex flex-row btn-">
              <div>
                <img
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="google-logo"
                  style={{ height: "30px", width: "30px" }}
                />
              </div>
              Sign up with Google
            </Button>
          </div>
        </a>
      </Container>
    </div>
  );
};

export default Login;
