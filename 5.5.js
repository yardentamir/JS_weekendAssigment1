(function () {
  "use strict";

  // solution1
  const toInitials = (sentence) => {
    let initials = "";
    const wordsArr = sentence.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      initials += wordsArr[i][0];
      if (i !== wordsArr.length - 1) initials += ".";
    }
    return initials;
  };

// solution2
  const toInitials2 = (sentence) => {
    return sentence.split(" ").map(x => x[0]).join(".");
  }

  console.log(toInitials("Sam Harris"));
  console.log(toInitials("Patrick Feeney"));

  console.log(toInitials2("Sam Harris"));
  console.log(toInitials2("Patrick Feeney"));
})();
