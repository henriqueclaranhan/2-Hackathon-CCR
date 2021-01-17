const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const initDb = require('./createShowHow.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = new JsonDB(new Config("showhow", true, false, '/'));
initDb(db)

function addUser({name, user, email, password, tel, bio}) {
	// Get the new number to add
	const lastAdd = db.getData('/mentores').length ;


	const perfil = {name, bio, tel}

	db.push(`/mentores[${lastAdd}]`, perfil)

	const hash = bcrypt.hashSync(password, saltRounds)

    const user_login = {user, email, password: hash}
    db.push(`/users[${lastAdd}]`, user_login)

}

function userDataExist({user, email}) {

	const isEmailUsed = (element) => element.email == email ;
	const isUserUsed = (element) => element.user == user;

	const queryResponseEmail = db.find('/users',  isEmailUsed)
	const queryResponseUser = db.find('/users', isUserUsed)

	if(queryResponseEmail != undefined) {
		return {is:true, what:'email', userData: queryResponseEmail}
	}
	if (queryResponseUser != undefined) {
		return {is:true, what:'username', userData: queryResponseUser}
	}

	return {is:false, what: undefined}
}

function tryLogin({login, password}) {

	function isEmail(login) {
		if(login.includes('@')){
			return true
		}
		return false
	}

	const data = isEmail(login) ? {user: login}: {email: login} ;

	const response = userDataExist(data)
	
	if (response.is) {
		const match = await bcrypt.compare(password, response.userData.password);

		if (match) {
			return {login: true}
		}else{
			return {error: 2, message: "Wrong password"}
		}
	}else{
		return {error:0, message:'user not in database'}
	}
	
}

function getMentores() {
	const mentores = db.getData('/mentores')

	return mentores
}

module.exports = {
	addUser, 
	getMentores, 
	tryLogin,
	userDataExists
};
