import { Badge } from "react-bootstrap";

import styles from "../styles/components/Footer.module.css";

type Props = {};

export default function Footer({}: Props) {
  const { Footer_component, footerBadge } = styles;

  const currentYear = new Date().getFullYear();

  return (
    <footer id="Footer" className={`${Footer_component} text-center`}>
      <Badge className={`${footerBadge}`}>
        &#169;{currentYear} Ilshaad Kheerdali
      </Badge>
    </footer>
  );
}
