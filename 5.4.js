(function () {
  "use strict";
  const toWeirdCase = (sentence) => {
    let newWord = sentence[0].toUpperCase();
    for (let i = 1; i < sentence.length; i++) {
      if (i % 2 == 0) newWord += sentence[i].toUpperCase();
      else newWord += sentence[i].toLowerCase();
    }
    return newWord;
  };

  console.log(toWeirdCase("String"));
  console.log(toWeirdCase("Weird string case"));
})();
