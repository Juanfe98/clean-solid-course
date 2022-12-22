(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';
 
  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  interface InputProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public value: string;
    public placeholder: string;

    constructor({
      value, placeholder
    }: InputProps) {
      this.value = value;
      this.placeholder = placeholder;
    }
  }

  class InputEvents {

    constructor() {
    }

    setFocus() {};
    getValue() {};
    isActive() {};
    removeValue() {};
  }

  interface InputElementProps {
    id: string,
    type: HtmlType,
    value: string;
    placeholder: string;
  }

  class InputElement {
    public htmlElement: HtmlElement;
    public inputAttributes: InputAttributes;
    public inputEvents: InputEvents;
    
    constructor({id, type, value, placeholder}: InputElementProps){
      this.htmlElement = new HtmlElement(id, type);
      this.inputAttributes = new InputAttributes({value, placeholder});
      this.inputEvents = new InputEvents();
    }
  }

  //? Idea para la nueva clase InputElement

  const nameField = new InputElement({id: 'nameId', type: 'input', value: '', placeholder: 'Enter first name'});

  console.log({ nameField });

})()