import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";

import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page } from "azure-devops-ui/Page";

import { showRootComponent } from "../../Common";

class HubIFrameContent extends React.Component<{}, {}> {

    public componentDidMount() {
        SDK.init();
    }

    public render(): JSX.Element {
        return (
            <Page className="hub-iframe flex-grow">
                <iframe src="https://www.raffertyuy.com" frameBorder="0"></iframe>
            </Page>
        );
    }
}

showRootComponent(<HubIFrameContent />);