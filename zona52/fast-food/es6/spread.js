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