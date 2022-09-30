
// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz".split('')
var alphabetUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var numeric = "0123456789".split('')
var special = "!#$%&~@=?<>".split('')


function generatePassword(){
  var pool = []
  
  
        var length = prompt("How long do you want the length of password to be? Choose between 8 and 128.");
        if (length >= 8 && length <= 128){
          console.log(length);
      
        var lowerCaseChar = confirm("Do you want to include lowercase characters?");
        if (lowerCaseChar){
          console.log(alphabetLowerCase);
          pool = pool.concat(alphabetLowerCase);
        }
        var uppercaseChar = confirm("Do you want to include uppercase characters?");
        if (uppercaseChar){
          console.log(alphabetUpperCase);
          pool = pool.concat(alphabetUpperCase);
        }        
        var numericChar = confirm("Do you want to include numeric characters?");
        if(numericChar){
          console.log(numeric);
          pool = pool.concat(numeric);
        }
        var specialChar = confirm("Do you want to include special characters?");
        if(specialChar){
          console.log(special); 
          pool = pool.concat(special);
        }
        console.log("pool")
        console.log(pool)
               
        
          
          // if (lowerCaseChar==="true" || uppercaseChar==="true" || numeric==="true" ||
          //   special==="true"){
          //     for (var i = 0; i<length; i++){
          //       console.log(password);
          //     }
          //   const alphabetLowerCase[Math.floor(Math.random()*26];
          //   const alphabetUpperCase[Math.floor(Math.random()*26];
          //   const numeric[Math.floor(Math.random()*10];
          //   const special[Math.floor(Math.random()*11];

        }          
        return "password";
      }
    

// // Write password to the #password input
function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    
  
  }

  generateBtn.addEventListener("click", writePassword);
      


// Add event listener to generate button




//   var result = ""
 
  //prompt user for legth
  //check length
  //promp/confirm for types of characters
  //store the responses
  //based on the responses trim/build available pool of characters
  //build pasword letter by letter
  //generate random int within range of available chara length
  //add char to result
  //dp until length === desired password length

//   return "value"
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);