let leatherHouse = "Buy Me";
let reactions = "Thank You";
 <script>
    
let firstNum = prompt('First Number');
  let secondNum = prompt('Second Number?');
  let usersChoice = prompt('Enter one of these[/, *, +, -, %]');
  
  // let addition = "+";
  // let subtraction = "-";
  // let multiplication = "*";
  // let division = "/";
  // let remainder = "%";

  if (usersChoice === addition) {
  // alert(parseInt(firstNum) + parseInt(secondNum));
  // } else if  (usersChoice === subtraction) {
  // alert(parseInt(firstNum) - parseInt(secondNum));
  // } else if  (usersChoice === multiplication) {
  // alert(parseInt(firstNum) * parseInt(secondNum));
  // } else if  (usersChoice === division) {
  // alert(parseInt(firstNum) / parseInt(secondNum));
   } else if  (usersChoice === remainder) {
  alert(parseInt(firstNum) % parseInt(secondNum));
   } else {
  alert("Invalid Input");
   };

  //switch case statements
switch(usersChoice){
  case '+':
  alert(parseInt(firstNum) + parseInt(secondNum));
    break;
  case '-':
  alert(parseInt(firstNum) - parseInt(secondNum));
    break;
 case '*':
  alert(parseInt(firstNum) * parseInt(secondNum));
    break;
 case '/':
  alert(parseInt(firstNum) / parseInt(secondNum));
    break;
  case '%':
  alert(parseInt(firstNum) % parseInt(secondNum));
    break;
  default:
  alert("Invalid Input");
  };

  // Continously enter two numbers and the operation they want to perform. Then we ask them if they want to continue or stop.

    //if they press q, end the code.

    // if they enter y, ask them the question.\


    
  </script>
