(function () {
  "use strict";
  const repeatStr = (times, word) => {
    let newWord = "";
    for (let i = 0; i < times; i++) {
      newWord += word;
    }
    return newWord;
  };

  console.log(repeatStr(6, "I"));
  console.log(repeatStr(3, "Hello"));
})();
