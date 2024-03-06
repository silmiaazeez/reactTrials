
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
const myCar=new Model("Audi","2024");

HelloWorld = () => {
    return (
      <div>
        <h1>Hello....myCar.brand is myCar.model</h1>
      </div>
    )
}

export default HelloWorld;      