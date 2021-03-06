class slingshot {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.004,
      length: 10,
    };
    this.pointB = pointB;
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
  }

  fly() {
    this.slingshot.bodyA = null;
  }

  attach() {
    constraintObj = new slingshot(stoneObj.body, { x: 230, y: 400 });
  }

  display() {
    if (this.slingshot.bodyA) {
      var pointA = this.slingshot.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
