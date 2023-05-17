import React from "react";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import Port from "./Components/Port";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="flex flex-col h-screen justify-between">
          <Port />
          <Team />
        <Footer />
      </div>
  );
}

export default App;
