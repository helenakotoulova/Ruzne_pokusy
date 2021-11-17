/*
npx create-react-app my-react-app

cd my-react-app
npm start

React creates a VIRTUAL DOM in memory.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory,
 where it does all the necessary manipulating, before making the changes in the browser DOM.
React only changes what needs to be changed!

React uses ES6, and you should be familiar with some of the new features like:

Classes
Arrow Functions
Variables (let, const, var)
Array Methods like .map()
Destructuring
Modules
Ternary Operator
Spread Operator


/* In React, map() can be used to generate lists.
import React from 'react';
import ReactDOM from 'react-dom';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

ReactDOM.render(myList, document.getElementById('root'));

---- output:
apple

banana

orange
*/

/*
REACT JSX!!!!!!!!!!!!!!§
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

-----
JSX:
const myelement = <h1>I Love JSX!</h1>;
ReactDOM.render(myelement, document.getElementById('root'));

Without JSX:
const myelement = React.createElement('h1', {}, 'I do not use JSX!');
ReactDOM.render(myelement, document.getElementById('root'));

With JSX you can write EXPRESSIONS inside CURLY BRACES { }.
The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

const myelement = <h1>React is {5 + 5} times better with JSX</h1>;

const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

-----------------
The HTML code must be wrapped in ONE top level element.
So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
const myelement = (
  <div>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </div>
);

-----------
CLASSNAME
The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
Use attribute className instead.
JSX solved this by using className instead. When JSX is rendered, it translates className attributes into class attributes.

Example:
const myelement = <h1 className="myclass">Hello World</h1>;

--------
CONDITIONS
Option 1:
Write if statements outside of the JSX code:
Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myelement = <h1>{text}</h1>;

Option 2:
Use ternary expressions instead:

Example
Write "Hello" if x is less than 10, otherwise "Goodbye":

const x = 5;

const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

*/

/*
REACT COMPONENTS
Components are like functions that return HTML elements. 
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

When creating a React component, the component's name MUST start with an upper case letter.

- Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.

Example:
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

- Function Component
Here is the same example as above, but created using a Function component instead.
A Function component also returns HTML, and behaves much the same way as a Class component,
but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

- Rendering a Component
Now your React application has a component called Car, which returns an <h2> element.
To use this component in your application, use similar syntax as normal HTML: <Car />  (with self-closing tag)

Display the Car component in the "root" element:
ReactDOM.render(<Car />, document.getElementById('root'));

- Props
Components can be passed as props, which stands for properties.
Props are like function arguments, and you send them into the component as attributes.
Atributy se tykaji HTML tagů - napr. href="", src="", style="", alt="", title=""...

Example - PROPS and ATTRIBUTES:
Use an attribute to pass a color to the Car component, and use it in the render() function:

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

ReactDOM.render(<Car color="red"/>, document.getElementById('root'));

=> v reactu vytvarim vlastni html komponenty, ktery maji i vlastni atributy -ty pak slouzi k definovani props.

- Components in Components
We can refer to components inside other components:

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

- Components in Files
React is all about re-using code, and it is recommended to split your components into separate files.
To do that, create a new file with a .js file extension and put the code inside it:
Note that the filename must start with an uppercase character.
Example:
This is the new file, we named it "Car.js":

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

export default Car;

To be able to use the Car component, you have to import the file in your application.

Example:
Now we import the "Car.js" file in the application, and we can use the Car component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';

ReactDOM.render(<Car />, document.getElementById('root'));

*/

/*
REACT PROPS
Props are arguments passed into React components.
Props are passed to components via HTML attributes.
props stands for properties.
React Props are like function arguments in JavaScript and attributes in HTML.
- To send props into a component, use the same syntax as HTML attributes:
Example:
Add a "brand" attribute to the Car element:

const myelement = <Car brand="Ford" />;

- The component receives the argument as a props object:
Example:
Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

- Pass Data
Props are also how you pass data from one component to another, as parameters.

Example:
Send the "brand" property from the Garage component to the Car component as a STRING.
If you have a VARIABLE to send, and not a string as in the example above, you just put the variable name inside curly brackets

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
  //  return <h2>I am a { props.brand.model }!</h2>; // takhle by to muselo byt pro tu moznost s carInfo (coz je OBJEKT)
}

function Garage() {
    const carName="Ford";
    const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
      <Car brand={ carName } />
     // <Car brand={ carInfo } />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

POZN:React Props are read-only! You will get an error if you try to change their value.

DO RETURN DAVAM TO, CO CHCI, ABY SE VYRENDEROVALO NA STRANCE.

*/

/*
REACT EVENTS
React events are written in camelCase syntax: onClick instead of onclick.
React event handlers are written inside curly braces: onClick={shoot}  instead of onClick="shoot()".

React: <button onClick={shoot}>Take the Shot!</button>
HTML: <button onclick="shoot()">Take the Shot!</button>

1. EXAMPLE
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

2. EXAMPLE - To pass an argument to an event handler, use an arrow function.
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

3. REACT EVENT OBJECT
function Football() {
  const shoot = (a, b) => {
    alert(b.type);
    //'b' represents the React event that triggered the function, in this case the 'click' event
}
return (
  <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
);
}

ReactDOM.render(<Football />, document.getElementById('root'));

This will come in handy when we look at Form.

<button onClick={clicked()}>Click Me!</button> // tady by to clicked() byla uz primo funkce.
// zatimco u toho 1. examplu: shoot - je const, ve ktere je ta funkce ulozena.

*/

/*
REACT CONDITIONAL RENDERING
In React, you can conditionally render components.

1. IF STATEMENT
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const dalGol = props.isGoal;
  if (dalGol) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);
*/