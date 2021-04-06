let select = document.querySelector("#select");
let select1 = document.querySelector("#select1");
let selecr2 = document.querySelector("#selecr2");
let selectZangvac = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
for(var i = 0; i < selectZangvac.length; i++){
	select.innerHTML += ` <option> ${selectZangvac[i]}</option>`
}
 for(var i = 0 ; i <= 31 ; i++ ){
    select1.innerHTML += ` <option> ${i}</option>`;
 }
 for(var i = 2021; i >= 1975; i=i-1 ){
 	select2.innerHTML += ` <option> ${i}</option>`;
 }
let input = document.querySelector("#inputFocus");
let input1 = document.querySelector("#inputFocus1");
input.addEventListener("focusin", myFunction);
input.addEventListener("focusout", myFunction1);
function myFunction(e){input.style.border = "solid blue 1px";}
function myFunction1(e){input.style.border = " solid 1px #c6c6c6";}
input1.addEventListener("focusin", myFunction2);
input1.addEventListener("focusout", myFunction3);
function myFunction2(e){
	input1.style.border = "solid blue 1px";
}
function myFunction3(e){input1.style.border = " solid 1px #c6c6c6";}
let btn = document.querySelector(".btn1");
let sing = document.querySelector(".sing");
let closs = document.querySelector(".bi1");

btn.addEventListener("click", myFunction5);

function myFunction5(e){
	sing.classList.add("sing-flex");
}


closs.addEventListener("click", myFunction6);
function myFunction6(){sing.style.display = " none " ;}


inputik = document.querySelector("#inputik");
none = document.querySelector(".none");
inputik1 = document.querySelector("#inputik1");
inputik2 = document.querySelector("#inputik2");
inputik.addEventListener("click" ,myFunction7);
function myFunction7(){
	none.style.display = "flex";
}
inputik1.addEventListener("click" , myFunction8);
function myFunction8(){
	none.style.display = "none";
}
inputik2.addEventListener("click" , myFunction9);
function myFunction9(){
	none.style.display = "none";
}


let lastNameInp = document.querySelector("#LastNameInp");
let mobileInp  = document.querySelector("#mobileInp");
let passwordInp = document.querySelector("#passwordInp");
let svgIcon = document.querySelector(".icon");
let svgIcon1 = document.querySelector(".icon1");
let svgIcon2 = document.querySelector(".icon2");
let svgIcon3 = document.querySelector(".icon3");
let informacia = document.querySelector(".informacia");
let informacia1 = document.querySelector(".informacia1");
let informacia2 = document.querySelector(".informacia2");
let informacia3 = document.querySelector(".informacia3");

firstNameInp = document.querySelector("#firstNameInp")
firstNameInp.addEventListener("blur" , myFunction10);
firstNameInp.addEventListener("keydown" , myFunction11 );
firstNameInp.addEventListener("click" , myFunction12);

lastNameInp.addEventListener("blur" , myFunction13);
lastNameInp.addEventListener("keydown" , myFunction14 );
lastNameInp.addEventListener("click" , myFunction15);

mobileInp.addEventListener("blur" , myFunction16 );
mobileInp.addEventListener("keydown" , myFunction17);
mobileInp.addEventListener("click" , myFunction18);

passwordInp.addEventListener("blur" , myFunction19 );
passwordInp.addEventListener("keydown" , myFunction20);
passwordInp.addEventListener("click" , myFunction21);
let iconBlockDivvv = document.querySelector(".iconBlock");
let forgot = true ;
function myFunction10(e) {
	if (firstNameInp.value >= "a" || firstNameInp.value >= 4 ) {
		firstNameInp.style.border = "solid 0.5px #c6c6c6 "
	}else if (firstNameInp.value.length == 0){
		firstNameInp.style.border = "solid  1px red"
	   svgIcon.style.display = " block";
	   informacia.style.display = "none";
	}else{
	firstNameInp.style.border = "solid  1px red";
	svgIcon.style.display = " block";
	}	
}
 function myFunction11(event) {
 	if (event.key >= "a" && event.key <= "z" || event.key >= "ա" && event.key <= "ֆ" ) {
		firstNameInp.style.border = "solid  1px #c6c6c6"
				informacia.style.display = " none" ;
				console.log(event.keyCode);
	}else{
	firstNameInp.style.border = "solid  1px red"
	}
}
function myFunction12(){
	if (forgot == true) {
		firstNameInp.style.border = " solid 1px #c6c6c6";
	svgIcon.style.display = " none";
	forgot = false ;
	}	else if (firstNameInp.value >= "a" || firstNameInp.value >= 4 ) {
		firstNameInp.style.border = "solid  1px #c6c6c6"
				informacia.style.display = " none" ;
	}else{
	    firstNameInp.style.border = " pink 1px solid";
	    informacia.style.display = "block";
	    svgIcon.style.display = " none" ;
  
        }
 }
