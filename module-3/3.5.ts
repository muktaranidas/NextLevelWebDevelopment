{
    // access modifiers
    class BankAccount {
       public readonly id: number;
       public name: string;
       private _balance:number
       protected _balanceProtected:number
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
    class StudentAccount extends BankAccount{
        test() {
            this._balanceProtected
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mukta", 20)
    goribManusherAccount.addDeposit(20)
    const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance);
    //

}