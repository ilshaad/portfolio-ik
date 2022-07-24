import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <form
          name="iKportfolioContactForm"
          data-netlify="true"
          netlify-honeypot="bot-field"
          hidden
          data-netlify-recaptcha="true"
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          {/* <div data-netlify-recaptcha="true"></div> */}

          <textarea name="message"></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
