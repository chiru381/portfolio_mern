import React, { useState } from "react";
import axios from "axios";
import { Card, Link, Text, useTheme } from "stelios";
import { IconArrowRight } from "@tabler/icons-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactForm.css";
import styled from "styled-components";

const StyledPhoneInput = styled(PhoneInput)`
  width: 100% !important;
  .form-control {
    width: 100% !important;
    height: 40px !important;  /* Match Name input field */
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
  const _color =
    useTheme().theme.colorPalette.primary.appearance === "light"
      ? "black"
      : "white";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value, countryData) => {
    setFormData({
      ...formData,
      phone: value, // Full phone number with country code
      countryCode: countryData.dialCode, // Country code (e.g., "+1")
      countryName: countryData.name, // Full country name (e.g., "United States")
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      if (response.data.success) {
        setStatus("Message sent successfully!");
        alert("Thank you for contacting me");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          countryCode: "",
          countryName: "",
        });
      } else {
        setStatus("Failed to send the message.");
      }
    } catch (error) {
      setStatus("Error sending the message. Please try again later.");
    }
  };

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
        <Text size="large" color="primary">
          {props.title}
        </Text>{" "}
        <IconArrowRight />
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
              <label>
                <Text preciseColor={_color}>Name:</Text>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <Text preciseColor={_color}>Email:</Text>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <Text preciseColor={_color}>Phone Number:</Text>
              </label>
              <StyledPhoneInput
                country={"in"} // Default country
                value={formData.phone}
                onChange={(value, country) => handlePhoneChange(value, country)}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
              />
            </div>
            <div className="form-group">
              <label>
                <Text preciseColor={_color}>Message:</Text>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
            {status && (
              <p className={status.includes("success") ? "" : "error"}>
                {status}
              </p>
            )}
          </form>
        </div>
      </Card>
    </>
  );
};

export default ContactForm;
