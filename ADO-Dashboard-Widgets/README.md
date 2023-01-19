This folder contains RazType Azure DevOps Dashboards Custom Widgets.

## Widgets in this Repo
1. **[Hello World Widget](hello-world.html):** Part 1 of [official docs](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops#part-1-hello-world).
2. **[Hello World REST API Widget](hello-world2.html):** Part 2 of [official docs](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops#part-2-hello-world-with-azure-devops-rest-api).
2. **[Hello World with Configuration Widget](hello-world3.html):** Part 3 of [official docs](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops#part-3-hello-world-with-configuration).

## Update Tips
1. Version number should always be incremented on every update. This is done in the `vss-extension.json` file. When updating an extension, all organizations using the widgets will get the update.
2. Additional folders should be added in the `files` node of `vss-extension.json`.
3. Add different widget sizes in the `supportedSizes` node. _(WARNING: If you remove an already supported size, the widget will fail to load properly.)_
4. Adding/changing extension `scopes` is not supported. Workaround is to _remove_ the existing extension or upload into a new name.

## How to Package and Publish the Extension

### Pre-requisites
1. Install the packaging tool `npm i -g tfx-cli`
2. Create a publisher profile in the [Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher)

### CLI and Publishing Portal
1. Create the extension with `tfx extension create --manifest-globs vss-extension.json --output-path packages`
2. Upload the generated `.vsix` file in the [Publishing Portal](https://marketplace.visualstudio.com/manage). (For uploading new extensions, shoose **Azure DevOps**)

### CLI only
Publish and share in 1 command using `tfx extension publish --manifest-globs your-manifest.json --share-with yourOrganization`