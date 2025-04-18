import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <div style={{ width: '100%', height: 'auto', overflowX: 'hidden' }}>
      <Hero
        title={"Schedule Your Appointment | KK Wellness Pavilion"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </div>
  );
};

export default Appointment;