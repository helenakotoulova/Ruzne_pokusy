var nadpis=document.getElementsByTagName("h1"); // tohle vybere vsechny polozky s TagName=h1, proto musime urcit, kteremu h1 chceme zmenit tu vlastnost.
//zde je to prvni nadpis, tedy s indexem 0
nadpis[0].style.fontSize = "100%";
// slo by zapsat i jako: document.getElementsByTagName("h1")[0].style.fontSize = "small";
// nebo: document.getElementById("nadpis").style.fontSize = "x-large";

//-------------------------------------------------------
// In Javascript, the exclamation mark (“!”) symbol, called a “bang,” is the logical “not” operator.
!true; // Returns false.
!null; // Returns true.

// running a bang twice determines the opposite of value, and then returns the opposite of that.
!!true // Evaluates to true.

//-------------------------------------------------------
//defining more variable in a single globalObject:
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

//-------------------------------------------------------
// short circuit logic:
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// expected output: false

a1 = true  && true       // t && t returns true
a2 = true  && false      // t && f returns false
a3 = false && true       // f && t returns false
a4 = false && (3 == 4)   // f && f returns false
a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
a6 = false && 'Cat'      // f && t returns false
a7 = 'Cat' && false      // t && f returns false
a8 = ''    && false      // f && f returns ""
a9 = false && ''         // f && f returns false

//bCondition1 || bCondition2 is always equal to: !(!bCondition1 && !bCondition2)

//-------------------------------------------------------

// ternary operator
let age = 13;
var allowed = (age > 18) ? 'yes' : 'no'

//-------------------------------------------------------
// switch
/*switch (action) {
    case 'draw':
      drawIt();
      break;
    case 'eat':
      eatIt();
      break;
    default:
      doNothing();
  }
*/
//-------------------------------------------------------

// STRINGS
// stringy jsou slova, vety apod. 

// lze na ne pouzit PROPERTY length:
'hello'.length; // 5  

// a taky maji ruzne METODY:
// slice, replace, String.prototype.at(index), split, substring,...


//-------------------------------------------------------
// ARRAYS
// array.method() - METODY jsou treba findIndexOf, shift, pop, map,includes, slice, splice 
// array.property - PROPERTY je length. a pak nejake blbosti.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//-------------------------------------------------------
// OBJECTS
//https://www.w3schools.com/js/js_object_definition.asp

/*
Built in obejcts: Date, Math, String, Array, and Object
Map, Set are iterable collections.
*/
var obj = {};
// or:
var obj = new Object();

var obj = {
    name: 'Carrot',
    _for: 'Max', // 'for' is a reserved word, use '_for' instead.
    details: {
      color: 'orange',
      size: 12
    }
  };

obj.details.color; // orange
obj['details']['size']; // 12

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define an object
  var you = new Person('You', 24);
  // We are creating a new person named "You" aged 24.

  // DULEZITE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 /* In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

JavaScript Primitives
A primitive value is a value that has no properties or methods.

A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:

string
number
boolean
null
undefined
Primitive values are immutable (they are hardcoded and therefore cannot be changed).

if x = 3.14, you can change the value of x. But you cannot change the value of 3.14.
"Hello"	string	"Hello" is always "Hello"

*/

/* new OPERATOR
The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
Binds the newly created object instance with the THIS context.

function Foo(bar1, bar2) {
  this.bar1 = bar1;
  this.bar2 = bar2;
}

var myFoo = new Foo('Bar 1', 2021);

accessing property: myFoo.
*/

function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}

var ken = new Person('Ken Jones', 39, 'M');

function Car(make, model, year, owner) {
  this.makeObj = make;
  this.modelObj = model;
  this.yearObj = year;
  this.ownerObj = owner;
}

var car2 = new Car('Nissan', '300ZX', 1992, ken);
console.log(car2.ownerObj.name)

var car1 = new Car('Nissan', '300ZX', 1992, 'ja');
console.log(car1.ownerObj)

ken.nationality = "English";
console.log(ken)

//-------------------------------------------------------
// THIS
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {h: 'Custom'};

// We declare a variable and the variable is assigned to the global window as its property.
var h = 'Global';

function whatsThis() {
  return this.h;  // The value of this is dependent on how the function is called
}

whatsThis();          // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis.call(obj);  // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj

//-------------------------------------------------------
function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34
array2=[10,20];
var coToJe=add.apply(o, array2);
console.log(coToJe) // 34

