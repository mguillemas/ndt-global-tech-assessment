const TypeValidate = require("./TypeValidate")

module.exports = class NumberValidator extends TypeValidate {
    inputs
    constructor(inputs) {
        super()
        this.inputs = inputs
    }
    validate() {
        if(typeof this.inputs[0] === 'number') {
            return
        }
        throw Error('Cannot run workflow because some algorithm have an input with different type of number')
    }
}
