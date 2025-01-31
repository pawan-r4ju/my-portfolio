import React from "react";
import Home from "./pages/Home";
import { Helmet } from "react-helmet"; // Add React Helmet for SEO optimization

function App() {
  return (
    <>
      {/* SEO Optimization with React Helmet */}
      <Helmet>
        <title>
          Pawan Raju - Software Developer, MERN Stack Expert & Python Developer
        </title>

        {/* Meta Description: Clear, concise, and includes your name */}
        <meta
          name="description"
          content="Pawan Raju's official portfolio. MERN Stack Developer, Python expert, and software engineer specializing in React.js, JavaScript, Node.js, and full-stack development. Discover projects and skills of Pawan Raju."
        />

        {/* Meta Keywords: Relevant keywords for SEO */}
        <meta
          name="keywords"
          content="pawan raju, software developer, mern stack, react.js, javascript, python, node.js, web developer, full stack developer, developer portfolio, pawan raju portfolio, pawan raju developer, pawan raju mern stack, full stack developer pawan raju, react.js developer pawan raju, pawan raju python expert, mern stack development pawan raju, pawan raju software engineer, pawan raju react developer, pawan raju javascript developer, pawan raju node.js developer, pawan raju web developer, full stack developer india pawan raju, pawan raju freelance developer, pawan raju web development portfolio, python web developer pawan raju, react.js portfolio pawan raju, pawan raju developer india, pawan raju javascript portfolio, mern stack developer india, pawan raju full stack portfolio, software development india pawan raju, pawan raju programming skills, pawan raju react.js expert, full stack developer pawan raju india, react developer india pawan raju, mern stack portfolio pawan raju, pawan raju freelance projects, python developer portfolio pawan raju, node.js developer pawan raju, pawan raju development portfolio, web development projects pawan raju, pawan raju code samples, full stack projects pawan raju, mern stack projects pawan raju, pawan raju developer skills, pawan raju software projects, developer portfolio pawan raju, python projects pawan raju, javascript projects pawan raju, pawan raju react portfolio, mern stack expert pawan raju, pawan raju python developer india, javascript full stack developer pawan raju, pawan raju technology stack, pawan raju career portfolio, pawan raju technical skills, react.js developer portfolio pawan raju, pawan raju github portfolio, pawan raju linkedin developer, pawan raju software solutions, full stack solutions pawan raju, pawan raju web application developer, mern stack application developer pawan raju, pawan raju node.js developer portfolio, pawan raju javascript web development, react development portfolio pawan raju, pawan raju full stack web development, pawan raju software engineer portfolio, node.js web developer portfolio pawan raju, python developer pawan raju india, pawan raju full stack javascript developer, pawan raju software development projects, pawan raju react.js expert portfolio, mern stack software developer pawan raju, full stack software solutions pawan raju, pawan raju web development portfolio india, pawan raju javascript frameworks, mern stack application development pawan raju, pawan raju python web projects, pawan raju react developer portfolio, full stack applications pawan raju, pawan raju tech projects, software development portfolio pawan raju, mern stack development portfolio, pawan raju javascript engineer, pawan raju web developer india, pawan raju full stack tech portfolio, pawan raju backend developer, pawan raju full stack javascript portfolio, react developer pawan raju, pawan raju python full stack developer, pawan raju tech skills portfolio, pawan raju javascript developer portfolio, pawan raju mern development, full stack developer india portfolio, pawan raju freelance web development, pawan raju frontend development portfolio, mern stack web development india, pawan raju web application projects, pawan raju software developer profile, python react developer portfolio pawan raju, full stack portfolio pawan raju india, javascript developer portfolio pawan raju, pawan raju web development skills, react.js developer projects pawan raju, pawan raju python engineer, pawan raju mern stack portfolio india, pawan raju web development career, pawan raju software engineering portfolio, Pawan Raju, Software Developer, MERN Stack, React.js, JavaScript, Python, Node.js, Web Developer, Full Stack Developer, Developer Portfolio, Pawan Raju Portfolio, Full Stack Developer India Pawan Raju, React Developer Pawan Raju, MERN Stack Development Pawan Raju, Pawan Raju Python Expert, React.js Portfolio Pawan Raju, JavaScript Developer Portfolio Pawan Raju, MERN Stack Portfolio Pawan Raju, Pawan Raju Freelance Developer, Full Stack Projects Pawan Raju, Pawan Raju Web Developer, Python Web Developer Pawan Raju, Pawan Raju Node.js Developer, Full Stack Software Solutions Pawan Raju, Pawan Raju Software Engineering, Web Application Developer Pawan Raju, Pawan Raju GitHub Portfolio, Pawan Raju LinkedIn Developer, Pawan Raju JavaScript Frameworks, Python Developer Portfolio Pawan Raju, Node.js Web Developer Pawan Raju, Pawan Raju React Portfolio, MERN Stack Application Developer Pawan Raju, Pawan Raju Freelance Projects, Full Stack Software Developer Pawan Raju, React.js Developer Portfolio Pawan Raju, JavaScript Web Development Pawan Raju, Full Stack Solutions Pawan Raju, Pawan Raju Developer Skills, Pawan Raju Software Projects, Developer Portfolio India Pawan Raju, Pawan Raju Full Stack JavaScript Developer, Pawan Raju Web Development Portfolio, MERN Stack Developer India, Pawan Raju Programming Skills, Pawan Raju Full Stack Web Development, Pawan Raju React.js Expert Portfolio, JavaScript Full Stack Developer Pawan Raju, Pawan Raju Web Development Skills, Pawan Raju Tech Projects, Python Projects Pawan Raju, Full Stack Applications Pawan Raju, Pawan Raju Node.js Projects, Full Stack Developer Projects Pawan Raju, Pawan Raju Backend Developer, Pawan Raju React Developer India, MERN Stack Software Developer Pawan Raju, Full Stack JavaScript Portfolio Pawan Raju, Pawan Raju Web Development Projects, Pawan Raju Technical Skills, React Developer Portfolio Pawan Raju, Pawan Raju Freelance Web Development, Web Development Projects Pawan Raju, Pawan Raju Full Stack Tech Portfolio, Software Development Portfolio Pawan Raju, Pawan Raju Node.js Development, React.js Developer Projects Pawan Raju, MERN Stack Web Development India, Pawan Raju JavaScript Projects, Pawan Raju Backend Development, Full Stack JavaScript Solutions Pawan Raju, Pawan Raju Frontend Developer, Pawan Raju Software Solutions, Python Developer India Pawan Raju, Full Stack Developer Pawan Raju India, Pawan Raju Programming Projects, Full Stack Software Developer Portfolio Pawan Raju, MERN Stack Developer Portfolio India, Pawan Raju Freelance React Developer, Pawan Raju Full Stack Applications, MERN Stack Web Development Portfolio Pawan Raju, Full Stack JavaScript Developer Portfolio, Pawan Raju Software Developer Profile, Full Stack React Developer Pawan Raju, React Web Developer Pawan Raju, MERN Stack Developer Projects Pawan Raju, Pawan Raju React Developer Projects, Pawan Raju Tech Skills Portfolio, Full Stack React.js Developer Pawan Raju, Software Engineer Portfolio Pawan Raju, Pawan Raju Full Stack Developer Profile, Pawan Raju JavaScript Engineer, Python React Developer Portfolio Pawan Raju, Pawan Raju Web Developer Projects, Full Stack Solutions Developer Pawan Raju"
        />
      </Helmet>

      <div className="bg-dark-200 min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
