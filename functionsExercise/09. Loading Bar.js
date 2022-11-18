function loadingBar(num) {
  let percentage = "%".repeat(num / 10);
  let dots = ".".repeat(10 - percentage.length);
  if (num < 100) {
    console.log(`${num}% [${percentage}${dots}]`);
    console.log("Still loading...");
  } else {
    console.log(`${num}% Complete!`);
    console.log(percentage);
  }
}

loadingBar(100);
