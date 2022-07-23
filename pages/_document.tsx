import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <form
          name="ikportfoliomessage"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
