(function () {
  "use strict";
 
  // solution1
  const lengthOfSmallestWords = (arr) => arr.split(' ').sort((a, b) => a.length - b.length)[0].length;

    // solution2
  const lengthOfSmallestWords2 = (str) => {
    const arr = str.split(' ');
    let smallest = arr[0].length;
    for (let i = 1; i < arr.length-1;i++)
        if(smallest > arr[i].length) smallest = arr[i].length;
    return smallest;
  }

  console.log(lengthOfSmallestWords("one two three four five six seven eight nine"));

  console.log(lengthOfSmallestWords2("one two three four five six seven eight nine"));
})();
