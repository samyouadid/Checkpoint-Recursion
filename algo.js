function isPalindrome(word) {
    if (word.length <= 1) {
      return true;
    }
  
    if (word[0] !== word[word.length - 1]) {
      return false;
    }
  
    const updatedWord = word.substring(1, word.length - 1);
    return isPalindrome(updatedWord);
  }
  
 
  console.log(isPalindrome("radar")); 
  console.log(isPalindrome("hello")); 
  