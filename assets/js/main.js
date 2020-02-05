
let circle= document.querySelector(".circle-box");
let a = 0;
setInterval(animi,1000)


function animi(){
if(a<20){
circle.style.transform = `rotate(${a}deg)`;
}else{

}
a+=20;
}

function call(){
	this.circle= document.querySelector(".circle-box");
	this.angleValue=0;
	 
}