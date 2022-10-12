// export class Ingredient {
//     public name: string;
//     public amount: string;

//     constructor(name: string, amount: string) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Or we can use like this

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}