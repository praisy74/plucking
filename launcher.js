class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
 
    display(){
        if(this.launcher.bodyA!==null)
        {
        var poi = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(poi.x, poi.y, pointB.x, pointB.y);
        }
    }
    

fly()
{
    this.launcher.bodyA=null;
}
attach(body){
    this.launcher.bodyA = body;
}
}