//-------------------------------------------------------
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f) //vypise to tohle: ƒ () { return this.prop;}
console.log(o.f()); // 37


//-------------------------------------------------------
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.h = independent;
console.log(o.h); // ƒ independent() {return this.prop;}
console.log(o.h()); // 37

o.g=independent();
console.log(o.g) // undefined
// takhle je to undefined, protoze kdyz se ta funkce spusti jen jako independent() a nebyla predtim prirazena jako
// vlastnost nejakemu objektu, tak je this undefined.
// PROTO:
// nejdrive je treba priradit vlastnosti objektu tu funkci, ale nespoustet ji.
// az je prirazeno, lze v dalsim kroku spustit primo vlastnost toho objektu.

/*
o.i()=independent;
console.log(o.i)
Uncaught TypeError: o.i is not a function
*/

//-------------------------------------------------------
function sum() {
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average() {
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable: true, configurable: true});

console.log(o.average, o.sum); // 2, 6

// The get syntax binds an object property to a function that will be called when that property is looked up - e.g.: o.average
// {get prop() { ... } } - prop is the name of the property of the object
// i tady u toho getteru funguje o.average - prirazeni funkce jako vlasntnosti objektu

//-------------------------------------------------------
// Define object
const objekt = {counter : 0};

// Define setters
Object.defineProperty(objekt, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(objekt, "increment", {
 // get : function () {this.counter++;}
 get: function () {return this.counter++}
});
Object.defineProperty(objekt, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(objekt, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(objekt, "subtract", {
  //set : function (value) {this.counter -= value;}
  set : function (value) {return this.counter -= value;}
});

Object.defineProperty(objekt, "value2", {
  value: 37,
});

// Play with the counter:
objekt.reset;
objekt.add = 5;
console.log(objekt.counter) // 5
//console.log(objekt.add) // undefined - protoze v te vlastnosti je schovana funkce, ktera neni spustena
//console.log(objekt.add()) // error - objekt.add() is not a function
//console.log(objekt.add(5)) // error, objekt.add(5) is not a function
objekt.subtract = 1;
console.log(objekt.counter)
objekt.increment;
// console.log(objekt.increment) // undefined, kazdopadne i tak to spustilo incrementovaci operaci a na dalsim radku se pak objevilo 6 misto 5 v objekt.counteru
console.log(objekt.counter) // 
objekt.decrement;
console.log(objekt.value2) // 37
objekt.increment;
// pokud zapisu property increment s get funkci vcetne RETURN tak se ta vysledna hodnota zapise do vlastnosti increment a muzu ji zobrazit nasledovne:
console.log(objekt.increment) //5
// predtim to bylo bez toho RETURN => tzn. do te property increment se nic nezapsalo, zustala undefined. jen se zvysil counter value, ktery se dal zobrazit jako>
console.log(objekt.counter) //6
// proc nejsou posledni 2 console.logy stejny:
// u toho ++ zalezi, jestli je to x++ nebo ++x, protoze kdyz je to zatim, tak to sice incrmeentuje, ale zobrazi tu hodnotu pred inkrementem.
// zatim ++x incrementuje a ukaze hodnotu pred incrmeentaci
objekt.subtract=2;
console.log(objekt.subtract) // undefined - setter nevytvari novou property - jde jen o pseudo-property, viz nzie
console.log(objekt.counter)


/*
ROZDIL GETTER A SETTER
GET - nepotrebuje definovat zadnou vstupni value.
The get syntax binds an object property to a function that will be called when that property is looked up.
-> vytvari novou property.
ALE POZOR! od 2015 jde pouzit [expression] - pouzije se uz nekde drive nadefinovany nazev, nevytvarim novy nazev:

const expr = 'foo';
const obj = {
  get [expr]() { return 'bar'; }
};
console.log(obj.foo); // "bar"

// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
    // je zde return, tzn se to vypise primo do vlastnosti nazvane jako nazev teto funkce, tzn lang
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang; // vytvorila se nova property


-------------

SET - pomoci set upravujeme danou vlastnost objektu mimo ten objekt - nekde mimo objekt definujeme vstup pro funkci definovanou pomoci set.
The set syntax binds an object property to a function to be called when there is an attempt to set that property.
Nevytvari novou property!!!!!!!!!!

const language = {
  set current(name) {
    this.log.push(name);
  },
  log: []
}
language.current = 'EN';
console.log(language.log); // ['EN']
language.current = 'FA';
console.log(language.log); // ['EN', 'FA']

// POZN: The example above defines a pseudo-property current of object language. 
When current is assigned a value, it updates log with that value.
However current is not defined, and any attempts to access it will result in undefined.

-------------------------------
// dalsi priklad na SET
const personAHOJ = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(jazyk) {
    this.language = jazyk.toUpperCase();
    //return this.lang = jazyk; // tohle udela chybu
  }
};

// Set an object property using a setter:
personAHOJ.lang = "en";

// Display data from the object:
console.log(personAHOJ.language)
console.log(personAHOJ.lang) // undefined - set nevytvari novou propety, nepomuze ani return

---- 
- i funkce v SET muze byt nazvana pomoci nejakeho expression nadefinovaneho jiz drive

const expr = 'foo';
const pes = {
  baz: 'bar',
  set [expr](v) { this.baz = v; }
};
pes.foo="haf";
console.log(pes.baz) // vypise: haf

*/

// OBJECT CONSTRUCTORS
function PersonXYZ(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new PersonXYZ("John", "Doe", 50, "blue");
const myMother = new PersonXYZ("Sally", "Rally", 48, "green");
//It is considered good practice to name constructor functions with an upper-case first letter.
// Jakmile dam do funkce "this".neco=blabla, tak to zezelena.
/*
1. Adding a Property to an Object:
myFather.nationality = "English";
The property will be added to myFather. Not to myMother. (Not to any other person objects).

2. Adding a Method to an Object
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
The method will be added to myFather. Not to myMother. (Not to any other person objects).

3. 
Adding a Property to a Constructor
Person.nationality = "English"; - tohle nefunguje!!!!!!!!

musi se takto!!!!!!!! CELE ZOPAKOVAT
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

4.
Adding a Method to a Constructor - I METODA SE MUSI PRIDAT DO CELE CONSTRUCTORU TIMTO ZPUSOBEM
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}

5. 
Sometimes you want to add new properties (or methods) to all existing objects of a given type.
NEBO
Sometimes you want to add new properties (or methods) to an object constructor.
=> Using the prototype Property
The JavaScript prototype property allows you to add new properties and methods to object constructors:
Person.prototype.nationality = "English";
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
*/

/*
Did You Know?
As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

Use string literals "" instead of new String().

Use number literals 50 instead of new Number().

Use boolean literals true / false instead of new Boolean().

Use object literals {} instead of new Object().

Use array literals [] instead of new Array().

Use pattern literals /()/ instead of new RegExp().

Use function expressions () {} instead of new Function().
*/

// DULEZITE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// JavaScript methods are actions that can be performed on objects. A JavaScript method is a property containing a function definition.
// Methods are functions stored as object properties.
/*
You will typically describe fullName() as a method of the person object, and fullName as a property.

The fullName property will execute (as a function) when it is invoked with ().

VIZ NIZE - EX. 1 A EX. 2
*/

//-------------------------------------------------------
// OBJECT ACCESSORS

// moznost

const person1 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};
document.getElementById("demo").innerHTML = person1.lang; // => EN
console.log(person1.lang)

// dalsi moznost
const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};
person2.lang = "en";
document.getElementById("demo").innerHTML = person2.language;

// getter VS setter VS function - prvni
var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50;         //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25

// getter VS setter VS function - druhy
//EXAMPLE 1
const person3 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("demo").innerHTML = person3.fullName();

// EXAMPLE 2
const person4 = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("demo").innerHTML = person4.fullName;

// POZN: 
/*
Example 1 access fullName as a function: person.fullName().

Example 2 access fullName as a property: person.fullName.

The second example provides a simpler syntax!!!!!!

kdyz dam v EX. 1 jen: document.getElementById("demo").innerHTML = person.fullName; (tzn bez zavorek za fullName),
tak se vyprintuje tohle: function() {
    return this.firstName + " " + this.lastName;

    ---------------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------------
Getter dela novou property a nepotrebuje (). Spusti se jako: person.fullName
Setter nedela novou property (resp dela jen novou pseudo property). ma funkci, ktere se priradi vstupni hodnota pomoci: o.c = 20
Funkce je psana za property: fullname: function () {}. nebo je mimo objekt. pak je potreba nejdriv konkretni vlastnosti priradi te funkci jako:
o.h=indepedent a pak console.log(o.h())
RETURN - kdyz dam return ve funkci pro danou property, tak se to zapise i do te konkretni propety, ve ktere to pisu
*/

//-------------------------------------------------------
// METODY - bud je sama vytvorim nebo existuji i built-in metody
/*
Adding a new method to an object is easy:
person.name = function () {
  return this.firstName + " " + this.lastName;
};

Using Built-In Methods:
let message = "Hello world!";
let x = message.toUpperCase();

Dohromady:
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

//-------------------------------------------------------
DISPLAYING JAVASCRIPT OBJECT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.getElementById("demo").innerHTML = person; (person je nadefinovany nekde vyse)
=> it will display: [object Object]
Co s tim:
A) The properties of an object can be displayed as a string:
document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city;

B) The properties of an object can be collected in a loop:
let txt = "";
for (let x in person) {
txt += person[x] + " ";
};
document.getElementById("demo").innerHTML = txt;

POZN:
You must use person[x] in the loop
person.x will not work (Because x is a variable).
The JavaScript for in statement loops through the properties of an Object.

The JavaScript for in statement can also loop over the properties of an Array:
const numbers = [45, 4, 9, 16, 25];
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}

The forEach() method calls a function (a callback function) once for each array element:
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
  txt += value;
}

pozn:
 Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. It can be rewritten to (moznost a):

const numbers = [45, 4, 9, 16, 25];
var txt = "";
function myFunction(value) {
  txt += value;
}
//moznost a:
//numbers.forEach(myFunction);

// moznost b:
for (i=0; i<numbers.length; i++) {
  myFunction(numbers[i]);
}
document.getElementById("demo").innerHTML = txt;

C) Any JavaScript object can be converted to an array using Object.values():
const myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;

D) Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

POZN: STRINGIFY
1. DATES
const person = {
  name: "John",
  today: new Date()
};
let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;
=> {"name":"John","today":"2021-11-15T09:03:26.359Z"}


2. FUNCTIONS
JSON.stringify will not stringify functions:

const person = {
  name: "John",
  age: function () {return 30;}
};
let myString = JSON.stringify(person);
=> {"name":"John"}

This can be "fixed" if you convert the functions into strings before stringifying.
const person = {
  name: "John",
  age: function () {return 30;}
};
person.age = person.age.toString();
let myString = JSON.stringify(person);

3. ARRAYS
const arr = ["John", "Peter", "Sally", "Jane"];
let myString = JSON.stringify(arr);
=> ["John","Peter","Sally","Jane"]

*/

//-------------------------------------------------------
// objects - SET and MAP - they are directly iterable, maji size property
/*
SET:
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.

Set methods:
new Set()	Creates a new Set
add(), delete(), has(), forEach(), values()....

//MAP

Map methods:
new Map()	Creates a new Map
set(), get(), delete(), has(), forEach(), values()....

*/
//-------------------------------------------------------

// FUNKCE
// - funkce je object! tzn:
// i funkce ma PROPERTIES (length, name) a METHODS (napr. toString)


/*
- Function declaration:
function myFunction(a, b) {
  return a * b;
}

 - Function expressions:
A JavaScript function can also be defined using an expression.
A function expression can be stored in a variable:
const x = function (a, b) {return a * b};

After a function expression has been stored in a variable, the variable can be used as a function:
const x = function (a, b) {return a * b};
let z = x(4, 3);
The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

POZN: expression
An expression is any valid unit of code that resolves to a value.
The expression x = 7 is an example of the first type. This expression uses the = operator to assign the value seven to the variable x. The expression itself evaluates to seven.
The code 3 + 4 is an example of the second expression type. This expression uses the + operator to add three and four together without assigning the result, seven, to a variable.

- Function constructor:
Functions can also be defined with a built-in JavaScript function constructor called Function()
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);
You actually don't have to use the function constructor. The example above is the same as writing:
const myFunction = function (a, b) {return a * b};
let x = myFunction(4, 3);
Most of the time, you can avoid using the new keyword in JavaScript.

JS HOISTING
In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared.

- Self-invoking function:
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
Function expressions will execute automatically if the expression is followed by ().

- 
function myFunction(a, b) {
  return a * b;
}
JavaScript functions can be used as values:
let x = myFunction(4, 3);

JavaScript functions can be used in expressions:
let x = myFunction(4, 3) * 2;

JS function - parameter rules:
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received!!!!!!!
If a function is called with missing arguments (less than declared), the missing values are set to undefined.
If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations. If a function changes an argument's value, it does not change the parameter's original value.
However, If a function changes an object property, it changes the original value.
JavaScript functions have a built-in object called the arguments object => ARGUMENTS.LENGTH can be applied:

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//-------------------------------------------------------
CALLING (INVOKING) JAVASCRIPT FUNCTION
the code inside a function is not executed when the function is defined.
The code inside a function is executed when the function is invoked.

1. Invoking a Function as a Function
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Will return 20

2. THIS KEYWORD
In JavaScript, the thing called this, is the object that "owns" the current code.
The value of this, when used in a function, is the object that "owns" the function.
Note that this is not a variable. It is a keyword. You cannot change the value of this.

3. Invoking a Function as a Method
The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"

The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.

const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this;
  }
}
// This will return [object Object] (the owner object)
myObject.fullName();

4. Invoking a Function with a Function Constructor
If a function invocation is preceded with the new keyword, it is a constructor invocation.
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myObj = new myFunction("John", "Doe");

// This will return "John"
myObj.firstName;


//-------------------------------------------------------
 ARROW FUNCTIONS
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

Arrow functions are not hoisted. They must be defined before they are used.

Using const is safer than using var, because a function expression is always constant value.

You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
const x = (x, y) => { return x * y };

// arrow function + this 
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true


// kdyz se zapise fce takhle: ahoj(); // tak se spusti

/ REST PARAMETERS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
providing a way to represent variadic functions in JavaScript.
pozn. variadic function is a function of indefinite arity, i.e., one which accepts a variable number of arguments.

function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));
// expected output: 6
console.log(sum(1, 2, 3, 4));
// expected output: 10

- reduce() - The reduce() method executes a user-supplied “reducer” callback function on each element of the array,
  passing in the return value from the calculation on the preceding element. 
 The final result of running the reducer across all elements of the array is a single value.

 const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;
// do const reducer si ulozim arrow function

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//-------------
function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

// SPREAD SYNTAX
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// je vyhodne ho pouzit, kdyz mam jako vstup do funkce nejaky array - protoze funkce neumi pracovat primo s arrayem

function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

Pak mám 2 možnosti:
1. pomocí spread operatoru
console.log(sum(...numbers));
// expected output: 6

2. Pomocí apply methody
console.log(sum.apply(null, numbers));
// expected output: 6

// spread syntax jde taky pozuit tam kde vytvarim novy array z jineho arraye
let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];

*/

function sum(...args) {
  let sum=0;
  for (i=0; i<arguments.length; i++) {
    sum=sum+args[i];
  }
  return sum;
}
console.log(sum(1,2,3)) // 6
let dlouhy=[1,2,3];
console.log(sum(...dlouhy)) //6

//---------------------------------------------------

var x = function(x, y) {
  return x * y;
}
console.log(x) // => ƒ (x, y) {return x * y;}
console.log(x(5,3)) // => 15

// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
  this.celejmeno=this.firstName + ' ' + this.lastName;
  // celejmeno=this.firstName + ' ' + this.lastName; => console.log(dalsi.celejmeno); => undefined
  return this.celejmeno
}

// This creates a new object
const dalsi = new myFunction("John", "Doe");

// This will return "John"
console.log(dalsi.firstName);
console.log(dalsi.celejmeno);
console.log(myFunction("hel", "kot"))

// The value of this will be the new object created when the function is invoked.

// JS function - method call()
/*
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
This example calls the fullName method of person, using it on person1

The call() method can accept arguments:
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

// JS Function - method apply()
The apply() method is similar to the call() method (previous chapter).
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "Mary Doe":
person.fullName.apply(person1);

The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array!!!!!!!!!!!!!!!!!! VYHODA

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.apply(person1, ["Oslo", "Norway"]);

The apply() method takes arguments as an array!!!!!!!!!!!!!!!!!! VYHODA
Math.max(1,2,3);  // Will return 3

takhle to pujde zapsat jako array:
Math.max.apply(null, [1,2,3]); // Will also return 3

https://www.w3schools.com/js/js_function_closures.asp

*/

const cisla=[1,2,8,5,6,9,10];
//Math.max.apply(null,...cisla); // error! u apply uz neni potreba pozuivat spread syntax! to jen u obycejnych funkci (a metod = coz jsou vlastne fce)
console.log(Math.max.apply(null,cisla))

/*
jQuery
In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".

Jq:
myElement = $("#id01");

Js:
myElement = document.getElementById("id01");

- muze se to pouzit pro CSS upravy
Jq:
myElement.hide();

Js:
myElement.style.display = "none";

*/

///EVENTS!
/*
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

addEvent listener - click, mouseover, mouseout
*/

// ARRAY - MAP
/*The map() method creates a new array by performing a function on each array element.
The map() method does not change the original array. 
COZ JE ROZDIL OPROTI - FOR EACH()

ARRAY -EVERY:
The every() method check if all array values pass a test. => returns true/false

const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

console.log(allOver18) => will return false
*/

const origos=[1,2,4];

const origos2=origos.map((element) => element*2);
console.log(origos) // 1,2,4
console.log(origos2) // 2,4,8

origos.map((element) => element*3);
console.log(origos) // 1,2,4
// nikam se ten vysledny array neulozil


origos.forEach((element) => console.log(element*3)); // 3,6,12
console.log(origos) // 1,2,4

const origos3=[];
origos.forEach((element) => origos3.push(element*3));
console.log(origos) // 1,2,4
console.log(origos3) // 3,6,12


/*
MATH
1. Math Properties (Constants)
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

2. Math Methods
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

/*
JavaScript JSON:
JSON is a format for storing and transporting data. JSON stands for JavaScript Object Notation
JSON is often used when data is sent from a server to a web page.

*/

/*
CLASS INHERITANCE
To create a class inheritance, use the extends keyword.
By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

This example is a JSON string:
'{"name":"John", "age":30, "car":null}'
It defines an object with 3 properties:

name
age
car
Each property has a value.

let personName = obj.name;
*/

/*
DULEZITE
When you pass a function as an argument, remember not to use parenthesis.

Right: myCalculator(5, 5, myDisplayer);

Wrong: myCalculator(5, 5, myDisplayer());
*/

/*
JAVASCRIPT PROMISES
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code

let myPromise = new Promise(function(myResolve, myReject) {
// "Producing Code" (May take some time)

  myResolve(); // when successful
  myReject();  // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(value) {  code if successful },
  function(error) { code if some error }
);

https://www.udacity.com/course/javascript-promises--ud898
*/

/*
JavaScript Form Validation
NAPR.
function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
*/

/*
API
API stands for Application Programming Interface.
A Web API is an application programming interface for the Web.
A Browser API can extend the functionality of a web browser.
A Server API can extend the functionality of a web server.
API propojuje server a brower. napr. s nejakou databazi -Third Party APIs


*/

/*
JS GRAPHICS
v HTML:
<canvas id="myCanvas" width="400" height="400" style="border:1px solid grey"></canvas>

pak v JS:
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

let xMax = canvas.height;
let slope = 1.2;
let intercept = 70;

ctx.moveTo(0, intercept);
ctx.lineTo(xMax, f(xMax));
ctx.strokeStyle = "black";
ctx.stroke();

- Plotly - pro XY grafy
- Chart.js - pro dalsi typy grafu - scatter, line, bar, radar,...
*/

// -----------------------------------------------------------------
//ES6 Modules
/*
JavaScript modules allow you to break up your code into separate files.
This makes it easier to maintain the code-base.
ES Modules rely on the import and export statements.

----------------
Exporting
1. moznost
export const name = "Jesse"
export const age = "40"

2. moznost
const name = "Jesse"
const age = "40"
export { name, age }

Default exports:
const message = () => {
  const name = "Jesse";
  const age = "40";
  return name + ' is ' + age + 'years old.';
};
export default message;

---------------
Importing
import { name, age } from "./person.js";
import message from "./message.js";

*/

//-----------------------------------------------------------------------------------------------------------------------------------------
//ES6 Destructuring

const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const auto = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way
const [auto2, truck2, suv2] = vehicles;
console.log(auto2) // mustang

const vozidla = [];
vozidla.push(...vehicles);
console.log(vozidla) //  ['mustang', 'f-150', 'expedition']

//-----------------
//Destructuring comes in handy when a function returns an array:

//Example
function calculate(a, b) {
  const add2 = a + b;
  const subtract2 = a - b;
  const multiply2 = a * b;
  const divide2 = a / b;

  return [add2, subtract2, multiply2, divide2];
}

const [add2, subtract2, multiply2, divide2] = calculate(4, 7);
console.log(add2) //11
console.log(subtract2) // -3
const vysledky = calculate(3,5);
console.log(vysledky[0]) // 8
console.log(vysledky[1]) // -2

// ------------------
// Destructuring objets
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

//var message2="";
myVehicle3(vehicleOne);
myVehicle2(vehicleOne);

// old way
function myVehicle1(vehicle) {
  var message1 = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

// new way
function myVehicle2({type, color, brand, model}) {
  message2 = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  return message2
}
console.log(message2)

//myway
function myVehicle3() {
  var message3 = 'My ' + this.type + ' is a ' + this.color + ' ' + this.brand + ' ' + this.model + '.';
  return message3
}

//console.log(message3)


// SCOPE
/*
1. BLOCK scope
Variables declared with let inside a { } block cannot be accessed from outside the block:
{
  let x = 2; // podobne by to bylo s const
}
// x can NOT be used

Variables declared with the var keyword can NOT have block scope.
{
  var x = 2;
}
// x CAN be used here

-----------
POZN: blocks - A block statement (or compound statement in other languages) is used to group zero or more statements. 
The block is delimited by a pair of braces ("curly brackets") and may optionally be labelled.

priklady:
if (true) {
  var x = 2;
  let y = 2;
}

{
  StatementList
}


LabelIdentifier: {
  StatementList
}
-----------

2. FUNCTION scope
Variables defined inside a function are not accessible (visible) from outside the function.
Variables declared with var, let and const are quite similar when declared inside a function.
Variables declared within a JavaScript function, become LOCAL to the function. (local scope)

3. GLOBAL scope
Variables declared Globally (outside any function) have Global Scope.
Variables declared with var, let and const are quite similar when declared outside a block.

4. SPECIAL
If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
This code example will declare a global variable carName, even if the value is assigned inside a function.
myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}

POZN:
Do NOT create global variables unless you intend to.

Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

*/

/*
VARIABLES

1. VAR
If you use var outside of a function, it belongs to the global scope.
If you use var inside of a function, it belongs to that function.
If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.
var has a function scope, not a block scope.

2. LET
let is the block scoped version of var, and is limited to the block (or expression) where it is defined.
If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.
let has a block scope.
Variables defined with let cannot be redeclared. Variables defined with let must be Declared before use. Variables defined with let have Block Scope.
With let you can not do this:
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared

With var you can:
var x = "John Doe";
var x = 0;

3. CONST
const is a variable that once it has been created, its value can never change.
const has a block scope.
The keyword const is a bit misleading.
It does not define a constant value. It defines a constant reference to a value.

*/

function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }
  console.log(discounted)
  return discounted
}

