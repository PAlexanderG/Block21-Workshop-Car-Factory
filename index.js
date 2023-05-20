// # OVERVIEW

// The automotive industry comprises a wide range of companies
// and organizations involved in the design, development, manufacturing,
// marketing, and selling of motor vehicles.
// Creating a virtual assembly line to create some different types of vehicles
// with as many as the same parts as you possibly can.

// Write code that defines a constructor function called Car that creates a new object
class Car {
  // Creating a constructor
  constructor(make, model, year) {
    // Object properties make, model, and year.
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Add a method called getDescription to the Car prototype, which returns a string
  // containing information about the car.
  getDescription() {
    return `This virtual assembly has ${this.make} make, ${this.model} model, and is ${this.year} year.`;
  }
}
// Define the ElectricCar function as a subclass of Car.
// Include an additional property called range
class ElectricCar extends Range {
  constructor(make, model, year) {
    // Represents the range of the electric car in miles.
    super(make, model, year);
    this.carMilles = carMilles;
  }

  getDescription() {
    return `${super.getDescription()} range of electric in milles ${
      this.carMilles
    }`;
  }
}
// Have the ElectricCar prototype override the getDescription method of the Car prototype with
// a new implementation that includes information about the range of the electric car.
let ElectricCar = {
  shortDistance: true,
};
let ElectricCar2 = {
  longDistance: true,
};
ElectricCar2.__proto__ = ElectricCar;

// we can find both properties in rabbit now:
alert(ElectricCar.eficiente); // true (**)
alert(ElectricCar2.onlybatery); // true
