const input = document.querySelector("#password");
const showBtn = document.querySelector('.showBtn')
var strength = {
    0: "Worst",
    1: "Bad",
    2: "Weak",
    3: "Good",
    4: "Strong"
  }

  var password = document.getElementById('password');
var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
    showBtn.style.display = "block";
  } else {
    text.innerHTML = "";
  }
});

showBtn.onclick = function(){
  if(input.type == "password"){
    input.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#23ad5c";
  }else{
    input.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#000";
  }
}