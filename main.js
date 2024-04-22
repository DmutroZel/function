// function showMessage(){
//     let message  = 'hello'
//     console.log(message);
// }
// showMessage();




// function helloUser(name, age=0){
//     console.log(`Hello my name is ${name} i have ${age} y.o`);
// }
//  helloUser('Taras', 20)
//  helloUser('Ivan',13)
//  helloUser('Alina', 14)
//  helloUser('Petro' )








//  function sum(num1,num2){
//   return num1 + num2;
//  }
 


//  let res = 25 / sum(1,4);
// console.log(res)



//  function showGreeting(){
//      let message  = 'hello'
//      console.log(message);
//   }
//  showGreeting();

//  function helloUser(name){
//  console.log(`Hello ${name}!!`);
//  }
//  helloUser('Taras');



//  function sum(num1,num2,num3){
//    return num1 + num2 + num3;
//  }
//  console.log(sum(3, 4, 9));


   

// function vid(num1,num2){
//     return num1 - num2;
//   }
//   console.log(vid(3, 4, ));
 
//  function getMin(num1,num2){
//     if(num1>num2){
//     return num1;
//  } else {
//     return num2
//  }
// }
// console.log(getMin(1,4));

// function getMax(num1,num2){
//     if(num1<num2){
//     return num1;
//  } else {
//     return num2
//  }
// }
// console.log(getMin(16,2));


// function divBigToSmall(num1, num2){
//     return getMax(num1,num2) / getMin(num1, num2);
// }

// function  areaRectangle(num1,num2,){
//     return num1 * num2;
// }
// console.log(areaRectangle(3,4));


// function  areaRectangle(num1,num2,num3,num4){
//     return num1 + num2 + num3 + num4;
// }
// console.log(areaRectangle(3,4,3,4));

// function widthCircus(num1,num2,num3){
//     return num1 * num2 * num3;
// }
// console.log(widthCircus(2,3.14,5));


// function areaCircus(num1,num2,num3){
//     return num1 * num2 * num3;
// }
// console.log(areaCircus(2,3.14,10));








 function checkTriangle(side1, side2, side3) {
    if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
        return true;
    } else {
        return false;
    }
}

function setSide() {
    const side1 = (prompt("Введіть довжину першої сторони трикутника:"));
    const side2 = (prompt("Введіть довжину другої сторони трикутника:"));
    const side3 = (prompt("Введіть довжину третьої сторони трикутника:"));

    if (checkTriangle(side1, side2, side3)) {
        console.log("Такий трикутник існує.");
    } else {
        console.log("Такий трикутник не існує.");
    }
}

setSide();




