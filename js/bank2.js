
// this function is converting string to number receiving the input value of both deposit and withdraw 

function depositWithdrawOutput(inputId) {

    const bothInput = document.getElementById(inputId);
    const bothInputText = bothInput.value;
    const newDepositAmout = parseFloat(bothInputText)

    bothInput.value = ''

    return newDepositAmout;
}


// this function is calculating the amount of total deposit and total withdraw

function updateTotalField(totalFieldId, amout) {

    const previous = document.getElementById(totalFieldId);
    const previousDepositText = previous.innerText;
    // convarting from string to number
    const previousAmount = parseFloat(previousDepositText);

    const updatedAmount = previousAmount + amout;

    previous.innerText = updatedAmount;
}

function getCurrentBalance() {

    const totalBalance = document.getElementById('balance-total');

    const totalBalanceText = totalBalance.innerText;

    const totalBalanceAmount = parseFloat(totalBalanceText);

    return totalBalanceAmount
}






// this function is updating the total balance of total deposite and total withdraw

function updateTotalBalance(newDepositAmout, isAdd) {

    const totalBalance = document.getElementById('balance-total');

    const totalBalanceAmount = getCurrentBalance()

    /* const totalBalanceText = totalBalance.innerText;
 
     const totalBalanceAmount = parseFloat(totalBalanceText); */

    if (isAdd == true) {
        const totalDepositAmount = totalBalanceAmount + newDepositAmout;
        totalBalance.innerText = totalDepositAmount
    }

    else {
        const totalDepositAmount = totalBalanceAmount - newDepositAmout;
        totalBalance.innerText = totalDepositAmount
    }

}

document.getElementById('button-deposit').addEventListener('click', function () {

    const newDepositAmout = depositWithdrawOutput('input-deposit');

    if (newDepositAmout > 0) {
        updateTotalField('deposit-total', newDepositAmout)
        updateTotalBalance(newDepositAmout, true)

    }

})



document.getElementById('button-withdraw').addEventListener('click', function () {


    const newWithdrawInputAmount = depositWithdrawOutput('input-withdraw')
    const currentBalance = getCurrentBalance()

    if (newWithdrawInputAmount > 0 && newWithdrawInputAmount <= currentBalance) {
        updateTotalField('withdraw-total', newWithdrawInputAmount);
        updateTotalBalance(newWithdrawInputAmount, false);

    }



})