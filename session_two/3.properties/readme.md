# properties

Set the right properties for the widget

[back](../readme.md)

So, our widget needs the following properties

- It should be able to have other widgets placed in it.
- It should have a property that points to an integer that indicates the count
- It should have a property that indicates where the badge is displayed, like topleft, topright, bottomleft, bottomright
- It should have a property that specifies the color of the badge: 


## Embedding a widget into our widget

Following [the pluggable widget documentation](https://docs.mendix.com/apidocs-mxsdk/apidocs/property-types-pluggable-widgets#widgets), you can see that you can include widgets in a widget with the widgets type:

```xml
<property key="child" type="widgets" required="false">
	<caption>Child Component</caption>
	<description>The child component that should have a badge</description>
</property>
```

## A counter to display

If we want to have a dynamic value to indicate what the count is, we should point to an attribute in an entity. Logical types that should be allowed here are integer, decimal and string (since we might want to display something else then a counter). Following [the pluggable widget documentation](https://docs.mendix.com/apidocs-mxsdk/apidocs/property-types-pluggable-widgets#4-4-2-xml-elements) we should create something like this:

```xml
<property key="bubbletext" type="attribute" required="true">
	<caption>bubbletext</caption>
	<description>Text that should be displayed in the bubble</description>
	<attributeTypes>
		<attributeType name="Decimal"/>
		<attributeType name="Integer"/>
        <attributeType name="String"/>
	</attributeTypes>
</property>
```

## location of the bubble

We have four different places where we want to display the bubble, so we should list 4 different choices for the user to select from. Following [the pluggable widget documentation](https://docs.mendix.com/apidocs-mxsdk/apidocs/property-types-pluggable-widgets#enumeration) we should create something like this:

```xml
<property key="bubbleLocation" type="enumeration" defaultValue="topLeft">
	<caption>Bubble Location</caption>
	<description>Where should the bubble be placed?</description>
	<enumerationValues>
		<enumerationValue key="topLeft">Top Left</enumerationValue>
		<enumerationValue key="topRight">Top Right</enumerationValue>
		<enumerationValue key="bottomLeft">Bottom Left</enumerationValue>
        <enumerationValue key="bottomRight">Bottom Right</enumerationValue>
	</enumerationValues>
</property>
```

## color of the bubble

The color of the bubble is an enumeration aswell, so we should create something like this:

```xml
<property key="widgetColor" type="enumeration" defaultValue="topLeft">
	<caption>Bubble Color</caption>
	<description>What color should the bubble have?</description>
        <enumerationValues>
            <enumerationValue key="default">Default</enumerationValue>
            <enumerationValue key="inverse">Inverse</enumerationValue>
            <enumerationValue key="primary">Primary</enumerationValue>
            <enumerationValue key="info">Info</enumerationValue>
            <enumerationValue key="success">Success</enumerationValue>
            <enumerationValue key="warning">Warning</enumerationValue>
            <enumerationValue key="danger">Danger</enumerationValue>
        </enumerationValues>
</property>
```

## the complete BubbleUp.xml file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<widget id="mendix.bubbleup.BubbleUp" pluginWidget="true" needsEntityContext="true" offlineCapable="true"
        supportedPlatform="Web"
        xmlns="http://www.mendix.com/widget/1.0/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.mendix.com/widget/1.0/ ../node_modules/mendix/custom_widget.xsd">
    <name>Bubble Up</name>
    <description>Create a bubble arround any type of widget</description>
    <icon>iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABeVSURBVHhe7d0LlBTVmQfwvj00DTMwODxUFEdWCQ8DohFQxBeub8UQxej6WDUmq7s+N3FX3RzXzcYYczSJuvFsPGrUqDGuBtmgCTG6KMgRRB1ZTEBQA4iAOILTPTOAMFX7/aurz47Y3XVvdVV1dff/d853qmrkAAfP/e773gQRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERFRvVPuk75okMQeuVfH3hL9cq8Uc7sk1udeHZ0Sn+Reqbd6TgB7SRwiMVZipMQo94lCP0KCas8miU8l1vSKlRJvSayVqDv1kgAGSBwucZTEERKTJIZKEOWhlYBE8IrEYomXJDokalotJ4AvS5whcYoECn4fCSITr0vMc2OJBLoWNaXWEsBEiVkS50mgSU8UlHaJORKPSbyMH1A8oM9+pcRyCZvBiCA+kLhFYl8JqhA08e+X2CZR6H8SgxFFzJU4VoIign9s/KMX+p/BYFQq2iQukOBYU0hQ8OdLFPrHZzDiEuiKflWCAnKgBGt8RrUFWgSx7xrEeRYAg3vflbhOIvpm1Z4jE2rSDPeDqpn9utQfm7HmpyKelrheIpYLjeKaANCE+plEuCvydivkauDgzsTAYV2JxkE71fBRzap5aLP7n6iK2dn2bGLz2q1219a+iY7NjXam/XP/XyNIEFhk9G8Sd0vEai1B3BIAVuf9pwTm8oPVq7CrdOP2xPBRW9SoKXvIe6PzQ6pbdvu6jL3shZS9vbO/8x1eQsDCom9KLHO+YiBOCeBkiYclsOkmGG6hVw2pXWriid2o1d3/QlSUkxDe/H0/e+eOviEkg+0SN0qgNVBxcUgA6N//VOIq56tcvQv9pNO71dBWFnryze7YnLGXPBNGMnhB4iIJbFCqmEonAKykwiAJNuiUxy34yXFHZ9UBhw50f0oUGHvDqozVNq85wESALcszJd5wviqgkglgmgQKf3lN/nzBP3xmhrU9RQGDivaip/pbS2b3CSARYFDwCokHna+IVSoBnCuBTRX+p/ek4CenzLTU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9yQ4pUeBqacEgDsI9Y4PQ9P/snsyasQ47Tl/bNaxFv4qjF16mNJDwQ/0NyWCekkAJ0vgYActyTOus5KnXqk1QxLi+Xv4+6Kfz806FJp6SAC4NhxNfxwK4g21/w3PdKt+AxrdnxQV4mYd7NLD1B5RqOphHcB3JbQLP0758Sr8mNILabMO7onHZh0WfopErbcAMN3XJoFWgCevgb/8lVohTOlhZqKqzpOn2lDrCeCPEifkXj2g6V/klJ+QNuvglBpM6d0twZF9qohaTgA4HhzHXXlD07/AKT8hnb+HWh53w2Nkn5t1qKJqNQFgnT9W/GldFLJ709/OtmftV55sCmGzDs6Tx8h+bO6HJ6pF2Oxj60by/Fu39rl3td3wk//tTs749k5pERT8dWUEDhzVO3eAiMoyUWKnRKGCWDDU6CMWJM+6qTuEgo8BSFxMQkQReVWiUGGMMj6QuERC66gxIgrGZRKFCmRUsVXiOxJa045EFByc8oMCWKhghh3bJO6Q0DtkhIgCd79EocIZZmCs4SGJyK8lJ6L/d7hEoQIaZsyVKP+SUSIqS/6Un0KFNIzAIKPeHYJEFLprJQoV1KADpwjPkiCimEDfGyf2FiqwQcVGCdwhwCk9oph5QqJQoQ0iMKNwi4TWEWJEFK2/lihUcMsNjOxjKbHehaFEFDkstEGfvFABLifQohglQUQxFvTAHzbrHCJBRFUgqNofm3VOkSCiKlKoMJsEEgg26xBRFSpUqHUCI/voPnCzDlEVWypRqIAXC2zW+b4EN+sQ1YALJQoV9N0jv1mHU3pENcZr9x+uAtO7BZiIqhKW6OL0nXyhR43/e4mjJIjIQ62cCow9AViyi2O2ecY+ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHpSCT+Dwn23KRxP0+9AAAAAElFTkSuQmCC</icon>
    <properties>
        <propertyGroup caption="General">
            <property key="child" type="widgets" required="false">
                <caption>Child Component</caption>
                <description>The child component that should have a badge</description>
            </property>
            <property key="bubbletext" type="attribute" required="true">
                <caption>bubbletext</caption>
                <description>Text that should be displayed in the bubble</description>
                <attributeTypes>
                    <attributeType name="Decimal"/>
                    <attributeType name="Integer"/>
                    <attributeType name="String"/>
                </attributeTypes>
            </property>
            <property key="bubbleLocation" type="enumeration" defaultValue="topLeft">
                <caption>Bubble Location</caption>
                <description>Where should the bubble be placed?</description>
                <enumerationValues>
                    <enumerationValue key="topLeft">Top Left</enumerationValue>
                    <enumerationValue key="topRight">Top Right</enumerationValue>
                    <enumerationValue key="bottomLeft">Bottom Left</enumerationValue>
                    <enumerationValue key="bottomRight">Bottom Right</enumerationValue>
                </enumerationValues>
            </property>
            <property key="widgetColor" type="enumeration" defaultValue="widget">
                <caption>Bubble Color</caption>
                <description>What color should the bubble have?</description>
                    <enumerationValues>
                        <enumerationValue key="widget">Widget default</enumerationValue>
                        <enumerationValue key="default">Default</enumerationValue>
                        <enumerationValue key="inverse">Inverse</enumerationValue>
                        <enumerationValue key="primary">Primary</enumerationValue>
                        <enumerationValue key="info">Info</enumerationValue>
                        <enumerationValue key="success">Success</enumerationValue>
                        <enumerationValue key="warning">Warning</enumerationValue>
                        <enumerationValue key="danger">Danger</enumerationValue>
                    </enumerationValues>
            </property>
            <property key="sampleText" type="string">
                <caption>sampleText</caption>
                <description>The original sample text</description>
            </property> 
        </propertyGroup>
    </properties>
</widget>
```

## running the example with the properties set in the component

in the terminal window, run ``npm run dev``, this will compile and run the project at http://localhost:3000



[back](../readme.md)
