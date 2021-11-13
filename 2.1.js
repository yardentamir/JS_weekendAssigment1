(function () {
  "use strict";
  // solution1
  const twoLowers = (arr) => {
    const firstLower = arr.splice(arr.indexOf(Math.min(...arr)), 1);
    const secondLower = Math.min(...arr);
    return parseInt(firstLower) + secondLower;
  };
  // solution2
  const twoLowers2 = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
  }

  console.log(twoLowers([19, 5, 42, 2, 77]));
  console.log(twoLowers2([19, 5, 42, 2, 77]));
})();
