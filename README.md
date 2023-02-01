# Azure-DevOps-GitHub-Integration-Toolkit
This repo contains a collection of small programs for extending Azure DevOps and GitHub

## Contributing
It will be a delight to see other people contribute to this project. Please feel free to contribute by forking and submitting a pull request.
Also submit ideas and bugs in [GitHub Issues](https://github.com/raffertyuy/Azure-DevOps-GitHub-Integration-Toolkit/issues).
Looking forward to working with you.

## Azure DevOps Extensions
Azure DevOps allows creating custom [extensions](https://learn.microsoft.com/en-us/azure/devops/extend/get-started/node?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops). The challenge is that the documentation is severely lacking (see my [Learning Notes](/Learning.md)).

### Code Template based on Samples
To make development faster, a working template is found in the [ADO-Extensions-Template](/ADO-Extensions-Template/) folder. This is template is a combination of the best practices in:
1. [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample): the main samples repo using the latest Azure devops extensions SDK, and
2. [azure-devops-extension-hot-reload-and-debug](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug): a way to locally debug changes (also see [this blog post](https://devblogs.microsoft.com/devops/streamlining-azure-devops-extension-development/)).
    - To debug, install Firefox and launch the webpack-dev-server with `webpack-dev-server --mode development`
    - Remember to point to the specific html URL that you want to debug (i.e. https://localhost:3000/dist/Hub-iFrame/Hub-iFrame.html)

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