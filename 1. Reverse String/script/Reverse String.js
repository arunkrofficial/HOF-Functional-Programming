let input ;
let count = 0 ;
let fixed = "0.0";

document.querySelector("#in-text").addEventListener("input" , (e)=>{
	input = e.target.value ;
})

document.querySelector("#btn-submit").addEventListener("click" , ()=>{
	
	let interval = setInterval(()=>{
		document.querySelector("#op-text").innerText = fixed ;
		count = count + 0.1 ;
		fixed = count.toFixed(1) ;
		if(fixed == '1.9'){
			clearInterval(interval) ;
		}
	}, 100)

	setTimeout(()=>{
		input = input.split('') ;
		input = input.reverse() ;
		input = input.join('') ;
		document.querySelector("#op-text").innerText = input ;
		count = 0 ;
		fixed = '0.0' ;
	},2000)
});