import React from "react";
import "./index.css";

const TermsPolicy = ({ heading, text }) => {
  return (
    <>
      <div className="terms-policy-container">
        <div className="first-half"></div>
        <div className="terms-policy-modal">
          <div className="terms-policy-heading">{heading}</div>
          <hr />
          <div className="terms-policy-description">
            <div
              className="terms-policy-text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPolicy;
