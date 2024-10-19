/*
Write a function doubleSequence that accepts a base and a length as arguments.
 The function should return an array representing a sequence that contains "length" elements.
  The first element of the sequence is always the "base", the subsequent elements can be generated
   by doubling the previous element of the sequence.
*/

function doubleSequence(base, length) {
  if (length === 0) {
    return [];
  }
  let arr = [base];
  while (arr.length < length) {
    let last = arr[arr.length - 1];
    let next = last * 2;
    arr.push(next);
  }
  return arr;
}

console.log(doubleSequence(3, 5));
