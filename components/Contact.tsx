import React from "react";

import styles from "../styles/components/Contact.module.scss";

type Props = {};

export default function Contact({}: Props) {
  const { Contact_component } = styles;

  return <div className={`${Contact_component} border border-3`}>Contact</div>;
}