discountPrices([100, 200, 300], .5) // [50, 100, 150]

ceny = [150,800,1000];
sleva=0.5;
console.log(discountPrices(ceny,sleva)) // [75,400,500]
console.log(discountPrices(...ceny, sleva)) // []

celkove=[150,800,1000,0.5];
console.log(discountPrices(...celkove)) // []

//------------------


function scitacka(a,b,c) {
  return a+b+c
}
console.log(scitacka(1,2,3)) // 6
secti = [1,2,3];
console.log(scitacka(1,2,3,4)) // 6
console.log(scitacka(1,2)) // NaN
console.log(scitacka(secti)) // 1,2,3undefinedundefined
// POUZITI SPREAD OPERATORU - SPREADUJE NAS ARRAY DO PARAMETRU TE FUNKCE:
console.log(scitacka(...secti)) // 6 
console.log(scitacka.apply(this, secti)) // 6
//console.log(scitacka.apply(this,...secti)) // error. zde uz neni treba pouzivat spread operator. ta funkce se aplikuje na array. vi, ze jde o array.
console.log(scitacka([1,2],3,4)) // 1, 234 

//---------------------------

function scitacka2() {
  let sum=0;
  for (i=0; i<arguments.length;i++) {
    sum=sum+arguments[i];
  }
  return sum
}
cisla2=[1,8,10];
console.log(scitacka2(cisla2)) // 01,8,10
// POUZITI REST PARAMETRU - KDYZ PRACUJEME S NEZNAMOU VELIKOSTI VSTUPU:
console.log(scitacka(...cisla2)) // 19

