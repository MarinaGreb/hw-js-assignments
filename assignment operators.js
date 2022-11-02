function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) { //не передан второй аргемент
  x -= y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x /= y;
  return x; 
  //console.log("x"); данная строчка не будет выполняться т.к. выход происходит после return
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); //функция принимает два аргемента, третий лишний
console.log(getRestAfterDivision(7000, 3));

//Декримент и Инкремент

function increment(x) {
  return x--;
}
function increment2(x) {
  return --x;
}
function decrement(x) {
  return x++;
}
function decrement2(x) {
  return ++x;
}
console.log(`Результат работы функции с инкрементом x--: ${increment(5)}`);
console.log(`Результат работы функции с инкрементом --x: ${increment2(7)}`);
console.log(`Результат работы функции с декрементом x++: ${decrement(9)}`);
console.log(`Результат работы функции с декрементом ++x: ${decrement2(10)}`);
