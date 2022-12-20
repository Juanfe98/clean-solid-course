(() => {
  interface FruitsByColor {
    red: string[];
    yellow: string[];
    purple: string[];
  }

  function isRedFruit( fruit: string ): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela'];
    return redFruits.includes(fruit);
  }

  function getFruitsByColor( color: keyof FruitsByColor ): string[] {
      const fruitsByColor: FruitsByColor = {
          red: ['manzana','fresa'],
          yellow: ['piña','banana'],
          purple: ['moras','uvas']
        };
    
    const avaliableColors = Object.keys(fruitsByColor);
        
    if (avaliableColors.includes(color)) return fruitsByColor[color];

    throw Error('the color must be: red, yellow, purple');
  }

  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {

    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking ) return 'Fourth step broken.';

    return 'Working properly!';
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // false

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); 
})();