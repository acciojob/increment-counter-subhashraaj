let ctr = 0;
const counter = document.querySelector(".counter");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
	alert(ctr);
	ctr++;
	counter.innerText = `${ctr}`;
	
});