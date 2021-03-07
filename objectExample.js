var clientInfo = {
    firstName: "Tim",
    lastName: "Kirves",
    id: 3551244612223,
    permit: true,
    age: 33
}
clientInfo;

//constructor function

function Client(firstName, lastName, age, experience, id) {
    this.firstName.uppeCase = firstName;
    this.lastName = lastName;
    this.age = age;
    this.experience = experience;
    this.id = id;
}

var client1 = new Client("Tim", "Kirves", 25, 20, 3854777866844);
let client2 = new Client("Angela", "Yujin", 55, 33, 462458774556);