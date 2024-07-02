const btns = document.querySelectorAll(".all_buttons");
const inputDisplay = document.getElementById("input_display");
const outputDisplay = document.getElementById("output_display");

let string = '';
let setDisplay = '';
let index = 0;
let check = false;
// function add(num1, num2) {
//     return num1+num2;
// }
// function subtract(num1, num2) {
//     return num1-num2;
// }
// function multiply(num1, num2) {
//     return num1*num2;
// }
// function divide(num1, num2) {
//     return num1/num2;
// }
Array.from(btns).forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.innerHTML == '=') {
            setDisplay = eval(string);
            outputDisplay.innerHTML = setDisplay;
            string = '';
        }
        else if (event.target.id == 'divide') {
            if (check) {
                outputDisplay.innerHTML = "Error";
                string = '';
                inputDisplay.innerHTML = string;
                check = false;
            }
            else {
                string += '/';
                inputDisplay.innerHTML = string;
                check = true;
            }
        }
        else if (event.target.id == 'multiply') {
            if (check) {
                outputDisplay.innerHTML = "Error";
                string = '';
                inputDisplay.innerHTML = string;
                check = false;
            }
            else {
                string += '*';
                inputDisplay.innerHTML = string;
                check = true;
            }
        }
        // else if(event.target.id == 'plusminus') {
        //     string += '-';
        //     inputDisplay.innerHTML = string;  not functioning
        // }
        else if(event.target.id = 'mod' && check) {
            outputDisplay.innerHTML = "Error";
            string = '';
            inputDisplay.innerHTML = string;
        }
        else if (event.target.id == 'all_clear') {
            string = '';
            inputDisplay.innerHTML = string;
            outputDisplay.innerHTML = '';
        }
        else if (event.target.id == 'clear') {
            string = string.substring(0, string.length - 1);
            inputDisplay.innerHTML = string;
        }
        else {
            if(event.target.class == 'operator') {
                check = true;
            }
            else {
                check = false;
            }
            string += event.target.innerHTML;
            inputDisplay.innerHTML = string;
        }
    });
})