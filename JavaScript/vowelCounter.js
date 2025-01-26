function vowelCounter(word) {
  let vowels = "aeiouAEOIU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    vowels.includes(word[i]) ? (count += 1) : {};
  }
  return count;
}

console.log(vowelCounter("vwls"));
