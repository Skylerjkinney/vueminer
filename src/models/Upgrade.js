


export class Upgrade {
    constructor(data) {
        this.id = data.id || Math.floor(Math.random)
        this.name = data.name
        this.qty = data.qty
        this.multiplier = data.multiplier
        this.price = data.price
        this.picture = data.picture
    }

}
