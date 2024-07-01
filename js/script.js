const allButtons = document.querySelectorAll('.button');
const result = document.querySelector(".result p")
let currentInput = ""
let storedValue = ""
let operator = ""

allButtons.forEach(button => button.addEventListener('click', () => {
    const textBtn = button.textContent

    if (textBtn === "AC"){
        currentInput = ""
        storedValue = ""
        operator = ""
        result.textContent = "0"
    } else if (textBtn === "+/-") {
        if(currentInput){
            currentInput = (parseFloat(currentInput) * -1).toString()
            result.textContent = currentInput
        }
    } else if (textBtn === "%") {
        if(currentInput){
            currentInput = (parseFloat(currentInput) / 100).toString()
        }
    } else if (textBtn === "/" || textBtn === "*" || textBtn === "-" || textBtn === "+") {
        if (currentInput) {
            storedValue = currentInput
            operator = textBtn
            currentInput = ""
        }
    } else if (textBtn === "=") {
        if(storedValue && currentInput) {
            currentInput = evaluate(storedValue, currentInput, operator);
            result.textContent = currentInput;
            storedValue = "";
            operator = ""
        }
    } else {
        currentInput += textBtn
        result.textContent = currentInput
    }

    function evaluate(val1, val2, op) {
        const num1 = parseFloat(val1);
        const num2 = parseFloat(val2);

        switch (op) {
            case '/':
                return (num1 / num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '+':
                return (num1 + num2).toString();
            default:
                return val2;
        }
    }
}))