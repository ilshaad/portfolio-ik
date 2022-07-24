import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import styles from "../styles/components/Contact.module.scss";

type Props = {};

export default function Contact({}: Props) {
  const [validated, setValidated] = useState(false);

  // const handleSubmit = (event: any) => {
  //   const form = event.currentTarget as HTMLFormElement;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <Form
      noValidate
      // validated={validated}
      // onSubmit={handleSubmit}
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
            required
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
    </Form>
  );
}
