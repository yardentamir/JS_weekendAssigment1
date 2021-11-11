(function () {
  "use strict";
  const centuryFromYear = (year) => {
    return Math.ceil(year / 100);
  };

  console.log(centuryFromYear(1705));
})();
