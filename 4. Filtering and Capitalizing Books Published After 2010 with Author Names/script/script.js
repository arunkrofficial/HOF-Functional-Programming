let rowEle = [] ;
let count = 0 ;
rowEle[count]

window.addEventListener("load" , ()=>{
	removeRow() ;
	for(let ele of booksData){
		appendRow() ;
	}
})

document.querySelector("#btn-filter").addEventListener("click" , ()=>{
	removeRow() ;
	booksData.map((ele)=>{
		if(ele.publishedYear < 2010){
			ele.authorName = ele.authorName.toUpperCase() ;
		}
	})
	for(let ele of booksData){
		appendRow() ;
	}
	document.querySelector("#btn-filter").style.display = "none" ;
})

function appendRow(){
	rowEle[count] = document.createElement("div") ;
	rowEle[count].classList.add("row") ;
	document.querySelector("#op-main").appendChild(rowEle[count]) ;

	// Sr.No.
	rowEle[count].srNo = document.createElement("span") ;
	rowEle[count].srNo.innerText = (count + 1) ;
	rowEle[count].appendChild(rowEle[count].srNo) ;

	// Book Name
	rowEle[count].bookName = document.createElement("span") ;
	rowEle[count].bookName.innerText = booksData[count].bookName ;
	rowEle[count].appendChild(rowEle[count].bookName) ;

	// Author Name
	rowEle[count].authorName = document.createElement("span") ;
	rowEle[count].authorName.innerText = booksData[count].authorName ;
	rowEle[count].appendChild(rowEle[count].authorName) ;

	// Published Year
	rowEle[count].publishedYear = document.createElement("span") ;
	rowEle[count].publishedYear.innerText = booksData[count].publishedYear ;
	rowEle[count].appendChild(rowEle[count].publishedYear) ;

	count++ ;
}

function removeRow(){
	if(rowEle[0] != undefined){
		for(let ele of rowEle){
			ele.remove() ;
		}
		count = 0 ;
		rowEle = [] ;
	}
}

const booksData = [
	{
		bookName : "Name-1" ,
		authorName : "Author-1" ,
		publishedYear : 2010
	} ,
	{
		bookName : "Name-2" ,
		authorName : "Author-2" ,
		publishedYear : 2007
	} ,
	{
		bookName : "Name-3" ,
		authorName : "Author-3" ,
		publishedYear : 2014
	} ,
	{
		bookName : "Name-4" ,
		authorName : "Author-4" ,
		publishedYear : 2009
	} ,
	{
		bookName : "Name-5" ,
		authorName : "Author-5" ,
		publishedYear : 2001
	} ,
	{
		bookName : "Name-6" ,
		authorName : "Author-6" ,
		publishedYear : 2019
	} ,
	{
		bookName : "Name-7" ,
		authorName : "Author-7" ,
		publishedYear : 2020
	} ,
	{
		bookName : "Name-8" ,
		authorName : "Author-8" ,
		publishedYear : 2002
	} 
]

