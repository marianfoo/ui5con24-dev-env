# UI5con dev environment

This repository showcases a advanced development environment for UI5 and CAP projects.

## Setup

To run the local CAP App, you need to run the following commands:

```bash
git clone https://github.com/marianfoo/ui5con24-dev-env
cd ui5con24-dev-env
mkdir packages/component/dist
pnpm i
pnpm start:server:setup
pnpm start
```

This will start the CAP server and the UI5 App. The related UI5 ABAP App needs a running ABAP Trial 2022 system with UI5 Spreadsheet Component deployed.

## Deploy

### Deploy to BTP

For running the app in the BTP Workzone, you need to build and deployt the mtar. The mtar will contain all the different packages and deploy it together. Before running the deploy, login to your own BTP account using "cf login".

```bash
pnpm run build:btp
pnpm run deploy:btp
```

### Deploy to ABAP

For running the app in the ABAP, you need to deploy this local Component and Library and the UI5 Spreadsheet Importer.
Adapt the yaml files for the deployment to your system.

```bash
pnpm run deploy:abap:app
pnpm run deploy:abap:lib
pnpm run deploy:abap:comp
```

## Current used packages

- ui5-middleware-livereload
- ui5-middleware-serveframework
- ui5-middleware-simpleproxy
- ui5-middleware-ui5
- ui5-tooling-modules
- ui5-tooling-transpile
- cds-launchpad-plugin
- cds-plugin-ui5


## local development setup

```mermaid


flowchart TD
    subgraph abap [ABAP Trial 2022]
      ComponentExt(Component from ABAP Stack)
      ODataV2(OData V2 Service)
    end
    subgraph NPM
        ui5-cc-helloworld
        moment
    end
    subgraph local [Local Development]
      subgraph deps [Dependencies]
        Library
        localComponent
        ui5-cc-control
      end
      subgraph apps [Apps]
        UI5App1
        UI5AppABAP
      end
      subgraph CAP
        CAPServer
        FLP
      end
      moment --> UI5AppABAP
      ui5-cc-helloworld --> UI5AppABAP
      ui5-cc-control --> UI5AppABAP
      ui5-cc-helloworld --> localComponent
      ComponentExt --> UI5AppABAP
      localComponent(Component) -->UI5AppABAP
      localComponent(Component) -->UI5App1
      Library -->UI5App1(UI5 App V4)
      Library -->UI5AppABAP(UI5 App V2)
      CAPServer --> |OData V4| UI5App1
      ODataV2 --> |OData V2| UI5AppABAP
      CAPServer -->FLP[local Fiori Launchpad]
      UI5App1 -->FLP
      UI5AppABAP -->FLP
    end
    subgraph btp [BTP]
    end


```