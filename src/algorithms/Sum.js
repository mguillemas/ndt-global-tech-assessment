module.exports =  class Sum {
    #values
    #type = 'sum'
    constructor(values) {
        this.#values = values
    }

    getResult() {
        let total = 0;
	    this.#values.forEach(value => total = total + value)
        console.log('sum',total)
        return total
    }

    getType() {
        return this.#type
    }
}