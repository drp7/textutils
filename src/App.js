import React, { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [bluetheme, setbluetheme] = useState("light");
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
          <Navbar
            title="TextUtils"
            mode={bluetheme}
            toggle={() => {
              if (bluetheme === "light") {
                setbluetheme("dark");
                document.body.style.backgroundColor = "#264653";
                document.body.style.color = "white";
              } else {
                setbluetheme("light");
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
              }
            }}
          />
        </header>
        <main>
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={<Textform heading="Enter Your text " mode={bluetheme} />}
               
              
            /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
