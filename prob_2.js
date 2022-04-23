var Matrix = /** @class */ (function () {
    function Matrix(rows, columns) {
        var _this = this;
        this._elements = [];
        this.initMatrix = function () {
            var arr = [];
            for (var i = 0; i < _this._rows; i++) {
                arr[i] = [];
                for (var j = 0; j < _this._columns; j++) {
                    arr[i][j] = 0;
                }
            }
            return arr;
        };
        this.sumMatrix = function (matrix) {
            if (matrix[0].length !== _this._columns || matrix.length !== _this._rows) {
                return "NOOP";
            }
            else {
                for (var i = 0; i < _this._rows; i++) {
                    for (var j = 0; j < _this._columns; j++) {
                        _this._elements[i][j] += matrix[i][j];
                    }
                }
                return _this._elements;
            }
        };
        this.multiplyMatrix = function (matrix) {
            if (_this._columns !== matrix.length) {
                return "NOOP";
            }
            else {
                var res = [];
                var sumMatrixElement = 0;
                for (var i = 0; i < _this._rows; i++) {
                    res[i] = [];
                    for (var j = 0; j < matrix[0].length; j++) {
                        for (var k = 0; k < _this._columns; k++) {
                            sumMatrixElement += _this._elements[i][k] * matrix[k][j];
                        }
                        res[i][j] = sumMatrixElement;
                        sumMatrixElement = 0;
                    }
                }
                _this._elements = res;
                return res;
            }
        };
        this._rows = rows;
        this._columns = columns;
        this._elements = this.initMatrix();
    }
    Object.defineProperty(Matrix.prototype, "elements", {
        get: function () {
            return this._elements;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        enumerable: false,
        configurable: true
    });
    Matrix.prototype.setElement = function (row, column, value) {
        this._elements[row - 1][column - 1] = value;
    };
    return Matrix;
}());
var matrix = new Matrix(3, 3);
var matrix2 = new Matrix(3, 2);
matrix.setElement(1, 1, 1);
matrix.setElement(1, 2, 2);
matrix.setElement(1, 3, 3);
matrix.setElement(2, 1, 3);
matrix.setElement(2, 2, 4);
matrix.setElement(2, 3, 5);
matrix.setElement(3, 1, 5);
matrix.setElement(3, 2, 6);
matrix.setElement(3, 3, 7);
matrix2.setElement(1, 1, 1);
matrix2.setElement(1, 2, 2);
matrix2.setElement(2, 1, 3);
matrix2.setElement(2, 2, 4);
matrix2.setElement(3, 1, 3);
matrix2.setElement(3, 2, 4);
/* console.log(matrix.sumMatrix(matrix2.elements)); */
console.log(matrix.multiplyMatrix(matrix2.elements));
