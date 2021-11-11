(function () {
  "use strict";

  const findUniq = (arr) => {
    const string = arr.join("");
    for (let i = 0; i < arr.length; i++) {
      let c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return;
  };

  console.log(findUniq([1, 1, 1, 2, 1, 1]));
})();
