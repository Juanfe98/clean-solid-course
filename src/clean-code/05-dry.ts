type Size = 'M' | 'S' | 'XL';

class Product {
  constructor(
    public name: string,
    public price: number = 0,
    public size: Size = 'S'
  ){}

  // No DRY
  toString(){
    // We are adding a new line exactly equal for every new prop we add in this class
    if (this.name.length <= 0) throw new Error("The name is empty");
    if (this.price <= 0) throw new Error("The price is zero");
    if (this.size.length <= 0) throw new Error("The size is empty");
    
    return `${this.name}, (${this.price}) ${this.size}`;
  }

  //Appliying DRY
  // Here we are creating a new method that will contain the logic for our validations
  // and like we are validating by data type we wont need to add lines when a new property is added
  // to the class
  isProductReady(): boolean {
    for( const key in this ) {
        switch( typeof this[key] ) {
            case 'string':
                if ( (<string><unknown>this[key]).length <= 0 ) throw Error(`${ key } is empty`);
            break;
            case 'number':
                if ( (<number><unknown>this[key]) <= 0 ) throw Error(`${ key } is zero`);
            break;
            default:
                throw Error(`${ typeof this[key] } is not valid`);
        }
    }
    return true;
}


  toStringDRY() {
      if ( !this.isProductReady ) return;
      return `${ this.name } (${ this.price }), ${ this.size }`
  }

}


(() => {
  const bluePants = new Product('Blue pants', 10);
  console.log(bluePants.toString());
  console.log(bluePants.toStringDRY());
})();