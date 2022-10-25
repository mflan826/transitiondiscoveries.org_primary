import React, { useState } from "react";
import { getHomeImage } from "./../../helper";
import RecentBlogs from "../Blogs/RecentBlogs";
import TextInput from "../common/TextInput";
import * as contactUsApi from "../../api/contactUsApi";

const HomeCurrentlyHappening = (props) => {
  const [errors, setErrors] = useState({});
  const [contactFormValues, setContactFormValues] = useState({
    id: null,
    name: "",
    email: "",
    phone: "n/a",
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

    if (!contactFormValues.name) _errors.name = "Name is required";
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
    initialFormValues.name = "";
    initialFormValues.email = "";
    setContactFormValues(initialFormValues);
  }

  return (
    <div class="container blog-box-grid ptb-40">
      <div class="blogs-head">
        <div>
          <strong class="green" style={font}>
            {props.Heading}
          </strong>
        </div>
        <p class="sub-txt mb-3">{props.subheading}</p>
      </div>

      <div class="blog-boxes">
        {props.boxes.map((item, index) => {
          return (
            <a href={item.CTALink}>
              <div class="item-a">
                <div class="bl-img">
                  <img
                    src={getHomeImage(item.image)}
                    class=""
                    alt={index + "Check the Latest Events"}
                  ></img>
                  <div class="bl-tag">{item.label}</div>
                </div>

                <div class="bl-content">
                  <p>{item.title}</p>
                </div>
              </div>
            </a>
          );
        })}

        {/* <div class="item-a rhs">
          <div class="form-bxU">
            <h1 className=" whatshappeningheading white">Stay Updated</h1>
            <p className="white subheadsml" style={{ fontSize: "16px" }}>
              {" "}
              If you would like to stay connected with all of our exciting work,
              please subscribe for updates!
            </p>
            <form className="HomeSubscriber" onSubmit={handleSubmit}>
              <TextInput
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={contactFormValues.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextInput
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={contactFormValues.email}
                onChange={handleChange}
                error={errors.email}
              />
             
              <button type="submit" class="grtctatbg2">
                Subscribe now!
              </button>
            </form>

            
            <p class="cont2_new"></p>
          </div>
        </div> */}
      </div>
      {/* <RecentBlogs isHorizontal={true}></RecentBlogs> */}
    </div>
  );
};

export default HomeCurrentlyHappening;
