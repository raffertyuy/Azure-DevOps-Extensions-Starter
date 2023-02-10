import "azure-devops-ui/Core/override.css";
import { showRootComponent } from "../../common";

import * as React from "react";
import * as SDK from "azure-devops-extension-sdk";
import { WidgetSettings } from "../../lib/vss-widget";

const WidgetHello: React.FC = () => {
  React.useEffect(() => {
    SDK.init({ loaded: false });
    SDK.register('widget-hello', {
      preload: (widgetSettings: WidgetSettings) => {
        return {
          state: 'ok',
          statusType: 0,
        };
      },
      load: (widgetSettings: WidgetSettings) => {
        return {
          state: 'ok',
          statusType: 0,
        };
      },
      reload: (newWidgetSettings: WidgetSettings) => {
        return {
          state: 'ok',
          statusType: 0,
        };
      },
    });
    SDK.notifyLoadSucceeded();
  }, []);

  return (
    <div>Hello World!</div>
  );
}

showRootComponent(<WidgetHello />);