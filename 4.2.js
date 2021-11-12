(function () {
  "use strict";

  const tribonacci = (n, s) => {
    let trib = [];
    s === 0 ? (trib = [0, 1, 1]) : (trib = [1, 1, 1]);

    for (let i = 0; i < n - 3; i++) {
      trib.push(trib[i] + trib[i + 1] + trib[i + 2]);
    }
    return trib.slice(0, n);
  };

  console.log(tribonacci(5, 0));
})();
