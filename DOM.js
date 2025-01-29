// for selecting a tag dfrom html file

/*
- getElementById
- getElementsByClassName
- getElementsByTagName
- querySelector
- querySelectorAll
*/


// let h1 = document.getElementById("tag1");
// console.log(h1)

// //text manipulation
// h1.innerHTML = "Hello EveryOne"
// h1.textContent = "Hey  Hello"

// //displaying the content in h1
// console.log(h1.textContent)


// location.assign("google.com")
// console.log(screen.orientation);

// move one step for/back 
//history

// id is unique value
// For adding elements to the webpage using this js code
// let div = document.createElement("div");
// div.innerText - "created using js";
// let textNode = document.createTextNode("created using js")
// create a class
// div.classList = "divClass class2 class3"
// div.className = "divClass";

// let body = document.getElementById("data");
// // append a textNode or anything to the source
// body.append(textNode)
// console.log(div)

// let list = document.getElementsByClassName("one");
// console.log(list)//displays all elements

// let list2 = document.getElementsByClassName("one")[1]
// console.log(list2)

// let list3 = document.getElementsByTagName("li")[0]
// console.log(list3)

// // using query selector
// // first query which matches 
// let list4 = document.querySelector("ul li")
// console.log(list4)


// let b = document.getElementById("data");
// let ul = document.createElement("ul");
// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// let li4 = document.createElement("li");
// let li5 = document.createElement("li");
// ul.append(li1,li2,li3,li4,li5);
// console.log(ul);

// let text1 = document.createTextNode("onion");
// let text2 = document.createTextNode("carrot");
// let text3 = document.createTextNode("tomato");
// let text4 = document.createTextNode("beans");
// let text5 = document.createTextNode("potato");
// li1.append(text1)
// li2.append(text2)
// li3.append(text3)
// li4.append(text4)
// li5.append(text5)

// console.log()
// b.append(ul)

// // ul.style.backgroundColor = "black"
// // ul.style.color = "red"
// ul.style.cssText =`color:teal;`

// let fruits = ["apple" , "orange" , "pineapple", "mango"]
// let ul = document.createElement("ul")
// fruits.map((i) => {
//     let li = document.createElement("li")
//     let tN = document.createTextNode(i)
//     li.append(tN)
//     ul.append(li)
// })
// b.append(ul)

// Date operations
// let date = new Date();
// // retrieve the date(1-31) of the today's date
// console.log(date.getDate());
// // to retrieve hour
// console.log(date.getHours())
// // to retrieve minutes
// console.log(date.getMinutes());
// // to retrieve full details
// console.log(date.getFullYear())
// // seconds
// console.log(date.getSeconds())

// assesement - to Build an real time clock like that
// console.log("Today Date   : " + date.getDate() + "-" + date.getMonth()+1 + "-" + date.getFullYear())
// console.log("Current Time : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() )

// let button = document.getElementById("btn");
// button.addEventListener("click",()=>{
//     alert("you have clicked the button");
// })

// let parent = document.getElementsByClassName("div1")

// parent.addEventListener("click" , () => {
//     alert("you clicked the parent")
// })