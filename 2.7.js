(function () {
  "use strict";

  const basicOp = (operation, num1, num2) => {
    return eval(num1.toString() + operation + num2.toString());
  };

  console.log(basicOp("-", 15, 18));
  console.log(basicOp("*", 5, 5));
})();
