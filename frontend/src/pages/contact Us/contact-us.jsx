import React from "react";
import "./contact-us.css";
import { context } from "../../context/productContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const ContactUs = () => {
  const { changeCurrentPageName } = useContext(context);
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    changeCurrentPageName("contact");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form submitted:", data);

    fetch("/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    e.target.reset();
    setSubmitted(true);
  };
  return (
    <>
      <div className="heading">
        {submitted ? <h1>Message sent!</h1> : <h1>Contact Us</h1>}
      </div>
      {submitted ? (
        <div className="success-message">
          <h2>
            <span style={{ fontSize: "2rem" }}>👍</span> Your query has been
            submitted!
          </h2>
          <h3 className="submitted_sub_heading">We’ll get back to you soon.</h3>
          <button className="btn" onClick={() => setSubmitted(false)}>
            Submit another query
          </button>
        </div>
      ) : (
        <>
          <div className="form-container">
            <form
              className="form"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="field-container">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact_input"
                  name="nameOfPerson"
                ></input>
              </div>
              <div className="field-container">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="contact_input"
                  name="email"
                ></input>
              </div>
              <div className="textarea-container">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};
