var firstName = prompt("First Name Please: ")
var lastName = prompt("Last Name Please: ")
var age = prompt("How old are you? ")
var height = prompt("What is your height?")
var petName = prompt("What is your petName? ")

alert("Thank you so much for the information! ")

//four conditions
var namecond = null;
var agecond = null;
var heightcond = null;
var petcond = null;

//NAME CONDITION
if(firstName[0]===lastName[0]){
  namecond=true;
}
else{
  namecond=false;
}

//AGE CONDITION
if(age>20 && age<30){
  agecond=true;
}
else{
  agecond=false;
}

//HEIGHT CONDITION
if (height>=170) {
  heightcond=true;
}
else {
  heightcond=false;
}

//PETNAME CONDITION
if (petName[petName.length-1]==='y') {
  petcond=true;

}
else {
  petcond=false;
}

if (namecond && agecond && heightcond && petcond) {
  console.log("WELCOME SPY!");
} else {
  console.log("Nothing to see here");
}
