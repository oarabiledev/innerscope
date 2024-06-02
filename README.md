
<img src="https://drive.google.com/uc?export=view&id=1Xj6p9AcVqbzp3CYfqCw8DBWeBt8y89Rk">

<br/>

# `Euphoria Is A Feeling, The Exact Purpose Of This...`

<br/>

HTML gets nested and XML Tags keep drowning me in and can't find whether i set
'search' as an id or a class.


HTML is great but it gets verbose easily and hard to manage, additionally I dont want to meddle
too much in that framework stuff.
How about we have a simple framework, you build all the components you want and fit them into 
the Euphoria.js Syntax ?

I am activley trying to create a framework which doesn't abstract too much at the same time being
as well optimized and easy to use and intergrate with existing projects.

<br/>

## A proof of concept.


Euphoria, by code is inspired by the DroidScript Framework, to get a basic application working, 
download the **.not-like-us** Folder.

Then create the typical index.html file.

<br/>

```html
<!DOCTYPE html>
<html>
<head>
    
    <!-- add favicon to all pages-->
    <link rel="icon" href=".src/resourcesFldr/logo.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="stylesheet" href="https://unpkg.com/mdui@2/mdui.css">
    <script src="https://unpkg.com/mdui@2/mdui.global.js"></script>

    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/20.0.0/tween.umd.js"></script>


    <script src=".not-like-us/main.js"></script>
    <style>
        body, html {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-y: hidden;
            overflow-y: hidden;
             /* Prevent horizontal scrolling */
        }
        #AppContainer {
            width: 100vw; /* 100% of the viewport width */
            height: 100vh; /* 100% of the viewport height */
        }
    </style>
</head>

<body 
    id="AppContainer" 
    onload="App = new window.Application();
    console.log(`Euphoria running on : ${platform.type}`);
    App.OnStart();">

    <script src="App.js"></script>
</body>

</html>

```

After this, we add our App.js file where all ui is called.
<br/>
```javascript
class Application {
	onStart () {
		let lay = ui.addLayout('linear','fillXY')

		ui.addLayout(lay)
	}
}
```
<br/>

Thank You For The Interest ❣️❣️❣️❣️


