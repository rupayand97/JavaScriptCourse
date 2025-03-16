//Events in JS 
/*->The change in the state of an object is known as an Event.
  ->Events are fired to notify code of "interesting changes" that may affect code execution.

- Mouse events(click, double click etc.)
- Keyboard events (keypress, keyup, keydown)
- From events(submit etc.)
- Print event & many more

->Event Handling in JS
node.event = () => {
    handle here
}
*/
//-----------------------------------------------------------------------------------
/*let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a); //26
        
}

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You are inside the div"); 
}
//again if we use same event on same node. it will override and execute the second code.
div.onmouseover = () =>{
    console.log("You are inside the div 2nd function"); 
} */

//Note: If we use event handling in inline as well as external. than external will have the more priority.
//-----------------------------------------------------------------------------------
/*
Event Object
-It is a special object that has details about the event.
-All event handlers have access to the Event Object's properties and methods.
    node.event=(evt)=>{
        //handle here
    }
evt.target, evt.type, evt.clientX, evt.clientY
*/
/*let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) =>{
    console.log(evt);
    console.log(evt.type); //click
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);   
}
let div = document.querySelector("div");
div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type); //click
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);   
}*/
//-----------------------------------------------------------------------------------
/*
Event Listeners
---------------
- node.addEventListener(event, callback)
- node.removeEventListener(event, callback)
Note: the callback reference should be same to remove

additional notes: we already saw inline handling and handling using function,
where we can only use same event one time. but using event listener we can
use multiple handler and we can make different works from different handler.

*/
/*
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler1");
});
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler2");
});
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler3");
});
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked - handler4");
// });

//remove handler
//suppose i want to remove handler4
btn1.removeEventListener("click",()=>{
    console.log("button1 was clicked - handler4");
});
//but it will not work as for both (add and remove) there refence is different.
//so, we need to store the events into some variable.

let handler4 = ()=>{
    console.log("button1 was clicked - handler4");
}
btn1.addEventListener("click",handler4);

btn1.removeEventListener("click", handler4); */
//-----------------------------------------------------------------------------------
//Practice
//Q1. Create a toggle button that changes the screen to dark-mode when clicked &
// light mode when clicked again.

/*let toggleBtn = document.querySelector("#toggleBtn");

let currMode="light";
toggleBtn.addEventListener("click",()=>{
    // console.log("You are trying to change mode");
    if(currMode=="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode="light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode); 
}); */

//Or we can using css classes to toggle color

let toggleBtn = document.querySelector("#toggleBtn");
let body = document.querySelector("body");
let currMode="light"; 
toggleBtn.addEventListener("click",()=>{
    if(currMode=="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light")
    } else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark")
    }
    console.log(currMode); 
});