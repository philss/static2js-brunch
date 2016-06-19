const expect = require('chai').expect;
const Static2JS = require('../index');

describe('Static2JS', () => {
  it('exports a string into a javascript module', () => {
    let static2JS = new Static2JS();

    return static2JS.compile({ data: 'Brunch for the win' })
      .then((result) => {
        expect(result.data).to.equal("module.exports = \"Brunch for the win\";");
      });
  });

  it('fails when params is not present', () => {
    let static2JS = new Static2JS();

    return static2JS.compile()
      .then(function() { expect.fail('Expected to fail'); })
      .catch(function(err) {
        expect(err).to.eql(new TypeError());
      });
  });
});
