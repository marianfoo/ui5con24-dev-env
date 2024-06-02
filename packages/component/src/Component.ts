import Button from "sap/m/Button";
import Dialog from "sap/m/Dialog";
import Label from "sap/m/Label";
import UIComponent from "sap/ui/core/UIComponent";
import * as Control from "ui5-cc-helloworld/Control"

/**
 * @namespace ui5con24.component
 */
export default class Component extends UIComponent {
	constructor(idOrSettings?: string | $ComponentSettings);
	constructor(id?: string, settings?: $ComponentSettings);
	constructor(id?: string, settings?: $ComponentSettings) {
		super(id, settings);
	}

	public static metadata = {
		// interfaces: ["sap.ui.core.IAsyncContentCreation"],
		manifest: "json",
		properties: {
			text: { type: "string" }
		},
		aggregations: {
			rootControl: {
				type: "sap.ui.core.Control",
				multiple: false,
				visibility: "hidden"
			}
		},
		events: {
			
		}
	};

	//=============================================================================
	//LIFECYCLE APIS
	//=============================================================================

	public async init(): Promise<void> {
		// call the init function of the parent - ATTENTION: this triggers createContent()
		// call the base component's init function
		super.init();
	}

	createContent() {
		return new Button({ text: "UI5con24 Component", press: this.showDialog.bind(this)});
	}

	showDialog() {
		// show a ui5 dialog with a text control inside
		const dialog = new Dialog({
			title: "UI5con24 Component",
			content: new Control(),
			beginButton: new Button({ text: "Close", press: () => dialog.close() }),
			afterClose: () => dialog.destroy()
		});
		dialog.open();
	}

	//=============================================================================
	//OVERRIDE SETTERS
	//=============================================================================

	//=============================================================================
	//PUBLIC APIS
	//============================================================================


	//=============================================================================
	//EVENT HANDLERS
	//=============================================================================


	//=============================================================================
	//PRIVATE APIS
	//=============================================================================


	//=============================================================================
	//PRO APIS
	//=============================================================================
}
