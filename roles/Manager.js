const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officerNumber) {
        super(name, id, email);
        this.officerNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;