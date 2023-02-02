# Learning Notes

This document contains learning notes from these extensions It contains:
1. 

---
## VSS Extension - Which SDK?
The main SDK dependencies to use are:
- [azure-devops-extension-sdk](https://github.com/Microsoft/azure-devops-extension-sdk): Required module for Azure DevOps extensions which allows communication between the host page and the extension iframe.
- [azure-devops-extension-api](https://github.com/Microsoft/azure-devops-extension-api): Contains REST client libraries for the various Azure DevOps feature areas.
- [azure-devops-ui](https://developer.microsoft.com/azure-devops): UI library containing the React components used in the Azure DevOps web UI.

Unlike the old SDK, this new one split the dependencies into three.

> **WARNING:**
> - The [official documentation](https://learn.microsoft.com/en-us/azure/devops/extend/overview?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops) (as of Jan 2023) has tutorial and samples using the **_old_** [SDK](https://github.com/microsoft/vss-web-extension-sdk).
> - Unfortunately, the same is true for most other references, hence my [deprecated folder](/deprecated/).
> - So if you insist on using an old tutorial or sample, you can either (a) figure out how to update the code and use the SDK, or (b) keep using the old SDK as it still works.

---
## VSS Extension - Learning through Samples
Until the [official documentation](https://learn.microsoft.com/en-us/azure/devops/extend/overview?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops) is updated, the best way to learn is through samples.

The docs are still useful though, just bear in mind that if the tutorial/sample is using `vss-web-extension-sdk`, there's work to update that to the new `azure-devops-extension-sdk`. I especially found the following useful:
- [Extension Manifest Reference](https://learn.microsoft.com/en-us/azure/devops/extend/develop/manifest?view=azure-devops)
- [Contribution Model](https://learn.microsoft.com/en-us/azure/devops/extend/develop/contributions-overview?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops)
- [Azure DevOps REST API Reference](https://learn.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-7.1)

So to learn, the main sample project is [this repo](https://github.com/microsoft/azure-devops-extension-sample).

### Installing the Samples
The [samples](https://github.com/microsoft/azure-devops-extension-sample) are lumped into a single manifest. It will create a single package that will install everything in your Azure DevOps Project. To install, here are the steps:
1. Install Node.js version 16 (later versions do not work due to some dependencies, as of Jan 2023)
2. Try `npm install`
3. If you get a bunch of errors, try installing the dependencies specified in the [sample readme](https://github.com/microsoft/azure-devops-extension-sample#readme) and try `npm install` again. _(NOTE: Not everything needs to be globally installed, I just did to get it working fast.)_
    ```bash
    npm install -g typescript
    npm install -g webpack
    ```
4. Modify the `azure-devops-extension.json` manifest and change to your registered **Publisher Name**.
5. Build and generate the `*.vsix` through
    ```bash
    npm run build
    npm run package-extension
    ```
6. Upload the extension in the [Publishing Portal](https://marketplace.visualstudio.com/manage).

### Learnings from the Samples
- Written using [TypeScript](https://www.typescriptlang.org/). In fact, other than the [official documentation](https://learn.microsoft.com/en-us/azure/devops/extend/overview?toc=%2Fazure%2Fdevops%2Fmarketplace-extensibility%2Ftoc.json&view=azure-devops) tutorial, every other sample seems to be created using **typescript**.
- The HTML and CSS are also created using typescript. Everything is built from `src/` and outputed to `dist/`. This could be the standard `tsconfig.json` template.
    ```json
    {
        "compilerOptions": {
            "charset": "utf8",
            "experimentalDecorators": true,
            "module": "amd",
            "moduleResolution": "node",
            "noImplicitAny": true,
            "noImplicitThis": true,
            "strict": true,
            "target": "es5",
            "rootDir": "src/",
            "outDir": "dist/",
            "jsx": "react",
            "lib": [
            "es5",
            "es6",
            "dom",
            "es2015.promise"
            ],
            "types": [
                "react",
                "node"
            ],
            "esModuleInterop": true
        }
    }
    ```
- Static files are placed in `static/`.
- the `package.json` refers to all three Azure devops extension modules.
- the `package.json` also contains a useful `script`, especially its way to append the manifest `.json` from the folders' respective `<extension-name>.json`.
    ```json
    "scripts": {
        "clean": "rimraf ./dist",
        "compile": "npm run clean && npm run test && webpack --mode production",
        "compile:dev": "npm run clean && npm run test && webpack --mode development",
        "build": "npm run compile",
        "build:dev": "npm run compile:dev && npm run postbuild",
        "postbuild": "npm run package-extension -- --rev-version",
        "package-extension": "tfx extension create --manifest-globs azure-devops-extension.json src/Samples/**/*.json",
        "publish-extension": "tfx extension publish --manifest-globs azure-devops-extension.json src/Samples/**/*.json",
        "test": "cross-env TEST_REPORT_FILENAME=test-results.xml jest --verbose"
    },
    "dependencies": {
        "azure-devops-extension-api": "~1.157.0",
        "azure-devops-extension-sdk": "~2.0.11",
        "azure-devops-ui": "~2.164.0",
        "react": "~16.13.1",
        "react-dom": "~16.13.1"
    },
    ```
- the `--rev-version` in `postbuild` is handy, it updates the version of the manifest file automatically.
- the sample hows how to write unit tests.