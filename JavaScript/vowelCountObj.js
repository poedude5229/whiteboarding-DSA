function vowelCountObj(word) {
  let vowels = "AEIOUaeiou";
  // let better = word.toLowerCase()
  let countObj = {};

  for (let i = 0; i < word.length; i++) {
    vowels.includes(word[i]) ? (countObj[word[i].toLowerCase()] ? countObj[word[i].toLowerCase()] += 1 : countObj[word[i]]) : {};
  }

  return countObj;

}

console.log(vowelCountObj("poop"));
