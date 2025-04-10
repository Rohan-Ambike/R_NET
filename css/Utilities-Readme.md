:root {
    --font_size: 4px;
    /* Base font-size */
    --padding-margin-size: 16px;
    /* Base padding and margin size */
    --border-radius-size: 4px;
    /* Base border-radius size */
    --width-height-measurement: 5%;
    /* Base width and height measurement */
}


**Screen sizes used:

    Extra small (xs): Less than 576px
    Small (sm): 576px and up
    Medium (md): 768px and up
    Large (lg): 992px and up
    Extra large (xl): 1200px and up
    XXL (xxl): 1400px and up


** Here 'resolution' ranges from "sm, md, lg, xl, xxl"
each resolution is set for every respective media query

    media query (size per resolution){
        class-resolution-number,
        class-resolution-number,
        class-resolution-number,
        class-resolution-number,
        class-resolution-number,
        class-resolution-number,
        class-resolution-number
    }


** Here 'p' is Padding and 'number' Ranges from 1 to 20

    When number is used as suffix the class measures "--padding-margin-size*number"

    p{
        p-resolution-number
        ps-resolution-number,
        pe-resolution-number,
        pt-resolution-number,
        pb-resolution-number,
        px-resolution-number,
        py-resolution-number
    }


**The same Logic for PADDING works on MARGIN.


** Here 'br' is Border Radius and 'number' Ranges from 1 to 20

    When number is used as suffix the class measures "--border-radius-size*number"

    br{
        br-resolution-number,
        br-resolution-tl-number,
        br-resolution-tr-number,
        br-resolution-bl-number,
        br-resolution-br-number,
        br-resolution-t-number,
        br-resolution-r-number,
        br-resolution-b-number,
        br-resolution-l-number
    }


** Here 'fm' is Font Size and 'number' Ranges from 1 to 20

    When number is used as suffix the class measures "--font_size*number"

    fm{
        fm-resolution-number
    }


** Here 'fw' is Font Weight and 'number' Ranges from 1 to 9

    fw{
        fw-resolution-number
    }

** Here 'scale' is Transform Scale and 'number' Ranges from 1 to 20

    When number is used as suffix the class measures between 0 to 1 divided in 20. Hence 0.05 per number.

    scale{
        scale-resolution-number
    }

** Here 'origin' is Transform Origin and directions are 

[ top, top-right, right, bottom-right, bottom, bottom-left, left, top-left ]

    origin{
        origin-direction
    }

** Here 'w' is Width and 'number' Ranges from 1 to 20

    When number is used as suffix the class measures "--width-height-measurement*number"

    w{
        w-resolution-number
    }


**The same Logic for WIDTH works on HEIGHT.


**backgroundBox adds a layer below a layer.

1. Use .outer-box on the Outer Box.

2. Add .inner-box inside the Outer Box.

3. Now in the OuterBox other elements except Inner Box will become the background of the Inner Box.

4. In these other elements add a .content div and an img with class .background-image.

Structure:

.outer-box|--
    .background-image | .content | .inner-box
--|

.outer-box>img.background-image+.content+.inner-box