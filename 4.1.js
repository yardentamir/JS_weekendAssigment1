(function () {
  "use strict";

  const fibonacci = (n, s) => {
    let fib = [],
      pos = 2;

    s === 0 ? (fib = [0, 1]) : (fib = [1, 1]);

    for (s = 3; s <= n; s++) {
      fib[pos] = fib[pos - 2] + fib[pos - 1];
      pos++;
    }
    return fib;
  };

  console.log(fibonacci(5, 1));
})();
