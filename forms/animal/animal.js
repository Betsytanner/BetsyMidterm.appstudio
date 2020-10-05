/*Created a new form named animals.
Created an array named myAnimals with these animals in it:
   dog, cat, horse, meerkat
Got the name of an animal from the user and adds it to the end of the array using an array method. 
Included code so the user can use any mix of case to enter the animal name. 
eg. the user could enter:
        eagle
        Eagle
        EAGLE
        EaglE
            etc.
Output the last animal in the array using an array method to an alert using a template literal to the console with the format below. Used the myAnimals array in the template literal to show the last animal added: 
eg. Say the last animal in the array is 'eagle'. Then the output would be: 
       "The last animal is a/an eagle."
Code is all commented out. 
Program runs without error.
COME BACK TO ADD THE ANY CASE 

let myAnimals = ["dog", "cat", "horse", "meerkat"]
let animalUser = prompt("What is the animal?")
console.log(myAnimals.push(animalUser))
let alertLast = myAnimals[myAnimals.length-1]
let myAlertAnimals = alert(`the last anlimal is a/n + ${alertLast}`)
*/

/*
Extra XP 
Removed all the 'let' commands from the copied code so you aren't re-creating the variables again on this form.
The program must run exactly two times. 
Code is all commented out. 
Program runs without error.

for(i=2;myAnimals<=2, i++)
  myAlertAnimals = alert(`the last anlimal is a/n + ${alertLast}`)
*/