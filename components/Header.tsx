import React from "react";

type Props = { setSlidingCssClassName: Function };

export default function Header({ setSlidingCssClassName }: Props) {
  // setSlidingCssClassName("tesxtin");

  const goToSlide = (cssClassName: string) => {
    setSlidingCssClassName(cssClassName);
  };

  return (
    <header id="Header">
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
        </ul>
      </nav>
    </header>
  );
}
