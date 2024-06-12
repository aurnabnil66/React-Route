import React from "react";
import BasicForm from "./BasicForm";

function Contact() {
  return (
    <div className="contact d-flex align-items-center justify-content-center vh-100">
      <div className="container text-center">
        <div className="col">
          <h1 className="font-weight-bold">Contact</h1>
          <BasicForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
