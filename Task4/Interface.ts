// 4-Search for another example of I principle and implement it
// (I) represents the Interface Segregation principle

interface Stock{
    purchase();
}
class Product implements Stock{
    name:string='IPhone';
    stockNum:number=300;
    price:number=25000;
    simType:string="Dual-Sim";

    purchase() {
        this.stockNum=this.stockNum-1;
        console.log("This Process is Successfully Done")
    }
    showInfo(){
        console.log("Name Of Item:"+this.name);
        console.log("Price:"+this.price+" "+"LE");
        console.log("simType:"+this.simType);
    }
}

var firstProduct:Product=new Product();
firstProduct.purchase();
firstProduct.showInfo();