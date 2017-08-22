// деструктизацыя обэкта
//es5
const obj = {
  width: 100,
  height: 200,
  color: {
    black: '#000',
    white: '#fff'
  }
};
console.log(obj.width, obj.height, obj.color.black);

//es6
const {width = 0, height = 0, color: {black}} = obj;
console.log(width, height, black);


const getSize = ({width=0, height=1}) => console.log(width, height);

getSize({
  width: 20,
  height: 40
});
getSize({});

