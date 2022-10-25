import React, { useState } from "react";
import Select from "react-select";
import ReactHtmlParser from "react-html-parser";
import "./GetConnectedFormSection.css";
import TextInput from "../common/TextInput";
import * as contactUsApi from "../../api/contactUsApi";
import { formIamOption, formInterestsOption } from "./../../helper";
const GetConnectedFormSection = (props) => {
  let button;
  if (props.link) {
    button = <a href={props.link.url}>{props.link.text}</a>;
  }

  const [errors, setErrors] = useState({});
  const [contactFormValues, setContactFormValues] = useState({
    id: null,
    name: "",
    phone: "",
    email: "",
    iam: "",
    interests: "",
    subject: "Volunteer Now",
    message: "",
  });

  const theme = (theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#f3f3f3",
      primary: "#a0cb3a",
    },
  });

  function handleSelectChange(selectedOption, action) {
    const updatedFormValues = {
      ...contactFormValues,
      [action.name]: selectedOption.value,
    };
    console.log(updatedFormValues);
    setContactFormValues(updatedFormValues);
  }

  function handleChange({ target }) {
    const updatedFormValues = {
      ...contactFormValues,
      [target.name]: target.value,
    };
    setContactFormValues(updatedFormValues);
  }

  function formIsValid() {
    const _errors = {};

    if (!contactFormValues.name) _errors.name = "Name is required";
    if (!contactFormValues.phone) _errors.phone = "Phone is required";
    if (!contactFormValues.email) _errors.email = "Email is required";
    if (!contactFormValues.message) _errors.message = "Message is required";

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
    initialFormValues.name = "";
    initialFormValues.phone = "";
    initialFormValues.email = "";
    initialFormValues.subject = "Volunteer Now";
    initialFormValues.message = "";
    setContactFormValues(initialFormValues);
  }

  return (
    <div class="container Stakeget-grid ptb-40">
      <div class="item-a">
        <div class="item-ab">
          <h2>
            <strong class="white">{props.formheading}</strong>
          </h2>
          <h3 class="sub-txt mb-3 white">{props.formsubheading}</h3>
          <form onSubmit={handleSubmit}>
            <div class="row align-items-center">
              <div class="col mt-3">
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactFormValues.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </div>
            </div>
            <div class="row align-items-center mt-3">
              <div class="col">
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={contactFormValues.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col mt-3">
                <TextInput
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone No."
                  value={contactFormValues.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
              </div>
            </div>
            <div class="row align-items-center">
              <div className="col mt-3">
                <Select
                  name="iam"
                  aria-label="list"
                  label="iam"
                  theme={theme}
                  closeMenuOnSelect={false}
                  defaultValue={formIamOption[0]}
                  options={formIamOption}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.value}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <div class="row align-items-center">
              <div className="col mt-3">
                <Select
                  name="interests"
                  aria-label="list"
                  label="interests"
                  theme={theme}
                  closeMenuOnSelect={false}
                  defaultValue={formInterestsOption[0]}
                  options={formInterestsOption}
                  getOptionLabel={(option) => option.title}
                  getOptionValue={(option) => option.value}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            {/* <div class="row align-items-center">
              <div class="col mt-3">
                <select class="custom-select my-select">
                  <option>Select Category</option>
                  <option>option 1</option>
                  <option>option 2</option>
                </select>
              </div>
            </div> */}
            <div class="row align-items-center">
              <div className="col mt-3">
                <textarea
                  id="message"
                  aria-label="message"
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows="3"
                  value={contactFormValues.message}
                  onChange={handleChange}
                  error={errors.message}
                  style={{ fontFamily: "sans-serif" }}
                ></textarea>
                {errors.message && (
                  <div className="alert alert-danger">{errors.message}</div>
                )}
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col mt-3">
                <button type="submit" class="grtctatbg2">
                  Let’s Start
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="item-b">
        <img
          src={props.imageName}
          className="img-responsive"
          alt="Transition Stakeholders"
        />
      </div>

      <div class="item-c">
        <h3>
          <strong class="white">{props.stepsheading}</strong>
        </h3>
        <h4 class="sub-txt mb-3 white">{props.stepssubheading}</h4>
        <div class="fillform">
          <ul>
            <li>
              <span>1</span>Step 1 - Complete form on the left{" "}
            </li>
            <li>
              <span>2</span>Step 2 - A team member will reach out{" "}
            </li>
            <li>
              <span class="linenot">3</span>Step 3 - We’ll come up with a plan
              together!{" "}
            </li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetConnectedFormSection;
