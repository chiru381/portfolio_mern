import React, { useState } from "react";
import axios from "axios";
import { Card, Link, Text, useTheme } from "stelios";
import { IconArrowRight } from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactForm.css";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledPhoneInput = styled(PhoneInput)`
  width: 100% !important;
  .form-control {
    width: 100% !important;
    height: 40px !important;
    font-size: 16px;
  }
`;

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    countryCode: "",
    countryName: "",
  });

  const [status, setStatus] = useState("");
  const _color = useTheme().theme.colorPalette.primary.appearance === "light" ? "black" : "white";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      phone: value,
      countryCode: countryData.dialCode,
      countryName: countryData.name,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast.error("Please fill all fields before submitting!");
      return;
    }

    try {
      const response = await axios.post(
        "https://portfolio-8ir6.onrender.com/api/contact",
        formData
      );
      if (response.data.success) {
        toast.success("Thank you for reaching out! I will get back to you soon.");
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          countryCode: "",
          countryName: "",
        });
      } else {
        toast.error("Failed to send the message.");
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      toast.error("Error sending the message. Please try again later.");
      setStatus("Error sending the message. Please try again later.");
    }
  };

  // Check if all fields are filled
  const isFormValid = formData.name && formData.email && formData.phone && formData.message;

  return (
    <>
      <Link
        to="/skills"
        color="primary"
        size="large"
        className="contactTitle"
        style={{
          marginTop: "1rem",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Text size="large" color="primary">{props.title}</Text> <IconArrowRight />
      </Link>
      <Card
        animate="fade-in"
        variant="neumorph"
        color="primary"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.75rem",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label><Text preciseColor={_color}>Name:</Text></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label><Text preciseColor={_color}>Email:</Text></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label><Text preciseColor={_color}>Phone Number:</Text></label>
              <StyledPhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(value, country) => handlePhoneChange(value, country)}
                inputProps={{ name: "phone", required: true }}
              />
            </div>
            <div className="form-group">
              <label><Text preciseColor={_color}>Message:</Text></label>
              <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            
            {/* Submit button only appears when all fields are filled */}
            {isFormValid && (
              <button type="submit">Submit</button>
            )}

            <ToastContainer />
            {status && <p className={status.includes("success") ? "" : "error"}>{status}</p>}
          </form>
        </div>
      </Card>
    </>
  );
};

export default ContactForm;
