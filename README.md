# UI5con dev environment

This repository showcases a advanced development environment for UI5 and CAP projects.

## TODO

- [ ] Add CAP deployment @lemaiwo
- [ ] Add ABAP Deployment
- [ ] Add UI5 Control
  - [ ] add UI5 Control to Library
  - [ ] add UI5 Control to UI5 App
- [ ] add external UI5 Package to App
- [ ] add external npm Package to App
- [ ] add external npm Package to Library
- [ ] add external npm Package to Component
- [X] duplicate UI5 App with UI5 1.108 and OData V2

## current setup

```mermaid


flowchart TD
    subgraph abap [ABAP Trial 2022]
      ComponentExt(Component from ABAP Stack)
      ODataV2(OData V2 Service)
    end
    subgraph local [Local Development]
      subgraph deps [Dependencies]
        Library
        localComponent
      end
      subgraph apps [Apps]
        UI5App1
        UI5AppABAP
      end
      subgraph CAP
        CAPServer
        FLP
      end
      ComponentExt --> UI5AppABAP
      localComponent(Component) -->UI5AppABAP
      localComponent(Component) -->UI5App1
      Library -->UI5App1(UI5 App 1.120 V4)
      Library -->UI5AppABAP(UI5 App 1.108 V2)
      CAPServer --> |OData V4| UI5App1
      ODataV2 --> |OData V2| UI5AppABAP
      CAPServer -->FLP[local Fiori Launchpad]
      UI5App1 -->FLP
      UI5AppABAP -->FLP
    end
    subgraph btp [BTP]
    end


```

## target setup

```mermaid

flowchart TD
    npm_package_ui5_control(npm package ui5 control) --> Library
    external_npm_package --> Component
    external_npm_package --> UI5App_1_120
    external_npm_package --> Library
    ComponentExt(Component from ABAP Stack) --> UI5App_1_120(UI5 App 1.120 OData V4)
    Component --> UI5App_1_120(UI5 App 1.120 OData V4)
    Component --> UI5App_1_108(UI5 App 1.108 OData V2)
    Control --> UI5App_1_120
    Control --> Component
    Control --> Library
    Library --> UI5App_1_120
    Library --> UI5App_1_108
    UI5App_1_120 --> CAP
    UI5App_1_108 --> CAP
    CAP --> Fiori_Launchpad(Fiori Launchpad)
```