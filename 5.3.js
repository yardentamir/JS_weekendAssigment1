(function () {
  "use strict";

  //solution1
  const toCamelCase = (sentence) => {
    let wordsArr = sentence.split(/[^A-Za-z]/);
    let camelCaseWord = wordsArr[0];
    for (let i = 1; i < wordsArr.length; i++) {
      camelCaseWord += wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
    }
    return camelCaseWord;
  };

  //solution2
  const toCamelCase2 = (sentence) => {
    let wordsArr = sentence.split(/[^A-Za-z]/);
    return wordsArr[0] + wordsArr.slice(1)
    .map(word => word[0].toUpperCase() + word.slice(1,word.length)).join('');
  }

  console.log(toCamelCase("the-stealth-warrior"));
  console.log(toCamelCase("The_Stealth_Warrior"));
  
  console.log(toCamelCase2("the-stealth-warrior"));
  console.log(toCamelCase2("The_Stealth_Warrior"));
})();
