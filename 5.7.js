(function () {
  "use strict";

  const lengthOfSmallestWords = (arr) => {
    return arr.sort((a, b) => a.length - b.length)[0].length;
  };

  console.log(
    lengthOfSmallestWords([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ])
  );
})();
