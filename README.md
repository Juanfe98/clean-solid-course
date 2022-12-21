# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y
CleanCode.

## Techincal Debt

[More information here](https://refactoring.guru/refactoring/technical-debt)

The metaphor of “technical debt” in regards to unclean code was originally suggested by Ward Cunningham.

If you get a loan from a bank, this allows you to make purchases faster. You pay extra for expediting the process - you
don’t just pay off the principal, but also the additional interest on the loan. Needless to say, you can even rack up so
much interest that the amount of interest exceeds your total income, making full repayment impossible.

The same thing can happen with code. You can temporarily speed up without writing tests for new features, but this will
gradually slow your progress every day until you eventually pay off the debt by writing tests.

## Clean Code

Is obvious for other programmers.

Is easier and cheaper to maintain!

Is easy to understand by other programers.

Has to be simple and direct. It should be readen as easy as a well writtren book.

## Naming things

1. The name should express the intention.

### Booleans

Should be declarative and unparcial that way you wont confuse it's value.

| Bad | Good |
|--- |--- |
| open | isOpen |
| write | canWrite |
| fruit | hasFruit |
| active | isActive |
| notValues | hasValues |
| notEmpty | isEmpty |

### Numbers

Depending on what you are trying to express you should always add that "more" meaning to the variable name

| Bad | Good |
|--- |--- |
| fruit | maxFruits |
| cars | totalCars |

### Functions

The name should represent an action, it should express what the function will do!

Should be simple, It should not express all the body of the function.

| Bad | Good |
|--- |--- |
| createUserIfNotExists | createUser |
| updateUserIfNotEmpty | updateUser |


## DRY (Don't Repeat Yourself)

- It's about avoid duplicities on our code. 

- Makes test simpler.

- Help to centralize process

## Classes 

### Defining classes 

The same code is defining a class with his properties and initializing them in the constructor.

```Typescript
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;
    
    constructor(name: string, gender: Gender, birthdate: Date){
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }
```

The next code is doing the exact same thing.

```Typescript

  class Person {
    constructor(
      public name: string, 
      public gender: Gender, 
      public birthdate: Date){}
  }

```

In classes you could send properties as objects, this will bring you some adventages

1. You could send the properties optionally without having to specify all the values in the right order

```Typescript

  class Person {
    public birthDate;
    public gender;
    public name;

      constructor({name, gender, birthDate}: personProps){
        this.birthDate = birthDate;
        this.gender = gender;
        this.name = name;
      }
  }

```

### Apliying the Single responsability principle

To see more detailed with the code go to `clean-code/06-clases-b` and `clean-code/06-clases-c`.
here you can see the difference between the classes applying and not the single responsability principle.

To apply this principle you should alrays prefer composition over inheritance.