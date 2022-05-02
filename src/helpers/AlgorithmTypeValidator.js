class AlgorithmTypeValidator {
    #types = ['substract', 'sum', 'concat', 'saveDouble', 'saveString']
    #name
    constructor(name) {
        this.#name = name
    }

    validate() {
        const isValidType = this.#types.includes(this.#name)
        if(!isValidType) throw new Error('Cannot run unknown algorithm name!')
        return isValidType
    }

    type() {
        return this.#name
    }
}