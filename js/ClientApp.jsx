const ce = React.createElement;

const MyTitle = function(props) {
  return React.createElement("div", null, React.createElement("h1", { style: { color: props.color } }, props.title));
};

const MyFirstComponent = function() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",

      null,
      ce(MyTitle, { title: "My Second component", color: "YellowGreen" }),
      ce(MyTitle, { title: "Game of throns", color: "GreenYellow" }),
      ce(MyTitle, { title: "Silicon Valley", color: "peru" }),
      ce(MyTitle, { title: "Band of Brothers", color: "LimeGreen" })
    )
  );
};

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"));
