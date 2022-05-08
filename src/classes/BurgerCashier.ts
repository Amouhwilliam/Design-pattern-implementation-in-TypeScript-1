import Burger from "./Burger"
import BurgerBuilder from "./BurgerBuilder"
import {smsRouter} from './smsRouterInstance'

const burgerBuilder = new BurgerBuilder

export interface Delivery {
    delivery: Burger
    name: string
}

export interface Orders {
    phone_number: number
    deliveries: Delivery[]
    location: string
}

export class BurgerCashier {

    public phone_number: number = 123
    
    getDeliveries(orders: string[]): Delivery[] {
        const deliveries: Delivery[] = []
        for(let element of orders){
            if(element === 'cheeseBurger') 
                deliveries.push({delivery: burgerBuilder.prepareCheeseBurger(), name : 'cheeseBurger'}) 
            if(element === 'veganBurger') 
                deliveries.push({delivery: burgerBuilder.prepareVeganBurger(), name : 'veganBurger'}) 
            if(element === 'cheeseTomatoBurger') 
                deliveries.push({delivery: burgerBuilder.prepareCheeseTomatoBurger(), name : 'cheeseTomatoBurger'}) 
        }
        return deliveries
    }

    addSmsToRouter(order: Orders): void {
        smsRouter.deliveryQueue.push({
            phone_number: order.phone_number,
            deliveries: order.deliveries,
            location: order.location
        })
        smsRouter.sendSms({
            phone_number: order.phone_number,
            deliveries: order.deliveries,
            location: order.location
        })
    }

}
