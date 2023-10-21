import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Col,
  Card,
  CardBody,
  Row,
  Input,
  Modal,
  ModalBody,
  Label
} from "reactstrap";
import { Link } from "react-router-dom";

// Lightbox
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

// Import BlogImage
import blogImage1 from "../../../assets/images/blog/img-01.jpg";
import blogImage3 from "../../../assets/images/blog/img-03.jpg";
import blogImage12 from "../../../assets/images/blog/img-12.jpg";

// Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";
import jobImage4 from "../../../assets/images/featured-job/img-04.png";

const images = [blogImage1, blogImage3, blogImage12];

const RightSideContent = () => {
  // Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  // Lightbox
  const [photoIndex, setphotoIndex] = useState(0);
  const [isGallery, setisGallery] = useState(false);

  const jobVacancyPost = [
    // ... Your jobVacancyPost data (unchanged) ...
  ];

  const [company, setCompany] = useState();

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios.get("http://127.0.0.1:8000/api/companyjobs/1")
      .then((response) => {
        setCompany(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <React.Fragment>
      {isGallery ? (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          enableZoom={true}
          onCloseRequest={() => {
            setisGallery(false);
          }}
          onMovePrevRequest={() => {
            setphotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setphotoIndex((photoIndex + 1) % images.length);
          }}
          imageCaption={"Project " + parseFloat(photoIndex + 1)}
        />
      ) : null}
      <Col lg={8}>
        <Card className="ms-lg-4 mt-4 mt-lg-0">
          <CardBody className="p-4">
            <div className="mb-5">
              <h6 className="fs-17 fw-semibold mb-4">About Company</h6>
              <p className="text-muted">
                {company && company.about} {/* Replace with the actual company description */}
              </p>
            </div>
            <div className="candidate-portfolio mb-5">
              <h6 className="fs-17 fw-semibold mb-4">Gallery</h6>
              <Row className="g-3">
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage1}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(0);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={6}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage3}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(1);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
                <Col lg={12}>
                  <Link to="#" className="image-popup">
                    <img
                      src={blogImage12}
                      onClick={() => {
                        setisGallery(true);
                        setphotoIndex(2);
                      }}
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </Col>
              </Row>
            </div>
            <div>
              <h6 className="fs-17 fw-semibold mb-4">Current Opening</h6>
              {company &&
                Array.isArray(company.job) &&
                company.job.map((job) => (
                  <div
                    className="modal fade"
                    id="applyNow"
                    tabIndex="-1"
                    aria-labelledby="applyNow"
                    aria-hidden="true"
                    key={job.id}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <Modal isOpen={modal} toggle={openModal} centered>
                        <ModalBody className="modal-body p-5">
                          <div className="text-center mb-4">
                            <h5 className="modal-title" id="staticBackdropLabel">
                              Apply For This Job
                            </h5>
                          </div>
                          <div className="position-absolute end-0 top-0 p-3">
                            <button
                              type="button"
                              onClick={openModal}
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="mb-3">
                            <Label for="nameControlInput" className="form-label">
                              Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              id="nameControlInput"
                              placeholder="Enter your name"
                            />
                          </div>
                          <div className="mb-3">
                            <Label for="emailControlInput2" className="form-label">
                              Email Address
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="emailControlInput2"
                              placeholder="Enter your email"
                            />
                          </div>
                          <div className="mb-3">
                            <Label
                              for="messageControlTextarea"
                              className="form-label"
                            >
                              Message
                            </Label>
                            <textarea
                              className="form-control"
                              id="messageControlTextarea"
                              rows="4"
                              placeholder="Enter your message"
                            ></textarea>
                          </div>
                          <div className="mb-4">
                            <Label className="form-label" for="inputGroupFile01">
                              Resume Upload
                            </Label>
                            <Input
                              type="file"
                              className="form-control"
                              id="inputGroupFile01"
                            />
                          </div>
                          <button type="submit" className="btn btn-primary w-100">
                            Send Application
                          </button>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>
                ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default RightSideContent;
