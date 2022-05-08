import {Orders} from "./BurgerCashier";

/**
 * The SmsRouter class (Singleton) defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export default class SmsRouter {
    private static instance: SmsRouter;
    public deliveryQueue: Orders [] = []

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the smsRouter instance.
     *
     * This implementation let you subclass the SmsRouter class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): SmsRouter {
        if (!SmsRouter.instance) {
            SmsRouter.instance = new SmsRouter();
        }
        return SmsRouter.instance;
    }

    /**
     * Finally, any SmsRouter should send a sms to a phone number
     * executed on its instance.
     */
    public sendSms(data: Orders): void {

        console.log('SMS to: '+ data.phone_number +' Your order is ready and will be delivered at the address: '+ data.location);
        console.log('ORDERS: ');
        for(let item of data.deliveries){
            console.log('<<--------------------------->>');
            console.log(item.name.toUpperCase());
            console.log('<<--------------------------->>');
            console.log('This burger is made of: ');
            item.delivery.showItems()
            console.log('This burger costs: ');
            console.log(item.delivery.getCost()+' €');
        }
    }

    public clearDeliveryQueue() {
        this.deliveryQueue = []
    }
}
