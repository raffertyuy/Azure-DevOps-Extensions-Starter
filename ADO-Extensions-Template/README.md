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

## System Notes
This template was created using Windows 11 and VS Code, with the following installed
- NodeJS v18.12.0 (installed using NVM)
- webpack v5.75.0
- webpack-cli v5.0.1
- webpack-dev-server v4.11.1

The following **Environment Variables** are added to the operating system
| key          | value                     |
|--------------|---------------------------|
| NODE_OPTIONS | --openssl-legacy-provider |