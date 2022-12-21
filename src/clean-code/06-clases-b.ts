(() => {

  // No aplicando el principio de responsabilidad única
  // el principrio de responsabilidad unica la mayoria de las veces
  // va en contra de la herencia, puesto que este dice que una clase 
  // debe hacer una unica cosa.

  type Gender = 'M'|'F';

  interface PersonProps {
    name      : string;
    gender    : Gender;
    birthDate : Date;  
  }
  
  class Person {
    public birthDate;
    public gender;
    public name;

      constructor({name, gender, birthDate}: PersonProps){
        this.birthDate = birthDate;
        this.gender = gender;
        this.name = name;
      }
  }


  interface UserProps extends PersonProps {
    email : string;
    role  : string;
  }

  class User extends Person {
    
    public email      : string;
    public lastAccess : Date;
    public role       : string;

    constructor({ 
      email,
      role,
      name,
      gender,
      birthDate}: UserProps
    ) {
        super( {name, gender, birthDate} );
        this.email      = email;
        this.lastAccess = new Date();
        this.role       = role;
    }

    checkCredentials() {
        return true;
    }
  }

  
  const UserObj = new User({
    email: 'juanmontana1398@gmail.com', 
    role: 'ADMIN',
    name: 'Juan Felipe',
    gender: 'M',
    birthDate: new Date('1998-01-13')
  });
  console.log("🚀 ~ file: 06-clases-b.ts:66 ~ UserObj", UserObj);

  interface UserSettingsProps extends UserProps{ 
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory : string;
    public lastOpenFolder   : string;
      constructor({
        workingDirectory,
        lastOpenFolder ,
        email,
        role,
        name,
        gender,
        birthDate
      }: UserSettingsProps
      ) {
          super({email, role, name, gender, birthDate});
          this.workingDirectory = workingDirectory;
          this.lastOpenFolder = lastOpenFolder;
      }
  }


  const userSettings = new UserSettings( {
     birthDate : new Date('1985-10-21'),
     email : 'fernando@google.com',
     gender : 'M',
     lastOpenFolder : '/home',
     name : 'Fernando',
     role : 'Admin',
     workingDirectory : '/usr/home',
    }
  );

  console.log({ userSettings });


})();