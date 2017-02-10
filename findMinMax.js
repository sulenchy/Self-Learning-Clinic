var new_arr=[];
exports.findMinMax = function (arr) {
	//var len = arr.length
	//var numbers = [1, 2, 3, 4];
	var max = Math.max.apply(null, arr) // 4
	var min = Math.min.apply(null, arr) // 1
	if (min == max)
	{
		new_arr[0] = min;
		return new_arr;
	}
	else
	{
		new_arr[0] = min;
		new_arr[1] = max;
		return new_arr;
	}

};



