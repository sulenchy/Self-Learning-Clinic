//Linking findMinMax Module to findMinMax-spec test
var findMinMax = require("../findMinMax");

// Global function that enclose other function
describe('Min-Max Numbers in a List: ', function () {

    //local function
    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        var result = findMinMax.findMinMax([4,4,4,4]); 
        expect(result).toEqual([4]);
      });

      it('should return [6] for [6,6,6,6,6,6,6]', function () {
        var result = findMinMax.findMinMax([6,6,6,6,6,6,6]); 
        expect(result).toEqual([6]);
      });

      it('should return [0] for [0,0,0,0]', function () {
        var result = findMinMax.findMinMax([0,0,0,0]); 
        expect(result).toEqual([0]);
      });

    });

    //local function
    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        var result= findMinMax.findMinMax([1,2,3,4]);
        expect(result).toEqual([1,4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        var result = findMinMax.findMinMax([6,4]);
        expect(result).toEqual([4,6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        var result = findMinMax.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2]);
        expect(result).toEqual([2,78]);
      });


      it('should return [9,34] for [12,13,15,9,34]', function () {
        var result = findMinMax.findMinMax([12,13,15,9,34]);
        expect(result).toEqual([9,34])
      });

      it('should return [100,321] for [100,104,321,123]', function () {
        var result = findMinMax.findMinMax([100,104,321,123]);
        expect(result).toEqual([100,321])
      });

      it('should return [5.0,5.5] for [5.4,5.5,5.0,5.3]', function () {
        var result = findMinMax.findMinMax([5.4,5.5,5.0,5.3]);
        expect(result).toEqual([5.0,5.5])
      });

      it('should return [5.50,5.55] for [5.54,5.55,5.50,5.53]', function () {
        var result = findMinMax.findMinMax([5.53,5.55,5.50,5.53]);
        expect(result).toEqual([5.50,5.55])
      });     

    });    
});

