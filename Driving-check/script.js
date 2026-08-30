const mySubmit = document.getElementById("submit");
const myNumber = document.getElementById("myNum");
const Result = document.getElementById("result");

let Age;

mySubmit.onclick = function(){

    Age = myNumber.value;

    if(Age >= 80){
        Result.textContent = `Your too old to drive the vechile`;
    }
    else if(Age <= 5){
        Result.textContent = `Enter Your Correct Age...!`;
    }
    else if(Age >= 18){
        Result.textContent = `Your Ready to ride.. Enjoy it...`
    }
    else{
        Result.textContent = `Your not Eligible for riding...`;
    }
}