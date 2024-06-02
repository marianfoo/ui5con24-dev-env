import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $UIComponentSettings } from "sap/ui/core/UIComponent";

declare module "./Component" {

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $ComponentSettings extends $UIComponentSettings {
        text?: string | PropertyBindingInfo;
    }

    export default interface Component {

        // property: text
        getText(): string;
        setText(text: string): this;
    }
}
