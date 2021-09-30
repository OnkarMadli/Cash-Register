const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector('#cash-given');
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");
const nextButton = document.querySelector("#next-btn");
const cashDiv = document.querySelector('#cash-div');
const tableDiv = document.querySelector('#table-div');

const availableNotes = [2000,500,100,20,10,5,1];


nextButton.addEventListener("click", ()=>{
    console.log("yo")
    if(billAmount.value===""){
        showMessage("Enter Bill Amount to procees");
    } else if(isNaN(billAmount.value)){
        showMessage("Only numeric values are accepted");
    } else {
        showMessage("");
        cashDiv.style.display="block";
        nextButton.style.display="none";
    }
})


checkButton.addEventListener("click", () => {
    message.getElementsByClassName.display = "none";
    console.log(Number(cashGiven.value));
    console.log(Number(billAmount.value));
    if(isNaN(billAmount.value) || isNaN(cashGiven.value)){
        showMessage("Only numeric values are accepted")
    } else{
        if(Number(billAmount.value)>0){
            if(Number(cashGiven.value) >= Number(billAmount.value)){
                const amountToBeReturn = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturn);
                showMessage("Here, have your change!");
                tableDiv.style.display = "block";
            } else {
                showMessage("The Cash provided must be greater than or equal to the bill amount");
            }
        } else {
            showMessage("Invalid Bill Amount");

        }
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
