function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct usage
console.log(greeter(user[0])); // Accessing the first element of the array
//Or iterate over the array and call the function for each element
for (const person of user) {
  console.log(greeter(person));
}
