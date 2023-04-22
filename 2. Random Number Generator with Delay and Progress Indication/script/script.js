let count = 0 ;
let rand = null ;
window.addEventListener("load" , ()=>{
	document.querySelector("#op-text").innerText = count + 's' ;
	let interval = setInterval(()=>{
		count = count + 1 ;
		document.querySelector("#op-text").innerText = count + 's' ;

		if(count == 3){
			clearInterval(interval) ;
			rand = (Math.floor(Math.random() * 100)) + 1 ;
			document.querySelector("#op-text").innerText = rand ;
		}
	} , 1000)
})