import React, { useEffect } from "react";

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  // useEffect(() => {
  //   console.log(currentYear);
  // });

  return (
    <footer id="Footer" className={`text-center`}>
      &#169;{currentYear} ilshaad kheerdali
    </footer>
  );
}
