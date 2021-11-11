(function () {
  "use strict";

  const binaryFunc = (binary) => {
    return parseInt(binary.join(""), 2);
  };

  console.log(binaryFunc([1, 0, 1, 1]));
})();
