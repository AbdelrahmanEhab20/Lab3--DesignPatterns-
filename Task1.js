// 1-Suppose the following part of module of auth service
// -The auth module is responsible for authenticate incoming requests and validate the user credentials and also token.
// -The auth module implemented in more than one part one to mange requests from user and the other is to mange checking
//credentials with database.
//-----------------------------------------------------------
//(S) Single Responsibility
//-----------------------------------------------------------
class AuthModule {
    Token() {
        return "safsafsaf65awfwaqafawfwafgwaf";
    }
}
class ValidateModule extends AuthModule {
    Token() {
        return "adfafawwafwafrawfawfawwafawwa";
    }
    validate() {
        console.log("User is Logged IN Successfully")
    }
}
class DatabaseModule extends AuthModule {
    Token() {
        return "afawfawfaafawwwafawfawfwwafawfw";
    }
    validate() {
        console.log("Database run Successfully")
    }
}

const test = new DatabaseModule();
test.validate();
const tes2t = new ValidateModule();
tes2t.validate();