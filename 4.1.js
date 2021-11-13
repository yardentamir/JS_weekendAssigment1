(function () {
  "use strict";

  const fibonacci = (n, signature) => {
    for (let i = 0; i <= n - 3; i++) {
      signature.push(signature[i] + signature[i + 1]);
    }
    return signature;
  };

  console.log(fibonacci(5, [0, 1]));
  console.log(fibonacci(5, [1, 1]));
})();
