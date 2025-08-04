"use client";
// Updated to use Netlify Forms with static HTML detection file

import React, { useState } from "react";
import { useRouter } from "next/router";
import * as yup from "yup";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";
import styles from "../styles/components/ContactForm.module.css";

type Props = {};

export default function ContactForm({}: Props) {
  const {
    ContactForm_component,
    formGroup,
    formControl,
    name_errorMessage,
    email_errorMessage,
    message_errorMessage,
    messageTextarea_container,
    submitButtonContainer,
    submittedMessage,
    successSubmitMessage,
    errorSubmitMessage,
  } = styles;

  const router = useRouter();

  // Define validation schema with Yup
  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Must be a valid email").required("Required"),
    message: yup.string().required("Required"),
  });

  // submittedStatus can be '', 'success', or 'failed'
  const [submittedStatus, setSubmittedStatus] = useState<string>("");
  const [submittedFormMessage, setSubmittedFormMessage] = useState<string>("");

  // Netlify form encoding function
  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const displaySubmittedFormStatusMessage = () => {
    if (submittedStatus === "success") {
      return (
        <p className={`${successSubmitMessage} text-success mt-2 text-center`}>
          Message sent!
        </p>
      );
    } else if (submittedStatus === "failed") {
      return (
        <p className={`${errorSubmitMessage} text-danger mt-2`}>
          Oops, something went wrong! Please submit your message again.
        </p>
      );
    }
    return null;
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Submit to Netlify Forms
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "iknetlifyform",
              ...values,
            }),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Submission failed");
              }
              console.log("Form submitted successfully");
              setSubmittedFormMessage("Message sent! Thank you.");
              setSubmittedStatus("success");
              resetForm();
              setSubmitting(false);
              router.push("/");
            })
            .catch((error) => {
              console.error("Error:", error);
              setSubmittedFormMessage(
                "Oops, something went wrong! Please submit your message again."
              );
              setSubmittedStatus("failed");
              setSubmitting(false);
            });
        }}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className={ContactForm_component}
            name="iknetlifyform"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="iknetlifyform" />

            {/* Name Field */}
            <Form.Group className={formGroup}>
              <Form.Label>
                Name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name && touched.name}
                className={formControl}
              />
              <Form.Control.Feedback type="invalid">
                <div className={name_errorMessage}>{errors.name}</div>
              </Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group className={formGroup}>
              <Form.Label>
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email && touched.email}
                className={formControl}
              />
              <Form.Control.Feedback type="invalid">
                <div className={email_errorMessage}>{errors.email}</div>
              </Form.Control.Feedback>
            </Form.Group>

            {/* Message Field */}
            <Form.Group className={`${formGroup} ${messageTextarea_container}`}>
              <Form.Label>
                Message <span>*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message && touched.message}
                className={formControl}
              />
              <Form.Control.Feedback type="invalid">
                <div className={message_errorMessage}>{errors.message}</div>
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <div className={submitButtonContainer}>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>

      <div className={submittedMessage}>
        {displaySubmittedFormStatusMessage()}
      </div>
      <br />
    </>
  );
}
