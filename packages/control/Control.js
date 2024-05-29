sap.ui.define(["sap/ui/core/Control"], (Control) => {
    return Control.extend("ui5con24.cc.Control", {
        init() {
            console.debug(`[${this.getMetadata().getName()}] > init`)
        },
        renderer: {
            apiVersion: 2, // high-perf!
            /**
             * create the view layer
             *
             * @param {sap.ui.core.RenderManager} oRM Render Manager v2
             * @param {sap.ui.core.Control} oControl this control
             */
            render(oRM, oControl) {
                console.debug(`[${oControl.getMetadata().getName()}] > rendering`)
                oRM.openStart("div", oControl)
                // just write 'UI5con24 control' in the div
                oRM.text("UI5con24 control")
                oRM.openEnd()
                // control html goes here
                oRM.close("div")
            }
        }
    })
})
