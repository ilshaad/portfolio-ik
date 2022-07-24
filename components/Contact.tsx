import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import styles from "../styles/components/Contact.module.scss";
import { useRouter } from "next/router";

type Props = {};

export default function Contact({}: Props) {
  const { Contact_component } = styles;
  const router = useRouter();

  // const [validated, setValidated] = useState(false);

  // handle validation from Yum
  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email(),
    message: yup.string().required("Required"),
  });

  // const handleSubmit = (event: any) => {
  //   const form = event.currentTarget as HTMLFormElement;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  // will let us know if user has submitted ticket, & if so, we can thank them & remove form
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (window.location.search.includes("success=true")) {
  //     setSuccess(true);
  //   }
  // }, []);

  // from netlify, which handles the submitted form values & url encode them
  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  // when ticket is submitted, we must use prevent default otherwise netlify will show its confirmation submit page
  const handleSubmit = (event: any) => {
    event.preventDefault();

    // values from the submitted inputs
    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const message = event.currentTarget.message.value;

    // post form data to netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "iKportfolioContactForm",
        name,
        email,
        message,
      }),
    })
      .then(() => {
        // keep the route at home page because netlify will show its confirm submit form page instead
        router.push("/");

        // set success true because now we know user has submitted form & we can confirm for them
        setSuccess(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
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
              setSuccess(true);
            })
            .catch((error) => {
              console.log("Error: Please Try Again!");
            });
        }}
        initialValues={{
          name: "ii",
          email: "i@am.coj",
          message: "whatsup",
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

            <Button type="submit">submit message</Button>
            {/* <Button onClick={() => setShowCreateCommentBox(false)}>Cancel</Button> */}
          </Form>
        )}
      </Formik>

      {/* <Form
        noValidate
        // validated={validated}
        onSubmit={handleSubmit}
        name="iKportfolioContactForm"
        method="POST"
        action="/?success=true"
      >
        <input type="hidden" name="form-name" value="iKportfolioContactForm" />

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              name="name"
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>email</Form.Label>
            <Form.Control
              // required
              name="email"
              type="email"
              placeholder="Last name"
              defaultValue="ot@mail.com"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>message</Form.Label>
            <Form.Control
              required
              name="message"
              as="textarea"
              // type="email"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit">Submit form</Button>
        </Row>
      </Form> */}
      {success && (
        <p style={{ color: "green" }}>Successfully submitted form!</p>
      )}
    </>
  );
}
