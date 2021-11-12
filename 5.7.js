(function () {
  "use strict";

  const lengthOfSmallestWords = (arr) => {
    return arr.sort((a, b) => a.length - b.length)[0].length;
  };

  const smallestWords = (wordsArray) => {
    let arrOfSmallestWords = [];
    const lengthSmallest = lengthOfSmallestWords(wordsArray);
    for (let i = 0; i < wordsArray.length; i++) {
      if (lengthSmallest === wordsArray[i].length)
        arrOfSmallestWords.push(wordsArray[i]);
    }
    return arrOfSmallestWords;
  };

  console.log(smallestWords(["one", "two", "three", "six", "seven", "ttt"]));
})();
