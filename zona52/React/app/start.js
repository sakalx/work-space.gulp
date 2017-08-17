let jsx = React.createElement(
  "div",
  { className: "container" },
  React.createElement(
    "h1",
    null,
    "Kitty"
  ),
  React.createElement("img", { src: "https://sakals.000webhostapp.com/share/HelloKitty.png" }),
  React.createElement(
    "p",
    null,
    "Best App! 2017"
  )
);

ReactDOM.render(jsx, document.getElementById('root'));