import "azure-devops-ui/Core/override.css";
import "./Hub-iFrame.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as SDK from "azure-devops-extension-sdk";

import { Page } from "azure-devops-ui/Page";

class HubIFrameContent extends React.Component<{}, {}> {

    public componentDidMount() {
        SDK.init();
    }

    public render(): JSX.Element {
        return (
            <Page className="hub-iframe flex-grow">
                <iframe src="https://www.raffertyuy.com"></iframe>
            </Page>
        );
    }
}

ReactDOM.render(<HubIFrameContent />, document.getElementById("root"));