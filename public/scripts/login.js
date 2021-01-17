var indexBtn = document.querySelector("#return");
var buttonLogin = document.querySelector("#continue-button")
var loginAccountBtn = document.querySelector('#login-account-button')
var createAccountBtn = document.querySelector("#create-account-button")

var loginLink = '/'
var isUser = true;

const loginRequest = async (event) => {
	const form = {
		isUser: isUser,
		login: document.querySelector('#userlogin').value,
		password: document.querySelector("#password").value
	}

	const response = await fetch('http://localhost:3000/login', {
		method:'POST',
		headers: {
      	'Content-Type': 'application/json'
    	},
		body: JSON.stringify(form)
	})
}

const changeToForm = (event) => {
	isUser = !isUser
	document.querySelector("#signip-footer").hidden = !document.querySelector("#signip-footer").hidden 
	document.querySelector("#login-footer").hidden = !document.querySelector("#login-footer").hidden
}

buttonLogin.addEventListener('click',loginRequest)

createAccountBtn.addEventListener('click', changeToForm)
loginAccountBtn.addEventListener('click', changeToForm)
indexBtn.addEventListener("click", () =>{
    window.location.href = loginLink
})
