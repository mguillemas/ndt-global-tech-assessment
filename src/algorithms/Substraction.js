module.exports = class Substraction {
    #values

    constructor(values) {
        this.#values = values
    }

    getResult() {
        let total = this.#values[0];
        this.#values.forEach((value, i) => {
          if(i === 0)  return
        total = total - value
      })
      console.log('substract',total)
      return total
    }
}