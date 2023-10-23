import React from "react";
import { Container, Row } from "reactstrap";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import Section from "./Section";
import { useState, useEffect } from 'react';
import axios from 'axios';
// import MyPosts from './myposts';
const MyProfile = () => {





  document.title = "My Profile | Jobcy - Job Listing Template | Themesdesign";
  return (
    <React.Fragment>
      <Section />
      <section className="section">
        <Container>
          <Row>
            <LeftSideContent />
            <RightSideContent/>
            {/* <MyPosts/> */}

          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default MyProfile;
