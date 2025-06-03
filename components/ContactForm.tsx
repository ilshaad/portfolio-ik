"use client";

// contact form to netlify form submission
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

  // handle validation from Yum
  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Must be a valid email"),
    message: yup.string().required("Required"),
  });

  // will let us know if user has submitted ticket, & if so, we can thank them & remove form
  // const [success, setSuccess] = useState(false);

  // status will be '' = nothing happend  / 'success' = successful submit / 'failed' = failed submite
  const [submittedStatus, setSubmittedStatus] = useState("");

  // display the form message when form has been submitted
  const displaySubmittedFormStatusMessage = () => {
    if (submittedStatus === "success") {
      //   return true;
      return (
        <p className={`${successSubmitMessage} text-success mt-2 text-center`}>
          Message sent!
        </p>
      );
    } else if (submittedStatus === "failed") {
      // return false;
      return (
        <p className={`${errorSubmitMessage} text-danger mt-2`}>
          Oops, something went wrong! Please submit your message again.
        </p>
      );
    }

    return "";
  };

  // display message below form when user sumbit form, success or fail message
  const [submittedFormMessage, setSubmittedFormMessage] = useState("");

  // from netlify, which handles the submitted form values & url encode them
  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // console.log(values);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "iknetlifyform",
              ...values,
            }),
          })
            .then(() => {
              // alert("Success!");
              // setSubmitting(false);

              // keep the route at home page because netlify will show its confirm submit form page instead
              // ! zzzzzzzzz/
              // router.push("/");
              router.push("/?success=true");

              // set success true because now we know user has submitted form & we can confirm for them
              // setSuccess(true);

              setSubmittedFormMessage("Message sent! Thank you.");

              setSubmittedStatus("success");

              resetForm();
            })
            .catch((error) => {
              // console.log("Error: form did not go through Please Try Again!");
              setSubmittedFormMessage(
                "Oops, something went wrong! Please submit your message again."
              );

              setSubmittedStatus("failed");
            });
        }}
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          // return form jsx component
          <Form
            noValidate
            onSubmit={handleSubmit}
            method="POST"
            action="/?success=true"
            className={`${ContactForm_component}`}
            name="iknetlifyform"
            data-netlify="true"
            // netlify-honeypot="bot-field"
            // data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="iknetlifyform" />

            {/* name text box */}
            <Form.Group className={`${formGroup}`}>
              <Form.Label>
                Name <span>*</span>
              </Form.Label>
              {/* is a controlled form */}
              <Form.Control
                // as="textarea"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
                // placeholder="Enter your name"
                className={`${formControl}`}
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                <div className={`${name_errorMessage}`}>{errors.name}</div>
              </Form.Control.Feedback>
            </Form.Group>

            {/* email text box */}
            <Form.Group className={`${formGroup}`}>
              <Form.Label>Email</Form.Label>

              {/* is a controlled form */}
              <Form.Control
                // as="textarea"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                // placeholder="Enter your email"
                className={`${formControl}`}
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                <div className={`${email_errorMessage}`}>{errors.email}</div>
              </Form.Control.Feedback>
            </Form.Group>

            {/* message textarea box */}
            <Form.Group className={`${formGroup} ${messageTextarea_container}`}>
              <Form.Label>
                Message <span>*</span>
              </Form.Label>
              {/* is a controlled form */}
              <Form.Control
                as="textarea"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
                // placeholder="Enter your message"
                className={`${formControl}`}
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                <div className={`${message_errorMessage}`}>
                  {errors.message}
                </div>
              </Form.Control.Feedback>
            </Form.Group>

            <div className={`${submitButtonContainer}`}>
              <Button type="submit">Submit</Button>
              {/* <Button onClick={() => setShowCreateCommentBox(false)}>Cancel</Button> */}
            </div>
          </Form>
        )}
      </Formik>

      {/* success or fail message whether the user successfully submitted form */}
      {/* {success && (
      <p style={{ color: "green" }}>Successfully submitted form!</p>
    )} */}

      {/* display message when form submitted */}
      <div className={`${submittedMessage}`}>
        {displaySubmittedFormStatusMessage()}

        {/* {(() => {
          if (displaySubmittedFormStatusMessage() === true) {
            return (
              <p className={`${successSubmitMessage} text-success`}>
                Message sent! Thank you.
              </p>
            );
          } else if (displaySubmittedFormStatusMessage() === false) {
            return (
              <p className={`${errorSubmitMessage}`}>
                Oops, something went wrong! Please submit your message again.
              </p>
            );
          }
        })()} */}
      </div>

      <br />
    </>
  );
}
