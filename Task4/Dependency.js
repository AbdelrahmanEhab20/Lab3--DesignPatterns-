var Person = /** @class */ (function () {
    function Person(introductionService) {
        this.introductionService = introductionService;
    }
    Person.prototype.introduceSelf = function () {
        this.introductionService.introduce();
    };
    return Person;
}());
var EngineerIntroductionService = /** @class */ (function () {
    function EngineerIntroductionService() {
    }
    EngineerIntroductionService.prototype.introduce = function () {
        console.log('I am an engineer');
    };
    return EngineerIntroductionService;
}());
var Engineer = /** @class */ (function () {
    function Engineer(introductionService) {
        this.introductionService = introductionService;
    }
    Engineer.prototype.introduceSelf = function () {
        this.introductionService.introduce();
    };
    return Engineer;
}());
var eng = new Engineer(new EngineerIntroductionService());
//   eng.introduceSelf();
