// iK THIS IS NEEDED FOR NETLIFY FUNCTIONS, BUT WHEN YOU START USING NETLIFY FORM AGAIN, THEN YOU CAN REMOVE THIS OR NULL THIS FILE.

// netlify/functions/submit-form.ts

import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

export const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  try {
    // Use a fallback in case event.body is null
    const data = JSON.parse(event.body ?? "{}");
    console.log("Form submission received:", data);

    // Here you can add additional processing, such as emailing or writing to a database

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Submission received" }),
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Submission error" }),
    };
  }
};
