class Static2JS {
  compile(params) {
    return new Promise((resolve, reject) => {
      let compiled;

      try {
        compiled = "module.exports = " + JSON.stringify(params.data) + ";";
      } catch (err) {
        return reject(err);
      }

      resolve({data: compiled, path: params.path});
    });
  }
}

Static2JS.prototype.brunchPlugin = true;
Static2JS.prototype.type = 'javascript';
Static2JS.prototype.pattern = /(\.static$|\.static\..*[^$])/;

module.exports = Static2JS;
