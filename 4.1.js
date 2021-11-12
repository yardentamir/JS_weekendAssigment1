(function () {
  "use strict";

  const fibonacci = (n, signature) => {
    for (let i = 0; i <= n - 3; i++) {
      signature.push(signature[i] + signature[i + 1]);
    }
    return signature;
  };

  const fibonacci2 = (n, signature) => {
    return signature.reduce((perv, cur, i, signature) => {
      signature.push(perv + cur);
      const sum = perv + cur;
      return sum;
    });
  };

  console.log(fibonacci(5, [0, 1]));
  console.log(fibonacci(5, [1, 1]));

  console.log(fibonacci2(5, [1, 1]));
})();
