# ```Writing Custom Components```

You can do this by extending the HTMLElement Class :

## Extending HTMLElement

This is basically taking advantage of custom elements and creating them, i advise you read how to implement on at [MDN Docs #Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

After defining your custom element add it to your html as a script tag or use ```ui.loadScript()```

To call your custom element, you can then use the ```ui.addElement(parent, element, width, height, options)``` function.

This function exposes the innerscope methods and returns a proxy therefore any custom functions you have added in your ```connectedCallback``` function will still be accessible.

For an active example check the homepage and take a peek at the code.
