const myChannel = document.getElementById("channel");
const rupayCard = document.getElementById("rupayCard");
const visaCard = document.getElementById("visaCard");
const masterCard = document.getElementById("masterCard");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const cardResult = document.getElementById("cardResult");

mySubmit.onclick = function() {
    if(myChannel.checked){
        subResult.textContent = `Thank you for  intrest on Subscription...`;

        if(rupayCard.checked){
            cardResult.textContent = `thanks for payment with RuPay Card`
        }
        else if(visaCard.checked){
            cardResult.textContent = `thanks for payment with Visa Card`
        }
        else if(masterCard.checked){
            cardResult.textContent = `thanks for payment with Master Card`
        }
        else{
            cardResult.textContent = `Select the Which card is using for Payment...!`
        }
    }
    else{
        subResult.textContent = `Recheck for your Subsrciption..`;
    }
    
}
