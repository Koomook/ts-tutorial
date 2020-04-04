function greeter(person) {
    return "Hello, " + person.lastName + " " + person.firstName;
}
var user = { firstName: "Goobong", lastName: "Jeong" };
document.body.innerHTML = greeter(user);
