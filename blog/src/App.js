import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Routes } from "./constants/routes";



function App() {
 
  return (
    <div className="App" display="flex">
      
      <Router >
        <nav >
          <ul style={{display:"flex", listStyle:"none", }}>
            {Object.values(Routes).map((fn) => {
              const { url, text } = fn();

              return (
                <li >
                  
                  <Link to={url} style={{ textDecoration: 'none' }}>{text} </Link>
                </li>
              );
            })}
          </ul>

          <Switch>
            {Object.values(Routes).map((fn) => {
              const { url, component } = fn();

              return <Route exact path={url} component={component} />;
            })}
          </Switch>
        </nav>
      </Router>
    </div>
  );
}

export default App;
