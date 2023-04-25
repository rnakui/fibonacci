'use strict';
const memmo = new Map();
memmo.set(0, 0)
memmo.set(1, 1);

function fib(n) {
  if (memmo.has(n)) {
    return memmo.get(n)
  }

  const value = fib(n - 1) + fib(n - 2);
  memmo.set(n, value);
  return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
