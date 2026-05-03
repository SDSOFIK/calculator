let displey = document.getElementById("displey");

function calculator(e){
    

displey.value = displey.value + e;


}

function remove(){
    displey.value = displey.value.slice(0, -1);
}
function removeAll() {
        displey.value = "";

}

function result(){

    let exp = displey.value
    exp = exp.replaceAll('x', '*');
    exp = exp.replaceAll('÷', '/');
    exp = exp.replaceAll('^', '**');
    exp = exp.replaceAll('sin(', 'Math.sin(');
    exp = exp.replaceAll('cos(', 'Math.cos(');
    exp = exp.replaceAll('√(', 'Math.sqrt(');
    exp = exp.replaceAll('tan(', 'Math.tan(');
    exp = exp.replaceAll('tan(', 'Math.tan(');
    exp = exp.replaceAll('log(', 'Math.log10(');
    exp = exp.replaceAll('lg(', 'Math.log(');
    exp = exp.replaceAll('x!', 'factorial($1)');
    displey.value = eval(exp);
}

