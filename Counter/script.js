const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");

let Number = 0;

increaseBtn.onclick = function() {
    Number++;
    countLabel.textContent = Number;

}
decreaseBtn.onclick = function(){
    Number--;
    countLabel.textContent = Number;
}

resetBtn.onclick = function() {
    Number = 0;
    countLabel.textContent = Number;
}