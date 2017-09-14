import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import Indigo from "./indigo";

class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue" />
        <Link exact to="/blue">
          Blue only
        </Link>
        <Link to="/blue/indigo">Add indigo</Link>
        <br />
        <Route path="/blue/indigo" component={Indigo} />
      </div>
    );
  }
}

export default Blue;
