"use strict";
class Pizza {
    constructor(size, extraCheese, peperoniToppings, pineappleToppings, hamToppings) {
        this._size = size;
        this._extraCheese = extraCheese;
        this._peperoniToppings = peperoniToppings;
        this._pineappleToppings = pineappleToppings;
        this._hamToppings = hamToppings;
    }
    set setSizePizza(value) {
        this._size = value;
    }
    get getExtraCheese() {
        return this._extraCheese;
    }
    set setExtraCheese(value) {
        this._extraCheese = value;
    }
    get getPeperoniToppings() {
        return this._peperoniToppings;
    }
    set setPeperoniToppings(value) {
        this._peperoniToppings = value;
    }
    get getPineappleToppings() {
        return this._pineappleToppings;
    }
    set setPineappleToppings(value) {
        this._pineappleToppings = value;
    }
    get getHamToppings() {
        return this._hamToppings;
    }
    set setHamToppings(value) {
        this._hamToppings = value;
    }
    getCost() {
        let finalPrice = 0;
        switch (this._size) {
            case 'Small':
                finalPrice = 10 + ((this._extraCheese) ? 1 * 2 : 0) + (this._peperoniToppings * 2) + (this._pineappleToppings * 2) + (this._hamToppings * 2);
                break;
            case 'Medium':
                finalPrice = 12 + ((this._extraCheese) ? 1 * 4 : 0) + (this._peperoniToppings * 2) + (this._pineappleToppings * 2) + (this._hamToppings * 2);
                break;
            case 'Large':
                finalPrice = 14 + ((this._extraCheese) ? 1 * 6 : 0) + (this._peperoniToppings * 3) + (this._pineappleToppings * 3) + (this._hamToppings * 3);
                break;
            case 'Extra-large':
                finalPrice = 18 + ((this._extraCheese) ? 1 * 6 : 0) + (this._peperoniToppings * 4) + (this._pineappleToppings * 4) + (this._hamToppings * 4);
                break;
            default:
                break;
        }
        return finalPrice;
    }
}
let myPizzaSmall = new Pizza("Small", true, 1, 1, 1);
let myPizzaMedium = new Pizza("Medium", true, 1, 1, 1);
let myPizzaLarge = new Pizza("Large", true, 1, 1, 1);
let myPizzaXL = new Pizza("Extra-large", true, 1, 1, 1);
console.log(myPizzaSmall.getCost());
console.log(myPizzaMedium.getCost());
console.log(myPizzaLarge.getCost());
console.log(myPizzaXL.getCost());
