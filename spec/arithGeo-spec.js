var arithGeo = require("../arithGeo");

describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

       it("should return 0 for an empty array", function() {
         var response = arithGeo.arithGeo([]);
         expect(response).toEqual(0);
         
       });

    });



    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        var response = arithGeo.arithGeo([2,4,6,8,10]);
         expect(response).toEqual('Arithmetic');
        
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        var response = arithGeo.arithGeo([5,11,17,23,29,35,41]);
         expect(response).toEqual('Arithmetic');
        
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        var response = arithGeo.arithGeo([15,10,5,0,-5,-10]);
         expect(response).toEqual('Arithmetic');
              });

    });
describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        var response = arithGeo.arithGeo([2,6,18,54,162]);
         expect(response).toEqual('Geometric');
        
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        var response = arithGeo.arithGeo([0.5,3.5,24.5,171.5]);
         expect(response).toEqual('Geometric');
        
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        var response = arithGeo.arithGeo([-128,64,-32,16,-8]);
         expect(response).toEqual('Geometric');
        
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        var response = arithGeo.arithGeo([1,2,3,5,8]);
         expect(response).toEqual('-1');
        
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        var response = arithGeo.arithGeo([1,3,6,10,15]);
         expect(response).toEqual('-1');
        
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        var response = arithGeo.arithGeo([1,8,27,64,125]);
         expect(response).toEqual('-1');
        
      });
      
    });
    
  });