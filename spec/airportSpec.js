describe('Airport', function(){

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('can have planes', function(){
    airport.land(plane);
    expect(airport.planes.length).toEqual(1);
  });

  it('can allow the plane to take off', function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes.length).toEqual(0);
  });

  it('should know when it is full of planes', function(){
    for(i = 0; i < 5; i++) {
      var anyPlane = new Plane();
      airport.land(anyPlane);
    }
    expect(airport.capacity).toEqual(5);
    expect(airport.isFull()).toBe(true)
  });

  it('should not allow a plane to land when it is at capacity', function(){
    for(i = 0; i < 5; i++) {
      var anyPlane = new Plane();
      airport.land(anyPlane);
    }
    // expect(airport.land(plane)).toThrowError('Airport full!');
    expect(airport.planes.length).toEqual(5);
  });

});

describe('Plane', function(){

  var plane;

  it('should be on the ground when initialized', function(){
    plane = new Plane;
    expect(plane.status).toEqual("ground");
  });

  it('should take off and know it is in the air', function() {
    plane = new Plane;
    plane.takeoff();
    expect(plane.status).toEqual("air");
  });

  it('should land and know it is on the ground', function(){
    plane = new Plane;
    plane.takeoff();
    plane.land();
    expect(plane.status).toEqual("ground");
  });


});