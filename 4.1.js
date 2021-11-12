(function () {
  "use strict";

  const fibonacci = (n, s) => {
    let fib = [],
      pos = 2;
    if (s === 0) {
      fib = [0, 1];
      s += 3;
    } else {
      fib = [1, 1];
      s += 2;
    }

    for (; s <= n; s++) {
      fib[pos] = fib[pos - 2] + fib[pos - 1];
      pos++;
    }
    return fib;
  };

  console.log(fibonacci(10, 0));
})();
