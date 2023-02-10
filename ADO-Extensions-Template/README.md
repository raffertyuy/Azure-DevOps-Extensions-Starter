# ADO Base Template Extension

This repository is my attempt to combine the best practices of these two code samples:
1. [azure-devops-extension-sample](https://github.com/microsoft/azure-devops-extension-sample)
2. [azure-devops-extension-hot-reload-and-debug](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug)

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

The following **Environment Variables** are added to the operating system
| key          | value                     |
|--------------|---------------------------|
| NODE_OPTIONS | --openssl-legacy-provider |