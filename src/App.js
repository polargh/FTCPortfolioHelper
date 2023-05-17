import React from "react";
import Footer from "./Components/Footer"
import PortSearch from "./Components/PortSearch";
function App() {
  return (
      <><div className="flex flex-col h-screen justify-between">
        <PortSearch /> 
    </div><div>
        <Footer />


      </div></>
      
  );
  }

export default App;
