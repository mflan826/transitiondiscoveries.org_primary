import React, { useState, useRef } from "react";
import "./Footer.css";
import * as contactUsApi from "../../api/contactUsApi";
import TextInput from "./TextInput";
import { getImage } from "./../../helper";

import $ from "jquery";
import FontSizeChanger from "react-font-size-changer";

const Footer = (props) => {
  const [errors, setErrors] = useState({});

  const [count, setCount] = useState(0);
  const [countMultiply, setCountMultiply] = useState(4);
  const [resetVisible, setresetVisible] = useState(false);
  const [buttonStyle, setButtonStyles] = useState({
    backgroundColor: "",
    color: "",
    display: "none",
  });
  const ref = useRef(null);
  const [contactFormValues, setContactFormValues] = useState({
    id: null,
    name: "N/A",
    phone: "N/A",
    email: "",
    subject: "Signup For Newsletter",
    message: "Signup For Newsletter",
  });

  const font = {
    "font-size": "1.75rem",
  };

  function handleChange({ target }) {
    const updatedFormValues = {
      ...contactFormValues,
      [target.name]: target.value,
    };
    setContactFormValues(updatedFormValues);
  }

  function formIsValid() {
    const _errors = {};
    if (!contactFormValues.email) _errors.email = "Email is required";
    setErrors(_errors);
    //Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;

    contactUsApi.saveContactUsForm(contactFormValues).then(() => {
      resetForm();
      alert("Thank you for contacting us!");
    });
  }

  function resetForm() {
    const initialFormValues = {};
    initialFormValues.name = "N/A";
    initialFormValues.phone = "N/A";
    initialFormValues.email = "Enter Email Id";
    initialFormValues.subject = "Signup For Newsletter";
    initialFormValues.message = "Signup For Newsletter";
    setContactFormValues(initialFormValues);
  }
  if (!props.data) {
    return null;
  }

  const incCountValue = (e, val) => {
    setresetVisible(true);
    debugger;
    let button = document.getElementsByClassName("font-size-changer");
    // button[1].style.display = "none";
    console.log(button);
    let dynamicButton = button[1].childNodes;
    let filterButton = dynamicButton[0].childNodes;
    let IncreaseButton = filterButton[0];
    let DescreaseButton = filterButton[1];
    IncreaseButton.style.display = "null";
    DescreaseButton.style.display = "null";
    if (val > 0) {
      IncreaseButton.style.display = "none";
      DescreaseButton.style.display = "block";

      setButtonStyles({
        backgroundColor: "white",
        color: "black",
        display: "block",
      });
      console.log("Worked inc", val);
    }

    setCount(val);
    let countmul = Math.abs(val) * 4;
    setCountMultiply(countmul);
  };
  const descCountValue = (e, val) => {
    setresetVisible(true);
    let button = document.getElementsByClassName("font-size-changer");
    // button[1].style.display = "block";
    let dynamicButton = button[1].childNodes;
    let filterButton = dynamicButton[0].childNodes;
    let IncreaseButton = filterButton[0];
    let DescreaseButton = filterButton[1];
    IncreaseButton.style.display = "null";
    DescreaseButton.style.display = "null";
    if (val > 0) {
      IncreaseButton.style.display = "block";
      DescreaseButton.style.display = "none";

      setButtonStyles({
        backgroundColor: "white",
        color: "black",
        display: "block",
      });
    }
    setCount(val);
    let countmul = Math.abs(val) * 4;
    setCountMultiply(countmul);
  };
  const validateValue = (e, val) => {
    setCountMultiply(val);
  };

  const hideResetButton = () => {
    let button = document.getElementsByClassName("font-size-changer");
    button[1].style.display = "block";
  };
  const px = countMultiply;
  console.log("px", px);
  return (
    <footer className="footer-section " style={{ background: "#404c5a" }}>
      <div className="footer-top" style={{ background: "404c5a" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row footer-top-wrap">
                {props.data.topFooter.footerLinks.map((footerLink, i) => (
                  <div key={i} className="col-md-3 col-sm-6 ">
                    <div className="footer-nav-wrap text-white">
                      <div style={font} className="text-white">
                        {footerLink.heading}
                      </div>
                      <ul className="nav flex-column">
                        {footerLink.links.map((link, j) => (
                          <li key={j} className="nav-item">
                            <a href={link.link} className="nav-link">
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3" style={{ background: "#384653" }}>
              <div className="row footer-top-wrap">
                <div className="col-12">
                  <div className="form-bxU">
                    <div className="lead white" style={font}>
                      Signup For Newsletter
                    </div>
                    <p className="cont2_new"></p>

                    <form onSubmit={handleSubmit} id="homepage_slider_form">
                      <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter Email ID"
                        value={contactFormValues.email}
                        onChange={handleChange}
                        error={errors.email}
                      />
                      <span id="Errname" style={{ color: "#fff" }}></span>

                      <button
                        type="submit"
                        className="btn"
                        value="Subscribe Now"
                      >
                        Subscribe Now
                      </button>
                      <div id="msg" className="demo_class"></div>
                    </form>

                    <div className="footer-social-m float-left pt-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-middlw gray-light-bg py-4"
        style={{ background: "#2a3740" }}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-3 col-lg-3">
              <img
                src={getImage("footer-logo-pen.jpg")}
                className="img-fluid"
                alt="Check Our Instagram Gallery"
              />
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="address">
                <p className="lead white mb-0">Transition Discoveries</p>
                <p className="cont white">
                  The George Washington University<br></br>
                  Graduate School of Education & Human Development Dept. Special
                  Education & Disability Studies Interdisciplinary Secondary
                  Transition Services Program 2134 G Street, NW Washington, DC
                  20052
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-bottom gray-light-bg py-2"
        style={{ background: "#404c5a" }}
      >
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-md-12 col-lg-12 addr">
              <p className="lead white mb-0">Disclosure :</p>
              <p className="cont white">
                This project, Transition Discoveries, is supported in part by a
                grant from the Pennsylvania Developmental Disabilities Council,
                through grant number 1801PABSDD, from the U.S. Administration
                for Community Living, Department of Health and Human Services,
                Washington, D.C. 20201. Grantees undertaking projects with
                government sponsorship are encouraged to express freely their
                findings and conclusions. Points of view or opinions do not,
                therefore, necessarily represent official ACL policy.
              </p>
            </div>
            <hr class="line"></hr>
            <div className="col-md-12 col-lg-12">
              <p className="copyright-text pb-0 mb-0 text-center white">
                © 2020 Copyrights - TransitionDiscoveries | Designed by -
                <a
                  href="https://www.janbaskdigitaldesign.com/"
                  className="white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  JanBask Digital Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <FontSizeChanger
          targets={["#root .content"]}
          onChange={(element, newValue, oldValue) => {}}
          options={{
            stepSize: 2,
            range: 1,
          }}
          customButtons={{
            up: (
              <button
                style={{
                  fontSize: "15px",
                  height: "39px",
                  width: "38px",
                  display: buttonStyle.display,
                }}
                onClick={(e) => {
                  validateValue(e, px);
                }}
              >
                A
              </button>
            ),
            down: (
              <button
                style={{
                  fontSize: "15px",
                  height: "39px",
                  width: "38px",
                  display: buttonStyle.display,
                }}
                onClick={(e) => {
                  validateValue(e, px);
                }}
              >
                A
              </button>
            ),

            style: {
              backgroundColor: buttonStyle.backgroundColor,
              color: buttonStyle.color,
            },
          }}
        /> */}
        {/* <FontSizeChanger
          targets={["#root .content"]} 
          onChange={(element, newValue, oldValue) => {}}
          options={{
            stepSize: 2,
            range: 2,
          }}
          customButtons={{
            up: (
              <button
                style={{ fontSize: "15px", height: "39px", width: "38px" }}
                onClick={(e) => incCountValue(e, count + 1)}
              >
                +A
              </button>
            ),
            down: (
              <button
                style={{ fontSize: "15px", height: "39px", width: "38px" }}
                onClick={(e) => descCountValue(e, count - 1)}
              >
                -A
              </button>
            ),
            style: {
              backgroundColor: "white",
              color: "black",
            }
          }}
        /> */}
         <FontSizeChanger
          targets={["#root .content"]} 
          onChange={(element, newValue, oldValue) => {}}
          options={{
            stepSize: 2,
            range: 2,
          }}
          customButtons={{
            up: (
              <button
                style={{ fontSize: "15px", height: "39px", width: "38px" }} 
              >
                +A
              </button>
            ),
            down: (
              <button
                style={{ fontSize: "15px", height: "39px", width: "38px" }} 
              >
                -A
              </button>
            ),
            style: {
              backgroundColor: "white",
              color: "black",
            }
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
