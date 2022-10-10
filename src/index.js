import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [
  <ul className="nav">
    <li className="nav-item">
      <a className="nav-link" href="http://google.com">
        Link to google.com
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="http://facebook.com">
        Link to facebook.com
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="http://amazon.com">
        Link to amazon.com
      </a>
    </li>
  </ul>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
