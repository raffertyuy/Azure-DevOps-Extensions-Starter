const path = require("path");
const fs = require("fs");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Webpack entry points. Mapping from resulting bundle name to the source file entry.
const entries = {};

// Loop through subfolders in the "MyExtensions" folder and add an entry for each one
const extensionsDir = path.join(__dirname, "src/MyExtensions");
fs.readdirSync(extensionsDir).filter(dir => {
    if (fs.statSync(path.join(extensionsDir, dir)).isDirectory()) {
        entries[dir] = "./" + path.relative(process.cwd(), path.join(extensionsDir, dir, dir));
    }
});

module.exports = {
    entry: entries,
    output: {
        filename: "[name]/[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            "azure-devops-extension-sdk": path.resolve("node_modules/azure-devops-extension-sdk")
        },
    },
    stats: {
        warnings: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "azure-devops-ui/buildScripts/css-variables-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.woff$/,
                use: [{
                    loader: 'base64-inline-loader'
                }]
            },
            {
                test: /\.html$/,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
           patterns: [ 
               { from: "**/*.html", context: "src" }
           ]
        })
    ]
};
