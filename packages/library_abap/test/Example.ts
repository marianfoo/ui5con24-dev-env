import { ExampleColor } from "ui5con24/lib/abap/library";
import Example from "ui5con24/lib/abap/Example";

// create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
	text: "Example",
	color: ExampleColor.Highlight,
	press: (event) => {
		alert(event.getSource());
	}
}).placeAt("content");
