let counter = 0;
const ctr = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incrementBtn");

incrementBtn.addEventListener("click",()=>{
	alert(counter);
	counter ++;
	ctr.innerText= `${counter}`;
	
});