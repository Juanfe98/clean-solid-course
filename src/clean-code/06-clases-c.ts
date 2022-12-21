(() => {

  // Aplicando el principio de responsabilidad única
  // Se debe priorizar composition sobre herencia

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


  interface UserProps {
    email : string;
    role  : string;
  }

  class User {
    
    public email      : string;
    public lastAccess : Date;
    public role       : string;

    constructor({ 
      email,
      role,
    }: UserProps
    ) {
        this.email      = email;
        this.lastAccess = new Date();
        this.role       = role;
    }

    checkCredentials() {
        return true;
    }
  }

  interface SettingsProps { 
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory : string;
    public lastOpenFolder   : string;
      constructor({
        workingDirectory,
        lastOpenFolder ,
      }: SettingsProps
      ) {
          this.workingDirectory = workingDirectory;
          this.lastOpenFolder   = lastOpenFolder;
      }
  }

  interface UserSettingsProps {
    birthDate         : Date;
    gender            : Gender;
    name              : string;
    email             : string;
    role              : string;
    workingDirectory  : string;
    lastOpenFolder    : string;
  }
  class UserSettings {

    public person   : Person;
    public user     : User;
    public settings : Settings;

    constructor({
      birthDate, gender, name,
      email, role,
      workingDirectory, lastOpenFolder
    }: UserSettingsProps){
      this.person   = new Person({birthDate, gender, name});
      this.user     = new User({email,role})
      this.settings = new Settings({workingDirectory, lastOpenFolder});
    }
  }


  const userSettings = new UserSettings( {
     birthDate        : new Date('1985-10-21'),
     email            : 'fernando@google.com',
     gender           : 'M',
     lastOpenFolder   : '/home',
     name             : 'Fernando',
     role             : 'Admin',
     workingDirectory : '/usr/home',
    }
  );

  console.log({ userSettings });


})();