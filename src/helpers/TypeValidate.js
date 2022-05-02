module.exports = class TypeValidate {
    #input

    constructor(input) {
        this.#input = input
    }

    validate() {
        throw Error('Nothing to validate')
    }

}