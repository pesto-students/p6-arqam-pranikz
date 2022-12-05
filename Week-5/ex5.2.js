const isVowel = (char) => {
  return "aeiou".includes(char);
};

const vowelCount = (str) => {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerCaseChar = char.toLowerCase();
    if (isVowel(lowerCaseChar)) {
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
};

console.log(
  vowelCount(
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough"
  )
);
