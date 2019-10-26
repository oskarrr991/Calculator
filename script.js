function setValues(num) {
    calculator.rez.value += (num + '');
}

function operations(oper) {
    var last = calculator.rez.value[calculator.rez.value.length - 1];

    if (last == '^' || last == '+' || last == '-' || last == '*' || last == '/') 
        return;
    else 
        calculator.rez.value += oper;
}

function isEqual() {
    if (calculator.rez.value[calculator.rez.value.length - 2] !== '^') 
        calculator.rez.value = eval(calculator.rez.value);
    else 
        calculator.rez.value = Math.pow(calculator.rez.value[0], calculator.rez.value[calculator.rez.value.length - 1]);
}
function zero()
{
    var first = calculator.rez.value[0];

    if(first == '0') {
        return;
    }
    else
        calculator.rez.value += '0';
}