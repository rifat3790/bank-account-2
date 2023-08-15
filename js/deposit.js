document.getElementById('btn-deposit').addEventListener('click', function(){
    
    // Get input field for deposit starts
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat (newDepositAmountString);
    // End
    

    // Get display deposit starts
    const depositTotal = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat (previousDepositTotalString);
    // End

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Get display balance field starts
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat (balanceTotalAmountString);

    const currentBalance = balanceTotalAmount + newDepositAmount;
    // End

    // depositTotal.innerText = currentDepositTotal;
    if(isNaN(newDepositAmount)){
        return alert("This is not a Number. Please enter valid Number.")
    }
    else if(newDepositAmount < 0){
        return alert("Negative amount deposit is not possible. Please enter positive amount.")
    }
    else{
        depositTotal.innerText = currentDepositTotal;
        balanceTotal.innerText = currentBalance;
    }

    depositFiled.value = '';
})