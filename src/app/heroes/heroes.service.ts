//services and dependency injection
//here we created this `hero.services.ts`
export class heroService {
  //this class is only responsible for getting the list in the array!
  constructor() {}
  getTraits() {
    return ["grumpy", "silly"];
  }
  getSkills() {
    return ["funny", "friendly"];
  }
  getThings(){
    return ["Religious", "Honest", "Loyal", "Devoted", "Loving", "Kind", "Sincere", "Ambitious", "Satisfied", "Happy", "Faithful", "Patient", "Determined", "Persistent"];
  };
}
