# Azure-DevOps-GitHub-Integration-Toolkit
This repo contains a collection of small programs for extending Azure DevOps and GitHub

## Contributing
It will be a delight to see other people contribute to this project. Please feel free to contribute by forking and submitting a pull request.
Also submit ideas and bugs in [GitHub Issues](https://github.com/raffertyuy/Azure-DevOps-GitHub-Integration-Toolkit/issues).
Looking forward to working with you.

## Azure DevOps Extensions
Azure DevOps allows creating custom [web extensions](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops).

### Tips for updating web extensions
1. Version number should always be incremented on every update. This is done in the `vss-extension.json` file. When updating an extension, all organizations using the widgets will get the update.
2. Additional folders should be added in the `files` node of `vss-extension.json`.
3. Add different widget sizes in the `supportedSizes` node. _(WARNING: If you remove an already supported size, the widget will fail to load properly.)_
4. Adding/changing extension `scopes` is not supported. Workaround is to _remove_ the existing extension or upload into a new name.

### How to package and publish web extensions
#### Pre-requisites
1. Install the packaging tool `npm i -g tfx-cli`
2. Create a publisher profile in the [Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher)

#### CLI and Publishing Portal
1. Create the extension with `tfx extension create --manifest-globs vss-extension.json --output-path packages`
2. Upload the generated `.vsix` file in the [Publishing Portal](https://marketplace.visualstudio.com/manage). (For uploading new extensions, shoose **Azure DevOps**)

#### CLI only
Publish and share in 1 command using `tfx extension publish --manifest-globs your-manifest.json --share-with yourOrganization`