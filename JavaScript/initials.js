function initials(name) {
  let nameArr = name.split(" ");
  //   console.log(nameArr);
  let res = [];
  for (let i = 0; i < nameArr.length; i++) {
    res.push(nameArr[i][0].toUpperCase());
  }
  //   console.log(res);
  return res.join("");
}

console.log(initials("anna paschall"));
