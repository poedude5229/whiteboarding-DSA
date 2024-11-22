const sentenceMaker = (...args) => {
  let stuff = [];
  for (let i = 0; i < args.length; i++) {
    stuff.push(args[i]);
  }
  stuff[stuff.length - 1] = `${stuff[stuff.length - 1]}!`;
  return stuff.join(" ");
  //   console.log(stuff.join(" "));
};

sentenceMaker("Hello", "World"); // 'Hello World!'
