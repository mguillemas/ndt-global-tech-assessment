module.exports = class Concat {
    #value
    #type = 'concat'
    
    constructor(value) {
        this.#value = value[0]
    }

    getResult() {
        console.log('Result is: ' + this.#value);
    }

    getType() {
        return this.#type
    }
}