(function () {
  "use strict";
  const toCamelCase = (sentence) => {
    let wordsArr = sentence.split(/[^A-Za-z]/);
    let camelCaseWord = wordsArr[0];
    for (let i = 1; i < wordsArr.length; i++) {
      camelCaseWord += wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    }
    return camelCaseWord;
  };

  console.log(toCamelCase("the-stealth-warrior"));
  console.log(toCamelCase("The_Stealth_Warrior"));
})();
