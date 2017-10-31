function Account(name, balance){
  this.name = name;
  this.balance = balance;
};
Account.prototype.withdraw = function(amount){
  this.balance -= amount;
};
Account.prototype.deposit = function(amount){
  this.balance += amount;
};
var newAccount;
//Front End Shtuff
$(document).ready(function() {
  $("form#newAccount").submit(function(event) {
    event.preventDefault();

    var newAccountName = $("input#newAccountName").val();
    var newAccountDeposit = parseInt($("input#newAccountDeposit").val());
    newAccount = new Account(newAccountName, newAccountDeposit);
    $("span#balance").text("");
    $("span#balance").text(newAccount.balance);
    $("span#name").text(newAccount.name);
    $(".form2").show();
    $(".form1").hide();
    $("input#newAccountName").val("");
    $("input#newAccountDeposit").val("");
  });





  $("form#withDep").submit(function(event) {
    event.preventDefault();
    var withdraw = parseInt($("input#withdraw").val());
    var deposit = parseInt($("input#deposit").val());
    if (deposit) {
      newAccount.deposit(deposit);
    };
    if (withdraw) {
      newAccount.withdraw(withdraw);
    }

    $("span#balance").text("");
    $("span#balance").text(newAccount.balance);

    $("input#withdraw").val("");
    $("input#deposit").val("");
  });
});
