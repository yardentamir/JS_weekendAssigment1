(function () {
  "use strict";

  const lengthOfLongestWords = (arr) => arr.sort((a, b) => b.length - a.length)[0].length;

  const LongestWords = (wordsArray) => {
    let arrOfLongestWords = [];
    const lengthLongest = lengthOfLongestWords(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) 
      if (lengthLongest === wordsArray[i].length) arrOfLongestWords.push(wordsArray[i]);
    return arrOfLongestWords;
}

  console.log(
    LongestWords([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ])
  );
})();
