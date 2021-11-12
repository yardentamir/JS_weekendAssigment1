(function () {
  "use strict";

  // solution1
  const maskify = (string) => {
    let newStr = "";
    for (let i = 0; i < string.length - 4; i++) {
      newStr += "#";
    }

    for (let i = 4; i > 0; i--) {
      newStr += string[string.length - i];
    }

    return newStr;
  };

  // solution2
  const maskify2 = function (string) {
    return string.slice(0, -4).replace(/./g, "#") + string.slice(-4);
  };

  console.log(maskify("4556364607935616"));
  console.log(maskify("Skippy"));
  console.log(maskify("Nananananananananananananananana Batman!"));

  console.log(maskify2("4556364607935616"));
  console.log(maskify2("Skippy"));
  console.log(maskify2("Nananananananananananananananana Batman!"));
})();
