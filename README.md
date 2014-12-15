# Airport System

As an introduction to object-oriented design in Javascript, we designed a simple program to simulate the operations of an airport.

## Technologies Used

* Javascript
* Jasmine

## To Use

Clone the repository:
```
git clone git@github.com:deniseyu/airport.git
cd airport
```

To run tests, open SpecRunner.html in a browser.

## System Design

This is a very basic version of a classic Makers Academy exercise. In this version, the airport has a capacity of 5 planes, and it can

The airport has responsibility to manage the landing and takeoff of planes based on its runway capacity.

Planes have responsibility to toggle their own status of being in the air or on the ground.

## Future Iterations

* Test for error-catching in Jasmine
* The weather can be randomly stormy or sunny, which determines whether the airport will clear a plane to takeoff and land
* Encapsulate testing setup better by refactoring plane methods to a separate class and employing Jasmine spies