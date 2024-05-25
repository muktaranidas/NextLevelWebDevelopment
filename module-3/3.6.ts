{
    // access modifiers
    class BankAccount {
       public readonly id: number;
       public name: string;
       private _balance:number
    //    protected _balanceProtected:number
    constructor(id: number, name: string, _balance: number){
        this.id = id;
        this.name = name;
        this._balance = _balance;
        }
        // addDeposit(amount:number) {
        //     this._balance = this._balance + amount
        // }
        //useing getter
        get balance() {
           return this._balance
        }
        // using setter
        set deposit(amount: number) {
            this._balance = this.balance+amount
        }
        // getBalance() {
        //     return this._balance;
        // }
    } 
    // class StudentAccount extends BankAccount{
    //     test() {
    //         this._balanceProtected
    //     }
    // }
    const goribManusherAccount = new BankAccount(111, "Mukta", 30)
    goribManusherAccount.deposit= 20
    const myBalance=goribManusherAccount.balance;
    // goribManusherAccount.addDeposit(20)
    // const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance);
    //

}

//ts-node-dev --respawn --transpile-only module-3/3.5.ts