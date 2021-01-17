function home(req, res) {
	return res.render("index.html")
}

function pageLogin(req, res) {
	// Ainda não o nome da pagina, então ficara essa por enquanto
	res.render('login.html')
}

function login(req, res) {

	if (req.body.isUser) {
		const login_query = {
			login: req.body.login,
			password: req.body.password
		}
	}else{

		const data = {
			name: req.body.name,
			user: req.body.user,
			email:  req.body.email,
			password: req.body.password,
			tel: req.body.tel,
			bio: req.body.bio
		}

		const db = require('./database/db.js')

		db.addUser(data)
	}

	return res.redirect('/mentorias')
}

module.exports = {
	home,
	pageLogin,
	login
};
