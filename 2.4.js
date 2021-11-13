(function () {
  "use strict";

  // solution1
  const findUniq = (arr) => {
    const string = arr.join("");
    for (let i = 0; i < arr.length; i++) {
      let c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return parseInt(c);
      }
    }
    return;
  };

  // solution2
  const findUniq2 = (arr) => {
    return arr.reduce((perv, cur, i, arr) => {
      if (perv !== cur) {
        if(perv === arr[i+1]) {
          arr.splice(i);
          return cur;
        }
      } else return perv;
    });
  };

  console.log(findUniq([1, 1, 1, 1, 2, 1]));
  console.log(findUniq2([2, 2, 2, 5, 2, 2]));
})();
