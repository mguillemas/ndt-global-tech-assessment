const Concat = require("./Concat")
const Substraction = require("./Substraction")
const Sum = require("./Sum")

module.exports = {
    'sum': (algorithm) => new Sum(algorithm),
    'substraction': (algorithm) => new Substraction(algorithm),
    'concat': (algorithm) => new Concat(algorithm)
}