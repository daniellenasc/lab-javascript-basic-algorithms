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
let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et mauris nunc. Vivamus ut magna in nunc bibendum finibus. Maecenas imperdiet hendrerit facilisis. Nam tristique turpis eu justo blandit vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In sagittis, mauris ac eleifend vehicula, purus lectus porta justo, quis tincidunt nunc augue eget purus. Mauris id molestie neque.

Nullam eros augue, pharetra et magna a, ultricies efficitur est. Morbi libero diam, tincidunt in risus sed, bibendum efficitur velit. Donec in efficitur enim. Nulla sed elit vitae diam eleifend vestibulum. Morbi risus augue, semper id cursus ultricies, sodales at dui. In elementum lacus non scelerisque mollis. Praesent eu neque interdum, sollicitudin tellus vitae, euismod quam. Nam pharetra consectetur felis, ac dictum magna commodo sit amet. Quisque in tellus arcu. Proin eget vehicula mi. Sed lobortis, nisl id elementum imperdiet, lacus dui feugiat lorem, at vehicula arcu nisl sit amet libero. Nunc a velit sit amet elit feugiat pulvinar.

Sed id viverra nunc. Sed viverra consectetur felis ac ornare. Sed et orci quis odio pharetra dictum. Curabitur at ipsum quis velit commodo fringilla vel id enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum orci mauris, posuere molestie augue iaculis sit amet. Integer tincidunt ultrices dui sed commodo. In eget arcu nec est luctus ultrices. Nam sit amet accumsan felis, ut varius libero. Vivamus iaculis accumsan mauris eget molestie.`

console.log(str.split(' ').length);

let quantidadeEt = 0
for (let i = 0; i <= str.length; i++){
  if (str.length[i] === " et"){
    quantidadeEt += 1
  } else {
    continue;
  }
}
console.log(quantidadeEt)


// Bonus 2