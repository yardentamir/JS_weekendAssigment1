(function () {
  "use strict";

  //solution 1
  const peopleOnTheBus = (array) => {
    let peopleOn = 0;
    let peopleOut = 0;
    for (let i = 0; i < array.length; i++) {
      peopleOn += array[i][0];
      peopleOut += array[i][1];
    }
    return peopleOn - peopleOut;
  };

  // solution2
  const peopleOnTheBus2 = (array) => {
    return array.reduce(
      (previousValue, [inTheBus, outTheBus]) =>
        previousValue + inTheBus - outTheBus,
      0
    );
  };

  console.log(
    peopleOnTheBus([
      [11, 0],
      [5, 8],
      [7, 10],
    ])
  );

  console.log(
    peopleOnTheBus2([
      [12, 0],
      [10, 4],
      [7, 10],
    ])
  );
})();
