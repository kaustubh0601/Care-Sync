import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Welcome to KK Wellness Pavilion, your trusted partner in health and wellness. 
            Combining state-of-the-art technology with a compassionate touch, we are committed 
            to offering exceptional medical care in a nurturing environment. From preventive care 
            to advanced treatments, we prioritize your well-being every step of the way.
          </p>
          <p>
            Established in 2004, we strive to revolutionize healthcare with innovative treatments 
            and personalized services.
          </p>
          <p>
            At KK Wellness Pavilion, our team of skilled professionals works tirelessly to ensure 
            you receive the highest standard of care. With cutting-edge diagnostic tools, advanced 
            medical facilities, and a patient-centric approach, we aim to empower you on your journey 
            to optimal health and happiness.
          </p>
          <p>
            <strong><i>Your Health, Our Priority...!</i></strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
