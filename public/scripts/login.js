var indexBtn = document.querySelector("#return");
var buttonLogin = document.querySelector("#continue-button")
var loginAccountBtn = document.querySelector('#login-account-button')
var createAccountBtn = document.querySelector("#create-account-button")

var loginLink = '/'
var isUser = true;

const getFormLogin = () => {
	const data = getForm()
	data.isUser = isUser

	return data
}

const getForm = () => {
	var inputsDiv = [] 
	const data = {}

	document.querySelectorAll('.input-field').forEach(div => {
		if(!div.hidden){
			inputsDiv.push(div)
		}
	})

	inputsDiv.forEach(div => {
		const input = div.children[0]

		data[input.name] = input.value
	})

	return data
}

const getFormSignUp = () => {
	return getForm()
}

const loginRequest = async (event) => {
	const form = isUser ? getFormLogin() : getFormSignUp(); 

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
	document.querySelector("#title").innerText = isUser?"Login": "Cadastro";


	document.querySelectorAll('.input-field').forEach(input => {
		input.hidden = !input.hidden 
	})
}

buttonLogin.addEventListener('click',loginRequest)

createAccountBtn.addEventListener('click', changeToForm)
loginAccountBtn.addEventListener('click', changeToForm)
indexBtn.addEventListener("click", () =>{
    window.location.href = loginLink
})
