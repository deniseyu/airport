var airportCapacity = 5;

function Airport(){
  this.planes = [];
  this.capacity = airportCapacity;
};

Airport.prototype.land = function(plane) {
  if(this.isFull === true) {
    throwError('Airport full!');
  } else {
    this.planes.push(plane);
  }
};

Airport.prototype.planeCount = function() {
  return this.planes.length;
};

Airport.prototype.takeoff = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
}

Airport.prototype.isFull = function() {
  return this.planes.length === this.capacity;
};

function Plane(){
  this.status = "ground";
};

Plane.prototype.land = function() {
  this.status = "ground";
};

Plane.prototype.takeoff = function() {
  this.status = "air";
};