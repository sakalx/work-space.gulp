const Hero = (props) => {
  console.log(props);
  return (
      <div className="container">
        <h1>{props.title}</h1>
        <img src={props.imgUrl}/>
        <p>{props.subTitle}</p>
      </div>
  );
};

ReactDOM.render(
    <div>
      <Hero
          title="Kitty"
          imgUrl="https://sakals.000webhostapp.com/share/HelloKitty.png"
          subTitle="Best App! 2017"/>
      <Hero
          title="Kitty2"
          imgUrl="https://sakals.000webhostapp.com/share/HelloKitty2.png"
          subTitle="Best App! 2017"/>
    </div>,
    document.getElementById('root'));
