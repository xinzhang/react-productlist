
import config from '../config.js';

test('test config items', () => {
  expect(config.itemsPerPageList).toHaveLength(4);
  expect(config.itemsPerPageList[0]).toEqual(8);
})
