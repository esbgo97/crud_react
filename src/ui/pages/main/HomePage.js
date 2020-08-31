import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Typography variant="h2">React Demo App</Typography>
      <Typography variant="subtitle1">
        By{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/esbgo97">
          @Esbgo97
        </a>
      </Typography>
      <Typography variant="body1">
        This projects shows my skills and knowledge using{" "}
        <a href="https://es.reactjs.org/">React JS</a>
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h5">Packages</Typography>
      <ul>
        <li>
          <a href="https://es.redux.js.org/" rel="noopener noreferrer">Redux</a>
        </li>
        <li>
          <a href="https://reactrouter.com/" rel="noopener noreferrer">Router</a>
        </li>
        <li>
          <a href="https://material-ui.com/" rel="noopener noreferrer">Material UI</a>
        </li>
        <li>
          <a href="https://momentjs.com/" rel="noopener noreferrer">Moment</a>
        </li>
        <li>
          <a href="https://www.firebase.com/" rel="noopener noreferrer">Firebase</a>
        </li>
      </ul>

      <Typography variant="h5">Pages</Typography>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/User">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
