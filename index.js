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
class ElectricCar extends Car {
  constructor(make, model, year, range) {
    // Represents the range of the electric car in miles.
    super(make, model, year);
    this.range = range;
  }
  // Have the ElectricCar prototype override the getDescription method of the Car prototype with
  // a new implementation that includes information about the range of the electric car.

  getDescription() {
    return `${super.getDescription()} range of electric in milles ${
      this.range
    }`;
  }
}
// Create an instance of ElectricCar:
// with the make using (new constuctor) "Tesla", model "Model S", year 2019, and range 300,
let myCar = new ElectricCar("Tesla", "Model S", "year 2019", "range 300");
// calling the fuction method
// getDescription method is called on the instance.
myCar.getDescription();
// and the getDescription method is called on the instance. The output will be a string containing the make,
// model, year, and range of the electric car.
// using console.log with the method and variable.
console.log(myCar.getDescription());
