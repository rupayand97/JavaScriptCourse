//Sync in JS
// Synchronous : Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution.

// Asynchronous : Due to synchronous programming, sometimes important instructions get blocked due to some previous
// instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.


//asynchronous program
// console.log("one");
// setTimeout(()=>{
//     console.log("hello");
// },3000);
// console.log("two");


//Callbacks: A callback is a function passed as an argument to another function.
// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(2,4,sum) //here we pass sum function. so, the type of fn which is passed to another fn as an argument is called callback.

// [Note: we never pass callback with parantheses (). if we pass like this- sum(), it will not run. if we pass like this- sum(),
// it means we are running here itself and immediately.]
//we can write as below also-
// function calculator(a,b,sumCallBack){
//     sumCallBack(a,b);
// }
// calculator(2,4,(a,b)=>{
//     console.log(a+b);
// })
//the above callback was synchronous callback

//let see asynchronous callback
// setTimeout(()=>{
//     console.log("Hello");
// }, 3000);
//----------------------------------------------------------------------------------------------------------------------------------------
//when we use callbacks, than a problem arises, which is called as callback hell
// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.(Pyramid of Doom)
// This style of programming becomes difficult to understand & manage.
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data", dataId);
//     }, 3000)   
// }
//suppose we want data1 , than after 3sec data2, again after 3sec data3
// but if we do like this-
// getData(1);
// getData(2);
// getData(3);
//if we give all 3 data together after 3sec, not one after another. but we want individual delay. to do that we need to use callback.


// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data", dataId);
//         if(getNextData){
//             getNextData();
//         } 
//     }, 2000)   
// }
// // getData(1, getData(2)); // after executing 1st data, we want again, so we are executing getNextData();which will call getData() again
// // to get the next data. but we can't write like this, because it will execute immediately. so, we can write as arrow function to deal with it.

// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=>{
//                 getData(5)
//             })
//         })
//     })
// });
// Now, we achieve our goal to get each data after very 2 sec. but we are putting callback inside a callback. i.e., nested callback.
// which is creating callback hell.
//--------------------------------------------------------------------------------------------------------------------------------------------

//to solve callback hell problem, we use the concept of promises.

//Promises
//Promise is for "eventual" completion of task. It is an object in JS.
//It is a solution to callback hell.
//promises has three sates: pending,fulfilled(resolve) and rejected

//let promise = new Promise((resolve, reject)=>{...})    //Note: (resolve, reject)=>{...} , function with 2 handler
//resolve and reject are callbacks provided by JS.

// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise"); 
//     //if we print the promise, we will get
//     /* Promise {<pending>}
//           [[Prototype]]: Promise
//           [[PromiseState]]: "pending"
//           [[PromiseResult]]: undefined */
    
//     // resolve(123) //resolve is a function, JS will call it. now if we print the promise
//     /* Promise {<fulfilled>:123}
//           [[Prototype]]: Promise
//           [[PromiseState]]: "fulfilled"
//           [[PromiseResult]]: 123 */

//     reject("some error occured"); //it will give us an error
//     // [Note: here we created promise just to understand, but generalluy we don't create promise object.
//     //     we are request to an API for data, than the API send us the promise]
// })


//use of function .then() and .catch()
/*const getPromise = () =>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("error");
    });
};
let promise = getPromise();

promise.then((res)=>{
    console.log("promise fulfilled", res);
});
promise.catch((err)=>{
    console.log("rejected", err);  
})*/
//----------------------------------------------------------------------------------------------------------------------------
//promise chaining
function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);   
    });
}
// getData(1).then((res)=>{
//     console.log(res); 
//     getData(2).then((res)=>{
//         console.log(res);  
//     })
// });
//or we can write like this
getData(1)
    .then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3)
}).then((res)=>{
    console.log(res);
    
})
//this is called a chain of .then (ultimately called as promise chain)

//----------------------------------------------------------------------------------------------------------------------------
//Async-Await
/* async function always return a promise
async function myFunc(){...}
await pauses the execution of its surrounding async function until the promise is settled.*/

// async function hello(){
//     console.log("hello");
// }
//now this function will return a promise

//let assume the below fn as an api which return data after 2000ms. it is the example of implementation of async-await
/*function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("success")
        }, 2000)
    });
}
async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd call [after completing 1st call, than only 2nd call will execute]
}
getWeatherData()*/
//-----------------------------------------------------------------------------------------------------------------------------

// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("success")
//         }, 2000)
//     });
// }

// async function getAllData(){
//     console.log("getting data 1..............");
//     await getData(1);
//     console.log("getting data 2..............");
//     await getData(2);
//     console.log("getting data 3..............");
//     await getData(3);
//     console.log("getting data 4..............");
//     await getData(4);
//     console.log("getting data 5..............");
//     await getData(5);
// }
// getAllData()

//----------------------------------------------------------------------------------------------------------------------------------
//IIFE(Immediately Invoked Function Expression): IIFE is a function that called immediately as soon as it is defined.
//Syntax:
// (function(){
//     //code
// })();

// //or

// (()=>{
//     //code
// })();

// //or

// (async()=>{
//     //code
// })();

//IIFE is unnamed function. which executes immediately. sometimes, we need this type of function when we want to execute our code immediately.
// (async function getAllData(){
//     console.log("getting data 1..............");
//     await getData(1);
//     console.log("getting data 2..............");
//     await getData(2);
//     console.log("getting data 3..............");
//     await getData(3);
//     console.log("getting data 4..............");
//     await getData(4);
//     console.log("getting data 5..............");
//     await getData(5);
// })();
//here code will execute automatically, no need to call the function.