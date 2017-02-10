// declaraton and initialization of the new_arr as empty array
var new_arr=[];

// delcaration  and implementation of  findMinMax funtion 
exports.findMinMax = function (arr) {

	//getting the max form the array arr
	var max = Math.max.apply(null, arr) 

	//getting the min form the array arr
	var min = Math.min.apply(null, arr) 

	//testing logic
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



