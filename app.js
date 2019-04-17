var rowNum = parseFloat(process.argv[2]);

function generateArray(input) {
  for (var i = 0; i <= input; i++) {
    var newArr = [];
    for (var j = 0; j <= i; j++) {
      var num = factorial(i) / (factorial(j) * (factorial(i - j)))
      newArr.push(num);
    }
    console.log(newArr);
  }
}

function factorial(j) {
  if (j == 0) {
    return 1
  } else {
    return j * factorial(j - 1)
  }
}

if (rowNum > 1) {
  generateArray(rowNum);
} else {
  console.log("Must enter number >= 1")
}