function myFunction13(e) {
	if (lastNameInp.value >= "a" || lastNameInp.value >= 4 ) {
		lastNameInp.style.border = "solid 0.5px #c6c6c6 "
	}else if (lastNameInp.value.length == 0){
		lastNameInp.style.border = "solid  1px red"
	   svgIcon1.style.display = " block";
	   informacia1.style.display = "none";
	}else{
	lastNameInp.style.border = "solid  1px red";
	svgIcon1.style.display = " block";
	}	
}
 function myFunction14(event) {
 	if (event.key >= "a" && event.key <= "z" || event.key >= "0" && event.key <= "9" ) {
		lastNameInp.style.border = "solid  1px #c6c6c6"
				informacia1.style.display = " none" ;
	}else{
	lastNameInp.style.border = "solid  1px red"
	}
}
function myFunction15(){
	if (forgot == true) {
		lastNameInp.style.border = " solid 1px #c6c6c6";
	svgIcon1.style.display = " none";
	forgot = false ;
	}	else if (lastNameInp.value >= "a" || lastNameInp.value >= 4 ) {
		lastNameInp.style.border = "solid  1px #c6c6c6"
				informacia1.style.display = " none" ;
	}else{
	    lastNameInp.style.border = " pink 1px solid";
	    informacia1.style.display = "block";
	    svgIcon1.style.display = " none" ;
  
        }
 }
function myFunction16(e) {
	if (mobileInp.value >= "a" || mobileInp.value >= 4 ) {
		mobileInp.style.border = "solid 0.5px #c6c6c6 "
	}else if (mobileInp.value.length == 0){
		mobileInp.style.border = "solid  1px red"
	   svgIcon2.style.display = " block";
	   informacia2.style.display = "none";
	}else{
	mobileInp.style.border = "solid  1px red";
	svgIcon2.style.display = " block";
	}	
}
 function myFunction17(event) {
 	if (event.key >= "a" && event.key <= "z" || event.key >= "0" && event.key <= "9" ) {
		mobileInp.style.border = "solid  1px #c6c6c6"
				informacia2.style.display = " none" ;
	}else{
	mobileInp.style.border = "solid  1px red"
	}
}
function myFunction18(){
	if (forgot == true) {
		mobileInp.style.border = " solid 1px #c6c6c6";
	svgIcon2.style.display = " none";
	forgot = false ;
	}	else if (mobileInp.value >= "a" || mobileInp.value >= 4 ) {
		mobileInp.style.border = "solid  1px #c6c6c6"
				informacia2.style.display = " none" ;
	}else{
	    mobileInp.style.border = " pink 1px solid";
	    informacia2.style.display = "block";
	    svgIcon2.style.display = " none" ;
  
        }
 }

