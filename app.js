// console.log('hello world form app.js');

const calculateTipBtn = document.getElementById('calculate');
const resetBtn = document.getElementById('reset');

calculateTipBtn.addEventListener('click', () => {
    const totalBill = document.getElementById('totalBill').value;
    const tipPercentage = document.getElementById('tipPercentage').value

    let totaltip = totalBill * (tipPercentage/100);
    console.log('Tip Cost: ' + totaltip);

    let finalCost = parseInt(totalBill) + parseInt(totaltip);
    console.log('Total Cost: ' + finalCost);
})

resetBtn.addEventListener('click', () => {
    window.location.reload()
})