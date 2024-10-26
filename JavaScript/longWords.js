const longWords = (words) => {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      res.push(words[i]);
    }
  }
  return res;
};

console.log(longWords(["bike", "skateboard", "coffee", "fart"]));
