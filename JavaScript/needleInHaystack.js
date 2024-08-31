const needleInHaystack = (string, needle) => {
  if (string.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < string.length - needle.length; i++) {
    if (string.substring(i, i + needle.length) == needle) {
      return i;
    }
  }
  return -1;
};

console.log(needleInHaystack("saddumbbutsad", "dumb"));
