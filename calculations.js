function increaseBalance(x, y) {
  x = x + y;
  return x;
}

function decreaseBalance(x, y) {
  //не передан второй аргемент, форматирование тела функции
  x = x - y;
  return x;
}

function divideBalanceByAccounts(x, y) {
  x = x / y; //можно добавить новую переменную, чтобы не перезаписывать значение переменной х (зависит от назначения функции)
  //console.log("x") вывод строки, содержащей только символ х
  console.log(`x = ${x}`);
  return x;
  //console.log("x"); данная строчка не будет выполняться т.к. выход происходит после return, перенесена выше return
}

function getRestAfterDivision(x, y) {
  // x = x % y; перезапишет переменную х, правильнее завести новую переменную
  let rest = x % y;
  return rest;
}

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2)); //функция принимает два аргемента, третий лишний, либо должна быть изменена функция
console.log(getRestAfterDivision(7000, 3));
