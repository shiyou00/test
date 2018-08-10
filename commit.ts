class Animal{
    name : string;
    constructor(name){
        this.name = name;
    }
    sayHi(){
        return `My name is ${this.name}`
    }
}

let a = new Animal('jack1');
