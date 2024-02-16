var opbox = document.getElementById("outputDisplay");
function add(num) {
var opbox = document.getElementById("outputDisplay");
opbox.value += num

}


function cal() {
    var opbox = document.getElementById("outputDisplay");

var opboxvalue = opbox.value;



    try{
opbox.value = eval(opboxvalue);
    }
catch {

   alert ("invaliddd")
}
}


function clearval() {
    var opbox = document.getElementById("outputDisplay");

     opbox.value = "";

}

function clearOne(){
    var opbox = document.getElementById("outputDisplay");

    opbox.value = opbox.value.substring(0, opbox.value.length - 1);



}