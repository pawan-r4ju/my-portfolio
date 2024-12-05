import React from 'react';
import Home from './pages/Home';
import { Helmet } from 'react-helmet'; // Add React Helmet for SEO optimization

function App() {
  return (
    <>
      {/* SEO Optimization with React Helmet */}
      <Helmet>
        <title>Pawan Raju - Portfolio</title>
        <meta name="description" content="Pawan Raju's Portfolio - A Developer " />
        <meta name="keywords" content="React, Python, JavaScript, MERN Stack, c++, Developer Portfolio" />
      </Helmet>

      <div className="bg-dark-200 min-h-screen">
        <Home />
      </div>
    </>
  );
}

export default App;
