{
    // abstraction : 1. interface  2. abstract
    //idea
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }
    //real implementation
    class Car1 implements Vehicle1{
        startEngine(): void{
            console.log(`I am starting the car engine`);
        }
        stopEngine(): void{
            console.log(`I am stoping the car engine`);
        }
        move(): void{
            console.log(`I am moving the car engine`);
        }
        test() {
            console.log(`I am just testing`);
        }
    }
    const toyotaCar = new Car1()
    toyotaCar.startEngine()

    //abstract class
    //idea
    abstract class Vehicle2{
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void
        test(){
         console.log(`I am testing`);
     };
    }

    class Car2 extends Vehicle2{
        startEngine(): void {
            console.log(`I am starting the Car`);
        }
        stopEngine(): void {
            console.log(`I am stoping the Car`);
        }
        move(): void {
            console.log(`I am moving the Car`);
        }
       
    }
    const hondaCar = new Car2()
    hondaCar.startEngine()

    
  //
}