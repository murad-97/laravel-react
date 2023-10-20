import React from "react";
import Murad from "../../../components/axios" ;
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Col,
  Row,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Input,
  Form,
  NavItem,
  CardBody,
  Label
} from "reactstrap";
import classnames from "classnames";
// import userImage2 from "../../../assets/images/user/img-02.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const RightSideContent = () => {

  const userb = useSelector((state) => state.user);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

const [usera, setUsera] = useState({
  image: null,
});

const handleImage = (e) => {
  setUsera({ ...usera, image: e.target.files[0] });
};

const handleSubmit = async (e) => {
  e.preventDefault();

const csrfResponse = await Murad.get("/get-csrf-token");
      const csrfToken = csrfResponse.data.csrf_token;
      axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;


const formData = new FormData();
formData.append("image", usera.image);
formData.append("id", userb.id);
  Murad
    .post("/image", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Error uploading image: ", error);
    });
};
//-----------------------skills-----------------------------------------------------------
const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get(`http://127.0.0.1:8000/api/userskills/${userb.id}`)
      .then((response) => {
          setSelectedUser(response.data);
          console.log(selectedUser.name)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);



//-----------------------language-----------------------------------------------------------
    const [user, setUser] = useState([]);
  useEffect(() => {
    
    axios
      .get(`http://127.0.0.1:8000/api/users/${userb.id}}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
//-----------------------language-----------------------------------------------------------
  const [UserLanguage,setUserLanguage]=useState(null);
  useEffect(() => {
    
    axios
      .get(`http://127.0.0.1:8000/api/userlanguage/${userb.id}}`)
      .then((response) => {
        setUserLanguage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

//-----------------------education---------------------------------------------------------

const [UserEducation,setUserEducation]=useState(null);
useEffect(() => {
  // Fetch data from the API when the component mounts
  axios
    .get(`http://127.0.0.1:8000/api/userseducation/${userb.id}}`)
    .then((response) => {
      setUserEducation(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}, []);

//-----------------------education-----------------------------------------------------------------

const [userexperience,setUserExperience]=useState(null);
useEffect(() => {
  // Fetch data from the API when the component mounts
  axios
    .get(`http://127.0.0.1:8000/api/userexperience/${userb.id}}`)
    .then((response) => {
      setUserExperience(response.data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}, []);


// ---------------------------------------------------------------------------------
  const [activeTab, setActiveTab] = useState("1");

  const tabChange = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);


  };
  return (
    <React.Fragment>
      <>{/* {selectedUser && ()} */}</>
      <Col lg={8}>
        <Card className="profile-content-page mt-4 mt-lg-0">
          <Nav
            className="profile-content-nav nav-pills border-bottom mb-4"
            id="pills-tab"
            role="tablist"
          >
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  tabChange("1");
                }}
                type="button"
              >
                Overview
              </NavLink>
            </NavItem>
            <NavItem role="presentation">
              <NavLink
                to="#"
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  tabChange("2");
                }}
                type="button"
              >
                Settings
              </NavLink>
            </NavItem>
          </Nav>

          <CardBody className="p-4">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div>
                  <h5 className="fs-18 fw-bold">About</h5>
                  <p className="text-muted mt-4">
                    {selectedUser ? (
                      selectedUser.about
                    ) : (
                      <p>User with ID {userb.id} not found.</p>
                    )}
                  </p>
                  <p className="text-muted">
                    It describes the candidate's relevant experience, skills,
                    and achievements. The purpose of this career summary is to
                    explain your qualifications for the job in 3-5 sentences and
                    convince the manager to read the whole resume document.
                  </p>
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Education</h6>

                  {UserEducation &&
                    Array.isArray(UserEducation.educations) &&
                    UserEducation.educations.map((education) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {education.subject.charAt(0).toUpperCase()}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{education.subject}</h6>
                          <p className="mb-2 text-muted">
                            {education.schoole} - ( {education.from} -{" "}
                            {education.to})
                          </p>
                          <p className="text-muted">{education.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="candidate-education-details mt-4">
                  <h6 className="fs-18 fw-bold mb-0">Experiences</h6>
                  {userexperience &&
                    Array.isArray(userexperience.experiences) &&
                    userexperience.experiences.map((experience) => (
                      <div className="candidate-education-content mt-4 d-flex">
                        <div className="circle flex-shrink-0 bg-primary-subtle text-primary">
                          {" "}
                          {experience.position.charAt(0).toUpperCase()}{" "}
                        </div>
                        <div className="ms-4">
                          <h6 className="fs-16 mb-1">{experience.position}</h6>
                          <p className="mb-2 text-muted">
                            {experience.position} - ({experience.from} -{" "}
                            {experience.to})
                          </p>
                          <p className="text-muted">{experience.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Skills</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {selectedUser &&
                    Array.isArray(selectedUser.user_skills) &&
                    selectedUser.user_skills.map((skill) => (
                      <span
                        className="badge fs-13 bg-blue-subtle text-blue mt-2"
                        key={skill.id}
                      >
                        {skill.skill_name}
                      </span>
                    ))}
                </div>
                <div className="mt-4">
                  <h5 className="fs-18 fw-bold">Spoken languages</h5>
                </div>
                <div className="mt-0 d-flex flex-wrap align-items-start gap-1">
                  {UserLanguage &&
                    Array.isArray(UserLanguage.languages) &&
                    UserLanguage.languages.map((language) => (
                      <span className="badge fs-13 bg-success-subtle text-success mt-2">
                        {language.name}
                      </span>
                    ))}
                </div>
              </TabPane>
              <TabPane tabId="2">
                <form
                  action="#"
                  onSubmit={handleSubmit}
                  formData="multipart/form-data"
                >
                  <div>
                    <h5 className="fs-17 fw-semibold mb-3 mb-0">My Account</h5>
                    <div className="text-center">
                      <div className="mb-4 profile-user">
                        <img
                          src={`http://localhost:8000/img/${user.image}`}
                          className="rounded-circle img-thumbnail profile-img"
                          id="profile-img"
                          alt=""
                        />
                        <input
                          type="file"
                          name="image"
                          onChange={handleImage}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit">Upload Image</button>
                </form>
                <div>
                  <div>
                    <div>
                      <div className="p-0 rounded-circle profile-photo-edit">
                        <Input
                          id="profile-img-file-input"
                          type="file"
                          className="profile-img-file-input"
                        />
                        <Label
                          htmlFor="profile-img-file-input"
                          className="profile-photo-edit avatar-xs"
                        >
                          <i className="uil uil-edit"></i>
                        </Label>
                      </div>
                    </div>
                  </div>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">
                          First Name
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          id="firstName"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="lastName" className="form-label">
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="lastName"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-categories"
                          className="form-label"
                        >
                          Account Type
                        </label>
                        <select
                          className="form-select"
                          data-trigger
                          name="choices-single-categories"
                          id="choices-single-categories"
                          aria-label="Default select example"
                        >
                          <option value="4">Accounting</option>
                          <option value="1">IT & Software</option>
                          <option value="3">Marketing</option>
                          <option value="5">Banking</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="email" className="form-label">
                          Email
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="email"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Profile</h5>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Introduce Yourself
                        </Label>
                        <textarea className="form-control" rows="5">
                          Developer with over 5 years' experience working in
                          both the public and private sectors. Diplomatic,
                          personable, and adept at managing sensitive
                          situations. Highly organized, self-motivated, and
                          proficient with computers. Looking to boost students’
                          satisfactions scores for International University.
                          Bachelor's degree in communications.
                        </textarea>
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="languages" className="form-label">
                          Languages
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="languages"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-location"
                          className="form-label"
                        >
                          Location
                        </label>
                        <select
                          className="form-select"
                          data-trigger
                          name="choices-single-location"
                          id="choices-single-location"
                          aria-label="Default select example"
                        >
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                        </select>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="attachmentscv" className="form-label">
                          Attachments CV
                        </Label>
                        <Input
                          className="form-control"
                          type="file"
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Social Media</h5>
                  <Row>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="facebook" className="form-label">
                          Facebook
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="facebook"
                          to="https://www.facebook.com"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="twitter" className="form-label">
                          Twitter
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="twitter"
                          to="https://www.twitter.com"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="linkedin" className="form-label">
                          Linkedin
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="linkedin"
                          to="https://www.linkedin.com"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          Whatsapp
                        </Label>
                        <Input
                          type="text"
                          className="form-control"
                          id="whatsapp"
                          to="https://www.whatsapp.com"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3 mb-3">
                    Change Password
                  </h5>
                  <Row>
                    <Col lg={12}>
                      <div className="mb-3">
                        <Label
                          htmlFor="current-password-input"
                          className="form-label"
                        >
                          Current password
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          placeholder="Enter Current password"
                          id="current-password-input"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="new-password-input"
                          className="form-label"
                        >
                          New password
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          placeholder="Enter new password"
                          id="new-password-input"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label
                          htmlFor="confirm-password-input"
                          className="form-label"
                        >
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          className="form-control"
                          placeholder="Confirm Password"
                          id="confirm-password-input"
                        />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="form-check">
                        <Input
                          className="form-check-input"
                          type="checkbox"
                          id="verification"
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="verification"
                        >
                          Enable Two-Step Verification via email
                        </Label>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-4 text-end">
                  <Link to="#" className="btn btn-primary">
                    Update
                  </Link>
                </div>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
