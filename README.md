
<img src="https://drive.google.com/uc?export=view&id=1Xj6p9AcVqbzp3CYfqCw8DBWeBt8y89Rk">

##

### Euphoria 

Another Interface Framework Inspired By Pure Hatred.

A proof of concept to the framework dudes.


Euphoria, by code is inspired by the DroidScript Framework, to get a basic application working, 
download the .not-like-us Folder.

Then create the typical index.html file.

```html<!DOCTYPE html>
<html>
<head>
    <title>Euphoria PreView</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src=".not-like-us/index.js"></script>
    <style>
        body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
             /* Prevent horizontal scrolling */
        }
        #AppContainer {
            width: 100vw; /* 100% of the viewport width */
            height: 100vh; /* 100% of the viewport height */
        }
    </style>

</head>

<body id="AppContainer">
    <script src="App.js"></script>
</body>

</html>
```

After this, we add our App.mjs file where all ui is called.

```javascript

class Application {
	OnStart(){

		this.lay = ui.createLayout('Linear','FillXY');
		this.lay.setBackColor()

		ui.addLayout(this.lay)

	}
	
}

window.Application = Application;
```
