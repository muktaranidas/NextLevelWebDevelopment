{
    // oop -class
    class Animal{
        // public name: string;
        // public species: string;
        // public sound: string;


        
        //  parameter properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound=sound
        }
        //normal function
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }
    const dog = new Animal("German Shepard Vhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");
    cat.makeSound() 
}