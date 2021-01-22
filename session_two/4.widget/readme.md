# widget

Refactor the default widget so it does what we want it to do

[back](../readme.md)

Start with renaming the ``/components/HelloWorldSample.tsx`` file to something like ``BubbleUpComponent.tsx``

then modify the content of the component from

```typescript
import { Component, ReactNode, createElement } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

export class HelloWorldSample extends Component<HelloWorldSampleProps> {
    render(): ReactNode {
        return <div className="widget-hello-world">Hello {this.props.sampleText}</div>;
    }
}
```
to:

```typescript
import { Component, ReactNode, createElement } from "react";
import { WidgetColorEnum } from "../../typings/BubbleUpProps";
import classNames from "classnames";

export interface BubbleUpComponentProps {
    bubblevalue?: string;
    child?: ReactNode; 
    location?: string;
    color?: string;
    widgetColor: WidgetColorEnum;
    class?: string;
}

export class BubbleUpComponent extends Component<BubbleUpComponentProps> {
    render(): ReactNode {
        return <div className={classNames("widget-bubble-up", this.props.class)}>
                <div className={`badge bubble ${this.props.location} widget-bubble-up-color-${this.props.widgetColor} `}>
                    {this.props.bubblevalue}
                </div>
        <div>{this.props.child}</div>
        </div>
    }
}
```

With the component done, start making changes to the containing component:

```typescript
import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { BubleUpContainerProps } from "../typings/TestProps";

import "./ui/Test.css";

export default class BubbleUp extends Component<BubleUpContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}

```

to:

```typescript
import { Component, ReactNode, createElement } from "react";
import { BubbleUpComponent } from "./components/BubbleUpComponent";

import { BubbleUpContainerProps } from "../typings/BubbleUpProps";

import "./ui/BubbleUp.scss";

export default class BubbleUp extends Component<BubbleUpContainerProps> {
    render(): ReactNode {
        return <BubbleUpComponent child={this.props.child} 
                           bubblevalue={this.props.bubbletext.displayValue} 
                           location={this.props.bubbleLocation} 
                           widgetColor={this.props.widgetColor} 
                           class={this.props.class}/>
        
    }
}

```
Also note that you should rename the ``.css`` file to ``.scss`` so we can use SASS styling in the text topic.

Run the widget with ``npm run start``

[back](../readme.md)
