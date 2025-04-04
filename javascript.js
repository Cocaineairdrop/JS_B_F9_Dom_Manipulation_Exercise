// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// Your Exercise //

//1. <p> with red text that says "Hey I'm red!"

const paragraph = document.createElement("p");
paragraph.style.cssText = "color: red;";
paragraph.textContent = "Hey I'm red!";

container.appendChild(paragraph);

//2. an <h3> with blue text that says "I'm a blue h3!"

const heading = document.createElement("h3");
heading.style.cssText = "color: blue;";
heading.textContent = "I'm a blue h3!";

container.appendChild(heading);

//3. a <div> with a black border and pink
// background color with the following elements
// inside of it:
//  - another <h1> that says "I'm in a div"
//  - a <p> that says "ME TOO!"
//  - Hint for this one: after creating the 
//  <div> with createElement, append the <h1> 
//  and <p> to it before adding it to the container.

const divElement = document.createElement("div");
divElement.classList.add("divElement");
divElement.style.cssText = "border: 1px solid black; background: pink;";

const headingLrg = document.createElement("h1");
headingLrg.textContent = "I'm in a div";
const paragraphTwo = document.createElement("p");
paragraphTwo.textContent = "ME TOO!";

divElement.appendChild(headingLrg);
divElement.appendChild(paragraphTwo);

container.appendChild(divElement);
