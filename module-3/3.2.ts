{
    // oop- inheritence
    class Person{
        name: string;
        age: number;
        address: string;
    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
        }
        // method declear
        getSleep(numOfHours:number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }
    // oop- inheritence
    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }
    }
    // create instence
    const student1 = new Student("Mukta", 25, "Dhaka")
    // oop- inheritence
    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address),
                this.designation = designation,
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Sudipto", 24, "Bashabo","Executive Engineer");
}
