function scuberGreetingForFeet(distance){
  let charge = 0;
  if (distance <= 400){
    charge = 'This one is on me!';
    return charge;
  }

  else if (distance > 400 && distance <= 2000){
    charge = 'That will be twenty bucks.';
    return charge;
  }

  else if (distance > 2000 && distance < 2500){
    charge = 'I will gladly take your thirty bucks.';
    return charge;
  }

  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  let drive;
  drive = (city === 'NYC') ? "Ok, sounds good." : "No go.";
  return drive;
}

function switchOnCharmFromTip(tip){
  let message;
  switch(tip){
    case 'generous':
      message = 'Thank you so much.';
      return message;
      break;
    case 'not as generous':
      message = 'Thank you.';
      return message;
      break;
    default:
      message = 'Bye.';
      return message;  
  }
}