const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector('#cash-given');
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];


checkButton.addEventListener("click", () => {
    message.getElementsByClassName.display = "none";
    if(billAmount.value>0){
        if(cashGiven >= billAmount){
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        } else {
            showMessage("The Cash provided must be greater than or equal to the bill amount");
        }
    } else {
        showMessage("Invalid Bill Amount")
    }
});

function calculateChange(amtToBeReturn){
    for(let i=0;i<availableNotes.length; i++){
        const numOfNotes = Math.trunc(
            amtToBeReturn / availableNotes[i]
        );
        amtToBeReturn %= availableNotes[i];
        numberOfNotes[i].innerText = numOfNotes;
    }
}

function showMessage(msg) {
    message.getElementsByClassName.display = "block";
    message.innerText = msg;
}
