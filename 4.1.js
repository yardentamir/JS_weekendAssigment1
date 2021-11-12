(function () {
  "use strict";

  const fibonacci = (n, s) => {
    let fib = [];

    s === 0 ? (fib = [0, 1]) : (fib = [1, 1]);

    for (let i = 2; i <= n - 1; i++) {
      fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib;
  };

  console.log(fibonacci(10, 0));
})();
