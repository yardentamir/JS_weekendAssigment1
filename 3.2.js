(function () {
  "use strict";

  const peopleOnTheBus = function (array) {
    let peopleOn = 0;
    let peopleOut = 0;
    for (let i = 0; i < array.length - 1; i++) {
      peopleOn += array[i][0];
      peopleOut += array[i][1];
    }
    return peopleOn - peopleOut;
  };

  console.log(
    peopleOnTheBus([
      [12, 0],
      [5, 4],
      [7, 10],
    ])
  );
})();
