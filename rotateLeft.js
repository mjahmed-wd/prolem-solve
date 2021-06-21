const rotateLeft = (n, d, arr) => {
  const movement = d % n;
  const temp = arr.splice(0, movement);
  arr.push(...temp);
  return arr;
};
// console.log(rotateLeft(5, 2, [1, 2, 3, 4, 5]));