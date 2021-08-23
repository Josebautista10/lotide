const assert = require('chai').assert;
const {tail} = require('../index');

describe('#tail', () => {
  it("returns Lighthouse, Labs for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(['Hello', 'Lighthouse', 'Labs']);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  it('returns [2,3] from [1,2,3]', () => {
    const result = tail([1, 2, 3]);
    assert.deepEqual(result, [2, 3]);
  });
});
