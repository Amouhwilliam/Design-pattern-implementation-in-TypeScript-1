import {BurgerCashier} from './classes/BurgerCashier'

const burgerCashier = new BurgerCashier()

const deliveries = burgerCashier.getDeliveries(['cheeseTomatoBurger', 'cheeseTomatoBurger', 'veganBurger'])
 
burgerCashier.addSmsToRouter({
    phone_number: 897645,
    deliveries: deliveries,
    location: 'Banhnofstrasse 123, 94469 Deggendorf, Germany'
})

