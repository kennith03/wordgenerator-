
 const words= ['word','apples','tom','chew'];

// so you've got the word bank take that word bank and use the
//  document query selector to connect the word bank to the HTML id 
// the id connects the html to the JS and textContent basically is its name
// the text content and so because it = words the text content will be the word bank
document.querySelector('#diction').textContent = words[0]; 
//now that you have the word bank connected make a function like so 
const neWordFunction = () => {
   let number = Math.floor(Math.random()* words.length);
   let word = words[number];  
   // within this function theres new variables made like number and word 
   //number is how JS picks out random words  from the word bank then 
   // word is basically connecting the word bank or "words" to number
 
   document.querySelector('#diction').textContent = word; 
 //then it has to be connected to to the html in the function
   
}
 
 let wordbutton = document.querySelector(".book");
 wordbutton.addEventListener('click',neWordFunction);

// now that we have this  we have to have it return  the buttons class is book so that new constant wordbutton is basically connecting itself to that button with the querySelector 

//then the event listener is basically connecting the wordbutton to the function we created 






