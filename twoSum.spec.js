const { expect } = require('chai'); 
const twoSum = require('./twoSum'); 

describe('twoSum', () => {
    it('returns an empty array if there are less than two elements in the initial array', () => {
        expect(twoSum([1], 3)).to.eql([]);
        expect(twoSum([1], 3)).to.be.an('array');
    });
    it('returns and array of two items if there is a solution', () => { 
        expect(twoSum([1, 3], 4)).to.be.an('array'); 
        expect(twoSum([1, 3], 4).length).to.equal(2); 
    }); 
    it('returns and array of the index of the items that create the sum', () => { 
        expect(twoSum([1, 3], 4)).to.include(0); 
        expect(twoSum([1, 3], 4)).to.include(1);  
    })
    it('it returns a solution from a long array of inputs', () => { 
        expect(twoSum([1, 3, 2, 7, 8, 5, 2, 5, 1], 15)).to.include(3); 
        expect(twoSum([1, 3, 2, 7, 8, 5, 2, 5, 1], 15)).to.include(4);
    })
    it('returns an empty array if there is no sum', () => { 
        expect(twoSum([7, 6], 4)).to.be.an('array'); 
        expect(twoSum([7, 6], 4).length).to.equal(0); 
    })
    
}); 