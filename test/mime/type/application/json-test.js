(function (buster, define) {

	var assert, refute, undef;

	assert = buster.assert;
	refute = buster.refute;

	define('rest/mime/type/application/json-test', function (require) {

		var json = require('rest/mime/type/application/json');

		buster.testCase('rest/mime/type/application/json', {
			'should read json': function () {
				assert.equals({ foo: 'bar' }, json.read('{"foo":"bar"}'));
			},
			'should stringify json': function () {
				assert.equals('{"foo":"bar"}', json.write({ foo: 'bar' }));
			}
		});

	});

}(
	this.buster || require('buster'),
	typeof define === 'function' && define.amd ? define : function (id, factory) {
		var packageName = id.split(/[\/\-]/)[0], pathToRoot = id.replace(/[^\/]+/g, '..');
		pathToRoot = pathToRoot.length > 2 ? pathToRoot.substr(3) : pathToRoot;
		factory(function (moduleId) {
			return require(moduleId.indexOf(packageName) === 0 ? pathToRoot + moduleId.substr(packageName.length) : moduleId);
		});
	}
	// Boilerplate for AMD and Node
));
