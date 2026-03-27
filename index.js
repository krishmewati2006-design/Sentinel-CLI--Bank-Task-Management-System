class User {
    #balance; // Private

    constructor({ name, initialDeposit }) {
        this.name = name;
        this.#balance = initialDeposit;
        this.tasks = [];
    }

    // Method to see balance (Getter)
    viewBalance() {
        return `${this.name}'s Balance: $${this.#balance}`;
    }

    // Method to add money (Logic)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Successfully deposited $${amount}`);
        }else if (amount < 0){
            console.log("Invalid Deposit Amount, Please Try Again.")
        }
    }

    //Method to withdraw money 
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdraw of amount $${amount} successful`)
        } else if (amount <= 0){
            console.log("Invalid amount. Enter a positive number.")
        }else{
            console.log("Insufficient Balance. Cannot Withdraw.")
        }
    }

    // Spread & Destructuring application
    addTask(...newTasks) {
        this.tasks = [...this.tasks, ...newTasks];
        console.log(`Tasks updated for ${this.name}.`);
    }
}

// Inheritance: Admin gets everything User has, plus more 
class Admin extends User {
    constructor(data) {
        super(data);
        this.role = "System Admin";
    }

    resetUserTasks(user) {
        user.tasks = [];
        console.log(`Admin ${this.name} cleared tasks for ${user.name}.`);
    }

    showRole(){
        console.log(`Access Level: ${this.role}`)
    }
}

// 1. Create a User using an object (cleaner for APIs)
const user1 = new User({ name: "Dev_Student", initialDeposit: 500 });

// 2. Create an Admin
const boss = new Admin({ name: "Gemini_AI", initialDeposit: 9999 });

// 3. Perform Operations
user1.deposit(250);
user1.addTask("Learn Python", "Setup Linux Ubuntu", "Practice SQL"); // Spread syntax in action

console.log(user1.viewBalance());
console.log("Tasks:", user1.tasks);

// 4. Admin Power
boss.resetUserTasks(user1);