//----------------------------

function scitacka3(cisla3) {
  let sum3=0;
  for (i=0; i<cisla3.length; i++) {
    sum3=sum3+cisla3[i];
  }
  return sum3
}
cisla3=[1,4,7];
console.log(scitacka3(cisla3)) // 12
console.log(scitacka3(...cisla3)) // 0
// TOHLE NEFUNGUJE, PROTOZE POUZIVAM SPREAD OPERATOR ... ALE NENI CO SPREADOVAT. TA FUNKCE SI BERE JEDEN ARGUMENT A JE JI JEDNO, CO TO JE.
// SPREAD OPERATOR DAVA SMYSL, KDYZ MAM VIC VSTUPU A NECHCI SE S KAZDYM SAMOSTATNE ROZEPISOVAT - TZN. KDYZ POTREBUJU, ABY SE MI TEN VSTUP SPREADNUL
// DO JEDNOTLIVYCH PARAMETRU FUNKCE.
console.log(scitacka3([1,5,8,2])) // 16
console.log(Math.max(1,2,3)) //3
cisla4=[1,2,3,4];
console.log(Math.max(...cisla4)) //4

//-------------------------

const arr1=[1,2,3];
const arr2=[4,5,6];
console.log([arr1, ...arr2]) // (kength: 4) [Array(3), 4, 5, 6]
console.log([arr1,arr2]) // (length:2) [Array(3), Array(3)]
console.log([...arr1, arr2]) //(length:4) [1, 2, 3, Array(3)]
console.log([...arr1,...arr2]) // (length: 6) [1, 2, 3, 4, 5, 6]

