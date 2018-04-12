import {EaterType, EvilHuman, NiceHuman} from '../enums/example';

interface StaticPizzaDelivery {
    quattroFormaggi: boolean;
    margarita: boolean;
}

const aDelivery: StaticPizzaDelivery = {
    quattroFormaggi: true,
    margarita: true
};

type Eaters = NiceHuman | EvilHuman;

function pizzaDeliveryReducer(delivery: StaticPizzaDelivery, eater: Eaters): StaticPizzaDelivery {

    switch (eater.eaterType) {

        case EaterType.Carnivore:
            return { ...delivery, margarita: false };

        case EaterType.Vegetarian:
            return { ...delivery, quattroFormaggi: false };

        default:
            return delivery;

    }

}
