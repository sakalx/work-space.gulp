"use strict";

var Hero = function Hero(props) {
    console.log(props);
    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement("img", { src: props.imgUrl }),
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