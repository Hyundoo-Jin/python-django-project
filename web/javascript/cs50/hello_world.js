console.log("Hello, World");
var a = 3;
var b = 4;
console.log(a * b)

var text_1 = "Hello world";
var text_2 = "Hi, Gachon";
console.log(text_1 + text_2)

var bool_1 = true;
var bool_2 = false;
console.log(bool_1 | bool_2);
console.log(bool_1 && bool_2);

c = 3;
console.log(c++);
console.log(++c);
console.log(c += 5);

console.log(text_1.length);
console.log(text_1[0]);
console.log(text_1.slice(0, 3));
console.log(text_1.toUpperCase());

var majors = ["Management", "Conputer Science", "Law", "Life Science"];
console.log(majors);
console.log(majors[1]);
console.log(majors.slice(0, 2));

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
fruits.pop();
console.log(fruits);
fruits.push("Lemon");
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
console.log(fruits.indexOf('Banana'));
console.log(fruits.join('-'));
console.log(fruits.concat(fruits))

var a = 3; var b = 5;
if (a > b) {
    a++;
} else {
    b++;
}
console.log(a, b);
while(a < 10){
    console.log("a의 값은", a)
    a ++;
}

for ( i = 0; i < 10; i ++){
    console.log("i의 값은?", i)
}


var cars = ['BMW', 'Volov', 'Saab', 'Ford', 'Fiat', 'Audi'];
var text = '';
var i;
for (i = 0; i < cars.length; i++){
    text += '<li>' + cars[i] + '</li>\n'
}
console.log(text)




var myFunction = function(){
    console.log("Hello, Function")
};

var myFunction2 = function(your_name) {
    console.log("Hello", your_name)
};

myFunction2('Gachon');

var sumFunction = function(a, b) {
    return a + b;
}

console.log(sumFunction(3, 5));


var person = {
    firstNAme : "John", lastName : 'Doe',
    age : 50, eyeColor : 'blue'
};

console.log(person['lastName']);
console.log(person.age);