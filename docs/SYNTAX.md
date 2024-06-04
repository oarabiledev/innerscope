# ```Defining A Common Syntax Usable And Adobtable By All```

Euphoria syntax is meant to be easy to understand and rememrable.

## Object Definitions

For every component it should use a short object definition that is not the
```ui``` object.

For example if Material Design UI plugin was developed, id advise its top
level object to be ```mdui```.

i.e.

```javascript
  mdui.addButton(parent, text, width, height, options);
```

## Object Methods

For every component setters and getters should be used to define properties.

For example a button will have a setter and getter in this formart :

```javascript
   this.backColor 
   // Should be usable as backColor = 'green'  or to get the color
   this.text
   //Set and get text
   this.textSize
   //Set Size and get it
```

And for none setters and getter object methods should have a smallLetter
function names.

i.e :

```javascript
   let a = mdui.addButton(lay, 'Euphoria', 0.8, -1, 'primary')

   a.setOnTouch(Function)

   // Functions should look like this :

   /*
   setOnClick()
   setToolTip()
   show()
   hide()
   */
```

## Object Function Parameters

I advise components take parameters in a similar way for example

When width and height are highly likley to be variables set them
structure them before options parameter.

```mdui.addButton(parent, text, width, height, options)```

However when your css styles or css framework provides default
widths and heights place them last.

```mdui.addCheckBox(parent, text, options, width, height)```

When widths and heights cannot be modified use a structure like.

```mdui.addFAB(parent, icon, options, text)```

Also when looking at above code, you can have a simple FAB and an
Extended FAB, arrage by common use.
Commonly a simple fab is used so we will use the existence of the
text value as an identifier of which type of FAB is used.

A summary is place options last when the other parameters are highly
likley to be used and place the not commonly used last.

A last example is :

```mdui.addDialog(title, body, actions, options)```

This example does not need to be added to the layout as its main property
is being destroyed, other examples would  be snackbars,progress-dialogs.

## Object Parameter Defaults

I advise that a component has a default parameter value if not provided.
This is to reduce code written.

i.e :

```mdui.addButton(parent, text, width, height, options = 'primary')```

When using the ElementComposer Class and inheriting properties, when width and
height are not provided a stlye ```fit-content``` is applied.

## Providing Debug

This is for plugin creators and interface designers.

I advise you log information about your method to allow acccess through the console,
use this :

```javascript
console.info(`#${idCount()}`)
console.info(`createLayout() : ${type},${options}`)
```
