// delcaration  and implementation of  Make_Sound funtion 
exports.Make_Sound = function (num) {

	//testing logic
	if (num%3==0 && num%5!=0)
          return 'Fizz';
        else if(num%5==0 && num%3!=0)
          return 'Buzz';
        else if (num%5==0 && num % 3==0)
          return 'FizzBuzz'
        else 
          return num

};


