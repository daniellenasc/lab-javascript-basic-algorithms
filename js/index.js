// Iteration 1: Names and Input
let hacker1 = 'Danielle';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Roberto';
console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops
let newHacker1 = "";
for (let i = 0; i < hacker1.length; i++){
  newHacker1 += hacker1[i] + ' ';
}
console.log(newHacker1.toUpperCase())


let newHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);


if (hacker1.localeCompare(hacker2) === -1){
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?")
}

// Bonus 1
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan risus sed nisl imperdiet, interdum pretium orci lobortis. Sed egestas varius ex, non sagittis tortor ultrices ac. Aliquam feugiat a quam eget finibus. Vivamus purus eros, iaculis non dolor a, eleifend varius ante. Donec finibus diam nec mi interdum porta. Pellentesque tempor ullamcorper lacus, quis bibendum turpis sollicitudin vel. Integer semper consequat nibh auctor sollicitudin. Aenean accumsan, turpis sit amet viverra euismod, nibh est porttitor dolor, vitae rutrum ligula augue sit amet leo. Nullam ex purus, bibendum vel ligula ut, convallis viverra mi. Aenean ultricies enim nec quam dictum, id pharetra augue dignissim.

Curabitur fermentum dolor mauris, at convallis augue maximus at. Vestibulum ut accumsan dolor. Etiam ornare dignissim est. Etiam blandit nisi nec purus scelerisque consectetur. Mauris convallis, velit nec convallis fringilla, est nulla ullamcorper neque, eget maximus purus neque vel sapien. Fusce efficitur vestibulum orci. Etiam ullamcorper tincidunt metus, eget tempor turpis tempor nec. Donec euismod risus nunc, nec congue lorem vestibulum eu.

Aliquam consequat, ante eu scelerisque ornare, risus justo accumsan quam, ut venenatis risus justo eget lectus. Aliquam dapibus, arcu non consectetur gravida, est justo aliquet odio, ut blandit felis neque varius justo. Nam finibus nulla non mattis suscipit. Mauris eget pharetra urna. Quisque commodo sodales consectetur. Nam lacinia ullamcorper fringilla. Nunc in feugiat erat. Vestibulum tincidunt dui dictum odio suscipit suscipit. Maecenas sed vulputate neque, fringilla rhoncus dolor. Vivamus sed pulvinar mi, vitae consequat urna. Ut auctor dictum mollis. Nullam eu aliquet purus. Aliquam tincidunt interdum congue. Quisque et eleifend urna, sed vehicula nunc.`

/* 
let separadorEsp = str.split(' ').length;
let separadorPar = str.split('\n').length;
let totalDePalavras = separadorEsp + separadorPar;
console.log(totalDePalavras);
 */


//256 = correto é 259 (?)
function countWords(str) {
  let wordCount = 0;  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      wordCount++;
    }
  }  
  return wordCount;
}
console.log(countWords(lorem))




const quantidadeEt = (lorem.match(/ et/g) || []).length;
console.log(quantidadeEt);



// Bonus 2
//bonus 2
let phraseToCheck  = 'A man, a plan, a canal, Panama';

/* let phraseToCheckAoContrario = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseToCheckAoContrario += phraseToCheck[i];
}

if (phraseToCheck === phraseToCheckAoContrario){
  console.log("It is a Palindrome!")
} else {
  console.log("It is NOT a Palindrome!")
} */

function isPalindrome(str) {  
  str = str.toLowerCase().replace(/[^A-Za-z]/g, '')  
  console.log(str)
  
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }  
  return true
}

console.log(isPalindrome(phraseToCheck))