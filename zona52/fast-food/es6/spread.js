/* Spread - разварачивание
 * чтоб развернуть(добавить) масив внутри другого масива или функцыии
 * используемм ...nameArray
 * */

let usersName = ['bob', 'alan', 'nick'],
    usersLastName = ['junior', 'hobit'],
    users = [...usersName, ...usersLastName];
console.log(users);

function add(a, s, d) {
  console.log(a+s+d);
}
let numbers = [2, 3, 5];
add(...numbers);




const getText = (first, ...args) => {

  console.log(first, args);
  console.log(args[1]);
};
getText('a', 'f', 'd');


//concat two array
const arr1 = [2, 4],
  arr2 =['d', 'f'];

arr1.push(...arr2);
console.log(arr1);

const arg = ['a', 'c', 'd'];

const leter = (a, b, c) => console.log(a, b, c);
leter(...arg);

