// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


function Intern(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

Intern.prototype.getRole = function() {
    var getrole = "Intern";
    return getrole;
}

Intern.prototype.getSchool = function() {
    var getschool = this.school;
    return getschool;
}

module.exports = Intern;