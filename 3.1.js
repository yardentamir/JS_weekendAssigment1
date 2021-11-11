(function () {
  "use strict";

  const nb_year = (p0, percent, aug, p) => {
    let i = 0;
    for (; p0 <= p; i++) p0 = p0 + p0 * (percent / 100) + aug;
    return i;
  };

  console.log(nb_year(1500, 5, 100, 5000));
  console.log(nb_year(1500000, 2.5, 10000, 2000000));
})();
