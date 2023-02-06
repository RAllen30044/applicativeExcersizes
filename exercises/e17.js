export function minBy(array, cb) {
  let min;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (!temp || cb(array[i]) < temp) {
      temp = cb(array[i]);
      min = array[i];
    }
  }
  return min;
}

export function maxBy(array, cb) {
  let max;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (!temp || cb(array[i]) > temp) {
      temp = cb(array[i]);
      max = array[i];
    }
  }
  return max;
}
