'use strict';

/* Spread - разварачивание
 * чтоб развернуть(добавить) масив внутри другого масива или функцыии
 * используемм ...nameArray
 * */

var usersName = ['bob', 'alan', 'nick'],
    usersLastName = ['junior', 'hobit'],
    users = [].concat(usersName, usersLastName);
console.log(users);

function add(a, s, d) {
  console.log(a + s + d);
}
var numbers = [2, 3, 5];
add.apply(undefined, numbers);