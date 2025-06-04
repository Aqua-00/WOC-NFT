document.getElementById("loginForm").addEventListener("submit", function(event) {
   event.preventDefault();

   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(email, password)
       .then(function(userCredential) {
           window.location.href = "home.html";
           alert("Welcome");
       })
       .catch(function(error) {
           alert("Login failed. " + error.message);
       });
});










function purchase(eth){
    var displayNum = document.getElementById('displayNum');
    
  
    var updatedNumber =  storedNumber - eth;
    localStorage.setItem('displayedNumber', updatedNumber);
   
    displayNum.textContent = 'Your Balance: ' + updatedNumber.toFixed(2) + ' ETH';
  
  
  }
  
  
