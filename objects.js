const firstname = `john`;
const lastname = `doe`;

const person = {
  firstname: `john`,
  lastname: `doe`,
  age: `30`,
  address: {
    country: `United`,
    street: `123 Main St`,
    city: `New York`,
    state: `NY`,
    zip: `10001`,
    phone: `123-456-7890`,
  },
  children: [`jane`, { fullname: `Allan Gitonga`, age: 34 }],
};

//accessing values inside an object
//1 dot notation notation
console.log(person.firstname); // Output: john
console.log(person.age);
console.log(person.address.country);
console.log(person.children[1].fullname);
