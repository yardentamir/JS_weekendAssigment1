(function () {
  "use strict";
  const summation = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
  };

  console.log(summation(8));
})();
