class Money {
    constructor(from, to, amount){
        this.from = from;
        this.to = to;
        this.amount = amount;
    }

    convert(amount, isFormatted = true){
        if (isFormatted){
            return this.format(amount * this.amount);
        }else {
            return amount * this.amount;
        }
    }

    format(amount){
        return new Intl.NumberFormat('id-ID', {style: 'currency', currency: this.to}).format(amount);
    }
}

export default Money;