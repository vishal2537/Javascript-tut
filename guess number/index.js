let input;

let x = Math.floor(Math.random() * 100 + 1);
console.log(x);
let a;
do {
  a = prompt("enter the number");
  a = Number.parseInt(a);
  var count = 0;
  if (a == x) {
    console.log("Guess is correct");
    break;
  } else if (a < x) {
    console.log("guess is less than correct one");
    count++;
  } else {
    console.log("guess is greater than correct one");
    count++;
  }
} while (a != count);
if (input == 0) {
  console.log("It an outstanding performance");
} else if (count < 10) {
  console.log("you can score 90 point");
} else if (count > 10 && count != 0) {
  console.log("you can score 50 point");
} else {
  console.log("you can try again");
}
