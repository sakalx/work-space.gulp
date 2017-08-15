let img = React.createElement('img', { src: 'https://sakals.000webhostapp.com/share/HelloKitty.png' }),
  title = React.createElement('h1', null, 'Hello Kitty'),
  subTitlle = React.createElement('p',null, 'Best toy! 2017'),
  conteiner = React.createElement('section', { className: 'wrap'}, title, img, subTitlle);

ReactDOM.render(conteiner, document.getElementById('root'));