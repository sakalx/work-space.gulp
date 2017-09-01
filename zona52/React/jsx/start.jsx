
const Hero = (props) => {
return (
      <div className="container">
        <h1>{props.title}</h1>
        <div>count</div>
        <img src={props.imgUrl}/>
      </div>
  )};

ReactDOM.render(
    <div>
      <Hero
          title="Kitty"
          imgUrl="https://sakals.000webhostapp.com/share/HelloKitty.png"/>
      <Hero
          title="Kitty2"
          imgUrl="https://sakals.000webhostapp.com/share/HelloKitty2.png"/>
    </div>,
    document.getElementById('root'));
