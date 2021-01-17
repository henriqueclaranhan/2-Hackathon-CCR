var indexBtn = document.querySelector("#return");
var button = document.querySelector("#continue-button")
loginLink = '/'

const loginRequest = async (event) => {
	const form = {
		isUser: true,
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

button.addEventListener('click',loginRequest)

indexBtn.addEventListener("click", () =>{
    window.location.href = loginLink
})


