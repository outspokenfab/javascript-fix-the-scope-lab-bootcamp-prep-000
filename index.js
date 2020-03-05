var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  // The tests expect this function to return `animal` just like the previous function
  // However, you cannot simply modify the existing variable declared on line 1 in the global scope 
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: Hard-coding 'cat' below will not work
  var animal = "cat";
  return animal
}

function add2(n) {
  

  // Feel free to move things around!
  const two = 2;
  return n + two; //Was listed as the first item in the function
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line

console.log(funkyFunction());


// An example closure
function outer() {
  return function inner(name) {
    return "TEST"
  }
}
 
// greeting is assigned the definition of the inner function
var greeting = outer()
 
// we can then call greeting and pass in a string
console.log(greeting());