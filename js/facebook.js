let facebookTopInput = document.querySelector("#facebookTopInput");
facebookTopInput.addEventListener("blur", myFacebook1);
facebookTopInput.addEventListener("click" , myFacebook);
function myFacebook(){
	document.getElementById("myImg").src = "https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png";
    document.getElementById("myImg").style.width = "30px"
}
function myFacebook1(){
	document.getElementById("myImg").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png";
    document.getElementById("myImg").style.width = "42px"
}
let facebookButtonUl = document.querySelector("#facebookButtonUl");
let newSrc = "https://cdn4.iconfinder.com/data/icons/basic-mobile-app-ui/50/04-59-round-arrow-up-512.png"
let oldSrc = " https://cdn2.iconfinder.com/data/icons/bold-ui/100/down-512.png"
let facebookButtonImg = document.querySelector("#facebookButtonImg");
let flage = true ;
 let change=()=>{
    if (flage == true) {
    	facebookButtonUl.style.display = "block";
    	facebookButtonImg.src = newSrc ;
    	console.log("hello word");
    	flage = false;
    }else if (flage == false) {
    	facebookButtonUl.style.display = "none";
    	facebookButtonImg.src = oldSrc ;
    	console.log("Ararat");
    	flage = true; 
    }
 }


class newGood{
  constructor(good1,good,monts,day) {
    this.good1 = good1
    this.good = good;
    this.monts = monts;
    this.day = day;
    
  }
  age() {

    let data = new  Date();
    data.setDate(this.day);
    data.setMonth(this.monts);
    data.setFullYear(this.good);
    return  data;
  }
  age1(){
        if (this.day < 31 && this.day > 0 ) {
            if (this.monts == 1 ) {
                 this.day < 28 ;
            }
        let data = new  Date(this.good, this.monts, this.day);
        return  data;
     } else{
        console.log("Error");
     }
 }age3(){
      let data1 = new Date(this.good1);
      return data1;
 }
}
inputik.addEventListener("blur",imMunc);
function imMunc(){
     let myGood = new newGood(inputik.value,1997,1,10);
     console.log(myGood.age());
     console.log(myGood.age1());
     console.log(myGood.age3());
     // inputik.style.display = "none";
}
let dateInput = document.querySelector(".dateInput");
dateInput.addEventListener("click" , function(){
      document.getElementById("inputik").style.display = "block";
})


var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item,vaytem,ayte,baes) {
  sum += item + vaytem;
  
  // console.log(item);
  console.log(ayte);
  console.log(baes);
  // console.log(vaytem);
}

let zangvac = ["hello" , "word" , "armenia"];
let zangvac2 = " ";
zangvac.forEach(myFunction1);

function myFunction1(erevan,avan){
   zangvac2 += erevan;
   console.log(zangvac2);

}


const array1 = ['a', 'b', 'c'];

array1.forEach(element = (e,b,c) => console.log(e+c));


// let grdon = ["hello" , "armenia", "erevan" , "shaumyan" ];
// let grdon1 = " ";


// for(grdon1 of grdon){
//     console.log(grdon1);
// }

// for(var i = 0 ; i < grdon.length; i++){
//     console.log(grdon[i]);
// }

// let grdon2 = "helo"
// let grdon3 = "tazik"

// for(x of grdon2){
//     console.log(x);
// }
// var z = " ";
// var y = " ";
// for(var i = 0 ; i < grdon2.length ; i++){
//     y = grdon2[i];
//     console.log(y)
//     for(var j = 0 ; j < grdon3.length; j++){
//         z = grdon3[j]
//         console.log(z)

//     }
// }

// let res0 = prompt("What is the c opitial of Armenia");
//  let points = 0 ;

//  if (res0 === "Yerevan") {
//     points = points + 1;
//  }

//  let resp1 = prompt("What is the c opitial of Russia");

//  if (resp1 === "Moscow") {
//     points++
//  }

//  let resp2 = prompt("What is the citey of America")

//  if (resp2 === "Vashington") {
//     points ++
//  }

