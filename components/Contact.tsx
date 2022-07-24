import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";

import styles from "../styles/components/Contact.module.scss";
import { useRouter } from "next/router";

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

  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (window.location.search.includes("success=true")) {
  //     setSuccess(true);
  //   }
  // }, []);

  const router = useRouter();

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const name = event.currentTarget.name.value;
    const email = event.currentTarget.email.value;
    const message = event.currentTarget.message.value;

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
        router.push("/");
        setSuccess(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <Form
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
      {success && (
        <p style={{ color: "green" }}>Successfully submitted form!</p>
      )}
    </>
  );
}
