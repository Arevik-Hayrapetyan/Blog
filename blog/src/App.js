import "./App.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Routes } from "./constants/routes";

function App() {
  return (
    <div className="">
      <Router >
        <nav>
          <ul>
            {Object.values(Routes).map((fn) => {
              const { url, text } = fn();

              return (
                <li>
                  <Link to={url}>{text} </Link>
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
