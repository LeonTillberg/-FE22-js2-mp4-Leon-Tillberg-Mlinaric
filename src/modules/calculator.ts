export class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
    subtract(a: number, b: number): number {
        return a - b;
    }
    multiply(a: number, b: number): number {
        return a * b;
    }
    divide(a: number, b: number): number {
        return a / b;
    }

    calculate(
        operator: string,
        firstOperand: number,
        secondOperand: number
    ): number | string {
        switch (operator) {
            case '+':
                return this.add(firstOperand, secondOperand);
            case '-':
                return this.subtract(firstOperand, secondOperand);
            case '*':
                return this.multiply(firstOperand, secondOperand);
            case '/':
                return this.divide(firstOperand, secondOperand);
            default:
                return 'Error';
        }
    }
}