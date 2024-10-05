import Car from './10-car'; // Importing the Car class

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar method to return an instance of Car
  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Getter to access the range attribute
  get range() {
    return this._range;
  }
}
