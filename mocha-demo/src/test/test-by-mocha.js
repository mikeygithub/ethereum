const assert = require('assert');
const sum = require('../sum-demo');

describe('#sum-demo.js',()=>{
    describe('#sum()',()=>{
        it('sum() should return 0', function () {
            assert.strictEqual(sum(),0);
        });
        it('sum(1) should return 1', function () {
            assert.strictEqual(sum(1),1);
        });
        it('sum(1,2) should return 3', function () {
            assert.strictEqual(sum(1,2),3);
        });
        it('sum(1,2,3) should return 6', function () {
            assert.strictEqual(sum(1,2,3),6);
        });
    })
})
