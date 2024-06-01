

// Enter-Button-Event, 
document.getElementById('enter').addEventListener('click',function(){

    loginPanel = document.getElementById('login-panel');
    loginPanel.style.display="none";

    accountPanel = document.getElementById("account-panel");
    accountPanel.style.display="block";
})


function Transaction(btn,balance,amount){
    document.getElementById(btn).addEventListener("click", function(){
        depositBalance = document.getElementById(balance).innerText; 
        depositAmount = parseFloat(depositBalance);
 
        AddNewDepositBalance = document.getElementById(amount).value;
        AddNewDepositAmount = parseFloat(AddNewDepositBalance);
        document.getElementById(balance).innerText = depositAmount+AddNewDepositAmount;
        document.getElementById(amount).value = "";

        //Balance =>
        TotalDespositeBalance = parseFloat(document.getElementById("diposite-balance").innerText);
        TotalWithdrawBalance = parseFloat(document.getElementById("withdraw-balance").innerText); 
        document.getElementById("balance").innerText = TotalDespositeBalance-TotalWithdrawBalance;
    })
}

// Account-Panel-Event,
   
   // Deposit => 
    Transaction("btn-diposite","diposite-balance","disposite-ammount");

   // Withdraw =>
    Transaction("btn-withdraw","withdraw-balance","withdaw-ammount");

   
   