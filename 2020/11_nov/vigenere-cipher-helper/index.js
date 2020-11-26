function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      // Repeat key and cut off part of it to make it equal to the string
      const repeatedKey = key.repeat((str.length / key.length) + 1).slice(0, str.length);
      let newStr = "";
      for (let i = 0; i < str.length; i++) {
        if (!abc.includes(str[i])) {
          // Do not change characters that do no appear in provided alphabet
          newStr += str[i];
        } else {
          // Use vigenere cipher to encode character
          newStr += abc[(abc.indexOf(repeatedKey[i]) + abc.indexOf(str[i])) % abc.length];
        }
      }
      return newStr;
    };
    this.decode = function (str) {
      // Repeat key and cut off part of it to make it equal to the string
      const repeatedKey = key.repeat((str.length / key.length) + 1).slice(0, str.length);
      let newStr = "";
      for (let i = 0; i < str.length; i++) {
        if (!abc.includes(str[i])) {
          // Do not change characters that do no appear in provided alphabet
          newStr += str[i];
        } else {
          // Use vigenere cipher to decode character
          let decodedIndex = abc.indexOf(str[i]) - abc.indexOf(repeatedKey[i]);
          // If the index is negative, wrap it around
          if (decodedIndex < 0) decodedIndex = abc.length + decodedIndex;
          newStr += abc[decodedIndex];
        }
      }
      return newStr;
    };
  }
  