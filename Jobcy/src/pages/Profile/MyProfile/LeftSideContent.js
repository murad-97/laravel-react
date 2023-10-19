import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
// import RightSideContent from './RightSideContent';



//Import images
import profileImage from "../../../assets/images/profile.jpg";


const LeftSideContent = () => {



  const [users, setUsers] = useState([]);

const [selectedUser, setSelectedUser] = useState(null);
const x = 1; // Replace with the ID you want to find


useEffect(() => {
  // Fetch data from the API when the component mounts
  axios.get("http://127.0.0.1:8000/api/user1")
    .then((response) => {
     setUsers(response.data);
     const userWithX = response.data.find((user) => user.id === x);
     if (userWithX) {
       setSelectedUser(userWithX);
     }

     console.log(selectedUser.name)


    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}, []);





  return (
    
    <React.Fragment>
      {selectedUser ? (
      <Col lg={4}>
        <Card className="profile-sidebar me-lg-4">
          <CardBody className="p-4">
            <div className="text-center pb-4 border-bottom">
              <img
                src={profileImage}
                alt=""
                className="avatar-lg img-thumbnail rounded-circle mb-4"
              />
              <h5 className="mb-0">{selectedUser.name}</h5>
              <p className="text-muted">{selectedUser.jop_title}cc</p>
              <ul className="list-inline d-flex justify-content-center align-items-center ">
                <li className="list-inline-item text-warning fs-19">
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star"></i>
                  <i className="mdi mdi-star-half-full"></i>
                </li>
              </ul>
              <ul className="candidate-detail-social-menu list-inline mb-0">
                <li className="list-inline-item">
                  <Link
                    to={selectedUser.linkedin_link}
                    className="social-link rounded-3 btn-soft-primary"
                  >
                   <i className="uil uil-linkedin"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="social-link rounded-3 btn-soft-info">
                    <i className="uil uil-twitter-alt"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="social-link rounded-3 btn-soft-success"
                  >
                    <i className="uil uil-whatsapp"></i>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to={selectedUser.phone_number}
                    className="social-link rounded-3 btn-soft-danger"
                  >
                    <i className="uil uil-phone-alt"></i>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-4 border-bottom pb-4">
              <h5 className="fs-17 fw-bold mb-3">Documents</h5>
              <ul className="profile-document list-unstyled mb-0">
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">Resume.pdf</h6>
                      <p className="text-muted mb-0">1.25 MB</p>
                    </div>
                    <div className="ms-auto">
                      <Link to="#" download className="fs-20 text-muted">
                        <i className="uil uil-import"></i>
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="profile-document-list d-flex align-items-center mt-4 ">
                    <div className="icon flex-shrink-0">
                      <i className="uil uil-file"></i>
                    </div>
                    <div className="ms-3">
                      <h6 className="fs-16 mb-0">Cover-letter.pdf</h6>
                      <p className="text-muted mb-0">1.25 MB</p>
                    </div>
                    <div className="ms-auto">
                      <Link
                        to="#"
                        download="dark-logo"
                        className="fs-20 text-muted"
                      >
                        <i className="uil uil-import"></i>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="fs-17 fw-bold mb-3">Contacts</h5>
              <div className="profile-contact">
                <ul className="list-unstyled mb-0">
                  <li>
                    <div className="d-flex">
                      <label>Email</label>
                      <div>
                        <p className="text-muted text-break mb-0">
                        {selectedUser.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Phone Number</label>
                      <div>
                        <p className="text-muted mb-0">{selectedUser.phone_number}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex">
                      <label>Location</label>
                      <div>
                        <p className="text-muted mb-0">{selectedUser.address}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      ) : (
        <p>User with ID {x} not found.</p>
      )}
    
    </React.Fragment>
  );
};

export default LeftSideContent;
