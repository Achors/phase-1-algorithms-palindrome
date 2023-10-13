function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("");

}

/* 
  Add your pseudocode here
  
1. Convert the word into an array of individual characters.
2. Rearrange the order of the array elements.
3. Reconstruct the array into a string.
4. Check if the original word matches the reversed word.
*/

/*
  Add written explanation of your solution here
  Provide your written explanation of the solution below:

1. In this solution, I employed several built-in methods, including split, reverse, and join, to carry out the word reversal process. 
2. Subsequently, I conducted a comparison between the initial word and its reversed counterpart. 
3. If the two versions match, it indicates that the word is a palindrome. 
4. Conversely, if they do not match, the word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
