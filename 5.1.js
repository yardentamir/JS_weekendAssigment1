(function () {
  "use strict";
  const cutString = (string) => {
    return string.slice(0, -1).slice(1);
  };

  console.log(cutString("hello"));
  console.log(cutString2("hello"));
})();
