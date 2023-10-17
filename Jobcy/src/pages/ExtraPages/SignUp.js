import React,{useState,} from "react";
import { Link ,useNavigate } from "react-router-dom";

import { Container, Card, Col, Input, Row, CardBody } from "reactstrap";
import axios from "../../components/axios"


import lightLogo from "../../assets/images/logo-light.png";
import darkLogo from "../../assets/images/logo-dark.png";

import signUpImage from "../../assets/images/auth/sign-up.png";
import { Form } from "react-bootstrap";

const SignUp = () => {
  document.title = "Sign Up";

  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [name,setname] = useState("");
  const [password_confirmation,setpasswordConfirmation] = useState("");
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault(); // Use e.preventDefault() to prevent form submission
  
    try {
      const csrfResponse = await axios.get('/get-csrf-token');
      const csrfToken = csrfResponse.data.csrf_token;

      
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
      const response = await axios.post("/register", { name,email, password,password_confirmation });
      setemail('');
      setpassword('');
      setname('');
      setpasswordConfirmation('');
      console.log(response.data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <div>
        <div className="main-content">
          <div className="page-content">
            <section className="bg-auth">
              <Container>
                <Row className="justify-content-center">
                  <Col xl={10} lg={12}>
                    <Card className="auth-box">
                      <Row className="align-items-center">
                        <Col lg={6} className="text-center">
                          <CardBody className="p-4">
                            <Link to="/">
                              <img
                                src={lightLogo}
                                alt=""
                                className="logo-light"
                              />
                              <img
                                src={darkLogo}
                                alt=""
                                className="logo-dark"
                              />
                            </Link>
                            <div className="mt-5">
                              <img
                                src={signUpImage}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                          </CardBody>
                        </Col>
                        <Col lg={6}>
                          <CardBody className="auth-content p-5 text-white">
                            <div className="w-100">
                              <div className="text-center">
                                <h5>Let's Get Started</h5>
                                <p className="text-white-70">
                                  Sign Up and get access to all the features of
                                  Jobcy
                                </p>
                              </div>
                              <Form onSubmit={handleRegister} className="auth-form">
                                <div className="mb-3">
                                  <label
                                    htmlFor="usernameInput"
                                    className="form-label"
                                  >
                                    name
                                  </label>
                                  <Input
                                    type="text"
                                    value={name}
                                    className="form-control"
                                    required
                                    id="usernameInput"
                                    placeholder="Enter your username"
                                    onChange={(e) => setname(e.target.value)}

                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="passwordInput"
                                    className="form-label"
                                  >
                                    Email
                                  </label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    required
                                    value={email}
                                    id="emailInput"
                                    placeholder="Enter your email"
                                    onChange={(e) => setemail(e.target.value)}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Password
                                  </label>
                                  <Input
                                  value={password}
                                    type="password"
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Enter your password"
                                    onChange={(e) => setpassword(e.target.value)}
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="emailInput"
                                    className="form-label"
                                  >
                                    Confirm Password
                                  </label>
                                  <Input
                                 
                                    type="password"
                                    value={password_confirmation}
                                    className="form-control"
                                    id="passwordInput"
                                    placeholder="Enter your password"
                                    onChange={(e) => setpasswordConfirmation(e.target.value)}
                                  />
                                </div>
                               
                                <div className="text-center">
                                  <button
                                    type="submit"
                                    className="btn btn-white btn-hover w-100"
                                  >
                                    Sign Up
                                  </button>
                                </div>
                              </Form>
                              <div className="mt-3 text-center">
                                <p className="mb-0">
                                  Already a member ?{" "}
                                  <Link
                                    to="/signin"
                                    className="fw-medium text-white text-decoration-underline"
                                  >
                                    {" "}
                                    Sign In{" "}
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
