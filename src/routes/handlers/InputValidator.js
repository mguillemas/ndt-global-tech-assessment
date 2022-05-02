class InputValidator {
    #inputs

    constructor(inputs) {
        this.#inputs = inputs
    }

    validate() {
        this.#inputs.forEach(input => {
            if(typeof input !== 'string' || typeof input !== 'string') {
                throw new Error(`Input ${input} has an invalid type. String or Number expected`)
            }
        });
    }
}