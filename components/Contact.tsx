import React, { useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import styles from "../styles/components/Contact.module.scss";

type Props = {};

export default function Contact({}: Props) {
  const { Contact_component } = styles;

  useEffect(() => console.log(schema));

  // handle validation from Yum
  const schema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email(),
    message: yup.string().required("Required"),
  });

  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
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
          name="contact"
          method="POST"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

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
  );
}
