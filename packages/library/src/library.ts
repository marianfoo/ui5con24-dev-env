/*!
 * ${copyright}
 */

import Lib from "sap/ui/core/Lib";

import * as coreLib from "sap/ui/core/library"
coreLib; // prevent removal of unused import which is needed to load the core lib asynchronously

/**
 * Initialization Code and shared classes of library ui5con24.lib.
 */

// delegate further initialization of this library to the Core
const thisLib: { [key: string]: unknown } = Lib.init({
	name: "ui5con24.lib",
	version: "${version}",
	dependencies: [
		// keep in sync with the ui5.yaml and .library files
		"sap.ui.core"
	],
	types: ["ui5con24.lib.ExampleColor"],
	interfaces: [],
	controls: ["ui5con24.lib.Example"],
	elements: [],
	noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
}) as { [key: string]: unknown };

/**
 * Semantic Colors of the com.myorg.myUI5Library.Example control.
 *
 * @enum {string}
 * @public
 */
export enum ExampleColor {
	/**
	 * Default color (brand color)
	 * @public
	 */
	Default = "Default",

	/**
	 * Highlight color
	 * @public
	 */
	Highlight = "Highlight"
}
// FIXME: this line is planned to become obsolete and may need to be removed later
thisLib.ExampleColor = ExampleColor; // add the enum to the library; this is important because UI5 otherwise cannot identify the type and will skip type checking for properties of this type

// export the library namespace
export default thisLib;