// DULEZITE
/*
The SPREAD operator takes the array of parameters and spreads them across the arguments in the function call. 
cisla4=[1,2,3,4];
console.log(Math.max(...cisla4)) //4
SPREAD OPERATOR POUZIJU TAM, KDE MA FUNKCE VICE VSTUPU (napr. a,b,c) A JA JE MAM NAPSANE VSECHNY V JEDNOM ARRAYI.

--------------

If we need our function to be able to work with an unknown number of parameters, that’s where the REST parameter comes in.
REST PARAMETER POUZIJU TAM, KDE FUNKCE NEMA DEFINOVANY VSTUP A NEVIME, JAK TEN ARRAY ARGUMENTU BUDE DLOUHY.
function scitacka2() {
  let sum=0;
  for (i=0; i<arguments.length;i++) {
    sum=sum+arguments[i];
  }
  return sum
}
cisla2=[1,8,10];
console.log(scitacka2(cisla2)) // 01,8,10
console.log(scitacka(...cisla2)) // 19

ZAJIMAVE JE POROVNANI SCITACKY 1 A SCITACKY2 A SCITACKY3!!!!!!!!!!!
Scitacka1 ma nadefinovany vstup (a,b,c) a lze pouzit SPREAD.
Scitacka2 nema nadefinovany vstup a pouziva REST parameter.
Scitacka3 ma nadefinovany vstup (cisla). Muze to byt array a NEMUSIM pouzivat SPREAD.

*/

