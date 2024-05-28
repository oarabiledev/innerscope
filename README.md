
<img src="https://drive.google.com/uc?export=view&id=1Xj6p9AcVqbzp3CYfqCw8DBWeBt8y89Rk">

<br/>


-----

<h3 align="center";"> Euphoria Is A FrameWork You Will Never Forget, Beware Its Addictive.</h3>


HTML gets nested and XML Tags keep drowning me in and can't find whether i set
'search' as an id or a class.


HTML is great but it gets verbose easily and hard to manage, additionally I dont want to meddle
in that framework stuff.
Its like a drug, i'll get to the point im designing landing pages in React and pasting useMemo
everywhere.




Not all of us realize that what frameworks can do, can be done in Vanilla JavaScript.

We don't need to be using a flavoured linter (TypeScript), just use JsDoc and avoid
type gymnastics, you dont need tsx -> jsx -> html + js.



Its too complex, programming is a hobbie to me and me having to learn flavoured linters
to maximise productivity and virtual DOM's instead of using in-built DOM Api's, is 
un-appealing.



Dont get me wrong i understand why frameworks exist, but they
just leave bitterness in my mouth.


*Ohh so now React has a compiler, javascript to javascript {{{(>_<)}}}*


*Ohh so now Vue is getting Vapor*

**And also**

*Re-write all javascript tooling in Rust, in five years Go gets better and 
we should migrate, literally some jibrish language comes out and re-write 
to it...*


> "Yes, i have to catch up-to recency or else ill be booted out, I understand,
however this is getting bad, I'm not vibing to this (┬┬﹏┬┬)"


<br/>

## A proof of concept to the framework dudes.


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

ui.loadCSS('.not-like-us/.src/compFolder/commandBar.css')
ui.loadScript('.not-like-us/.src/compFolder/commandBar.js')

class Application {
	OnStart(){

		let lay, btn;
	
		lay = ui.createLayout('Linear','FillXY, VCenter');
	
		btn = ui.addCommandBar(lay, 'command line & installer', 0.9, 0.05, "")
		
		ui.addLayout(lay)
	}

}

window.Application = Application;


```
<br/>
This simple set-up will produce an interface which looks like this:

<img src="https://drive.google.com/uc?export=view&id=1Xi32itWW_3Iy_tfYcxIkueTA2NNAFp2U">


<br/>

## CONTRIBUTING ❣️❣️

Euphoria is inspired by DroidScript and it will use a similar syntax.
<br/>
Thank You For The Interest ❣️❣️❣️❣️


