let str = "javascript";

function ucFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

console.log(ucFirst(str));
