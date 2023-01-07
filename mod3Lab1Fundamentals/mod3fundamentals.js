// 1: What are the results of these expressions

// a:
console.log("" + 1 + 0); //= "10"
// b:
console.log("" - 1 + 0); // = -1
// c:
console.log(true + false); //= 1
// d:
console.log(6 / "3"); // = 2
// e:
console.log("2" * "3"); // = 6
// f:
console.log(4 + 5 + "px"); // = "9px"
// g:
console.log("$" + 4 + 5); // = "$45"
// h:
console.log("4" - 2); // = 2
// i:
console.log("4px" - 2); // = NaN
// j:
console.log("   -9   " + 5); // = "  -9  5"
// k:
console.log("   -9   " - 5); // = -14
// l:
console.log(null + 1); // = 1
// m:
console.log(undefined + 1); // = NaN
// n:
console.log("  \t  \n" - 2); // = -2

// 2: here's code that asks the user for two numbers and shows their sum.
//It works incorrectly. The output in the example below is 12 (for default prompt values)
//Why? Fix it. The result should be 3.

function questionTwo() {
  let a = prompt("First Number?", 1);
  let b = prompt("Second Number?", 2);

  alert(+a + +b); //12
}

// 3: What will be the result for these expressions?

// a:
console.log(5 > 4); // = true
// b:
console.log("apple" > "pineapple"); // = false
// c:
console.log("2" > "12"); // = true
// d:
console.log(undefined == null); // = true
// e:
console.log(undefined === null); // = false
// f:
console.log(null == "\n0\n"); // = false
// g:
console.log(null === +"\n0\n"); // = false

/*
    4: Will an alert be shown?
    Yes, a string with someting written inside is a truthy
*/
if ("0") {
  alert("Hello");
}

// 5: Rewrite this if using the conditional operator '?':

function questionFive() {
  let a = 5;
  let b = 3;

  const result = a + b < 5 ? "Below" : "Over";

  console.log(result);
}

// 6: Write the delay method with arrow function, delay(func,ms)

function questionSix() {
  //Write delay arrow function here

  const delay =
    (func, ms) =>
    (...arg) =>
      setTimeout(() => func(...arg), ms);

  const hello = (who) => console.log("Hello " + who);

  const delayHello = delay(hello, 5000);

  delayHello("world");
}

// 7: Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function questionSeven() {
  //Write isEmpty function here
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  let schedule = {};

  alert(isEmpty(schedule)); // true

  schedule["8:30"] = "get up";

  alert(isEmpty(schedule)); // false
}

// 8: There's a ladder object that allows you to go up and down

function questionEight() {
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function () {
      //shows the current step
      console.log(this.step);
      return this;
    },
  };

  //Modify the code of up, down, and showStep to make the calls chainable,
  //like this:

  ladder.up().up().down().showStep(); // 1
}

// 9: Create New Accumulator
//Create a constructor function Accumulator(startingValue).
//Object that it creates should:

//  1: Store the "current value" in the property value. The starting value
//  is set to the argument of the constructor startingValue
//
//  2: The read() method should use prompt to read a new number and add it to value

//In other words, the value property is the sum of all user-entered
//values with the initial value startingValue

//Here's the demo of the code:

function questionNine() {
  //Write constructor function here

 /* class Accumulator {
    constructor(startingValue) {
      this.startingValue = startingValue;
      this.value = 0;
    }
    read() {
      var p = prompt();
      this.value = this.startingValue += +p;
    }
  } */

  class Accumulator {
    constructor(startingValue) {
      this.value = startingValue;
    }
    read() {
     this.value = +prompt() + this.value;
    }
  }

  let accumulator = new Accumulator(1); //initial value 1

  accumulator.read(); //adds the user-entered value

  accumulator.read(); //adds the user-entered value

  console.log(accumulator.value); // shows the sum of these values
}
