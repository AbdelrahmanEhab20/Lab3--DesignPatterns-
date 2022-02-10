// 3-Assume that we implement the part of checking that user has specific role or not.
// If the user has the specified role the function return true else return false.
//-----------------------------------------------------------
// (O) Open Closed principle
//-----------------------------------------------------------
class RoleOne {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'Manager';
    }
}
class RoleTwo {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'General-Manager';
    }
}
class RoleThree {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    GetUserRole() {
        return 'Employee';
    }
}

const CheckRoles = [
    new RoleOne('Abdo', 22, "male"),
    new RoleTwo('zaki', 30, "male"),
    new RoleThree('Mai', 25, "female")
]

CheckRoles.forEach(role => {
    if (role.GetUserRole() == 'Manager') {
        console.log(role, true);
    }
})