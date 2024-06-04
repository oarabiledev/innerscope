# ```Writing Custom Components```

Custom elements are implemented in pure JS and CSS or SCSS.
You can use html elements built with litty to define
custom elements.

This is so because under the hood the DOM Api
```document.createElement()``` is used.

Therefore a litty element can be passed in as long
as the required resources are loaded using
```ui.loadCSS()``` or ```ui.loadScript()```.

> - [For width and height units we use a 0 to 1 scale for the width and heigt]

I also advise providing debug information by looging the idCount
by invoking the global function.

```javascript
console.info(`#${idCount()}`)
console.info(`createLayout() : ${type},${options}`)
```

To build a custom element define your custom object,
do not extennd the ```ui``` object, choose your own.
We suggest that the object is upto 7 characters long,
rememrable and not an eye sore.

For example something like ```mdui```, ```shadcn```,
do not use those unless you intend to build those design
systems and port them as plugins for Euphoria.

Every element must extend the ```ElementComposer``` class,
and use the super keyword and with these parameters in
this specific order.

Here is the super syntax :

```super(parent, width, height, options, objectType)```

Here is an implementation of a shadcn button.
*ps it doesnt work*

```javascript
const shadcn = Object ();

shadcn.addButton = function (parent, text, width, height, options){
    return new buttonObject(parent, text, width, height, options)
}

const buttonObject = class extends ElementComposer {
    constructor(parent, text, width, height, options = 'primary'){
        super(parent, width, height, options, 'Button');

        // Always provide debug information.

        console.info(`#${idCount()}`)
        console.info(`addButton() : ${width},${height},${options}`)
        this._text = text;
        this._create();
    }    
    _create(){
        this.element = document.createElement('button')
        this.element.textContent = this._text;
        this.element.style.width = widthComposer(this.width)
        this.element.style.height = heightComposer(this.height)

        let buttonVariants = ['primary','secondary','tetiary','surface']
        let buttonOptions = ['link','loading']

        let splitOptions = this.options.split(',')

        let noOfOptions = splitOptions.length;

        splitOptions.forEach(option => {
            if (buttonVariants.includes(option)){
                this.element.variant = option
            }

            if (buttonOptions.includes(option)){
                if (option == 'loading') {
                    this.element.loading = true;
                }
                else {
                    this.element.href = 'doThisYourself'
                    this.element.target = '_blank'
                }
            }

            else { ; }
            /* Use a switch if more than 5 options the
            compiler can create a look-up table for
            evaluation making it faster as checking more
            than 5 parameters can be time consuming
            */
        })
        this.composer.appendChild(this.element)
    }
}
```

For buttons inheriting a link type id suggest you have the text
have the link.

The text be in this formart "Open NewsPaper[https://www.nytimes.com/lockerRizz]"

You then use a text search and position for the '[' text and the end of the ']'
and use a js substring method to get the text inside.

When you create an elemnt this way, it will inherit these properties and methods you
dont have to create your own self.

- setPosition
- setMargins
- setAnimation
- setOnTouch
- setOnDblClick
- setOnClick
- setOnMouse (Down/Up)
- setScale
- setSize
- show
- hide
- gone
- destroy
- width
- height

Also if you want pixel units to be converted to the 0 to 1 scale
use this function -- ```pxToDeviceRatio(value, side)```.
Side can be 'width' or 'height'.

For an elements with many document.createElement() Api's I advice you
use **DocumentFragments**
Also reduce usage of innerHTML, that causes a re-render by the web engine
of the HTML, that is time consuming and makes apps slow.
