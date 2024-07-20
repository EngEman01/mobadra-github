let form = document.querySelector('form')

let fnameInput = form.elements['fname']
let lnameInput = form.elements['fname']
let phoneInput = form.elements['phone']
let emailInput = form.elements['email']

let nameModel = /^[A-Z]{1}[a-z]+$/
let phoneModel = /^(01)\d{9}$/
let emailModel = /^\w+\d*\w+(@gmail.com)$/
//[a-zA-Z0-9+-%@]+

form.addEventListener("submit" , (event)=>{
    event.preventDefault();
    let nameValues = fnameInput.value
    let phoneValues = phoneInput.value
    let emailValues = emailInput.value
    if(nameModel.test(nameValues)){
        console.log("the name is submited");
    }else{
        // console.log("enter the correct name");
        window.alert("wrong name ,please try again")
    }
    if(phoneModel.test(phoneValues)){
        console.log("the phone is submited");
    }else{
        // console.log("enter the correct phone");
        window.alert("wrong phone ,please try again")
    }
    if(emailModel.test(emailValues)){
        console.log("the email is submited");
    }else{
        // console.log("enter the correct email");
        window.alert("wrong email ,please try again")
    }
    
    })

let myBtn = document.querySelector('.btn')

myBtn.onclick = function(){
    console.log('clicked');
}
