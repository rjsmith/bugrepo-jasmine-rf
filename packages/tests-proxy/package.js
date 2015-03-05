Package.describe({
	name: "velocity:test-proxy",
	summary: "Dynamically created package to expose test files to mirrors",
	version: "0.0.4",
	debugOnly: true
});

Package.onUse(function (api) {
	api.use("coffeescript", ["client", "server"]);
	api.add_files("tests/jasmine/server/integration/sample/spec/PlayerSpec.js",["server"]);
	api.add_files("tests/jasmine/server/integration/sample/spec/SpecMatchers.js",["server"]);
	api.add_files("tests/jasmine/server/integration/sample/src/Player.js",["server"]);
	api.add_files("tests/jasmine/server/integration/sample/src/Song.js",["server"]);
	api.add_files("tests/robotframework/arguments.txt",["server","client"]);
	api.add_files("tests/robotframework/suites/resources.txt",["server","client"]);
	api.add_files("tests/robotframework/suites/test-html.html",["server","client"]);
	api.add_files("tests/robotframework/suites/test-tsv.tsv",["server","client"]);
	api.add_files("tests/robotframework/suites/test-txt.txt",["server","client"]);
});