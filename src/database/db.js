const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const initDb = require('./createShowHow.js')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = new JsonDB(new Config("showhow", true, false, '/'));
initDb(db)

function hash(password){
	const hash_password = await bcrypt.hash(password, saltRounds)

	return hash_password
}

function addUser({name, user, email, password, tel, bio}) {
	// Get the new number to add
	const lastAdd = db.getData('/mentores').length ;

	const user_login = {user, email, password: hash(password)}
	const perfil = {name, bio, tel}

	db.push(`/mentores[${lastAdd}]`, perfil)
	db.push(`/users[${lastAdd}]`, user_login)

}

function getMentores() {
	const mentores = db.getData('/mentores')

	return mentores
}

module.exports = {addUser, getMentores}
