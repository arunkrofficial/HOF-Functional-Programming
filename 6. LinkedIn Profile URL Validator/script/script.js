const regexURL = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm


let url = "";

document.querySelector("#url").addEventListener("input" , (e)=>{
  url = e.target.value ;
  document.querySelector("#op-block").innerText = "" ;
})

document.querySelector("#btn-validate").addEventListener("click" , ()=>{
  if(url != ""){
    if(regexURL.test(url)){
      document.querySelector("#op-block").innerText = "Your LinkedIn Profile URL is Valid" ;
      document.querySelector("#op-block").style.color = "green" ;
    }
    else{
      document.querySelector("#op-block").innerText = "Your LinkedIn Profile URL is Not-Valid" ;
      document.querySelector("#op-block").style.color = "red" ;
    }
  }
  else{
    alert("Please enter LinkedIn url ! !") ;
  }
})