function home(req, res) {
	return res.render("index.html")
}

function pageLogin(req, res) {
	// Ainda não o nome da pagina, então ficara essa por enquanto
	res.render('login.html')
}

function login(req, res) {
	const db = require('./database/db.js')

	if (req.body.isUser) {
		const login_query = {
			login: req.body.login,
			password: req.body.password
		}

		db.

	}else{

		const data = {
			name: req.body.name,
			user: req.body.user,
			email:  req.body.email,
			password: req.body.password,
			tel: req.body.tel,
			bio: req.body.bio
		}

		const response = db.userDataExists({email: data.email, user: data.user})

		if (response.is) {
			return res.status(200).json({error: 1, what:`${response.what}`, message:"some data is already in database"})
		}else{
			db.addUser(data)
		}

	}

	return res.redirect('/login')
}

module.exports = {
	home,
	pageLogin,
	login
};
