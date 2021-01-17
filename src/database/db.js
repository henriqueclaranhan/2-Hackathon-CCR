const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
const initDb = require('./createShowHow.js')

const db = new JsonDB(new Config("showhow", true, false, '/'));
initDb(db)

function addMentor(data) {
	// Get the new number to add
	const lastAdd = db.getData('/mentores').length ;

	db.push(`/mentores[${lastAdd}]`, data)
}

function getMentores() {
	const mentores = db.getData('/mentores')

	return mentores
}

module.exports = {addMentor, getMentores}
