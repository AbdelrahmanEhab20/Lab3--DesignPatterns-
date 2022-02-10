// 2 - Assume the following part of shipment module

// When a shipper wants to place a shipment,
//     he will choose shipment will be ship using Playground or Air
// and the customer gives you some requirements that he may add overseas in the future.
// Each shipment has pickup date, delivery date, commodities, ship from and ship to.
//-----------------------------------------------------------
// (L) Liskov Substitution principle
//-----------------------------------------------------------


class Shipment {
    constructor(pik_Date, Deliver_Date, ship_from, ship_to) {
        this.pik_Date = pik_Date;
        this.Deliver_Date = Deliver_Date;
        this.ship_from = ship_from;
        this.ship_to = ship_to;
    }
}

class Playground extends Shipment {
    constructor(pik_Date, Deliver_Date, ship_from, ship_to, Type) {
        super(pik_Date, Deliver_Date, ship_from, ship_to);
        this.Type = Type;
    }

    playGroundInfo() {
        console.log(
            "Info about PlayGround:" +
            this.Type +
            " " +
            "On Pickup Date:" +
            " " +
            this.pik_Date +
            "and Deliver_Date:" +
            " " +
            this.Deliver_Date
        );
    }
}
class AirShipping extends Shipment {
    constructor(pik_Date, Deliver_Date, ship_from, ship_to, PlanType) {
        super(pik_Date, Deliver_Date, ship_from, ship_to);
        this.PlanType = PlanType;
    }

    AirInfo() {
        console.log(
            "Info about PlayGround:" +
            this.PlanType +
            " " +
            "On Pickup Date:" +
            " " +
            this.pik_Date +
            "and Deliver_Date:" +
            " " +
            this.Deliver_Date
        );
    }
}

const ground1 = new Playground("Monday", "25-2", "Alex", "Cairo", "Nissan Sunny");
ground1.playGroundInfo();
const Air1 = new AirShipping("Thursday", "18-2", "SAudi", "Egypt", "F-16");
Air1.AirInfo();