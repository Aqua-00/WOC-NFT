var storedNumber = Number(localStorage.getItem('displayedNumber'));
if (storedNumber !== null) {
  document.getElementById('displayNum').textContent = 'Your Balance: ' + storedNumber.toFixed(2) + ' ETH';
}


function displayNumber() {
  var inputBox = document.getElementById('inputBox');
  var displayNum = document.getElementById('displayNum');
  var error = document.getElementById('error');

  var number = parseInt(inputBox.value);

  if (isNaN(number)) {
    error.textContent = 'Please enter a valid amount.';
    displayNum.textContent = '';
  } else {
    error.textContent = '';

    if (number <= 0) {
      error.textContent = 'Error: Balance cannot reduced.';
      displayNum.textContent = '';
    } else {
      var newBalance = number + storedNumber;
      localStorage.setItem('displayedNumber', newBalance);
      displayNum.textContent = 'Your Balance: ' + newBalance.toFixed(2) + ' ETH';
    }
  }
}




function purchase(eth) {

  var displayNum = document.getElementById('displayNum');
  var storedNumber = localStorage.getItem('displayedNumber');


  var updatedNumber = storedNumber - eth;

  localStorage.setItem('displayedNumber', updatedNumber);

  displayNum.textContent = 'Your Balance: ' + updatedNumber.toFixed(2) + ' ETH';

}



