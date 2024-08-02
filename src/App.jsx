// // import { useState } from 'react'

// import './App.css'
// import Logo from './components/Logo/Logo'
// import SignInForm from './components/SignInForm/SignInForm'
// // import SignUpForm from './components/SignUpForm/SignUpForm'

// function App() {
  

//   return (
//     <>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//       <Logo />
//       <SignInForm></SignInForm>
//     </>
//   )
// }

// export default App


//==============================================================================

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TrackerPage from './components/TrackerPage';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import FormUniversal from './components/FormUniversal/FormUniversal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormUniversal />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </Router>
  );
};

export default App;