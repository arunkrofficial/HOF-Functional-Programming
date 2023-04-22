let itemsEle = [] ;
let currencyType = "D" ; // D -> dollar  &  R -> Ruppes
let count = 0 ;

function createRow(obj){
	// div for row
	itemsEle[count] = document.createElement("div") ;
	itemsEle[count].classList.add("row") ;
	document.querySelector("#op-block-items").appendChild(itemsEle[count]) ;
	// span for Sr. No.
	itemsEle[count].srNo = document.createElement("span") ;
	itemsEle[count].srNo.innerText = (count+1) ;
	itemsEle[count].appendChild(itemsEle[count].srNo) ;
	// span for Item Id
	itemsEle[count].itemId = document.createElement("span") ;
	itemsEle[count].itemId.innerText = obj.itemId ;
	itemsEle[count].appendChild(itemsEle[count].itemId) ;
	// span for Item Name
	itemsEle[count].itemName = document.createElement("span") ;
	itemsEle[count].itemName.innerText = obj.itemName ;
	itemsEle[count].appendChild(itemsEle[count].itemName) ;
	// span for Item Price
	itemsEle[count].itemPrice = document.createElement("span") ;
	if(currencyType == "D"){
		itemsEle[count].itemPrice.innerText = obj.itemPrice + " $" ;
	}
	else{
		itemsEle[count].itemPrice.innerText = obj.itemPrice + " ₹" ;
	}
	itemsEle[count].appendChild(itemsEle[count].itemPrice) ;

	count++ ;
}
function removeRow(itemsArray){
	if(itemsArray[0] != undefined){
		for(let ele in itemsArray){
			itemsArray[ele].remove() ;
		}
	}
}
function changeValue(){

}

// onload event for first view of table
window.addEventListener("load" , ()=>{
	removeRow(itemsEle) ;
	itemsEle = [] ;
	for(let obj of itmesData){
		createRow(obj) ;
	}
	count = 0 ;
})

// button for change currency
document.querySelector("#btn-change").addEventListener("click" , ()=>{
	if(currencyType == "D"){
		currencyType = "R" ;
		removeRow(itemsEle) ;

		itmesData.map((ele)=>{
			ele.itemPrice = ele.itemPrice * 80 ;
		})

		itemsEle = [] ;
		for(let obj of itmesData){
			createRow(obj) ;
		}
		count = 0 ;
		document.querySelector("#btn-currency").innerText = "$" ;
	}
	else{
		currencyType = "D" ;
		removeRow(itemsEle) ;

		itmesData.map((ele)=>{
			ele.itemPrice = ele.itemPrice / 80 ;
		})

		itemsEle = [] ;
		for(let obj of itmesData){
			createRow(obj) ;
		}
		count = 0 ;
		document.querySelector("#btn-currency").innerText = "₹" ;

	}
})

const itmesData = [
	{
		itemId : "ID-01" ,
		itemName : "Item-1" ,
		itemPrice : 10 ,
		itemPriceCurrency : "Dollar"
	} ,
	{
		itemId : "ID-02" ,
		itemName : "Item-2" ,
		itemPrice : 20 ,
		itemPriceCurrency : "Dollar"
	} ,
	{
		itemId : "ID-03" ,
		itemName : "Item-3" ,
		itemPrice : 30 ,
		itemPriceCurrency : "Dollar"
	} ,
	{
		itemId : "ID-04" ,
		itemName : "Item-4" ,
		itemPrice : 40 ,
		itemPriceCurrency : "Dollar"
	} ,
	{
		itemId : "ID-05" ,
		itemName : "Item-5" ,
		itemPrice : 50 ,
		itemPriceCurrency : "Dollar"
	} ,
	{
		itemId : "ID-06" ,
		itemName : "Item-6" ,
		itemPrice : 60 ,
		itemPriceCurrency : "Dollar"
	} ,{
		itemId : "ID-07" ,
		itemName : "Item-7" ,
		itemPrice : 70 ,
		itemPriceCurrency : "Dollar"
	} ,
]