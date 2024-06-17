# ```innerscope.js Methods```

You app will use the function ui.addHTMLElement().

This function allows you to add an html element, a custom element even so.

InnerScope.js methods provide you with quick functions to use instad of working with the DOM directly.

Here is a list of them, and proposed methods :

## addChild

addChild is the counterpart of appendChild, however if you use appendChild on a variable using ui.addHTMLElement().
You will get an error 'Illegal return statement'.

> [!NOTE]
> Here is when addChild is used :

```javascript
let navBar = ui.createElement(lay, 'nav', 1, pxToDeviceRatio(64,'h'), '')
        navBar.className = 'nav'

        let navTitle = document.createElement('span');
        navTitle.className = 'navTitle'
        navTitle.textContent = 'innerscope.js'

        navBar.addChild(navTitle)

        let githubIcon = document.createElement('i');
        githubIcon.className = 'fa fa-github gitHubIcon'
        
        navBar.addChild(githubIcon)
```

It is basically used to add elements called using `document.createElement()` on an element called with `ui.addHTMLElement()`.

> [!NOTE]
> In that example, I recommend you build a custom function or a extend the HTMLElement Class.
> I dont recommend exposing many addChild elements in js
> Basically its to keep code clean and not an eyesore.

## bindSignal

This methods adds a subscriber to a signal that you have declared using `createSignal()` and when a change takes place your callback is fired.

Its syntax is :

```javascript
this.bindSignal(signal, callback)

/* The callback will get fired on that value changes and the new value will be passed into the callback */
```

## destroy

This method  removes your HTML Element from Document and its event listeners.

## onTouch

Adds a device specific touch Event to your element.

The function takes in a function.

```javascript
this.onTouch(callback)
```

When your function is called, it forwads event details in your function as a parameter (object).

For mobile devices the mouseup event listener is added, and if not a mobile device the mousedown event is used.

This decision was based on the highly underated quiche eater Theo, based on this [video](https://youtu.be/yaMGtiPckAQ?si=KaLTbL66QgrcxgEb).

## showIf

This methods shows your element when the event is true.

## show

Sets visibility to visible.

## hide

Sets visibility to hidden.

## gone

Sets display to none, making the element look like it was never there.
