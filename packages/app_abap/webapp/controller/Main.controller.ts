import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import * as moment from "moment";
import Text from "sap/m/Text";

/**
 * @namespace ui5con24.app.abap.controller
 */
export default class Main extends BaseController {


	public onInit(): void {
		
	}

	public onAfterRendering(): void {
		// Get the current date and time with the local timezone
		const localTime = moment().format("YYYY-MM-DD HH:mm:ss");

		// Update UI5 Text controls for both local and NY times
		const localTimeControl = this.getView().byId("localtime") as Text;
		localTimeControl.setText(`Local time: ${localTime}`);
	
	}


	public async openSpreadsheetImporter(): Promise<void> {
		const spreadsheetUpload = await this.getView()
		.getController()
		.getOwnerComponent()
		.createComponent({
		  usage: "spreadsheetImporter",
		  async: true,
		  componentData: {
			context: this,
		  },
		});
	  	spreadsheetUpload.openSpreadsheetUploadDialog();
	}

	public sayHello(): void {
		MessageBox.show("Hello World!");
		
	}
}
