import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";

//Import images
import featureImage from "../../../assets/images/featured-job/img-01.png";

const LeftSideContent = () => {



  const [company, setCompany] = useState();



  // const [selectedUser, setSelectedUser] = useState(null);
  const x = 1; // Replace with the ID you want to find


  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get("http://127.0.0.1:8000/api/companyWithWorkingDays/1")
      .then((response) => {
        setCompany(response.data);

      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);




  return (
    <React.Fragment>
      {company ? (
        <Col lg={4}>
          <Card className="side-bar">
            <CardBody className="p-4">
              <div className="candidate-profile text-center">
                <img
                  src={featureImage}
                  alt=""
                  className="avatar-lg rounded-circle"
                />
                <h6 className="fs-18 mb-1 mt-4">{company.name}</h6>
                <p className="text-muted mb-4">{company.startDate}</p>
                <ul className="candidate-detail-social-menu list-inline mb-0">
                  <li className="list-inline-item">
                    <Link to={company.Facebook} className="social-link">

                      <i className="uil uil-facebook"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={company.Whatsap} className="social-link">
                      <i className="uil uil-whatsapp"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to={company.phone_number} className="social-link">
                      <i className="uil uil-phone-alt"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </CardBody>

            <CardBody className="candidate-profile-overview border-top p-4">
              <h6 className="fs-17 fw-semibold mb-3">Profile Overview</h6>
              <ul className="list-unstyled mb-0">
                <li>
                  <div className="d-flex">
                    <label className="text-dark">Owner Name</label>
                    <div>
                      <p className="text-muted mb-0">Charles Dickens</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <label className="text-dark">Employees</label>
                    <div>
                      <p className="text-muted mb-0">{company.Employees}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <label className="text-dark">Location</label>
                    <div>
                      <p className="text-muted mb-0">{company.address}</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <label className="text-dark">Website</label>
                    <div>
                      <p className="text-muted text-break mb-0">
                        {company.website}
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <label className="text-dark">Established</label>
                    <div>
                      <p className="text-muted mb-0">{company.startDate}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-3">
                <Link to={company.phone_number} className="btn btn-danger btn-hover w-100">
                  <i className="uil uil-phone"></i> Contact
                </Link>
              </div>
            </CardBody>
            <CardBody className="p-4 border-top">
              <div className="ur-detail-wrap">
                <div className="ur-detail-wrap-header">
                  <h6 className="fs-17 fw-semibold mb-3">Working Days</h6>
                </div>
                <div className="ur-detail-wrap-body">

                  <ul className="working-days">


                    <li>
                      Monday{" "}
                      <span>
                        {company.day_of_work.Monday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Tuesday{" "}
                      <span>
                        {company.day_of_work.Tuesday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Wednesday{" "}
                      <span>
                        {company.day_of_work.Wednesday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Thursday{" "}
                      <span>
                        {company.day_of_work.Thursday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Friday{" "}
                      <span>
                        {company.day_of_work.Friday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Saturday{" "}
                      <span>
                        {company.day_of_work.Saturday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>
                    <li>
                      Sunday{" "}
                      <span>
                        {company.day_of_work.Sunday
                          ? `${company.day_of_work.From} - ${company.day_of_work.To}`
                          : "Closed"}
                      </span>
                    </li>

                  </ul>

                </div>
              </div>
            </CardBody>
            <CardBody className="p-4 border-top">
              <h6 className="fs-17 fw-semibold mb-4">Company Location</h6>
              <iframe
                src={company.location_map}
                title="title"
                style={{ width: `100%`, height: `250` }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
