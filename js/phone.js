function updatePhoneNumber(isIncrease){
    const inputField = document.getElementById('phone-input-field');
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
function updatePhoneTotalPtice(newPhoneNumber){
    const phoneTotal = newPhoneNumber * 1219;
    const textElement = document.getElementById('phone-total');
    textElement.innerText = phoneTotal;
}
document.getElementById('phone-btn-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPtice(newPhoneNumber);
    getSubTotal();
})
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPtice(newPhoneNumber);
    getSubTotal();
})