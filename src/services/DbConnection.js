module.exports = class DbConnection {
    #connection
    constructor(connection) {
        this.#connection = connection
    }
    get() {
        this.#connection.get()
    }
}