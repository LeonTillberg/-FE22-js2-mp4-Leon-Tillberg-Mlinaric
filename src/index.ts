import { Calculator } from './modules/calculator';

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    const display = document.querySelector('.display') as HTMLElement;
    const buttons = document.querySelectorAll('.btn');

    let firstOperand: number | null = null;
    let secondOperand: number | null = null;
    let currentOperator: string | null = null;

    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const target = event.target as HTMLElement;
            const value = target.dataset.value || '';
            const type = target.dataset.type;

            if (type === 'number') {
                if (currentOperator === null) {
                    firstOperand = firstOperand !== null ? parseFloat(`${firstOperand}${value}`) : parseFloat(value);
                    display.innerText = firstOperand.toString();
                } else {
                    secondOperand = secondOperand !== null ? parseFloat(`${secondOperand}${value}`) : parseFloat(value);
                    display.innerText = secondOperand.toString();
                }
            } else if (type === 'operator') {
                if (value === 'clear') {
                    firstOperand = null;
                    secondOperand = null;
                    currentOperator = null;
                    display.innerText = '';
                } else if (value === 'evaluate') {
                    if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
                        const result = calculator.calculate(currentOperator, firstOperand, secondOperand);
                        display.innerText = result.toString();
                        firstOperand = parseFloat(result.toString());
                        secondOperand = null;
                        currentOperator = null;
                    }
                } else {
                    if (firstOperand !== null && currentOperator === null) {
                        currentOperator = value;
                    }
                }
            }
        });
    });
});

const imgContainer = document.querySelector('.image') as HTMLElement;
const img = document.createElement('img');
img.setAttribute('class', 'pic');
imgContainer.appendChild(img);

// const moduleURL = import.meta.url;
// const relativeURL = 'css/Cool-Colors1.jpg';

const imgUrl = new URL('css/Cool-Colors1.jpg', import.meta.url);
img.src = imgUrl.href;