import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="background-image-contact">
        <div className="contact-details">
          <h1 className="contact-title">Connect with us !!</h1>
          <div className="social-media-contact-icons">
            <div>
              <img src="https://img.icons8.com/cute-clipart/48/000000/facebook-new.png" />
              <span>Connect through Facebook !!</span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/48/000000/twitter.png" />
              <span>Connect through Twitter</span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/48/000000/instagram-new.png" />
              <span>Connect through Instagram</span>
            </div>
            <div>
              <img src="https://img.icons8.com/cute-clipart/48/000000/linkedin.png" />
              <span>Connect through LinkedIn</span>
            </div>
          </div>

          <div className="contact-address">
            <div>
              <img src="https://img.icons8.com/office/48/000000/address.png" />
              <span>Graspurvej 1,2400 Norrebro,Denmark</span>
            </div>

            <div>
              <img src="https://img.icons8.com/color/48/000000/men-age-group-5.png" />
              <span>25 employees</span>
            </div>

            <div>
              <img src="https://img.icons8.com/fluent/48/000000/domain.png" />
              <span>www.mealsharing.com</span>
            </div>

            <div>
              <img src="https://img.icons8.com/doodle/48/000000/phone--v1.png" />
              <span>+45-12345678</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
