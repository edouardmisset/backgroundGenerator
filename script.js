var a = "Some String ";
var destination = document.getElementById("result");

var in1 = document.getElementById("in1").value;
var in2 = document.getElementById("in2").value;

function myFunction(in1, in2) {
  if (in1 === undefined || in2 === undefined) {
    console.log("input 1 or input 2 is empty");
    console.log("in1: " + in1 + " in2: " + in2);
  } else {
    destination.innerHTML = a + in1 + in2;
  }
}
