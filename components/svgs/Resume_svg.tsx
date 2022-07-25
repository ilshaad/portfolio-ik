import Link from "next/link";
import React from "react";

type Props = { classProps?: string };

export default function Resume_svg({ classProps }: Props) {
  return (
    <Link
      href={"https://www.dropbox.com/s/lnpk43bw4bj7tjk/testing%20cv.pdf?dl=0"}
      passHref
    >
      <a download target={"_blank"}>
        {/* <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={`${classProps}`}
        >
          <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
        </svg> */}

        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          xmlSpace="preserve"
          className={`${classProps}`}
          fill="currentColor"
        >
          <path
            // className={`${classProps}`}
            d="M83.333 10H16.667C13.001 10 10 13.001 10 16.667v66.667C10 86.999 13.001 90 16.667 90h66.667C86.999 90 90 86.999 90 83.333V16.667C90 13.001 86.999 10 83.333 10zM26.667 36.667c0-5.521 4.479-10 10-10s10 4.479 10 10H40a3.333 3.333 0 1 0-6.666 0v13.33a3.334 3.334 0 0 0 6.666 0h6.667c0 5.524-4.479 10-10 10s-10-4.477-10-10v-13.33zm46.666 36.666H26.667v-6.666h46.667v6.666zM65 60h-6.667L50 26.667h6.872l4.795 19.18 4.795-19.18h6.871L65 60z"
          />
        </svg>
      </a>
    </Link>
  );
}
