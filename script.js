let counter = 0;
const ctr = document.querySelector("#ctr");
const increamentBtn = document.querySelector("#increamentBtn");

increamentBtn.addEventListener("click",()=>{
	alert(counter);
	counter++;
	ctr.innerText = `${counter}`;
	
});