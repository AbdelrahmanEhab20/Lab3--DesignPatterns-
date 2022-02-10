// 4-Search for another example of I principle and implement it
var Product = /** @class */ (function () {
    function Product() {
        this.name = 'IPhone';
        this.stockNum = 300;
        this.price = 25000;
        this.simType = "Dual-Sim";
    }
    Product.prototype.purchase = function () {
        this.stockNum = this.stockNum - 1;
        console.log("This Process is Successfully Done");
    };
    Product.prototype.showInfo = function () {
        console.log("Name Of Item:" + this.name);
        console.log("Price:" + this.price + " " + "LE");
        console.log("simType:" + this.simType);
    };
    return Product;
}());
var firstProduct = new Product();
firstProduct.purchase();
firstProduct.showInfo();
