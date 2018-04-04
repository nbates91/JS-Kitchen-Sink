var myName = "Nick Bates";

const numberStates = 50;

// This is a basic addition function.
var x = add(5, 4);
console.log(x);

function add(num1, num2) {
    return num1 + num2;
}



// This function checks the first letter of whatever name is passed through it. If the first letter comes after L, "Back of the line" is logged. Otherwise "next" is logged. 
//I am using the unicode for L, 76 and the charCodeAt method to make this function work.
function letterCheck(name) {
    if (name.charCodeAt(0) > 76) {
        console.log("Back of the line!")
    } else {
        console.log("Next!")
    }
}

letterCheck(myName);
letterCheck("Abe");

// Simple function that alerts you with Hello World! when called.
function sayHello() {
    alert('Hello World!');
}
sayHello();

//Sends an alert if person is underage.
function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you are not old enough to view this page!')
    }
}

//checkAge('Charles', 21);
//heckAge('Abby', 27);
//checkAge('James', 18);
//checkAge('John', 17);

// this function logs all of the veggies in order and then stops.
var veggies = ['Lettuce', 'Cauliflower', 'Broccoli', 'Potatoes', 'Corn', 'Beans'];
var count = 0;
while (count < veggies.length) {
    console.log(veggies[count]);
    count++;
}

var people = [
    {
        name: 'Nick',
        age: 26
    },
    {
        name: 'Kalyn',
        age: 24
    },
    {
        name: 'Joe',
        age:15
    },
    {
        name: 'Kate',
        age: 16
    },
    {
        name: 'Rick',
        age: 60
    },
    {
        name: 'Ned',
        age: 5
    }
];
//Here we are putting this array through a for loop that passes each object  through my checkAge function.
for (var i=0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
};

function getLength(word) {
    return word.length
};


// return holds the value for future use. when i set var x to my function and then log x, i get that returned value.
var x = getLength('Hello world!');
console.log(x);


//new function using modulus to determine if x is even or odd.
function checkEven(num) {
if (num % 2 == 0) {
    console.log('The world is nice and even!')
} else {
    console.log('The world is an odd place!')
}
};

checkEven(x);