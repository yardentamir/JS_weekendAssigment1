(function () {
  "use strict";

  const lengthOfLongestWords = (arr) => arr.sort((a, b) => b.length - a.length)[0].length;

  // solution1
  const LongestWords = (str) => {
    const wordsArray = str.split(' ');
    let arrOfLongestWords = [];
    const lengthLongest = lengthOfLongestWords(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) 
      if (lengthLongest === wordsArray[i].length) arrOfLongestWords.push(wordsArray[i]);
    return arrOfLongestWords;
  }
  // solution2
  const LongestWords2 =  (str) => {
    const wordsArray = str.split(' ');
    const lengthLongest = lengthOfLongestWords(wordsArray);
    return wordsArray.filter(word => word.length === lengthLongest);
  }


  console.log(LongestWords("one two three four five six seven eight nine"));

  console.log(LongestWords2("one two three four five six seven eight nine"));
})();
