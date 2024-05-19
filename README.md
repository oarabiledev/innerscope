
<img src="https://drive.google.com/uc?export=view&id=1Xj6p9AcVqbzp3CYfqCw8DBWeBt8y89Rk">

<br/>


-----

<h3 align="center";"> Euphoria Is A FrameWork You Will Never Forget, Beware Its Addictive.</h3>


When HTML gets nested and XML Tags keep drowning me in and can't find whether i set
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

After this, we add our App.js file where all ui is called.
<br/>
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
<br/>
This simple set-up will produce an interface which looks like this:

<img src="https://drive.google.com/uc?export=view&id=1Xi32itWW_3Iy_tfYcxIkueTA2NNAFp2U">


<br/>

## The Almost Gray Part ＞﹏＜

Euphoria is far from ready to production use, Euphoria will include an app* bunch of methods
to call the browser interface, simply no styling.

Also 

Euphoria's ui* methods will choose between the following interfaces to be the default.

- Material 3
- Fluent Design
- Carbon Design

This desicion has'nt been made yet, I advise you stay alert and ready to Contribute if so.
This project is about what the culture feeling, interface Syntax will be drafted soon and
will be ready for production very soon.

<br/>
Thank You For The Interest ❣️❣️❣️❣️


