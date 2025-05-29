import Link from "next/link";
import { JSX } from "react";

type Props = { svgElement: JSX.Element };

export default function Resume_svg_anchor({ svgElement }: Props) {
  return (
    <Link
      href={"https://www.dropbox.com/s/zurxdj58vwwdk26/ilshaad-cv.pdf?dl=0"}
      passHref
      legacyBehavior
    >
      <a download target={"_blank"}>
        {svgElement}

        {/* <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          xmlSpace="preserve"
          className={`${classProps}`}
          fill="currentColor"
          viewBox="0 0 100 100"
        >
          <path
            // className={`${classProps}`}
            d="M83.333 10H16.667C13.001 10 10 13.001 10 16.667v66.667C10 86.999 13.001 90 16.667 90h66.667C86.999 90 90 86.999 90 83.333V16.667C90 13.001 86.999 10 83.333 10zM26.667 36.667c0-5.521 4.479-10 10-10s10 4.479 10 10H40a3.333 3.333 0 1 0-6.666 0v13.33a3.334 3.334 0 0 0 6.666 0h6.667c0 5.524-4.479 10-10 10s-10-4.477-10-10v-13.33zm46.666 36.666H26.667v-6.666h46.667v6.666zM65 60h-6.667L50 26.667h6.872l4.795 19.18 4.795-19.18h6.871L65 60z"
          />
        </svg> */}
      </a>
    </Link>
  );
}
