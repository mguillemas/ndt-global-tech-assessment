const NumberValidator = require("../helpers/NumberValidator")
const Concat = require("./Concat")
const SaveDouble = require("./SaveDouble")
const Substraction = require("./Substraction")
const Sum = require("./Sum")

module.exports = {
    'sum': (inputs) => new Sum(inputs),
    'substraction': (inputs) => new Substraction(inputs),
    'concat': (inputs) => new Concat(inputs),
    'saveDouble': (inputs) => new SaveDouble(inputs)
}