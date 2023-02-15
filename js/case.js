function updateCaseNumber(isIncrease){
    const inputField = document.getElementById('case-input-field');
    const inputValueString = inputField.value;
    const previousInputValueNumber = parseInt(inputValueString);
    let newInputValueNumber;

    if(isIncrease === true){
        newInputValueNumber = previousInputValueNumber + 1;
    }
    else{
        newInputValueNumber = previousInputValueNumber - 1;
    }
    inputField.value = newInputValueNumber;
    return newInputValueNumber;
   
}
function updateCaseTotalPtice(newCaseNumber){
    const caseTotal = newCaseNumber * 59;
    const textElement = document.getElementById('case-total');
    textElement.innerText = caseTotal;
}
document.getElementById('case-btn-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPtice(newCaseNumber);
    getSubTotal();
})
document.getElementById('case-btn-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);

    updateCaseTotalPtice(newCaseNumber);
    getSubTotal();
})