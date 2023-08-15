document.getElementById('btn-withdraw').addEventListener('click', function(){

    // Get input field for withdraw starts
    const withdrawTotal = document.getElementById('withdraw-field');
    const newWithdrawTotalAmountString = withdrawTotal.value;
    const newWithdrawTotalAmount = parseFloat (newWithdrawTotalAmountString);
    // console.log(newWithdrawTotalAmount)
    // End

    // Get Display withdraw amount 
    const displayWithdraw = document.getElementById('withdraw-total');
    const previousWitdrawTotalString = displayWithdraw.innerText;
    const previousWitdrawTotal = parseFloat(previousWitdrawTotalString);
    // console.log(typeof previousWitdrawTotal);
    // End

    const currentWithdraw = newWithdrawTotalAmount + previousWitdrawTotal;

    // Get Display balance amount field
    const balanceTotalField = document.getElementById('balance-total');
    const balanceAmountString = balanceTotalField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    const currentBalanceAmount = balanceAmount - newWithdrawTotalAmount;
    
    withdrawTotal.value = '';
    if(isNaN(newWithdrawTotalAmount)){
        return alert("This is not a Number. Please enter valid Number.")
    }
    else if (newWithdrawTotalAmount < 0){
        return alert("Negative withdraw amount is not possible. Please enter positive withdraw amount.");
    }
    else if(newWithdrawTotalAmount > balanceAmount){
        return alert("Insufficient balance. Please waiting for deposit.")
    }
    else{
        displayWithdraw.innerText = currentWithdraw;
        balanceTotalField.innerText = currentBalanceAmount;
    }




    

})