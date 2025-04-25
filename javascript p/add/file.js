// let userchoice = prompt("enter the choice: a , b , c:");

// function simplify(x,y){
//     if(userchoice === "a"){
//         return x + y;
//     } else if(userchoice === "b"){
//         return x - y;
//     } else if(userchoice === "c") {
//         return x * y;
//     } else {
//         return "invalid option";
//     }
// }
// let result = simplify(2,3);
// console.log(result);




// let num = parseInt(prompt("enter first number:"));
// let num2 = parseInt(prompt("enter second number:"));
// let userchoice = prompt("choice a,b,c:");

// const simplify = (num , num2) =>{

//     if(userchoice === "a"){
//                 return num + num2;
//          } else if(userchoice === "b"){
//                 return num - num2;
//            } else if(userchoice === "c") {
//               return num * num2;
//            } else {
//         return "invalid option";
//     }
// }

// let result = simplify(num, num2);
// console.log(result);


// let choose = prompt("Enter whatever you want:");
// console.log("You entered:", choose);


// let num = parseInt(prompt("enter first number:"));
// let num2 = parseInt(prompt("enter second number:"));
// let day = prompt("Enter the Month:");

// const youGet = () =>{
//     switch(day.toLowerCase()){
//         case "sunday":
//             let add = (num,num2) => {
//                 return num + num2;
//             }
//             console.log(add(num,num2));
//             break;
//             case "monday":
//                 let sub = (num,num2) =>{
//                     return num - num2;
//                 }
//                 console.log(sub(num,num2));
//                 break;
//             default:
//                 console.log("invalid day");
//     }
// }

// let result = youGet();
// console.log(result);


const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const profile = document.querySelector("#p");
const link = document.querySelector("#list");
const game = document.querySelector("#game");




const fun = () =>{
    game.addEventListener('click',function(e){
        e.preventDefault();
    },false)

    
    link.addEventListener('click',function(e){
        console.log(e.target.parentNode);
        let removeit = e.target.parentNode;
        removeit.remove();
    },false)


    profile.addEventListener('click',function(){
        alert("profile clicked!");
    })


    btn.addEventListener('click', function(){
        output.innerHTML = "button clicked!";
    })
}
const result = fun();
console.log(result);

