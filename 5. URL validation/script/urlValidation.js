const regexURL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

let url = "";

document.querySelector("#url").addEventListener("input" , (e)=>{
  url = e.target.value ;
  document.querySelector("#op-block").innerText = "" ;
})

document.querySelector("#btn-validate").addEventListener("click" , ()=>{
  if(url != ""){
    if(regexURL.test(url)){
      document.querySelector("#op-block").innerText = "Your URL is Valid" ;
      document.querySelector("#op-block").style.color = "green" ;
    }
    else{
      document.querySelector("#op-block").innerText = "Your URL is Not-Valid" ;
      document.querySelector("#op-block").style.color = "red" ;
    }
  }
  else{
    alert("Please enter url ! !") ;
  }
})