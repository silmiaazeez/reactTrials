
class Car{
  constructor(name){
    this.brand=name;
  }
}
class Model extends Car{
  constructor (name,model){
    this.model=model;
  }
}
const myCar=new Model("Audi");

function HelloWorld() {
    return (
      <div>
        <h1>Hello....myCar.brand</h1>
      </div>
    )
}

export default HelloWorld;      