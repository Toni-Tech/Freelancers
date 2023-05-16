const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main(data) {
let div = document.getElementById('root')
let h1 = document.createElement("h1")
h1.innerText = 'FREELANCERS'
div.append(h1)
let list = document.createElement("ul")
for (let i = 0; i < data.length; i++) {
    const element = data[i];
   list.innerHTML += '<li>' + element.name + " " + element.age + " " + element.occupation + '</li>'
   
}
div.append(list)
}

//call the main function
main(users);