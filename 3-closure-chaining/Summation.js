class Summation{
    constructor(start_int){
        this.number = start_int
    }

    add(num){
        this.number+=num
        return this
    }
    sub(num){
        this.number-=num
        return this
    }

    mul(num){
        this.number*=num
        return this
    }

    div(num){
        this.number/=num
        return this
    }
}

module.exports = Summation