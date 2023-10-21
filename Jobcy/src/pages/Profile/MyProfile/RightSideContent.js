import React from "react";
import UserLanguages from "./language";
import Murad from "../../../components/axios";

import { useState, useEffect } from "react";
import axios from "axios";
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
  Label,
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
    email: "",
    academic_specialization: "",
    name: "",
  });

  const handleImage = (e) => {
    setUsera({ ...usera, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const formData = new FormData();
    formData.append("image", usera.image);
    formData.append("id", userb.id);
    formData.append("email", usera.email);
    formData.append("academic_specialization", usera.academic_specialization);
    formData.append("name", usera.name);
    Murad.post("/image", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading image: ", error);
      });
  };
  //------------------------------------------------------
  const [language, setLanguage] = useState({
    Lang1: "",
    level: "",
  });

  const addLanguage = async (e) => {
    e.preventDefault();

    const csrfResponse = await Murad.get("/get-csrf-token");
    const csrfToken = csrfResponse.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const languageData = new FormData();
    languageData.append("Lang1", language.Lang1);
    languageData.append("level", language.level);
    languageData.append("id", userb.id);

    console.log(language.Lang1);
    Murad.post("/language", languageData)
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
    axios
      .get(`http://127.0.0.1:8000/api/userskills/${userb.id}`)
      .then((response) => {
        setSelectedUser(response.data);
        console.log(selectedUser.name);
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
  const [UserLanguage, setUserLanguage] = useState(null);
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

  const [UserEducation, setUserEducation] = useState(null);
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

  const [userexperience, setUserExperience] = useState(null);
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
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div>
                        <div className="p-0 rounded-circle profile-photo-edit">
                          <Input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                            name="image"
                            onChange={handleImage}
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
                            Name
                          </label>
                          <Input
                            type="text"
                            name="name"
                            className="form-control"
                            id="firstName"
                            placeholder={user.name}
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                            // value={user.name}
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
                            name="academic_specialization"
                            id="choices-single-categories"
                            aria-label={usera.academic_specialization}
                            value={usera.academic_specialization}
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                academic_specialization: e.target.value,
                              }))
                            }
                          >
                            <option value="Accounting">Accounting</option>
                            <option value="IT & Software">IT & Software</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Banking">Banking</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder={user.email}
                            name="email"
                            onChange={(e) =>
                              setUsera((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Upload Image
                  </button>
                </form>
                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Yor Languages</h5>
                  <Row style={{ backgroundColor: "gray" }}>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          language1
                        </Label>
                        <form
                          action="#"
                          onSubmit={addLanguage}
                          formData="multipart/form-data"
                        >
                          <select
                            class="form-select"
                            id="languages"
                            name="Lang1"
                            value={language.Lang1}
                            onChange={(e) =>
                              setLanguage((prev) => ({
                                ...prev,
                                Lang1: e.target.value,
                              }))
                            }
                          >
                            <option value="languages">languages</option>
                            <option value="Afrikaans">Afrikaans</option>
                            <option value="Albanian - shqip">
                              Albanian - shqip
                            </option>
                            <option value="Amharic - አማርኛ">
                              Amharic - አማርኛ
                            </option>
                            <option value="Arabic - العربية">
                              Arabic - العربية
                            </option>
                            <option value="Aragonese - aragonés">
                              Aragonese - aragonés
                            </option>
                            <option value="Armenian - հայերեն">
                              Armenian - հայերեն
                            </option>
                            <option value="Asturian - asturianu">
                              Asturian - asturianu
                            </option>
                            <option value="Azerbaijani - azərbaycan dili">
                              Azerbaijani - azərbaycan dili
                            </option>
                            <option value="Basque - euskara">
                              Basque - euskara
                            </option>
                            <option value="Belarusian - беларуская">
                              Belarusian - беларуская
                            </option>
                            <option value="Bengali - বাংলা">
                              Bengali - বাংলা
                            </option>
                            <option value="Bosnian - bosanski">
                              Bosnian - bosanski
                            </option>
                            <option value="Breton - brezhoneg">
                              Breton - brezhoneg
                            </option>
                            <option value="Bulgarian - български">
                              Bulgarian - български
                            </option>
                            <option value="Catalan - català">
                              Catalan - català
                            </option>
                            <option value="Central Kurdish - کوردی (دەستنوسی عەرەبی)">
                              Central Kurdish - کوردی (دەستنوسی عەرەبی)
                            </option>
                            <option value="Chinese - 中文">
                              Chinese - 中文
                            </option>
                            <option value="Chinese (Hong Kong) - 中文（香港）">
                              Chinese (Hong Kong) - 中文（香港）
                            </option>
                            <option value="Chinese (Simplified) - 中文（简体）">
                              Chinese (Simplified) - 中文（简体）
                            </option>
                            <option value="Chinese (Traditional) - 中文（繁體）">
                              Chinese (Traditional) - 中文（繁體）
                            </option>
                            <option value="Corsican">Corsican</option>
                            <option value="Croatian - hrvatski">
                              Croatian - hrvatski
                            </option>
                            <option value="Czech - čeština">
                              Czech - čeština
                            </option>
                            <option value="Danish - dansk">
                              Danish - dansk
                            </option>
                            <option value="Dutch - Nederlands">
                              Dutch - Nederlands
                            </option>
                            <option value="English">English</option>
                            <option value="English (Australia)">
                              English (Australia)
                            </option>
                            <option value="English (Canada)">
                              English (Canada)
                            </option>
                            <option value="English (India)">
                              English (India)
                            </option>
                            <option value="English (New Zealand)">
                              English (New Zealand)
                            </option>
                            <option value="English (South Africa)">
                              English (South Africa)
                            </option>
                            <option value="English (United Kingdom)">
                              English (United Kingdom)
                            </option>
                            <option value="English (United States)">
                              English (United States)
                            </option>
                            <option value="Esperanto - esperanto">
                              Esperanto - esperanto
                            </option>
                            <option value="Estonian - eesti">
                              Estonian - eesti
                            </option>
                            <option value="Faroese - føroyskt">
                              Faroese - føroyskt
                            </option>
                            <option value="Filipino">Filipino</option>
                            <option value="Finnish - suomi">
                              Finnish - suomi
                            </option>
                            <option value="French - français">
                              French - français
                            </option>
                            <option value="French (Canada) - français (Canada)">
                              French (Canada) - français (Canada)
                            </option>
                            <option value="French (France) - français (France)">
                              French (France) - français (France)
                            </option>
                            <option value="French (Switzerland) - français (Suisse)">
                              French (Switzerland) - français (Suisse)
                            </option>
                            <option value="Galician - galego">
                              Galician - galego
                            </option>
                            <option value="Georgian - ქართული">
                              Georgian - ქართული
                            </option>
                            <option value="German - Deutsch">
                              German - Deutsch
                            </option>
                            <option value="German (Austria) - Deutsch (Österreich)">
                              German (Austria) - Deutsch (Österreich)
                            </option>
                            <option value="German (Germany) - Deutsch (Deutschland)">
                              German (Germany) - Deutsch (Deutschland)
                            </option>
                            <option value="German (Liechtenstein) - Deutsch (Liechtenstein)">
                              German (Liechtenstein) - Deutsch (Liechtenstein)
                            </option>
                            <option value="German (Switzerland) - Deutsch (Schweiz)">
                              German (Switzerland) - Deutsch (Schweiz)
                            </option>
                            <option value="Greek - Ελληνικά">
                              Greek - Ελληνικά
                            </option>
                            <option value="Guarani">Guarani</option>
                            <option value="Gujarati - ગુજરાતી">
                              Gujarati - ગુજરાતી
                            </option>
                            <option value="Hausa">Hausa</option>
                            <option value="Hawaiian - ʻŌlelo Hawaiʻi">
                              Hawaiian - ʻŌlelo Hawaiʻi
                            </option>
                            <option value="Hebrew - עברית">
                              Hebrew - עברית
                            </option>
                            <option value="Hindi - हिन्दी">
                              Hindi - हिन्दी
                            </option>
                            <option value="Hungarian - magyar">
                              Hungarian - magyar
                            </option>
                            <option value="Icelandic - íslenska">
                              Icelandic - íslenska
                            </option>
                            <option value="Indonesian - Indonesia">
                              Indonesian - Indonesia
                            </option>
                            <option value="Interlingua">Interlingua</option>
                            <option value="Irish - Gaeilge">
                              Irish - Gaeilge
                            </option>
                            <option value="Italian - italiano">
                              Italian - italiano
                            </option>
                            <option value="Italian (Italy) - italiano (Italia)">
                              Italian (Italy) - italiano (Italia)
                            </option>
                            <option value="Italian (Switzerland) - italiano (Svizzera)">
                              Italian (Switzerland) - italiano (Svizzera)
                            </option>
                            <option value="Japanese - 日本語">
                              Japanese - 日本語
                            </option>
                            <option value="Kannada - ಕನ್ನಡ">
                              Kannada - ಕನ್ನಡ
                            </option>
                            <option value="Kazakh - қазақ тілі">
                              Kazakh - қазақ тілі
                            </option>
                            <option value="Khmer - ខ្មែរ">Khmer - ខ្មែរ</option>
                            <option value="Korean - 한국어">
                              Korean - 한국어
                            </option>
                            <option value="Kurdish - Kurdî">
                              Kurdish - Kurdî
                            </option>
                            <option value="Kyrgyz - кыргызча">
                              Kyrgyz - кыргызча
                            </option>
                            <option value="Lao - ລາວ">Lao - ລາວ</option>
                            <option value="Latin">Latin</option>
                            <option value="Latvian - latviešu">
                              Latvian - latviešu
                            </option>
                            <option value="Lingala - lingála">
                              Lingala - lingála
                            </option>
                            <option value="Lithuanian - lietuvių">
                              Lithuanian - lietuvių
                            </option>
                            <option value="Macedonian - македонски">
                              Macedonian - македонски
                            </option>
                            <option value="Malay - Bahasa Melayu">
                              Malay - Bahasa Melayu
                            </option>
                            <option value="Malayalam - മലയാളം">
                              Malayalam - മലയാളം
                            </option>
                            <option value="Maltese - Malti">
                              Maltese - Malti
                            </option>
                            <option value="Marathi - मराठी">
                              Marathi - मराठी
                            </option>
                            <option value="Mongolian - монгол">
                              Mongolian - монгол
                            </option>
                            <option value="Nepali - नेपाली">
                              Nepali - नेपाली
                            </option>
                            <option value="Norwegian - norsk">
                              Norwegian - norsk
                            </option>
                            <option value="Southern Sotho">
                              Southern Sotho
                            </option>
                            
                            <option value="Sundanese">Sundanese</option>
                            <option value="Swahili - Kiswahili">
                              Swahili - Kiswahili
                            </option>
                            <option value="Swedish - svenska">
                              Swedish - svenska
                            </option>
                            <option value="Tajik - тоҷикӣ">
                              Tajik - тоҷикӣ
                            </option>
                            <option value="Tamil - தமிழ்">Tamil - தமிழ்</option>
                            <option value="Tatar">Tatar</option>

                            <option value="Turkish - Türkçe">
                              Turkish - Türkçe
                            </option>
                            <option value="Turkmen">Turkmen</option>
                            <option value="Twi">Twi</option>
                            <option value="Ukrainian - українська">
                              Ukrainian - українська
                            </option>
                            <option value="Urdu - اردو">Urdu - اردو</option>
                            <option value="Uyghur">Uyghur</option>
                            <option value="isiZulu">isiZulu</option>
                          </select>
                          <Input
                            type="text"
                            name="level"
                            className="form-control"
                            id="firstName"
                            // placeholder={l.name}
                            onChange={(e) =>
                              setLanguage((prev) => ({
                                ...prev,
                                level: e.target.value,
                              }))
                            }
                            // value={user.name}
                          />
                          <button className="btn btn-primary" type="submit">
                            Add
                          </button>
                        </form>
                        
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Yor Languages</h5>
                  <Row style={{ backgroundColor: "gray" }}>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          language1
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill2
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill3
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill4
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="mt-4">
                  <h5 className="fs-17 fw-semibold mb-3">Yor Languages</h5>
                  <Row style={{ backgroundColor: "gray" }}>
                    <Col lg={3}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          language1
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                    <Col lg={3}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill2
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="mb-3">
                        <Label htmlFor="whatsapp" className="form-label">
                          skill3
                        </Label>
                        <Input
                          className="form-control"
                          type
                          id="attachmentscv"
                        />
                      </div>
                    </Col>
                  </Row>

                  <UserLanguages />
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
