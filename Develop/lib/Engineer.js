// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

function Engineer(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getRole = function() {
    var getrole = "Engineer";
    return getrole;
}

Engineer.prototype.getGithub = function() {
    var getgithub = this.github;
    return getgithub;
}

module.exports = Engineer;