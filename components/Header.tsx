import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header id="Header">
      <nav>
        <ul>
          <li>About</li>
          <li>Tech stack</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Download Resume</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>blog</li>
        </ul>
      </nav>
    </header>
  );
}
