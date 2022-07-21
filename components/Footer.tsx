import React, { useEffect } from "react";

type Props = {};

export default function Footer({}: Props) {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    console.log(currentYear);
  });

  return <div id="Footer">&#169;2022 ilshaad kheerdali</div>;
}
