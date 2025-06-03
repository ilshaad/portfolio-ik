// pages/test-form.tsx
export default function TestForm() {
  return (
    <div>
      <h1>Test Netlify Form Submission</h1>
      <form name="contact" method="POST" data-netlify="true">
        {/* Hidden input for Netlify to work */}
        <input type="hidden" name="form-name" value="contact" />

        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" />
        </label>
        <br />

        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" />
        </label>
        <br />

        <label>
          Message:
          <textarea name="message" placeholder="Your Message"></textarea>
        </label>
        <br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
