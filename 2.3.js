(function () {
  "use strict";

  const findNextSquare = (square) => {
    if (Number.isInteger(Math.sqrt(square)))
      return (Math.sqrt(square) + 1) ** 2;
    else return -1;
  };

  console.log(findNextSquare(625));
})();
