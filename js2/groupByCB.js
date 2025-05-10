const groupBy = (arr, callBack) => {
  let resObj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = callBack(arr[i]);
    !resObj[key] ? resObj[key] = [arr[i]] : resObj[key].push(arr[i]);
  }

  return resObj;
};

console.log(groupBy([1.3, 2.1, 2.4], Math.floor));
