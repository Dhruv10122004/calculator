const inputDisplay = document.getElementById("input_display");
const outputDisplay = document.getElementById("output_display");

let string = '';
let setDisplay = '';
let index = 0;
const operators = ['+', '-', '*', '/', '.'];
function handleError(event) {
            if (event.target.innerHTML == '=') {
                setDisplay = math.evaluate(string);
                outputDisplay.innerHTML = setDisplay;
                string = '';
            }
            else if (event.target.id == 'divide') {
                if (string === '' || operators.includes(string.slice(-1))) {
                    string = 'Invalid Input';
                    outputDisplay.innerHTML = string;
                    inputDisplay.innerHTML = '';
                }
                else {
                    string += '/';
                    inputDisplay.innerHTML = string;
                }
            }
            else if (event.target.id == 'multiply') {
                if (operators.includes(string.slice(-1)) || string === '') {
                    string = 'Invalid Input';
                    outputDisplay.innerHTML = string;
                    inputDisplay.innerHTML = '';
                }
                else {
                    string += '*';
                    inputDisplay.innerHTML = string;
                }
            }
            else if (event.target.id == 'mod') {
                if (operators.includes(string.slice(-1)) || string === '') {
                    string = 'Invalid Input';
                    outputDisplay.innerHTML = string;
                    inputDisplay.innerHTML = '';
                }
                else {
                    string += '%';
                    inputDisplay.innerHTML = string;
                }
            }
            else if (event.target.id == 'decimal') {
                if (operators.includes(string.slice(-1)) || string === '') {
                    string = 'Invalid Input';
                    outputDisplay.innerHTML = string;
                    inputDisplay.innerHTML = '';
                }
                else {
                    string += '.';
                    inputDisplay.innerHTML = string;
                }
            }
            else if (event.target.id == 'plusminus') {
                toggleSign();
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
            else if(event.target.className == 'operator' || event.target.className == 'digits') {
                string += event.target.innerHTML;
                inputDisplay.innerHTML = string;
            }
        }

function toggleSign() {
    const char = string.slice(-1);
    string = string.substring(0, string.length - 1);
    string += '-';
    string += char;
    inputDisplay.innerHTML = string;
}

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if(event.key == "0") document.getElementById("zero").click();
    else if(event.key == "1") document.getElementById("one").click();
    else if(event.key == "2") document.getElementById("two").click();
    else if(event.key == "3") document.getElementById("three").click();
    else if(event.key == "4") document.getElementById("four").click();
    else if(event.key == "5") document.getElementById("five").click();
    else if(event.key == "6") document.getElementById("six").click();
    else if(event.key == "7") document.getElementById("seven").click();
    else if(event.key == "8") document.getElementById("eight").click();
    else if(event.key == "9") document.getElementById("nine").click();
    else if(event.key == "+") document.getElementById("plus").click();
    else if(event.key == "-") document.getElementById("minus").click();
    else if(event.key == "/") document.getElementById("divide").click();
    else if(event.key == "*") document.getElementById("multiply").click();
    else if(event.key == "%") document.getElementById("mod").click();
    else if(event.key == ".") document.getElementById("decimal").click();
    else if(event.key == "Enter") document.getElementById("equalto").click();
    else if(event.key == "Backspace") document.getElementById("clear").click();
});