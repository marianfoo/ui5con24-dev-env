/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ui5con24.lib.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "ui5con24.lib",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"ui5con24.lib.ExampleColor"
		],
		interfaces: [],
		controls: [
			"ui5con24.lib.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ui5con24.lib</code>
	 *
	 * @namespace
	 * @alias ui5con24.lib
	 * @author „marianfoo“
	 * @version ${version}
	 * @public
	 */
	var thisLib = ui5con24.lib;

	/**
	 * Semantic Colors of the <code>ui5con24.lib.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
