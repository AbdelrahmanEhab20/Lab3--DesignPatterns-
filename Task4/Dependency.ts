// 4-Search for another example of  D  principle and implement it
// (D) represents the Dependency Inversion principle
interface Person {
  introduceSelf(): void;
}

interface IntroductionService {
  introduce(): void;
}
class Person {
  public introductionService: IntroductionService;

  constructor(introductionService: IntroductionService) {
    this.introductionService = introductionService;
  }
  public introduceSelf() {
    this.introductionService.introduce();
  }
}
class EngineerIntroductionService implements IntroductionService {
  public introduce() {
    console.log("I am an engineer");
  }
}
class Engineer implements Person {
  public introductionService: EngineerIntroductionService;

  constructor(introductionService: IntroductionService) {
    this.introductionService = introductionService;
  }

  public introduceSelf() {
    this.introductionService.introduce();
  }
}

const eng = new Engineer(new EngineerIntroductionService());
eng.introduceSelf();
