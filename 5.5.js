(function () {
  "use strict";

  const toInitials = (sentence) => {
    let initials = "";
    const wordsArr = sentence.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      initials += wordsArr[i][0];
      if (i !== wordsArr.length - 1) initials += ".";
    }
    return initials;
  };

  console.log(toInitials("Sam Harris"));
  console.log(toInitials("Patrick Feeney"));
})();
