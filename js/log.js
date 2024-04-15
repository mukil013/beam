let usrName = document.querySelector("#usr")
let warn = document.querySelector('.alert')
let sub = document.querySelector("body section form")
let checker = /^[a-zA-Z]+$/


sub.addEventListener('submit',(e)=>{
    if(usrName.value.match(checker)){
        window.location.href = "./index.html"
        usrName.style.border = "none" 
        warn.style.display = "none"
        warn.textContent = ""
    }else{
        e.preventDefault()
        usrName.style.border = ".2rem solid red" 
        warn.style.display = "block"
        warn.textContent = "Enter your correct name"
    }
})