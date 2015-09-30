// NORMAL MODE ************

// calculate function
var calculate1 = function (x, y) {
  return x * y;
};


// grab elements
var firstNumber = document.querySelector ('#num_one');
var secondNumber = document.querySelector ('#num_two');
var answer1 = document.querySelector ('#answer1');
var submitBtn = document.querySelector ('#calculateBtn')


// undefined variables
var firstNumInput, secondNumInput, answer1Text

// define the function for the button click
var submit = function () {
  firstNumInput = firstNumber.value;
  secondNumInput = secondNumber.value;
  answer1Text = calculate1 (firstNumInput, secondNumInput);
  answer1.textContent = answer1Text;
};

// button click
submitBtn.addEventListener ('click', submit);


// HARD MODE ******
