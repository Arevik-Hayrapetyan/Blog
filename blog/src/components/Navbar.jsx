import React from "react";
import { BrowserRouter as  Link, Route, Switch } from "react-router-dom";
import { Routes } from "../constants/routes";


export default function Navbar(){
    return(
        <nav >
          <ul style={{display:"flex", listStyle:"none", }}>
            {Object.values(Routes).map((fn) => {
              const { url, text } = fn();

              return (
                <li >
                  
                  <Link to={url} style={{ textDecoration: 'none', flex: 3 }}>{text} </Link>
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
    )
}