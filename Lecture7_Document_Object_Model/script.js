// DOM Manipulation 
// (i) Attributes
//     - getAttribute(attr) //to get the attribute value
//     - setAttribute(attr, value) //to set the attribute value
// (ii) Style
//     -node.style
// (iii) Insert Elements :  let el = document.createElement("div")
//     -node.append(el)  //adds at the end of node (inside)
//     -node.prepend(el) //adds at the start of node (inside)
//     -node.before(el)  //adds before the node (outside)
//     -node.after(el)   //adds after the node (outside)
// (iv) Delete Element
//     -node.remove()    //removes the node

//------------------------------------------------------------------  
/* let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","newClass")); */
//------------------------------------------------------------------

/*let div = document.querySelector("div");
// console.log(div)
// console.log(div.style);
// div.style.visibility = "hidden";
div.style.backgroundColor = "green";
div.innerText = "Hello!"*/
//------------------------------------------------------------------
/*let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Click Me!"

let div = document.querySelector("div");
div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);*/

/*let heading = document.createElement("h1");
heading.innerHTML="<i>Hi, I am New!</i>";
document.querySelector("body").prepend(heading);*/
//------------------------------------------------------------------
/*let para = document.querySelector("p");
para.remove();*/
//------------------------------------------------------------------
//Additional Notes:
// appendChild():
// removeChild():
/* let parent = document.querySelector("#parent");
let child = document.querySelector("#child2");
let throwawayNode = parent.removeChild(child);
console.log(throwawayNode); */
//------------------------------------------------------------------
//Practice:
/*Q1:Create a new button element. Give it a text "click me",background color of red and text color of white.
Insert the button as the first element inside the body tag*/

/*let btn = document.createElement('button');
btn.innerText="Click Me!"
btn.style.color = "white";
btn.style.backgroundColor = "red";
let body = document.querySelector("body");
body.append(btn);*/

/*Q2:Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice how you overwrite theh class name when you add a new one?
Solve the problem using classList.*/

let para = document.querySelector("p");
/*console.log(para);
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class", "newClass"));*/

/*Note: when we use setAttribute, it will override the previous class,so,we can see that only backGround-color:green; is applied.
i.e, only newClass is applied. color:red; is not applied. i.e, class name content is no longer applied. but we want both so,
we can use classList*/

// console.log(para.classList);   //0:content (length=1)

para.classList.add("newClass");

// console.log(para.classList);  //0:content 1:newClass (length=2)

para.classList.remove("newClass");