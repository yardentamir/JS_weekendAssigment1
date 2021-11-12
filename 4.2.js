(function () {
  "use strict";

  const tribonacci = (n, signature) => {
    for (let i = 0; i < n - 3; i++) {
      signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
    }
    return signature;
  };

  console.log(tribonacci(10, [1, 1, 1]));
  console.log(tribonacci(10, [0, 0, 1]));
})();
