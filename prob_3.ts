class Pizza {
    private _size: string;
    private _extraCheese: boolean;
    private _peperoniToppings: number;
    private _pineappleToppings: number;
    private _hamToppings: number;

    constructor(size: string,  extraCheese: boolean, peperoniToppings: number, pineappleToppings: number, hamToppings:number){
        this._size = size;
        this._extraCheese = extraCheese;
        this._peperoniToppings = peperoniToppings;
        this._pineappleToppings = pineappleToppings;
        this._hamToppings = hamToppings;

    }

    public set setSizePizza(value: string){
        this._size = value;
    }
    public get getExtraCheese(): boolean {
        return this._extraCheese;
    }
    public set setExtraCheese(value: boolean) {
        this._extraCheese = value;
    }
    public get getPeperoniToppings(): number {
        return this._peperoniToppings;
    }
    public set setPeperoniToppings(value: number) {
        this._peperoniToppings = value;
    }
    public get getPineappleToppings(): number {
        return this._pineappleToppings;
    }
    public set setPineappleToppings(value: number) {
        this._pineappleToppings = value;
    }
    public get getHamToppings(): number {
        return this._hamToppings;
    }
    public set setHamToppings(value: number) {
        this._hamToppings = value;
    }

    public getCost(){
        let finalPrice = 0
        switch (this._size) {
            case 'Small':
                finalPrice = 10 + ((this._extraCheese)?1*2:0) + (this._peperoniToppings * 2) + (this._pineappleToppings * 2)+ (this._hamToppings * 2);
                break;
            case 'Medium':
                    finalPrice = 12 + ((this._extraCheese)?1*4:0) + (this._peperoniToppings * 2) + (this._pineappleToppings * 2)+ (this._hamToppings * 2);
                    break;
            case 'Large':
                    finalPrice = 14 + ((this._extraCheese)?1*6:0) + (this._peperoniToppings * 3) + (this._pineappleToppings * 3)+ (this._hamToppings * 3);
                    break;
            case 'Extra-large':
                    finalPrice = 18 + ((this._extraCheese)?1*6:0) + (this._peperoniToppings * 4) + (this._pineappleToppings * 4)+ (this._hamToppings * 4);
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

console.log(myPizzaSmall.getCost())
console.log(myPizzaMedium.getCost())
console.log(myPizzaLarge.getCost())
console.log(myPizzaXL.getCost())

