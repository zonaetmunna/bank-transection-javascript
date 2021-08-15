//1. deposite button event hendler
document.getElementById("deposite-button").addEventListener('click', function () {
     //2. get value of deposite-input
     const depositeInput = document.getElementById("deposite-input");
     const newdepositeInputText = depositeInput.value;
     // convert newdepositeInputText string into number
     const newdepositeInputAmmount = parseFloat(newdepositeInputText);


     //3. set 
     const depositTotal = document.getElementById("deposit-total");
     const previousdepositTotal = depositTotal.innerText;
     const previousdepositAmmount = parseFloat(previousdepositTotal);

     // add
     const newdepositAmmount = previousdepositAmmount + newdepositeInputAmmount;
     depositTotal.innerText = newdepositAmmount;


     // balance
     //5.1 update balance
     const balanceTotal = document.getElementById("balance-total");
     const previousbalanceTotal = balanceTotal.innerText;
     // convert
     const previousbalanceAmmount = parseFloat(previousbalanceTotal);
     // add
     const newbalanceTotal = previousbalanceAmmount + newdepositeInputAmmount;
     balanceTotal.innerText = newbalanceTotal;



     //4. clear deposite input 
     depositeInput.value = '';
});

//1. withdraw-button event handler
document.getElementById("withdraw-button").addEventListener('click', function () {
     //2. get withdraw-input value
     const withdrawInput = document.getElementById("withdraw-input");
     const newwithdrawinputText = withdrawInput.value;
     // convert 
     const newwithdrawinputAmmount = parseFloat(newwithdrawinputText);

     // 3.set 
     const withdrawTotal = document.getElementById("withdraw-total");
     const previouswithdrawTotal = withdrawTotal.innerText;
     // convert
     const previouswithdrawAmmount = parseFloat(previouswithdrawTotal);
     // add
     const newwithdrawTotal = previouswithdrawAmmount + newwithdrawinputAmmount;
     withdrawTotal.innerText = newwithdrawTotal;


     //5.1update balance
     const balanceTotal = document.getElementById("balance-total");
     const previousbalanceTotal = balanceTotal.innerText;
     // convert
     const previousbalanceAmmount = parseFloat(previousbalanceTotal);
     // substract
     const newbalanceAmmount = previousbalanceAmmount - newwithdrawinputAmmount;
     balanceTotal.innerText = newbalanceAmmount;


     // 4.clean withdraw input
     withdrawInput.value = '';


})