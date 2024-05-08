/*Task #28 : Stages of Life: Write an if-else chain that dermines a person stage of life .Set a value of the variable age, and then:

*If the pwrson is less then 2 years old, print a message that the person is a baby

*If the person is atleast 2 years old but less then 4, print the message that the person
is a toddler.

*If the person is atleast 4 years oldbut less then 13, print a massage that the person is a Kid.

*If the person is atleast 13 years old but less then 20, Print a massage that the person is a teenager.

*If the person is atleast 20 years old but less then 65 ,print a message that theperson is an Adult.

*If the person age is 65 or older , print a message that the person is an elder, */
var age = 30;
if (age < 2) {
    console.log("The person is a Baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult");
}
else {
    console.log("The person is a elder");
}
