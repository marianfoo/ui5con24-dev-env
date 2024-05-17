import Button from "sap/m/Button";
import UIComponent from "sap/ui/core/UIComponent";

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
		return new Button({ text: "UI5con24 Component", press: () => console.log("Button pressed")});
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
