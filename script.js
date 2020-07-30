var specialCharacters = [ "!", '"', "#", "$", "%",  "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~" ];

var lowerCaseLetters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z" ];

var upperCaseLetters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

var numbers = [ 0,1,2,3,4,5,6,7,8,9 ];








function generatePassword(){
  var userPassword = [];

  var passwordPrompt =  prompt("How many characters would you like your password to have?  min: 8, max 128");
  var lengthOfPassword = parseInt(passwordPrompt);

  if(isNaN(lengthOfPassword) === true){         
    console.log("isNaN --> length of Password : it is not a number");
    alert("ERROR: Not reading as a number");
    return;
  }

  if(lengthOfPassword < 8 || lengthOfPassword > 128){
    alert("Your password length must be between 8 and 128 character. Please try again");
    return;
  }
  

  var confirmOrCanceltoLowerCaseLetters = confirm("Click OK if you would like LowerCase Letters included in your password");
  var confirmOrCanceltoUpperCaseLetters = confirm("Click OK if you would like UpperCase Letters included in your password");
  var confirmOrCanceltoNumericCharacters = confirm("Click OK if you would like Numeric Characters included in your password");
  var confirmOrCanceltoSpecialCharcters = confirm("Click OK if you would like Special Characters included in your password");
  


  if( confirmOrCanceltoLowerCaseLetters === false && confirmOrCanceltoUpperCaseLetters === false && confirmOrCanceltoNumericCharacters === false && confirmOrCanceltoSpecialCharcters === false){

    alert("It is necessary to at least select one character type. ");
    return;
    
  }

  if(confirmOrCanceltoLowerCaseLetters === true){
    userPassword = userPassword.concat(lowerCaseLetters);
    console.log("yes to lowerCase letters: ", userPassword);
  }

  if(confirmOrCanceltoUpperCaseLetters === true){
    userPassword = userPassword.concat(upperCaseLetters);
    console.log("yes to upperCase letters: ", userPassword);
  }

  if(confirmOrCanceltoNumericCharacters === true){
    userPassword = userPassword.concat(numbers);
    console.log("yes to numbers: ", userPassword);
  }

  if(confirmOrCanceltoSpecialCharcters === true){
    userPassword = userPassword.concat(specialCharacters);
    console.log("yes to special characters: ", userPassword);
  }

  console.log("userpassword :::", userPassword);

  var informationGatheredPassword = "";

  for(var p = 0; p < lengthOfPassword ; p ++){
    informationGatheredPassword  = informationGatheredPassword + userPassword[Math.floor(Math.random() * userPassword.length)];
    console.log(informationGatheredPassword);
  }

  return informationGatheredPassword;
  

}




var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);


