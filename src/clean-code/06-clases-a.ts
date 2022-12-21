(() => {

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: string, 
      public gender: Gender, 
      public birthdate: Date){}
  }


  const newPerson = new Person('Juan Felipe','M',new Date('1998-01-13'));
  console.log({newPerson});

})()