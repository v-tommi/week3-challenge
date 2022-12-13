// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //debugger;
  // commented below line due to an error stating password was not declared or defined
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
  let pwactual = "";

// prompt for pw length
//logic to validate entered value
    pwlength = parseInt(prompt(
      "Choose password length." + "\n" +
      "(Minimum character requirements: 8-128)"
      ));
      
  if (pwlength < 8 || pwlength > 128) {
    alert(
      "Choose a valid value between 8-128."
    );
    return
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

  // prompt for lower case
  var pwreqlower = confirm(
    "Require lower case characters?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  // IF prompt for lower case confirm() = YES, then append values from var lower.  
  if (pwreqlower) {
    pwvalues = pwvalues + lower
  };

  // prompt for numbers
  var pwreqnumbers = confirm(
    "Require numeric values?" + "\n" +
    "(Ok = Yes, Cancel = No)"
  );

  // IF prompt for numeric values confirm() = YES, then append values from var numeric.  
  if (pwreqnumbers) {
    pwvalues = pwvalues + numeric
  };

  // prompt for special characters
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
      pwactual = pwactual + pwvalues.charAt(Math.floor(Math.random() * pwvalues.length));
    pwlength--;
    };
    //return pwactual;
//};

  

  passwordText.value = pwactual;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);