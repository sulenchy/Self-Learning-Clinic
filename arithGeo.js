// delcaration  and implementation of  arithGeo funtion 
exports.arithGeo = function (arr) {
	//declaration and initialisation of diff var
    var diff = arr[1] - arr[0];
    //declaration and initialisation of ratio var
    var ratio = arr[1] / arr[0];

    
    var isArithmetic = true, isGeometric = isFinite(ratio) && ratio != 0;

    //testing logic
    if (arr.length == 0)
        return 0;
    else
    {
        for (var i = 1, j = 2; (isArithmetic || isGeometric) && j < arr.length; i++, j++) {
            if (isArithmetic && arr[j] - arr[i] != diff) {
                isArithmetic = false;

            }
            if (isGeometric && arr[j] / arr[i] != ratio) {
                isGeometric = false;
            }
        }
        return isArithmetic && isGeometric ? 'both' :
               isArithmetic                ? 'Arithmetic' : 
                               isGeometric ? 'Geometric'  : '-1';
    }

};


