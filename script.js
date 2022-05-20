// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var number = "0123456789";
var special = "!@#$%^&*()_+:;><?/.";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//password generator code
function generatePassword() {
  var finalpwd = ""
  
for (var 1 = 0; 1 <size.length; i++) {
    finalpwd= finalpwd + size[randomIndex]

  }

  return finalpwd;
}

var size = prompt("Please enter 8 to 128 characters")
console.log(size)
//validation for checking

if (size >= 8 && size <= 128) {
  var isLowerCase = confirm("Include Lowercase?")
  console.log(isLowerCase)

  var isUpperCase = confirm("Include Uppercase?")
  console.log(isUpperCase)

  var isNumber = confirm("Include Number?")
  console.log(isNumber)

  var isSpecial = confirm("Include Special Character?")
  console.log(isSpecial)


  if (isLowerCase === true) {
    var positionString = Math.floor(Math.random() * 26)
    console.log(positionString)
    finalpwd = finalpwd + lowercase[positionString]

  }
  if (isUpperCase === true) {
    var positionString = Math.floor(Math.random() * 26)
    console.log(positionString)
    finalpwd = finalpwd + uppercase[positionString]
  }


  if (isNumber === true) {
    var positionString = Math.floor(Math.random())
    console.log(positionString)
    finalpwd = finalpwd + number[positionString]

  }

  if (isSpecial === true) {
    var positionString = Math.floor(Math.random())
    console.log(positionString)
    finalpwd = finalpwd + special[positionString]

  }


  // do nothing
  else {

  }
}

else {
  alert("invalid entry")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}