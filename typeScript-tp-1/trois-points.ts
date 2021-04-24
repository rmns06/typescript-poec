import { Point } from "./point";

export class troisPoints {
    constructor(private _premier?: Point, private _deuxieme?: Point, private _troisieme?: Point) { }

    public get premier(): Point {
        return this._premier;
    }
    public set premier(value: Point) {
        this._premier = value;
    }
    public get deuxieme(): Point {
        return this._deuxieme;
    }
    public set deuxieme(value: Point) {
        this._deuxieme = value;
    }
    public get troisieme(): Point {
        return this._troisieme;
    }
    public set troisieme(value: Point) {
        this._troisieme = value;
    }

    testerAlignement(): boolean {
        let ab = this.premier.calculerDistance(this.deuxieme);
        let bc = this._deuxieme.calculerDistance(this.troisieme);
        let ac = this.premier.calculerDistance(this.troisieme);
        return ab === ac + bc || ac === ab + bc || bc === ac + ab ? true : false
    }

    estIsocele(): boolean {
        let ab = this.premier.calculerDistance(this.deuxieme);
        let bc = this._deuxieme.calculerDistance(this.troisieme);
        let ac = this.premier.calculerDistance(this.troisieme);
        return ab === ac || ab === bc || bc === ac ? true : false
    }
}