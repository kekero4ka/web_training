class Meal {
    private readonly product: string;

    constructor(product: string) {
        this.product = product;
    }

    getProduct() {
        console.log('Product: ', this.product);
        return this.product;
    }
}

const meal = new Meal('buckwheat with batata');
meal.getProduct();