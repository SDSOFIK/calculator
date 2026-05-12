let display = document.getElementById("displey");


const replacements = [
    { from: /x/g, to: '*' },
    { from: /÷/g, to: '/' },
    { from: /\^/g, to: '**' },
    { from: /√\(/g, to: 'Math.sqrt(' },
    { from: /sin\(/g, to: 'Math.sin(' },
    { from: /cos\(/g, to: 'Math.cos(' },
    { from: /tan\(/g, to: 'Math.tan(' },
    { from: /log\(/g, to: 'Math.log10(' },
    { from: /lg\(/g, to: 'Math.log(' },
];


function calculator(e){
    

displey.value = display.value + e;


}

function remove(){
    displey.value = display.value.slice(0, -1);
}
function removeAll() {
        display.value = "";

}

function formatExpression(exp) {

    let formatted = exp;

    replacements.forEach(rule => {

        formatted = formatted.replace(rule.from, rule.to);

    });

    return formatted;

}

function isSafeExpression(exp) {
    return /^[0-9+\-*/().!%^√x÷\s]+$/.test(exp) ||
           /^(sin|cos|tan|log|lg|\d|[+\-*/().!%^√x÷\s])+$/g.test(exp);
}



function calculatorResult(){
    

 try {
        let exp = display.value;

        if (!isSafeExpression(exp)) {
            throw new Error("Invalid input");
        }

        exp = formatExpression(exp);

        const result = Function('"use strict"; return (' + exp + ')')();

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }


}