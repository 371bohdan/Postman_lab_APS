const newman = require('newman');

describe('API Tests', () => {
  it('should pass Postman collection tests', (done) => {
    newman.run({
      collection: require('../water_postman.postman_collection.json'),
      reporters: 'cli'
    }, function (err) {
      if (err) {
        done(err);
      } else {
        done();
      }
    });
  });
});