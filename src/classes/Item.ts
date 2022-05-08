export class Item {
    public name: string = '';
    public price: number = 0;

    getName(): string {
        return this.name 
    } 
    
    getPrice(): number {
        return this.price
    }
}

export class Bun extends Item {

    constructor(name: string = 'Bun', price: number = 10) {
        super();
        this.name = name
        this.price = price
    }

}

export class Cheese extends Item {

    constructor(name: string = 'Cheese', price: number = 4) {
        super();
        this.name = name
        this.price = price
    }
}


export class Patty extends Item {

    constructor(name: string = 'Patty', price: number = 7) {
        super();
        this.name = name
        this.price = price
    }
}


export class Tomato extends Item {

    constructor(name: string = 'Tomato', price: number = 2) {
        super();
        this.name = name
        this.price = price
    }
}

