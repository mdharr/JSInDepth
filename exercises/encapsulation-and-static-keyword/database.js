class Database {
    #token = "abc123"
    constructor() {
        this.#token = "xyz789"
    }

    saveData(data) {
        this.#initDBConnection()
        this.#authorize()
        this.#updateQuery()
    }

    #initDBConnection() {
        console.log("db connection initiated")
    }
    
    #authorize() {
        console.log("db authorized")
    }
    
    #updateQuery() {
        console.log("updated query")
    }
}

class CustomDB extends Database {
    #token = '123456'
    saveData(data) {

    }
}



const db = new Database()
console.log(db)
console.log(db.token)
db.saveData()
console.log(Object.getOwnPropertyNames(db))
console.log(Object.getOwnPropertyNames(db.__proto__))