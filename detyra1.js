let users = [{
    emri: "Ermal",
    mbiemri: "Cahanaj",
    mosha: 19,
    Qyteti: {
        name: "Prizren",
        PC: "20000"
    }

}, {

    emri: "Drilon",
    mbiemri: "Haliti",
    mosha: 19,
    Qyteti: {
        name: "Prizren",
        PC: "20000"
    }

}, {
    emri: "Elmedina",
    mbiemri: "Morina",
    mosha: 19,
    Qyteti: {
        name: "Prizren",
        PC: "20000"
    }

}, {

    emri: "Marigona",
    mbiemri: "Ahmeti",
    mosha: 21,
    Qyteti: {
        name: "Prizren",
        PC: "20000"
    }

}, {

    emri: "Amira",
    mbiemri: "Morina",
    mosha: 18,
    Qyteti: {
        name: "Prizren",
        PC: "20000",
        HomeN: "52"
    }

}];
console.log(users[2]);

console.log("//////////////////////////////////////////");
let uc = require("upper-case");

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].emri.toUpperCase())
// }
for (let i = 0; i < users.length; i++) {
    users[i].emri = users[i].emri.toUpperCase()
}
// console.log(users);

for (let user of users) {
    user.Qyteti.name = uc.upperCase(user.Qyteti.name);
}
console.log(users);