const palindromes = function (text) {
  let textReversed = "";
  text = text.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters and whitespaces
  text = text.toLowerCase(); // Upper case and lower case equality
  for (char of text) {
    textReversed = char + textReversed;
  }
  return text === textReversed;
};

// Do not edit below this line
module.exports = palindromes;
