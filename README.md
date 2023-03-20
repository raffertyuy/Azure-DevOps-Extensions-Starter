# Azure-DevOps-Extensions-Starter
Azure DevOps allows creating custom [extensions](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops). As there are gaps in the documentation, I wrote my [Learning Notes](/Learning.md) as I created this template.

![screenshot](/screenshot.png)

This repository is my attempt to combine the best practices of these two code samples:
1. [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample): the main samples repo using the latest Azure devops extensions SDK, and
2. [azure-devops-extension-hot-reload-and-debug](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug): a way to locally debug changes (also see [this blog post](https://devblogs.microsoft.com/devops/streamlining-azure-devops-extension-development/)).
    - To debug, install Firefox and launch the webpack-dev-server with `webpack-dev-server --mode development`
    - Remember to point to the specific html URL that you want to debug (i.e. https://localhost:3000/dist/hub-hotreload/hub-hotreload.html)

The key changes from merging these codes are:
- used Hubs as sample extensions
- changed dependency `node-sass` to `sass`
- added the following `scripts` in `package.json`
```json
"build": "npm run compile && npm run package",
"build:dev": "npm run compile:dev && npm run package:dev",
```
- added `--rev-version` to `tfx extension package` and `tfx extension publish` scripts
- removed sample unit testing code, please refer to [samples](https://github.com/microsoft/azure-devops-extension-sample) if you want to add that back in.

## Getting Started
### Tips for updating extensions
1. Version number should always be incremented on every update. This is done in the `vss-extension.json` file. When updating an extension, all organizations using the widgets will get the update.
2. Additional folders should be added in the `files` node of `vss-extension.json`.
3. Add different widget sizes in the `supportedSizes` node. _(WARNING: If you remove an already supported size, the widget will fail to load properly.)_
4. Adding/changing extension `scopes` is not supported. Workaround is to _remove_ the existing extension or upload into a new name.

### How to package and publish extensions
#### Pre-requisites
1. Install the packaging tool `npm i -g tfx-cli`
2. Create a publisher profile in the [Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher)

#### CLI and Publishing Portal
1. Create the extension with `tfx extension create --manifest-globs vss-extension.json --output-path packages`
2. Upload the generated `.vsix` file in the [Publishing Portal](https://marketplace.visualstudio.com/manage). (For uploading new extensions, shoose **Azure DevOps**)

#### CLI only
Publish and share in 1 command using `tfx extension publish --manifest-globs your-manifest.json --share-with yourOrganization`

## Note on Widget Extensions
According to [this](https://stackoverflow.com/questions/65464990/azure-devops-extension-sdk-configuration-of-widget) and the fact that [this](https://github.com/microsoft/azure-devops-extension-sdk/issues/22) is still open, it appears that using the old SDK is still better for creating Widgets. This is probably why there aren't any widget [samples](https://github.com/microsoft/azure-devops-extension-sample).

The method implemented in [widget-hello](/src/MyExtensions/widget-hello/) is a workaround using the example from [yunsii](https://github.com/microsoft/azure-devops-extension-sdk/issues/17#issuecomment-669665342) and combined with [vss-widget.tsx](/src/lib/vss-widget.tsx) from [bworline](https://github.com/microsoft/azure-devops-extension-sdk/issues/22#issuecomment-606957335). There may be other better ways to do this, but this works for now.

## System Notes
This template was created using Windows 11 and VS Code, with the following installed
- NodeJS v18.12.0 (installed using NVM)
- webpack v5.75.0
- webpack-cli v5.0.1
- webpack-dev-server v4.11.1
- typescript

## Contributing
It will be a delight to see other people contribute to this project. Please feel free to contribute by forking and submitting a pull request.