(function () {
  "use strict";

  const IS_FIRST_YEAR = true;
  const nb_year = (p0, percent, aug, p) => {
    if (IS_FIRST_YEAR) {
      IS_FIRST_YEAR = false;
      p0 + p0 * (percent / 100) + 50;
    } else p0 + p0 * (percent / 100) + 50;
  };

  console.log(nb_year(1500, 5, 100, 5000));
})();
