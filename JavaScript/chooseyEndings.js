const chooseyEndings = (words, suffix) => {
  let res = [];
  words.forEach((word) => {
    if (word.endsWith(suffix)) {
      res.push(word);
    }
  });
  return res;
};

console.log(
  chooseyEndings(["family", "hounds", "fly", "timidly", "farting"], "ly")
);
