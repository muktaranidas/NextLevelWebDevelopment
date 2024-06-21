{
    
    // Encapsulation
    class BankAccount {
       public readonly id: number;
        name: string;
       private _balance:number
  
    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
        }
        addDeposit(amount:number) {
            this._balance = this._balance + amount
        }
        getBalance() {
            return this._balance;
        }
    } 
    // class StudentAccount extends BankAccount{
    //     test() {
    //         this._balanceProtected
    //     }
    // }
    const goribManusherAccount = new BankAccount(111, "Mukta", 20)
    goribManusherAccount.addDeposit(20)
    const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance);
    //

}

//ts-node-dev --respawn --transpile-only module-3/3.5.ts
//
}