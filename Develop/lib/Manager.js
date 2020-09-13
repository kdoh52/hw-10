// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

function Manager(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = office;
}

Manager.prototype.getRole = function() {
    var getrole = "Manager";
    return getrole;
}

Manager.prototype.getOfficeNumber = function() {
    var getoffice = this.officeNumber;
    return getoffice;
}

Manager.prototype.getName = function() {
    var getname = this.name;
    return getname;
}

Manager.prototype.getEmail = function() {
    var getemail = this.email;
    return getemail;
}

Manager.prototype.getId = function() {
    var getid = this.id;
    return getid;
}

module.exports = Manager;