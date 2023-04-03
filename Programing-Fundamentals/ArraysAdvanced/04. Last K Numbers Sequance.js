function lastKNUmber(length, k) {
  let el = [1];
  for (let i = 1; i < length; i++) {
    let index = Math.max(el.length - k, 0);

    let start = el.slice(index);
    let sum = 0;
    for (const num of start) {
      sum += num;
    }
    el.push(sum);
  }
  console.log(el.join(" "));
}
lastKNUmber(6, 3);
