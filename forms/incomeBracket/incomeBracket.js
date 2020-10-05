/*
//user will enter their income 
//then they will click the sbmit button - on click fxn
//once the user submits they can be given 3 brackets
//if the user is under 30000 their tex bracket is 8%
//if the user income 30000 < income> 99,999 then tax 15%
//if the user is over 99,999 - then tax 25%
//create if else statements 
// within the ifelse statement it will have a lblmessage that has a message 
//create a variable for each income

let tax1 = "8%"
let tax2 = "15%"
let tax3 = "25%"

btnSubmit.onclick=function(){
  
  if (inpIncome.value > 30000) 
    lblValue.value = "With your income of" +  inpIncome.value + " " + " you are in the tax bracket of" + tax1 
  elseif (30000< inpIncome.value > 99999) 
    lblValue.value = "With your income of" + inpIncome.value  + " " + "you are in the tax bracket of" + tax2 
  elseif (inpIncome.value < 99999)
    lblValue.value = "With your income of" + inpIncome.value+ " " +  "you are in the tax bracket of" + tax3
  //else:
    //lblValue.value = "try again"
}
*/