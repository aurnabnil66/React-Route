import React from "react";
import BasicForm from "./BasicForm";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-6">
            <h1 className="font-weight-light">Contact</h1>
            <BasicForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
