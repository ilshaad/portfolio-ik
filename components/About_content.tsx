import styles from "../styles/components/About_content.module.css";

type Props = {};

export default function About_content({}: Props) {
  const { About_component } = styles;

  // const yearStartedCoding = 2018;
  const yearStartedCoding = 2019;

  const currentYear = new Date().getFullYear();

  const numberOfYearsCoding = currentYear - yearStartedCoding;

  return (
    <div className={`${About_component}`}>
      <h2>About me</h2>
      <p>My name is Ilshaad, I am from London, a humble, but ravenous coder.</p>
      <p>
        I am skilled at building beautiful, sleek, functional web applications
        using <span>JavaScript</span>, <span>React</span>,{" "}
        <span>TypeScript</span>, <span>Node.js</span> and more.
      </p>
      <p>
        I have been coding for {numberOfYearsCoding} years now and have become
        accustomed to best practices, optimization, and testing.
      </p>
      <p>
        Keeping up with the latest technologies, trends, and news is crucial to
        maintaining industry standards.
      </p>
      <p>
        I am devoted to becoming the best coder I can be because coding indulges
        me.
      </p>
      <br />
    </div>
  );
}

// My name is Ilshaad Kheerdali, a humble, but ravenous coder.
// I am skilled at building beautiful, sleek, fully functional web applications using JavaScript, React, TypeScript and Node.js.
// I have been coding for 4 years now and have become accustomed to best practices, optimization, and testing.
// Keeping up with the latest technologies, trends, and news is crucial to maintaining industry standards.
// I am devoted to becoming the best coder I can be because coding indulges me.
