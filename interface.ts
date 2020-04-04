interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.lastName + " " + person.firstName;
}

let user = { firstName: "Goobong", lastName: "Jeong"};

document.body.innerHTML = greeter(user);
