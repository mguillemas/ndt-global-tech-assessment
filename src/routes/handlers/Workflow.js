const  Concat = require("../../algorithms/Concat");
const  Substraction = require("../../algorithms/Substraction");
const  Sum = require("../../algorithms/Sum");
const Algorithm = require("./Algorithm");

module.exports = class Workflow {

    async validate(workflow = [], precedingValue) {
        await workflow.forEach(item => {
            // new Algorithm(algorithm)
            const {name, inputs = [], algorithms = []} = item
            
            let result
            
            const newInputs = precedingValue ? [precedingValue ,...inputs] : [...inputs]
          
            try {
                const algorithm = new Algorithm({...item, inputs: newInputs})

                const operation = algorithm.getRequestedAlgorithm()
                
                result = operation.getValidate()
            } catch (error) {
                console.log(error.message)
                return error
            }
            
            if(algorithms && algorithms.length) {
              this.execute(algorithms, result)
            }
        });
    }

    async execute(workflow = [], precedingValue = null) {
        console.log(JSON.stringify(workflow));
        try {
            
      
            await workflow.forEach(item => {
                
                const {name, inputs = [], algorithms = []} = item
                
                let result
                
                const newInputs = precedingValue ? [precedingValue ,...inputs] : [...inputs]
        
                try {
                    const algorithm = new Algorithm({...item, inputs: newInputs})

                    const operation = algorithm.getRequestedAlgorithm()
                    
                    result = operation.getResult()
                } catch (error) {                
                    return error.message
                }
                
                if(algorithms && algorithms.length) {
                this.execute(algorithms, result)
                }
            });

            return 'OK'
        } catch (error) {
            return 'KO'
        }
    }
}

