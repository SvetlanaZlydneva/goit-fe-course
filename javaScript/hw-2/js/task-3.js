const findLongestWord = function(string) {
  const array = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
