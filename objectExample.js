var clientInfo = {
    firstName: "Tim",
    lastName: "Kirves",
    id: 3551244612223,
    permit: true,
    age: 33,
}
clientInfo;

//constructor function

function Client(firstName, lastName, age, experience, id, moveSuitcase) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.experience = experience;
    this.id = id;
    this.moveSuitcase = function() {
        alert("May I take your luggage, please?");
        pickUpSuitcase();
        moveBy();
    }
}

var client1 = new Client("Tim", "Kirves", 25, 20, 3854777866844);
var client2 = new Client("Angela", "Yujin", 55, 33, 462458774556);
var clien3 = new Client("Miku Chan", "Kirves", 25, 35, 466568663);

//----------------------------------------------------------------------------------
// House keeper orders
function HouseKeeper(name, yearsExpreince, cleaningArea, cleaning) {
    this.name = name;
    this.yearsExpreince = yearsExpreince;
    this.cleaningArea = cleaningArea;
    this.cleaning = function() {
        alert("Cleaning in progress");
    }
}

let houseKeeper1 = new HouseKeeper("GulChapChap", 35, 25457);

houseKeeper1.cleaning();