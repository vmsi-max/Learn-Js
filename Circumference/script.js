let radius ;
const pi = 3.14159;

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("radius").value;
    circumference = 2 * pi * radius;
    document.getElementById("result").textContent = circumference;
}