let web = ['HTML', 'CSS', 'JavaScript'];

//распаковаем масив в наши переменые []
let [main, decor, action] = web;
//let [main, decor, action] = ['HTML', 'CSS', 'JavaScript'];
console.log (main, decor, action);

let score = [3, 4, 5];
let [low, mid, hig, higher] = score;
console.log(low, mid, hig, higher);


//можем игнорировать некотырые даные с масива но нудно оставлять запятые
let score2 = [3, 4, 5];
let [low2, , hig2] = score2;
console.log(low2, hig2);

//можем также использовать синтаксиси оставшиешся параметры три точки ...
let score3 = [3, 4, 5];
let [low3, ...rest] = score3;
console.log(low3, rest);

//можем также использовать значениепо умолчанию
let score4 = [3, 4];
let [low4, mid4, hig4 = 10] = score4;
console.log(low4, mid4, hig4);

//также можно когда масив содержит другой масив, для распаковки вложеного
// масива используем ещо раз скобки []
let score5 = [3, 4, [0, 1]];
let [low5, mid5, [yes, no]] = score5;
console.log(low5, mid5, yes, no);

//также распаковку масива можна передавать в параметр функцыи
// функцыя получает масив и мы его распаковыеваем
let computeScore = ([low, mid]) => console.log(low, mid);

//вызиваем функцыю в качестве аргумента отправляем масив
computeScore([3, 4]);

//таже можна
let getScore = () => [3, 4, 5];
let scores = getScore();
console.log(scores);
let [low6, mid6, hig6] = getScore();
console.log(low6, mid6, hig6);
