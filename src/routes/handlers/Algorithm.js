const Concat = require("../../algorithms/Concat")
const Substraction = require("../../algorithms/Substraction")
const Sum = require("../../algorithms/Sum")
const algorithms = require("../../algorithms/index")
module.exports = class Algorithm {
    #algorithm

    #validate({ name, inputs, algorithms }) {
        const algorithmType = new AlgorithmTypeValidator(name)
        algorithmType.validate()
        const inputValidator = new InputValidator(inputs)
        inputValidator.validate()
        console.log('hey');
    }
    constructor(algorithm) {
        // this.#validate(algorithm
        console.log('construct',JSON.stringify(algorithm))
        this.#algorithm = algorithm
    }

    getRequestedAlgorithm() {
        console.log('requested',this.#algorithm.name)
        return algorithms[this.#algorithm.name](this.#algorithm.inputs)
    }

    getResult() {
        return 0
    }
    
}