import { Point } from "./point";
import { troisPoints } from "./trois-points";
let p1:Point = new Point(1,1);
let p2:Point = new Point(2,2);
let p3:Point = new Point(3,4);
let ensemble: troisPoints = new troisPoints(p1,p2,p3)

console.log(p1.calculerDistance(p2));
console.log(p1.calculerMilieux(p2));
console.log(ensemble.estIsocele());