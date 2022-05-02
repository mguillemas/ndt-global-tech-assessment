class Operation {
    #parameterOne
    #parameterTwo
    
    constructor(parameterOne, parameterTwo) {
        this.#parameterOne = parameterOne        
        this.#parameterTwo = parameterTwo        
    }

    result() {
        console.log(this.#parameterOne - this.#parameterTwo)
    }


}