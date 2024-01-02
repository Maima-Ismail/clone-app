import React from "react";
import "./index.css";

const TermsPolicy = ({ propsValues }) => {
  return (
    <>
      <div className="terms-policy-container">
        <div className="first-half"></div>
        <div className="terms-policy-modal">
          <div className="terms-policy-heading">{propsValues.heading}</div>
          <hr />
          <div className="terms-policy-description">
            <div
              className="terms-policy-text"
              dangerouslySetInnerHTML={{ __html: propsValues.text }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPolicy;
