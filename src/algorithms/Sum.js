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

    validate() {
        if(this.#values.find(value => typeof value !== number)) {
            throw Error('Not valid type on workflow, expected doubles but found: ' + value)
        }
    }

    getType() {
        return this.#type
    }
}