function myFunction19(e) {
	if (passwordInp.value >= "a" || passwordInp.value >= 4 ) {
		passwordInp.style.border = "solid 0.5px #c6c6c6 "
	}else if (passwordInp.value.length == 0){
		passwordInp.style.border = "solid  1px red"
	   svgIcon3.style.display = " block";
	   informacia3.style.display = "none";
	}else{
	passwordInp.style.border = "solid  1px red";
	svgIcon3.style.display = " block";
	}	
}
 function myFunction20(event) {
 	if (event.key >= "a" && event.key <= "z" || event.key >= "0" && event.key <= "9" ) {
		passwordInp.style.border = "solid  1px #c6c6c6"
				informacia3.style.display = " none" ;
	}else{
	passwordInp.style.border = "solid  1px red"
	}
}
function myFunction21(){
	if (forgot == true) {
		passwordInp.style.border = " solid 1px #c6c6c6";
	svgIcon3.style.display = " none";
	forgot = false ;
	}	else if (passwordInp.value >= "a" || passwordInp.value >= 4 ) {
		passwordInp.style.border = "solid  1px #c6c6c6"
				informacia2.style.display = " none" ;
	}else{
	    passwordInp.style.border = " pink 1px solid";
	    informacia3.style.display = "block";
	    svgIcon3.style.display = " none" ;
  
        }
 }

 select2.addEventListener("blur", myFunction22);
 function myFunction22(){
 	if (select2.value == 2021) {
 		select.style.border = "solid 1px red";
 		select1.style.border = "solid 1px red";
 		select2.style.border = "solid 1px red";
 	}else if (select2.value < 2021) {
 		select.style.border = "solid 1px #c6c6c6 ";
 		select1.style.border = "solid 1px #c6c6c6";
 		select2.style.border = "solid 1px #c6c6c6";
 	}		
 }
select1.addEventListener("blur" , function(){
 	if (select2.value == 2021) {
 		select.style.border = "solid 1px red";
 		select1.style.border = "solid 1px red";
 		select2.style.border = "solid 1px red";
 	}else if (select2.value < 2021) {
 		select.style.border = "solid 1px #c6c6c6 ";
 		select1.style.border = "solid 1px #c6c6c6";
 		select2.style.border = "solid 1px #c6c6c6";
 	}		
 }
);
select.addEventListener("blur" , function(){
 	if (select2.value == 2021) {
 		select.style.border = "solid 1px red";
 		select1.style.border = "solid 1px red";
 		select2.style.border = "solid 1px red";
 	}else if (select2.value < 2021) {
 		select.style.border = "solid 1px #c6c6c6 ";
 		select1.style.border = "solid 1px #c6c6c6";
 		select2.style.border = "solid 1px #c6c6c6";
 	}		
 }
);

let hayeren = document.querySelector("#armenia");
hayeren.addEventListener("click" , myFunction23);
function myFunction23(){
	document.getElementById('h2').innerHTML = "Ֆեյսբուքը Ձեզ օգնում է կապվել և կիսվել հարազատ մարդկանց հետ";
	document.getElementById('btn').innerHTML = "Մուտք գործել";
	document.getElementById('forgotArm').innerHTML = "Մոռացե՞լ եք գաղտնաբառը:";
	document.getElementById('inputFocus').placeholder = "էլեկտրոնային փոստ կամ բջջային ";
	document.getElementById('inputFocus1').placeholder = "գաղտնաբառ ";
	document.getElementById('btn1').innerHTML = "Ստեղծել նոր հաշիվ ";
	document.getElementById('indexP').innerHTML = `<p><a>Ստեղծել մի էջ  </a>հայտնի անհատի, ապրանքանիշի կամ բիզնեսի համար։ </p> `;
	document.getElementById('indexP').style.fontSize = "11.5px";
}
let ruseren = document.querySelector("#russki");
ruseren.addEventListener("click" ,myFunction24);
function myFunction24(){
	document.getElementById('h2').innerHTML = "Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.";
	document.getElementById('btn').innerHTML = "Вход";
	document.getElementById('forgotArm').innerHTML = "Забыли пароль?";
	document.getElementById('inputFocus').placeholder = "электронный адрес или номер ";
	document.getElementById('inputFocus1').placeholder = "Пароль ";
	document.getElementById('btn1').innerHTML = "Забыли пароль? ";
	document.getElementById('indexP').innerHTML = `<p><a>Создать Страницу  </a>знаменитости, музыкальной группы или компании. </p> `;
	document.getElementById('indexP').style.fontSize = "11.5px";
}

// let facebookTopInp = document.querySelector("facebookTopInp");
// console.log(facebookTopInp);