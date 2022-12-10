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
  
  var pwlength;
  var pwvalues;
  var pwactual;

  if (pwlength == null) {
    prompt(
      "Choose password length." + "\n" +
      "(Minimum character requirements: 8-128)"
      )
  } else {
    prompt(
      "Choose a valid value between 8-128."
    )
  };
  
  var pwrequpper = confirm(
    "Require UPPER case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );
  
  if (pwrequpper) {
    pwvalues = upper
  };

  var pwreqlower = confirm(
    "Require lower case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  if (pwreqlower) {
    pwvalues = pwvalues + lower
  };

  var pwreqnumbers = confirm(
    "Require numeric values?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  if (pwreqnumbers) {
    pwvalues = pwvalues + numeric
  };

  var pwreqspecial = confirm(
    "Require special characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  if (pwreqspecial) {
    pwvalues = pwvalues + specialchar
  };

  const random = (length = 8) => {
    let pwactual = " ";
    while (pwlength > 0) {
      pwactual += pwvalues.charAt(Math.floor(Math.random() * pwvalues.length));

    return pwactual;

    }; pwlength--;
  };

  

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);