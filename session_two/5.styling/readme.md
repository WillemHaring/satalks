# styling

Adjust the styling of the widget so that it actually looks good aswell

[back](../readme.md)

Since we have switched from plain ``.css`` to ``.scss`` styling becomes rather easy:

``BubbleUp.scss:``
```scss
@import "variables";
@import "test";


$bubblesize: 20px;

.widget-bubble-up
{
    position: relative;

    .bubble
    {
        position: absolute;  
    }

    .topLeft
    {
        top: 0;
        left: 0;
        margin-left: -($bubblesize/2);
        margin-top: -($bubblesize/2);
    }

    .topRight
    {   
        top: 0%;
        left: 100%;
        margin-left: -($bubblesize/2);
        margin-top: -($bubblesize/2);
    }

    .bottomLeft
    {   
        top: 100%;
        left: 0%;
        margin-left: -($bubblesize/2);
        margin-top: -($bubblesize/2);
    }

    .bottomRight
    {
        top: 100%;
        left: 100%;
        margin-left: -($bubblesize/2);
        margin-top: -($bubblesize/2);
    }
}
@import "bubble-up-theme";
```

``_variables.scss``

```scss
/* based on: https://raw.githubusercontent.com/mendix/atlas-framework/master/_variables.scss */
//== Mendix UI Framework - Welcome to variables file
//## The Basic step includes the customization that is also available in the Mendix Theme Creator (https://ux.mendix.com)

//
// ██████╗  █████╗ ███████╗██╗ ██████╗
// ██╔══██╗██╔══██╗██╔════╝██║██╔════╝
// ██████╔╝███████║███████╗██║██║
// ██╔══██╗██╔══██║╚════██║██║██║
// ██████╔╝██║  ██║███████║██║╚██████╗
// ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝
//

//== Gray Shades
//## Different gray shades to be used for our variables and components
$gray-darker: #222 !default;
$gray-dark: #333 !default;
$gray: #555 !default;
$gray-light: #888 !default;
$gray-primary: #d7d7d7 !default;
$gray-lighter: #eee !default;

//== Step 1: Brand Colors
$brand-default: #dddddd !default;
$brand-primary: #0595db !default;
$brand-inverse: #252c36 !default;
$brand-info: #48b0f7 !default;
$brand-success: #76ca02 !default;
$brand-warning: #f99b1d !default;
$brand-danger: #ed1c24 !default;
```

``_test.scss:``
```scss
.widget-bubble-up
{
    position: relative;
    min-width: 100px;
    max-width: 100px;
    min-height: 100px;
    max-height: 100px;
    margin: 10px;
    border-width: thin;
    border-color: lightgray;
    color: lightgray;
    border-style: solid;
}
```

``_bubble-up-theme.scss:``

```scss
.widget-bubble-up-color-default {
    background-color: $brand-default;
    color: white;
}

.widget-bubble-up-color-primary {
    background-color: $brand-primary;
    color: white;
}

.widget-bubble-up-color-success {
    background-color: $brand-success;
    color: white;
}

.widget-bubble-up-color-info {
    background-color: $brand-info;
    color: white;
}

.widget-bubble-up-color-warning {
    background-color: $brand-warning;
    color: white;
}

.widget-bubble-up-color-danger {
    background-color: $brand-danger;
    color: white;
}

.widget-bubble-up-color-inverse {
    background-color: $brand-inverse;
    color: white;
}
```

[back](../readme.md)
