const numButtons = document.querySelectorAll('.num');
const textField = document.querySelector('#textField');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
textField.value = ' ';;
let displayValue = textField.value;
equal.addEventListener('click',(e) => {
    let answer = Math.round(evaluate(textField.value));
    textField.value = answer;
});
clearButton.addEventListener('click', (e) => {
    textField.value = '';
});
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        textField.value += button.textContent;
    });
});
numButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        textField.value +=  button.textContent;
        displayValue = textField.value;



    });
});

function add() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
function subtract() {
    let subtract = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
       subtract -= arguments[i];
    }
    return subtract;

}
function multiply() {
    let product = 1;
    for(let i = 0; i < arguments.length; i++) {
        product *= arguments[i];
    }
    return product;;
}

function divide() {
    let divide = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        divide /= arguments[i];
    }
    return divide;
}

function operate(operator,num1,num2) {
    switch(operator) {
    case '+':
        return add(num1,num2);
        break;
    case '-':
        return subtract(num1,num2);
        break;
    case 'x':
        return multiply(num1,num2);
        break;
    case '/':
        return divide(num1,num2);
        break;
    default:
        return -1;
    }
  
}

function appendNumbers() {

}

function removeWhiteSpace(string) {
    let newString = '';
    for(let i = 0; i < string.length; i++) {
        if(string.charAt[i] == ' ') {
            continue;
        }
        newString += string.charAt[i];
    }
    return newString;

}
function evaluate(string) {
    let displayValue  =  removeWhiteSpace(textField.value);
    let answer = 0;
    let operations = [];
    let num = '';
    let numbers = [];
    string += '=';
    for(let i = 0; i < string.length; i++) {
        if(string.charAt(i) == '+' || string.charAt(i) == '-' ||
           string.charAt(i) == '/' || string.charAt(i) == 'x') {
            numbers.push(parseInt(num));
            operations.push(string.charAt(i));
            num = ' ';
            continue;
        } else if(string.charAt(i) == '=')
        {
            numbers.push(parseInt(num));
        }
            num += string.charAt(i);
    }
    let c = operateAll(operations,numbers);
    numbers = {};
    operations = {};

    return c;
}
function operateAll(operations,arrayOfNumbers) {
    let a = 1;
    let sum = arrayOfNumbers[0];;
    for(let i = 0; i < operations.length; i++) {
        sum = operate(operations[i],sum,arrayOfNumbers[a]);
        a++;
       
    }
    return sum;

}


