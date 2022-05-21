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
  var combinedCharacters = ""

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
      combinedCharacters=combinedCharacters.concat(lowercase)
    }

    if (isUpperCase === true) {
      combinedCharacters=combinedCharacters.concat(uppercase)
    }


    if (isNumber === true) {
     combinedCharacters=combinedCharacters.concat(number)
    }

    if (isSpecial === true) {
      combinedCharacters=combinedCharacters.concat(special)

    }


    // do nothing
    else {

    }
  }

  else {
    alert("invalid entry")

  }

  for (var i = 0; i < size; i++) {
    var positionString = Math.floor(Math.random() * combinedCharacters.length)
    finalpwd = finalpwd + combinedCharacters[positionString]

  }

  return finalpwd;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);