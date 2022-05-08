import {Item} from "./Item"

export default class Burger {
    public items: Item[] = []
    public cost: number = 0

    addItems(item: Item, numberItems: number= 1): void {
        for(let i=0; i < numberItems; i++){
            this.items.push(item)
        }
    }

    showItems(): void {
        console.log('Items');
        for(let i=0; i < this.items.length; i++){
            console.log('Item: '+ incrementI(i) +' name: '+this.items[i].name+' price: '+ this.items[i].price +' €');
        }
    }
    getCost(): number {
        for(let i=0; i < this.items.length; i++){
            this.cost += this.items[i].price
        }
        return this.cost
    }

}

const incrementI = (i: number) =>{
    return i+1
}