//  alert("chist patasxaneciq" + points + "harci 3 harcic")
// let board = [
//   [ "_", "_", "_" ],
//   [ "_", "_", "_" ],
//   [ "_", "_", "_" ]
// ];
// console.log(board[0][1])

// let player = "x";

// while(true) {
//   let boardStr = board[0].join("   ") + 
//        "\n" + 
//        board[1].join("   ") +
//        "\n" +
//        board[2].join("   ");
     
//   let row = +prompt("Dear user, please provider the value for the row \n\n"+boardStr);
  
//   let column = +prompt("Dear user, please provider the value for the column \n\n"+boardStr);
  
//   // if(board[row][column] !== "_") {
//   //   alert("Not a legal move, you lose!");
//   //   break;}
//   //   if(board[0][0] === "x" && board[0][1] === "x") {
//   //   alert("game over");
//   //   break;
//   // }
  
//   board[row][column] = player;
  
//   if(player === "x") {
//     player = "o";
//   } else {
//     player = "x";
//   }

//    if(board[0][0] === "x" && board[0][1] === "x" && board[0][2] === "x" || board[1][0] ==="x" && board[1][1] === "x" && board[1][2] ==="x") {
//     alert("game over");
//     break;
//   }
  
  
// }



function imFunction(){
    
 let xl = document.getElementById("xl").value ;
 let xl1 = document.getElementById("xl1").value ;
 let xl2 = document.getElementById("xl2").value ;
 let xl3 = document.getElementById("xl3").value ;
 let xl4 = document.getElementById("xl4").value ;
 let xl5 = document.getElementById("xl5").value ;
 let xl6 = document.getElementById("xl6").value ;
 let xl7 = document.getElementById("xl7").value ;
 let xl8 = document.getElementById("xl8").value ;



if((xl == "x" || xl == "X") && (xl1 == "x" || xl1 == "X") && (xl2 == "x" || xl2 == "X")) {
        
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true; 
        document.getElementById("pXl").innerHTML = "haxtec x@";
}else if ((xl == "x" || xl == "X") && (xl3 == "x" || xl3 == "X") && (xl6 == "x" || xl6 == "X")) {

        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X -@");
}else if ((xl == "x" || xl =="X") && (xl4 == "x" || xl4=="X") && (xl8 == "x" || xl8 == "X")) {

        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if ((xl1 == "x" || xl1 =="X") && (xl4 == "x" || xl4=="X") && (xl7 == "x" || xl7 == "X")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if ((xl2 == "x" || xl2 =="X") && (xl5 == "x" || xl5=="X") && (xl8 == "x" || xl8 == "X")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if ((xl3 == "x" || xl3 =="X") && (xl4 == "x" || xl4=="X") && (xl5 == "x" || xl5 == "X")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if ((xl6 == "x" || xl6 =="X") && (xl7 == "x" || xl7=="X") && (xl8 == "x" || xl8 == "X")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if ((xl2 == "x" || xl2 =="X") && (xl4 == "x" || xl4=="X") && (xl6 == "x" || xl6 == "X")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec x@"; 
        alert("haxtec X-@");
}else if((xl == "o" || xl == "O") && (xl1 == "o" || xl1 == "O") && (xl2 == "o" || xl2 == "O")) {
        
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true; 
        document.getElementById("pXl").innerHTML = "haxtec O@";
        alert("Haxtec O-@");
}else if ((xl == "o" || xl == "O") && (xl3 == "o" || xl3 == "O") && (xl6 == "o" || xl6 == "O")) {

        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O -@");
}else if ((xl == "o" || xl =="O") && (xl4 == "o" || xl4=="O") && (xl8 == "o" || xl8 =="O")) {

        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O-@");
}else if ((xl1 == "o" || xl1 =="O") && (xl4 == "o" || xl4=="O") && (xl7 == "o" || xl7 == "O")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O-@");
}else if ((xl2 == "o" || xl2 =="O") && (xl5 == "o" || xl5=="O") && (xl8 == "o" || xl8 == "O")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec o@"; 
        alert("haxtec O-@");
}else if ((xl3 == "o" || xl3 =="O") && (xl4 == "o" || xl4=="O") && (xl5 == "o" || xl5 == "O")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl6").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O-@");
}else if ((xl6 == "o" || xl6 =="O") && (xl7 == "o" || xl7=="O") && (xl8 == "o" || xl8 == "O")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl2").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl4").disabled = true; 
        document.getElementById("xl5").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O-@");
}else if ((xl2 == "o" || xl2 =="O") && (xl4 == "o" || xl4=="O") && (xl6 == "o" || xl6 == "O")) {

        document.getElementById("xl").disabled = true; 
        document.getElementById("xl1").disabled = true; 
        document.getElementById("xl3").disabled = true; 
        document.getElementById("xl5").disabled = true; 
        document.getElementById("xl7").disabled = true; 
        document.getElementById("xl8").disabled = true;
        document.getElementById("pXl").innerHTML = "haxtec O@"; 
        alert("haxtec O-@");
}else if ((xl == 'x' || xl == 'o') && (xl1 == 'x' 
        || xl1 == 'o') && (xl2 == 'x' || xl2 == 'o') &&  
        (xl3 == 'x' || xl3 == 'o') && (xl4 == 'x' ||  
        xl4 == 'o') && (xl5 == 'x' || xl5 == 'o') &&  
        (xl6 == 'x' || xl6 == 'o') && (xl7 == 'x' ||  
        xl7 == 'o') && (xl8 == 'x' || xl8 == 'o')) { 
            document.getElementById('pXl').innerHTML = "Match Tie"; 
            window.alert('Match Tie'); 
    } 



}
variableXL = 1 ;
function imFunction1(){
    if (variableXL == 1 ) {
        document.getElementById("xl").value = "x";
        document.getElementById("xl").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl").value = "o";
        document.getElementById("xl").disabled = true;
        variableXL = 1;
    }
}
function imFunction2(){
     if (variableXL == 1 ) {
        document.getElementById("xl1").value = "x";
        document.getElementById("xl1").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl1").value = "o";
        document.getElementById("xl1").disabled = true;
        variableXL = 1;
    }
}
function imFunction3(){
     if (variableXL == 1 ) {
        document.getElementById("xl2").value = "x";
        document.getElementById("xl2").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl2").value = "o";
        document.getElementById("xl2").disabled = true;
        variableXL = 1;
    }
}
function imFunction4(){
    if (variableXL == 1 ) {
        document.getElementById("xl3").value = "x";
        document.getElementById("xl3").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl3").value = "o";
        document.getElementById("xl3").disabled = true;
        variableXL = 1;
    }
}
function imFunction5(){
     if (variableXL == 1 ) {
        document.getElementById("xl4").value = "x";
        document.getElementById("xl4").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl4").value = "o";
        document.getElementById("xl4").disabled = true;
        variableXL = 1;
    }
}
function imFunction6(){
     if (variableXL == 1 ) {
        document.getElementById("xl5").value = "x";
        document.getElementById("xl5").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl5").value = "o";
        document.getElementById("xl5").disabled = true;
        variableXL = 1;
    }
}
function imFunction7(){
    if (variableXL == 1 ) {
        document.getElementById("xl6").value = "x";
        document.getElementById("xl6").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl6").value = "o";
        document.getElementById("xl6").disabled = true;
        variableXL = 1;
    }
}
function imFunction8(){
     if (variableXL == 1 ) {
        document.getElementById("xl7").value = "x";
        document.getElementById("xl7").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl7").value = "o";
        document.getElementById("xl7").disabled = true;
        variableXL = 1;
    }
}
function imFunction9(){
     if (variableXL == 1 ) {
        document.getElementById("xl8").value = "x";
        document.getElementById("xl8").disabled = true;
        variableXL = 0;
    }else{
        document.getElementById("xl8").value = "o";
        document.getElementById("xl8").disabled = true;
        variableXL = 1;
    }
}
function imFunction10(){
      location.reload(); 
    document.getElementById('xl1').value = ''; 
    document.getElementById("xl2").value = ''; 
    document.getElementById("xl3").value = ''; 
    document.getElementById("xl4").value = ''; 
    document.getElementById("xl5").value = ''; 
    document.getElementById("xl6").value = ''; 
    document.getElementById("xl7").value = ''; 
    document.getElementById("xl8").value = ''; 
    document.getElementById("xl9").value = ''; 
}

let x = [5,8,19,340,24,58,919,82,11,33];

let y = [];
let z = [];
let i = 0;
let i2 = 0;
let i3 = 0;

// debugger
// while(i < x.length){
//     if (x[i] % 2 !==0) {
//       y[i2] = x[i] ;
//       i2 = i2 + 1 ; 
//     }else if (x[i] % 2 === 0) {
//        z[i3] = x[i];
//        i3 ++;
//     }
//     i++;

// }
// alert(y);
// alert(z);
// let google = function(y,h){
//     return y * h ;
// }

// var person = [ 

// {
//      firstName:"John", 
//      lastName:"Doe",
//      age:50,
//      eyeColor:"blue"
// },

// {
//      firstName:"Hmobo", 
//      lastName:"eoa",
//      age:70,
//      eyeColor:"red"
// },
// [0,1,2],
// [
//  [2,5,7]
// ]

// ]
// console.log(google(person[2][2],person[3][0][1]));
// // console.log(person.eyeColor);
// // console.log(person[3][0]);

var person1 = [ 

{
     firstName:"karen Sargsyan", 
     lastName:"Doe",
     age:50,
     eyeColor:"blue"
},

{
     firstName:"Hayk Vardanyan", 
     lastName:"eoa",
     age:70,
     eyeColor:"red"
},

{
     firstName:"karo Petrosyan", 
     lastName:"dud",
     age:10,
     eyeColor:"green"
},

{
     firstName:"Irina Mkrtchyan", 
     lastName:"blor",
     age:120,
     eyeColor:"black"
},
]

// person1.filter(function(val,i){
//     console.log(val.firstName);
// })

let searchBox = document.querySelector("#searchBox");
let spanImgClassName = ["clossSpan" , "clossSpan1" ,"clossSpan2" ,"clossSpan3"];
let spanClassName = ["addSpan","addSpan1","addSpan2" , "addSpan3"] ;
let searchik = document.querySelector("#searchik");
let spanH4 = document.querySelector("#spanH4");


facebookTopInput.addEventListener("keyup", function(key){

    
     let filteredUsers = person1.filter(function(user){
        return  user.firstName.toLocaleLowerCase().includes(facebookTopInput.value.toLocaleLowerCase());
        
     });
     searchBox.innerHTML = "" ;
     if (filteredUsers == false) {
        searchBox.innerHTML = "no recent searches" ;
        searchBox.style.textAlign = "center" ;
        searchBox.style.fontFamily = "inherit";
        searchBox.style.fontSize = "24px" ;
     }
     

     for(user of filteredUsers){
        console.log(user);
        let drel = document.createElement("span");
        // drel.className = "SearchSpan" ;
        let gg = document.getElementById("SearchSpan");
        let imgmy = document.createElement("img");
        imgmy.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png";

        drel.innerHTML = `
              ${user.firstName}
        `

        imgmy.className = spanImgClassName[i];
        drel.className = spanClassName[i];
        i++;

        searchBox.appendChild(drel);
        drel.appendChild(imgmy);

     }
    // let clossSpan = document.querySelector(".clossSpan");
    // console.log(clossSpan.click(true));


let clossSpan = document.querySelector(".clossSpan");
let addSpan = document.querySelector(".addSpan");

clossSpan.addEventListener("click" , function() {
    addSpan.style.background = "green" ;
    addSpan.style.display = "none" ;
} );

let clossSpan1 = document.querySelector(".clossSpan1");
let addSpan1 = document.querySelector(".addSpan1");

clossSpan1.addEventListener("click" , function() {
    addSpan1.style.background = "green" ;
    addSpan1.style.display = "none" ;
} );

let clossSpan2 = document.querySelector(".clossSpan2");
let addSpan2 = document.querySelector(".addSpan2");

clossSpan2.addEventListener("click" , function() {
    addSpan2.style.background = "green" ;
    addSpan2.style.display = "none" ;
} );

let clossSpan3 = document.querySelector(".clossSpan3");
let addSpan3 = document.querySelector(".addSpan3");

clossSpan3.addEventListener("click" , function() {
    addSpan3.style.background = "green" ;
    addSpan3.style.display = "none" ;
} );

});

// let searchSpanImg = document.querySelector(".searchSpanImg");
// console.log(searchSpanImg);
// searchSpanImg.addEventListener("click", searchCloss);
// function searchCloss(){
//     searchSpanImg.style.background = "green";
//     console.log(searchSpanImg);
// }
//  let doc = document.querySelector(".SearchSpan");
// console.log(doc);






// function forEach(arr,func){
//     function loop(i){
//         if (i >= arr.length){
//             return;
//         }
//         func(arr[i] ,i)
//         loop(i + 1);
//     }
//     loop(0);
// }

// forEach([5,4,3],function(val,i) {
//     console.log(val + " " + "hat index" + i);
// });


// function match(a,b){
//     if (b === 0) {

//         return 1;
//     }

//     return  a * match(a , b - 1); 
// }

// alert(match(5,3));
















// while(i < person1.length){
//      let drel = document.createElement("span");
//      drel.className = "SearchSpan" ;
//      let gg = document.getElementById("SearchSpan");
//      let imgmy = document.createElement("img");
//      imgmy.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png";
//      imgmy.className = "searchSpanImg";
//       drel.innerHTML = `
//        <p class="cfg">${person1[i].firstName}</p>
//     `
//     imgmy.className = spanImgClassName[i];
//     drel.className = spanClassName[i];
//       i++;   
//      searchBox.appendChild(drel);
//      drel.appendChild(imgmy);
// }

// while(i < person1.length){
//      let drel = document.createElement("span");
//      drel.className = "SearchSpan" ;
//      let gg = document.getElementById("SearchSpan");
//      let imgmy = document.createElement("img");
//      imgmy.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/OOjs_UI_icon_close.svg/1200px-OOjs_UI_icon_close.svg.png";
//      imgmy.className = "searchSpanImg";
//       drel.innerHTML = `
//        <p class="cfg">${person1[i].firstName}</p>
//     `
//     imgmy.className = spanImgClassName[i];
//     drel.className = spanClassName[i];
//       i++;   
//      searchBox.appendChild(drel);
//      drel.appendChild(imgmy);
// }



// function persion(name,lastname,age,frends) {
//     this.name = name,
//     this.lastname = lastname,
//     this.age = age,
//     this.frends = [frends];
//     this.getFullName = () => {
//         return this.name + " " + this.lastname
//     };
// }

// let grel = new persion("persionn","shersion" ,12);
// console.log(grel);
// let multik = new persion("mult","shult",25,grel.getFullName());
// console.log(multik.getFullName());
// console.log(multik.frends);

// function summ(arr){
    
//     return arr.reduce(function(aggr,val){
//         if (Array.isArray(val)) {
//         return aggr + summ(val);
//     }
//         return aggr + " " + val;
//     } );
// }

// alert(summ([5,43,[5,6,[5,6]],2]));
// alert(summ(["hello","jello","gell",["jj", "kkn"],"kkk"]))
 // let ararar = [2,8,6,2,3,80];
//  console.log(ararar);
//  ararar.reduce(function(ab,ba){
//      let ararar = [2,8,6,2,3];
//      console.log(ab + ba);
// });
// let barar = [20,30,50,80];
// let ayy = barar.reduce(fun);
// let ay = ararar.reduce(fun);

// function fun(ta,at){
//     return ta + at;
// }
// console.log(ayy);

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj))
localStorage.setItem();

