import Burger from "./Burger"
import { Bun, Patty, Cheese, Tomato } from './Item'

const bun = new Bun()
const tomato = new Tomato()
const patty = new Patty()
const cheese = new Cheese()

export default class BurgerBuilder {

    public location: string = ''
    
    prepareCheeseBurger(): Burger {
        const burger = new Burger()
        burger.addItems(bun, 2)
        burger.addItems(patty)
        burger.addItems(cheese)
        return burger
    }

    prepareVeganBurger(): Burger {
        const burger = new Burger()
        burger.addItems(bun, 2)
        burger.addItems(tomato)
        return burger
    }

    prepareCheeseTomatoBurger(): Burger {
        const burger = new Burger()
        burger.addItems(bun, 2)
        burger.addItems(patty)
        burger.addItems(cheese)
        burger.addItems(tomato)
        return burger
    }
}
