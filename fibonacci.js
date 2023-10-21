console.time('Execution Time');

function fib(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  return 'Huuuuuuge table foi lida';
}

let result = fib(1000000);
console.log(result);

console.timeEnd('Execution Time');