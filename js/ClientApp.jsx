import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return React.createElement("div", null, React.createElement("h1", { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function MyFirstComponent() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      ce(MyTitle, { title: "My Second component", color: "YellowGreen" }),
      ce(MyTitle, { title: "Game of throns", color: "GreenYellow" }),
      ce(MyTitle, { title: "Silicon Valley", color: "peru" }),
      ce(MyTitle, { title: "Band of Brothers", color: "LimeGreen" }),
      ce(MyTitle)
    )
  );
};

MyTitle.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

MyTitle.defaultProps = {
  title: "My First component",
  color: "peru"
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"));
