jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/ram/app/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/ram/app/test/integration/pages/App",
	"com/ram/app/test/integration/pages/Browser",
	"com/ram/app/test/integration/pages/Master",
	"com/ram/app/test/integration/pages/Detail",
	"com/ram/app/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.ram.app.view."
	});

	sap.ui.require([
		"com/ram/app/test/integration/MasterJourney",
		"com/ram/app/test/integration/NavigationJourney",
		"com/ram/app/test/integration/NotFoundJourney",
		"com/ram/app/test/integration/BusyJourney",
		"com/ram/app/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});