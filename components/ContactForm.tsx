// contact form to netlify form submission
import React, { useState } from "react";
import { useRouter } from "next/router";

import * as yup from "yup";
import { Formik } from "formik";
import { Button, Form } from "react-bootstrap";

type Props = {};

export default function ContactForm({}: Props) {
  const router = useRouter();

  // handle validation from Yum
  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email(),
    message: yup.string().required("Required"),
  });

  // will let us know if user has submitted ticket, & if so, we can thank them & remove form
  // const [success, setSuccess] = useState(false);

  // status will be '' = nothing happend  / 'success' = successful submit / 'failed' = failed submite
  const [submittedStatus, setSubmittedStatus] = useState("");

  // display the form message when form has been submitted
  const displaySubmittedFormStatusMessage = () => {
    if (submittedStatus === "success") {
      return <p>Message sent! Thank you.</p>;
    } else if (submittedStatus === "failed") {
      return (
        <p>Oops, something went wrong! Please submit your message again.</p>
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
          console.log(values);
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
              "form-name": "iKportfolioContactForm",
              ...values,
            }),
          })
            .then(() => {
              // alert("Success!");
              // setSubmitting(false);

              // keep the route at home page because netlify will show its confirm submit form page instead
              router.push("/");

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
            name="iKportfolioContactForm"
            method="POST"
            action="/?success=true"
            // data-netlify="true"
            // netlify-honeypot="bot-field"
          >
            <input
              type="hidden"
              name="form-name"
              value="iKportfolioContactForm"
            />

            {/* name text box */}
            <Form.Group>
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
                placeholder="Enter your name"
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* email text box */}
            <Form.Group>
              <Form.Label>Email</Form.Label>

              {/* is a controlled form */}
              <Form.Control
                // as="textarea"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                placeholder="Enter your email"
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            {/* message textarea box */}
            <Form.Group>
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
                placeholder="Enter your message"
              />
              {/* will display to user their input in the textarea is invalid */}
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <div data-netlify-recaptcha="true"></div>

            <Button type="submit">submit message</Button>
            {/* <Button onClick={() => setShowCreateCommentBox(false)}>Cancel</Button> */}
          </Form>
        )}
      </Formik>

      {/* success or fail message whether the user successfully submitted form */}
      {/* {success && (
      <p style={{ color: "green" }}>Successfully submitted form!</p>
    )} */}

      {/* display message when form submitted */}
      {displaySubmittedFormStatusMessage()}
    </>
  );
}