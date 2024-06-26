import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom" 
import LandingPage from "./LandingPage"
import SecondPage from "./SecondPage"
import Chat from "./Chat"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/unstuck" element={<SecondPage />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
