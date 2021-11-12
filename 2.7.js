(function () {
  "use strict";

  const basicOp = (operation, num1, num2) => {
    return eval(num1 + operation + num2);
  };

  console.log(basicOp("-", 15, 18));
  console.log(basicOp("*", 5, 5));
})();
