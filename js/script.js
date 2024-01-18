function deposite(){
    // button
 const userInput = document.getElementById('deposite-input');
 const inputValue = userInput.value;
 console.log(inputValue);
    // input text faka
    userInput.value = '';
    // current value
    const currentValue = document.getElementById('current-value');
    const currentAmount = currentValue.innerText;
    //result
    const result = parseFloat(currentAmount) + parseFloat(inputValue);
    currentValue.innerText = result;
    // balance
    const balanceValue = document.getElementById('total-balance');
    const balanceAmount = balanceValue.innerText;
    // convert balance and inputvalue
    const balance1 =parseFloat(balanceAmount);
    const inputvalu1 =parseFloat(inputValue);
    // total
    const total =balance1 + inputvalu1;
    balanceValue.innerText =total;
    // withdraw
}
function withdraw(){
const withdrawInput = document.getElementById('withdraw-input');
const withdrawInputValue = withdrawInput.value;
withdrawInput.value ="";
// current withdraw balance
const withdrawBalance = document.getElementById('withdraw-total');
const currentwithdrawBalance = withdrawBalance.innerText;

// calculate withdraw balance and set balance
const result = parseFloat(withdrawInputValue) + parseFloat(currentwithdrawBalance);
withdrawBalance.innerText = result;

//  total current bank balance
const mainBalance = document.getElementById('total-balance');
const balanceTotal = mainBalance.innerText;
const result2 = parseFloat(balanceTotal) - parseFloat(withdrawInputValue);
mainBalance.innerText = result2;
// total balance balance
if(balanceTotal> withdrawInputValue){
    const result2 = parseFloat(balanceTotal) - parseFloat(withdrawInputValue);
mainBalance.innerText = result2;
}
else{
    alert('apner acount a taka nai')
}

}