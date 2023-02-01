# Azure DevOps Extension Hot Reload and Debug

This repository is my attempt to run the code in [Microsoft's Azure DevOps Extension Hot Reload and Debug repo](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug).

Some updates are:
- changed dependency `node-sass` to `sass`
- added the following `scripts` in `package.json`
```json
"build": "npm run compile && npm run package",
"build:dev": "npm run compile:dev && npm run package:dev",
```
- added `--rev-version` to `tfx extension package` and `tfx extension publish` scripts