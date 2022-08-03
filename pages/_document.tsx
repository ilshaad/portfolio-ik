import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@600&family=Edu+TAS+Beginner:wght@500&family=Mukta&display=swap"
          rel="stylesheet"
        /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@500&family=Mukta&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#004aad" />
        <meta name="msapplication-TileColor" content="#004aad" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <form
          name="iKportfolioContactForm"
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
