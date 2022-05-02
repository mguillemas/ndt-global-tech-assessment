const  Concat = require("../../algorithms/Concat");
const  Substraction = require("../../algorithms/Substraction");
const  Sum = require("../../algorithms/Sum");
const Algorithm = require("./Algorithm");

module.exports = class Workflow {
    #workflow

    constructor() {
        // console.log(this)
        // console.log(JSON.stringify(workflow));
        // this.#workflow = workflow
    }

    execute(workflow = [], precedingValue = null) {
        console.log(JSON.stringify(workflow));
        workflow.forEach(item => {
            // new Algorithm(algorithm)
            const {name, inputs = [], algorithms = []} = item
            
            let result
            // console.log({name})
            const newInputs = precedingValue ? [precedingValue ,...inputs] : [...inputs]
            // const sum = new Sum()
            // const substract = new Substraction()
            // const concat = new Concat()
            console.log(item)
            try {
                const algorithm = new Algorithm({...item, inputs: newInputs})
                console.log(algorithm)
                const operation = algorithm.getRequestedAlgorithm()
                console.log(operation)
                result = operation.getResult()
            } catch (error) {
                return
            }
            
            // switch(name) {
            //   case 'sum':
            //       result = new Sum(newInputs).getResult()
            //     break
            //   case 'substract': 
            //       result = new Substraction(newInputs).getResult()
            //     break
            //   case 'concat':
            //       result = new Concat(newInputs).getResult()
            //     break
            // }
            
            if(algorithms && algorithms.length) {
                console.log('if statement', JSON.stringify(algorithms));
              this.execute(algorithms, result)
            }
        });
    }
}

