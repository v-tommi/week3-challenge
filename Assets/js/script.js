// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#pwactual");

  // setting variables containing associated values
  // i.e. upper/lower case alphabets, numeric values & special characters
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialchar = "!@#$%^&*()";

  // variable for pw length value
  var pwlength;

  // variable for selected pw values
  // to be set after each confirm()
  var pwvalues;

  // variable for final randomized pw
  let pwactual = " ";

// prompt for pw length
  if (pwlength == null || (pwlength >= 8 && pwlength <=128)) {  //logic to validate entered value
    prompt(
      "Choose password length." + "\n" +
      "(Minimum character requirements: 8-128)"
      )
  } else {
    prompt(
      "Choose a valid value between 8-128."
    )
  };
  
  // prompt for upper case
  var pwrequpper = confirm(
    "Require UPPER case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );
  
  // IF prompt for upper case confirm() = YES, then append values from var upper.  
  if (pwrequpper) {
    pwvalues = upper
  };

  var pwreqlower = confirm(
    "Require lower case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  // IF prompt for lower case confirm() = YES, then append values from var lower.  
  if (pwreqlower) {
    pwvalues = pwvalues + lower
  };

  var pwreqnumbers = confirm(
    "Require numeric values?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  // IF prompt for numeric values confirm() = YES, then append values from var numeric.  
  if (pwreqnumbers) {
    pwvalues = pwvalues + numeric
  };

  var pwreqspecial = confirm(
    "Require special characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  // IF prompt for special characters confirm() = YES, then append values from var specialchar.  
  if (pwreqspecial) {
    pwvalues = pwvalues + specialchar
  };

  // pw generating code block
  //const random = (length = 8) => {
    while (pwlength > 0) {
      pwactual += pwvalues.charAt(Math.floor(Math.random() * pwvalues.length));
    pwlength--;
    return pwactual;
    
    }; 
//};

  

  passwordText.value = pwactual;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);