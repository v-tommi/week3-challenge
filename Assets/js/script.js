// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialchar = "!@#$%^&*()";
  
  let pwlength = prompt(
    "Choose password length." + "\n" +
    "(Minimum character requirements: 8-128)"
    );
  
  let pwrequpper = confirm(
    "Require UPPER case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );
  
  let pwreqlower = confirm(
    "Require lower case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  let pwreqnumbers = confirm(
    "Require numeric values?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  let pwreqspecial = confirm(
    "Require special characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  Math.floor(Math.random(pwlength))

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);