document.getElementById('button-deposit').addEventListener('click', function () {
    // taking value from input
    const depositInput = document.getElementById('input-deposit');
    const depositInputText = depositInput.value;

    // converting value from string to number
    const newDepositAmout = parseFloat(depositInputText)
    // traking via id to desplay the result
    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositText = previousDeposit.innerText;
    // convarting from string to number
    const previousDepositAmount = parseFloat(previousDepositText);

    const updatedDepositAmount = previousDepositAmount + newDepositAmout;

    previousDeposit.innerText = updatedDepositAmount;

    depositInput.value = ''

    // updating total deposit in total balance

    // targeting id to desplay total balance
    const totalBalance = document.getElementById('balance-total');

    const totalBalanceText = totalBalance.innerText;

    const totalBalanceAmount = parseFloat(totalBalanceText);

    const totalDepositAmount = totalBalanceAmount + newDepositAmout;

    totalBalance.innerText = totalDepositAmount;


})


document.getElementById('button-withdraw').addEventListener('click', function () {
    console.log('clicked')

    const withdrawInput = document.getElementById('input-withdraw');

    const withdrawInputText = withdrawInput.value;

    const newWithdrawInputAmount = parseFloat(withdrawInputText);

    const previousWithdraw = document.getElementById('withdraw-total');

    const previousWithdrawText = previousWithdraw.innerText;

    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const totalWithdrawAmout = previousWithdrawAmount + newWithdrawInputAmount;

    previousWithdraw.innerText = totalWithdrawAmout;

    withdrawInput.value = ''


    // updating total balance after withdraw 

    const updateBalance = document.getElementById('balance-total');

    const updateBalanceText = updateBalance.innerText;

    const updateBalanceAmount = parseFloat(updateBalanceText);

    const updateBalanceTotal = updateBalanceAmount - newWithdrawInputAmount;

    updateBalance.innerText = updateBalanceTotal;

})