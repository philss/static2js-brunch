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

  it('matches the some patterns for static files', () => {
    let proto = Static2JS.prototype;

    expect(proto.pattern.test("foo.static")).to.be.ok;
    expect(proto.pattern.test("bar.static.html")).to.be.ok;
    expect(proto.pattern.test("baz.static.txt")).to.be.ok;
    expect(proto.pattern.test("baz.stati.txt")).to.be.false;
  });

  it('is a javascript plugin for Brunch', () => {
    let proto = Static2JS.prototype;

    expect(proto.brunchPlugin).to.be.true;
    expect(proto.type).to.eql('javascript');
  });
});
