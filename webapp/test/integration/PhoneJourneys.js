jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/ram/app/test/integration/NavigationJourneyPhone",
		"com/ram/app/test/integration/NotFoundJourneyPhone",
		"com/ram/app/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});