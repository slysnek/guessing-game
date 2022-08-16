class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
        this.result = 0;
    }

    guess() {
        this.result =  Math.round((this.maxValue+this.minValue) / 2)
        return this.result;
    }

    greater() {
        return this.minValue = Math.round(this.result)
    }

    lower() {
        return this.maxValue = Math.round(this.result)
    }
}

module.exports = GuessingGame;
