
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


Then create the typical index.html file.

<br/>

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" 
    content="width=device-width, initial-scale=1.0" />

    <script src="euphoria.js"></script>
    <style>
        html, body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
    </style>
</head>

<body onload="App = new Application();App.onStart();">
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


