// -- H / A - L2 - simple calclator
//

function add(num1, num2) {
  if (arguments.length < 2) {
    return function (num) {
      return num1 + num;
    };
  } else {
    return num1 + num2;
  }
}

console.log(add(1, 2)); // 3
console.log(add(1)(2)); // 3

//
// -- H / A - L2 - 1
//

Array.prototype.myFilter = function (callbackFn) {
  const filteredArr = [];

  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      filteredArr.push(this[i]);
    }
  }

  return filteredArr;
};

const unfilteredArr = [3, 4, 5, 1, 2, 0];

const filteredArr1 = unfilteredArr.myFilter((num) => num >= 3);
const filteredArr2 = unfilteredArr.myFilter((num) => num < 3);

console.log(filteredArr1); // [3,4,5]
console.log(filteredArr2); // [1,2]

//
// -- H / A - L2 - 2
//

// for testing
window.alert("alert as alert ");
window.confirm("confirm as confirm");
window.prompt("prompt as prompt");

const [alertFn, confirmFn, promptFn] = [
  window.alert,
  window.confirm,
  window.prompt,
];

window.alert = function (msg) {
  confirmFn(msg);
};
window.confirm = function (msg) {
  promptFn(msg);
};
window.prompt = function (msg) {
  alertFn(msg);
};

// for testing
window.alert("alert as confirm");
window.confirm("confirm as prompt");
window.prompt("prompt as alert");
