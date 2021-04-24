export class Point{
    constructor(private _abs?: number, private _ord?: number){}
    public get abs(): number {
        return this._abs;
    }
    public set abs(value: number) {
        this._abs = value;
    }
    public get ord(): number {
        return this._ord;
    }
    public set ord(value: number) {
        this._ord = value;
    }
    calculerDistance(p: Point): number{
        return Math.sqrt((Math.pow(this.abs - p.abs,2)+Math.pow(this.ord - p._ord, 2)))
    }
    calculerMilieux(p: Point){
        return new Point(((this.abs + p._abs)/2),(this.ord + p.ord)/2)
    }
}