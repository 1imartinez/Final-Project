//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){
  
  for(let a=0; a<password.length; a++){
      
    let char_num = password.charCodeAt(a);

    if(char_num >= 65 && char_num <= 90){
      return true;
    }

  }
  return false;
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){

  for(let a=0; a<password.length; a++){
      
    let char_num = password.charCodeAt(a);

    if(char_num >= 97 && char_num <= 122){
      return true;
    }

  }
  return false;

}








//returns true or false if there is a numerical character
function numberCheck(password){

  for(let a=0; a<password.length; a++){
      
    let char_num = password.charCodeAt(a);

    if(char_num >= 48 && char_num <= 57){
      return true;
    }

  }
  return false;

}







//returns true or false if there is a special character in the password
function specialCheck(check){
  
  for(let a=0; a<check.length; a++){
      
    let char_num = check.charCodeAt(a);

    if(char_num >= 33 && char_num <= 47 || char_num >= 58 && char_num <= 64 || char_num >= 91 && <= 96 || char_num >= 123 && char_num <= 126){
        return true;
    }

  }
  return false;


}










function passedAllChecks(){
  return lengthCheck(password)&&upperCaseCheck(password)&&lowerCaseCheck(password)&&numberCheck(password)&&specialCheck(check)
}









//returns a string which represents the grade for your password
function grade(password){
  if(!lengthCheck(password)){
    return "very bad"
  }

  if(!(upperCaseCheck(password)&&lowerCaseCheck(password))){
    return "bad"
  }

  if(!numberCheck(password)){
    return "okay"
  }  

  if(!specialCheck(check)){
    return "good"
  }

  if(lengthCheck(password)&&upperCaseCheck(password)&&lowerCaseCheck(password)&&numberCheck(password)&&specialCheck(check)){
    return "great"
  }
  
  if(lengthCheck(password)&&upperCaseCheck(password)&&lowerCaseCheck(password)&&numberCheck(password)&&specialCheck(check); passwork.length >= 20){
    return "super"
  }
}

