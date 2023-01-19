This folder contains RazType Azure DevOps Dashboards Custom Widgets.

## Widgets in this Repo
1. **Hello World Widget:** Getting started widget as instructed in the [official docs](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-dashboard-widget?view=azure-devops).

## Useful Commands for Reference

### Packaging tool (one-time install)
`npm i -g tfx-cli`

### Package and Publish the Extension
#### Option 1
1. Create the extension with `tfx extension create --manifest-globs vss-extension.json`
2. Publish the extension in the [Publishing Portal](https://marketplace.visualstudio.com/manage/createpublisher)

#### Option 2 (requires PAT)
Publish and share in 1 command using `tfx extension publish --manifest-globs your-manifest.json --share-with yourOrganization`