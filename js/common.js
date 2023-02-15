function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textValueString = textElement.innerText;
    const textValue = parseInt(textValueString);
    return textValue;
}
function setInnerTextById(elementId, value){
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

function getSubTotal(){
        // sub total
        const phoneTotal = getTextElementValueById('phone-total');
        const caseTotal = getTextElementValueById('case-total');
        const subTotal = phoneTotal + caseTotal;
        setInnerTextById('sub-total', subTotal );
        
        // tax total
        const taxTotalString = (subTotal * 0.1).toFixed(2);
        const taxTotal = parseFloat(taxTotalString)
        setInnerTextById('tax-total', taxTotal);

        // final total
        const finalTotal = subTotal + taxTotal;
        setInnerTextById('final-total', finalTotal);
}