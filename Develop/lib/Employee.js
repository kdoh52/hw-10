// TODO: Write code to define and export the Employee class
// var app = require('../app');
// let newTeam = app.team;

// console.log(newTeam);

function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function() {
    var getname = this.name;
    return getname;
}

Employee.prototype.getId = function() {
    var getid = this.id;
    return getid;
}

Employee.prototype.getEmail = function() {
    var getemail = this.email;
    return getemail;
}

Employee.prototype.getRole = function() {
    var getrole = "Employee";
    return getrole;
}

module.exports = Employee;