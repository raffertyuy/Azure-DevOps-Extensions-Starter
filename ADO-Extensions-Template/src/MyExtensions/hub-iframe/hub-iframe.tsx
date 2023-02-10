import "azure-devops-ui/Core/override.css";
import { showRootComponent } from "../../common";
import "./hub-iframe.scss";

import * as React from "react";
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

showRootComponent(<HubIFrameContent />);