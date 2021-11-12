(function () {
  "use strict";

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

  console.log(maskify("4556364607935616"));
  console.log(maskify("Skippy"));
  console.log(maskify("Nananananananananananananananana Batman!"));
})();
