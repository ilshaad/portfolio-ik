import React from "react";
import NavOffcanva from "./NavOffcanva";

type Props = {
  setSlidingCssClassName: Function;
};

export default function Header({ setSlidingCssClassName }: Props) {
  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  return (
    <header id="Header">
      {/* <NavOffcanva /> */}

      <nav>
        <ul>
          <li onClick={() => goToSlide("LandingSlideCss")}>Home</li>
          <li onClick={() => goToSlide("AboutSlideCss")}>About</li>
          <li onClick={() => goToSlide("TechstackSlideCss")}>Tech stack</li>
          <li onClick={() => goToSlide("ProjectsSlideCss")}>Projects</li>
          <li onClick={() => goToSlide("ContactSlideCss")}>Contact</li>
          <li>Download Resume</li>
          <li>LinkedIn</li>
          <li>Github</li>
          <li>blog</li>
          <li onClick={() => goToSlide("PlaygroundSlideCss")}>Playground</li>
        </ul>
      </nav>
    </header>
  );
}
