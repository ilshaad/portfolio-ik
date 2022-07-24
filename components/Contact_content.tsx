import styles from "../styles/components/Contact.module.scss";
import ContactForm from "./ContactForm";
import Github_svg from "./svgs/Github_svg";
import LinkedIn_svg from "./svgs/LinkedIn_svg";
import Resume_svg from "./svgs/Resume_svg";

type Props = {};

export default function Contact_content({}: Props) {
  const { Contact_component } = styles;

  return (
    <>
      <h2>Contact me</h2>

      <p>
        Interested in working together, than contact me with the available
        options below. And I will get back to you ASAP.
      </p>

      <div>
        <LinkedIn_svg /> <Github_svg /> <Resume_svg />
      </div>

      <ContactForm />
    </>
  );
}
