import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";

/**
 * @namespace ui5con24.app.controller
 */
export default class Main extends BaseController {


	public onInit(): void {
		// const example = new Example({
		// 	text: "Hello World!"
		// });
		// this.getView().addContent(example);
	}

	public sayHello(): void {
		MessageBox.show("Hello World!");
		
	}
}
