result = document.getElementById('rez');
function setValues(num) {
    result.value += (num + '');
}

function operations(oper) {
    var last = result.value[result.length - 1];

    if (last == '^' || last == '+' || last == '-' || last == '*' || last == '/') 
        return;
    else 
    result.value += oper;
}

function isEqual() {
    if (result.value[result.value.length - 2] !== '^') 
    result.value = eval(result.value);
    else 
        cresult.value = Math.pow(result.value[0], result.value[result.value.length - 1]);
}
function zero()
{
    var first = result.value[0];

    if(first == '0') {
        return;
    }
    else
    result.value += '0';
}