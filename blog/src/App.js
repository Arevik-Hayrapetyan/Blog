import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from "..//src/components/Navbar"


function App() {
 
  return (
    <div className="App" display="flex">
      
      <Router >
        <Navbar/>
      </Router>
    </div>
  );
}

export default App;
