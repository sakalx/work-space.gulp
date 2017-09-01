"use strict";

var Hero = function Hero(props, count, counterUp) {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h1",
      null,
      props.title
    ),
    React.createElement(
      "div",
      null,
      "count"
    ),
    React.createElement("img", { src: props.imgUrl, onClick: counterUp })
  );
};

/*
class ClickButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {class: "off", label: "Нажми"};

    this.press = this.press.bind(this);
  }
  press(){
    var className = (this.state.class==="off")?"on":"off";
    this.setState({class: className});
  }
  render() {
    return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
  }
}

ReactDOM.render(
    <ClickButton />,
    document.getElementById("container")
);*/

/*
class Hero extends React.Component {
  constructor(propps) {
    super(propps);
    this.state = {};

    this.press = this.press.bind(this);
  }
  press() {

    this.setState({});
  }

  render() {
    return (
        <div className="container">
          <h1>{props.title}</h1>
          <div>1</div>
          <img src={props.imgUrl} onClick={handleClick}/>
        </div>
    )
  }

};
*/

ReactDOM.render(React.createElement(
  "div",
  null,
  React.createElement(Hero, {
    title: "Kitty",
    imgUrl: "https://sakals.000webhostapp.com/share/HelloKitty.png" }),
  React.createElement(Hero, {
    title: "Kitty2",
    imgUrl: "https://sakals.000webhostapp.com/share/HelloKitty2.png" })
), document.getElementById('root'));