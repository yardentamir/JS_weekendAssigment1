(function () {
  "use strict";
  // solution1
  const summation = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
  };
  // solution2
  const summation2 = (n) => {
    if (n < 2) return n;
    return n + summation2(n - 1);
  };

  console.log(summation(8));
  console.log(summation2(8));
})();
