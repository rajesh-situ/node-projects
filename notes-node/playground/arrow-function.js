var sqauare = x => x * x;
console.log(sqauare(6))


var user = {
    name: 'Rajesh',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi ${this.name}`)
    },
    sayHiAlt() {
        console.log(arguments)
        console.log(`Hi I am ${this.name}`)
    }
}

user.sayHi()
user.sayHiAlt(1, 2, 3)