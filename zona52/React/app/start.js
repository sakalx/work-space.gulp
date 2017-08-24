"use strict";

var Greeting = function Greeting(name) {
  return console.log("Hello I'm " + name);
};

var Hero = function Hero(props) {
  var SayHello = function SayHello() {
    return Greeting(props.title);
  };
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement("img", { onClick: SayHello, src: props.imgUrl }),
    React.createElement(
      "p",
      null,
      props.subTitle
    )
  );
};

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Hero, {
    title: "Kitty",
    imgUrl: "https://sakals.000webhostapp.com/share/HelloKitty.png",
    subTitle: "Best App! 2017" }),
  React.createElement(Hero, {
    title: "Kitty2",
    imgUrl: "https://sakals.000webhostapp.com/share/HelloKitty2.png",
    subTitle: "Best App! 2017" })
), document.getElementById('root'));