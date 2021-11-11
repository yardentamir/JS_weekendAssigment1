(function () {
  "use strict";
  const twoLowers = (arr) => {
    const firstLower = arr.splice(arr.indexOf(Math.min(...arr)), 1);
    const secondLower = arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return parseInt(firstLower) + parseInt(secondLower);
  };

  console.log(twoLowers([19, 5, 42, 2, 77]));
})();