/*
----
POZN: Class in JS.
Classes are a template for creating objects.
The constructor method is a special method for creating and initializing an object created with a class.

- Class decleration:
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

- Hoisting
An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed. Code like the following will throw a ReferenceError:

const p = new Rectangle(); // ReferenceError

class Rectangle {}

(rectancle je nadefinovany pozdeji nez je nadefinovany. u funkci to nevadi, u classes ano)


- Class expression
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// output: "Rectangle2"


ROZDIL CLASS VERSUS OBJECT

OLD SYNTAX
Let’s create an animal prototype using the pre-ES6 syntax.
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.makeSound = function() {return "The " + this.type + " named " + this.name + " goes " + this.sound + "!";};
}

var frog = new Animal("frog", "George", "ribbit");
frog.name;
// => "George"  

NEW SYNTAX - ES6:
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.makeSound = () => `The ${this.type} named ${this.name} goes ${this.sound}!`;
    }
}

const frog = new Animal("frog", "George", "ribbit");
frog.sound;
// => "ribbit"

ZATIM STEJNE, ZE?
JENZE: ES6 gives us the new ability to create a class that inherits properties from a parent (“super”) class. 
It uses the extends keyword. Let’s take our frog example, and this time we’ll create it as a class.

class Frog extends Animal {
    constructor(name) {
        super("frog", name, "ribbit");
    }
}
const george = new Frog("George");
george.makeSound();
// => "The frog named George goes ribbit!"

Now, we can create frogs with different names, but they’ll contain the type and sound properties associated with the Frog class!!!!!!!!


Pozn.: A $ sign to define/access jQuery. 
*/


