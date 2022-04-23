class Matrix{
    private _rows: number;
    private _columns: number;
    private _elements: number[][] = [];

    constructor(rows:number, columns: number){
        this._rows = rows;
        this._columns = columns;
        this._elements = this.initMatrix();
    }
    public get elements(): number[][] {
        return this._elements;
    }    
    public get rows(): number {
        return this._rows;
    }
    public get columns(): number {
        return this._columns;
    }
    
    public setElement(row:number, column: number,  value:number) {
        this._elements[row-1][column-1]= value;
    }

    private initMatrix = (): number[][] => {
        let arr: number[][] = [];
        for (let i = 0; i < this._rows; i++) {
            arr[i] = [];
            for (let j = 0; j < this._columns; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
    }
    public sumMatrix = (matrix: number[][]): string | number[][] => {
        if (matrix[0].length !== this._columns || matrix.length !== this._rows ) {
            return "NOOP"
        } else {
            for (let i = 0; i < this._rows; i++) {
                for (let j = 0; j < this._columns; j++) {
                    this._elements[i][j] += matrix[i][j];
                }
            }
            return this._elements;
        }
    }

    public multiplyMatrix = (matrix: number[][]) => {
        if (this._columns !== matrix.length) {
            return "NOOP"
        } else {
            let res: number[][] = [];
            let sumMatrixElement: number = 0;
            for (let i = 0; i < this._rows; i++) {
                res[i] = []
                for (let j = 0; j < matrix[0].length; j++) {
                    for (let k = 0; k < this._columns; k++) {
                        sumMatrixElement += this._elements[i][k]*matrix[k][j];
                    }
                    res[i][j] = sumMatrixElement;
                    sumMatrixElement = 0;
                }
            }
            this._elements = res
            return res;
        }
    }
}

let matrix = new Matrix(3,3)
let matrix2 = new Matrix(3,2)

matrix.setElement(1,1, 1)
matrix.setElement(1,2, 2)
matrix.setElement(1,3, 3)
matrix.setElement(2,1, 3)
matrix.setElement(2,2, 4)
matrix.setElement(2,3, 5)
matrix.setElement(3,1, 5)
matrix.setElement(3,2, 6)
matrix.setElement(3,3, 7)

matrix2.setElement(1,1, 1)
matrix2.setElement(1,2, 2)
matrix2.setElement(2,1, 3)
matrix2.setElement(2,2, 4)
matrix2.setElement(3,1, 3)
matrix2.setElement(3,2, 4)

/* console.log(matrix.sumMatrix(matrix2.elements)); */
console.log(matrix.multiplyMatrix(matrix2.elements));
