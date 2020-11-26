function isInteresting(number, awesomePhrases) {
    // Arrange the offsetted numbers
    const seq = [number + 1, number + 2, number - 1, number - 2];
    // Arrange the sequence of conditions to check
    const actions = [
      isFollowedByZeroes,
      areAllSameDigit,
      areIncrementingDigits,
      areDecrementingDigits,
      isPalindrome,
      (number) => awesomePhrases.includes(number),
    ];
    
    // If the number is greater than 100, check to see if it is an interesting number
    if (number >= 100) {
      for (let i = 0; i < actions.length; i++) {
        // If any of the conditions are met, then it's an interesting number
        if (actions[i](number)) return 2;
      }
    }
    
    for (let i = 0; i < actions.length; i++) {
      for (let j = 0; j < seq.length; j++) {
        // If any of the upcoming numbers are over 100 and have conditions met, it's an interesting number
        if (seq[j] >= 100 && actions[i](seq[j])) return 1;
      }
    }
    
    // No interesting numbers found
    return 0;
  }
  
  // Check that the number is followed by all zeroes
  function isFollowedByZeroes(number) {
    return String(number).substring(1).split("").every((digit) => digit === "0");
  }
  
  // Check that the number has all the same digits
  function areAllSameDigit(number) {
    const numStr = String(number);
    for (let i = 0; i < numStr.length - 1; i++) {
      if (numStr[i] !== numStr[i+1]) return false;
    }
    return true;
  }
  
  // Check that the digits are incrementing
  function areIncrementingDigits(number) {
    const numStr = String(number);
    for (let i = 0; i < numStr.length - 1; i++) {
      if (numStr[i] === "0") return false;
      if (numStr[i] != (numStr[i+1] - 1)
        && ((numStr[i] !== "9" || numStr[i+1] !== "0"))) return false;
    }
    return true;
  }
  
  // CHeck that the digits are decrementing
  function areDecrementingDigits(number) {
    const numStr = String(number);
    for (let i = 0; i < numStr.length - 1; i++) {
      if (numStr[i] === "0") return false;
      if ((numStr[i] - 1) != numStr[i+1]
        && ((numStr[i] !== "0" || numStr[i+1] !== "9"))) return false;
    }
    return true;
  }
  
  // Check that the number is a palindrome
  function isPalindrome(number) {
    const numStr = String(number);
    return numStr === numStr.split("").reverse().join("");
  }
  