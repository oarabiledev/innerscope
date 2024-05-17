
<img src="https://drive.google.com/uc?export=view&id=1Xj6p9AcVqbzp3CYfqCw8DBWeBt8y89Rk">

##

### Euphoria 

Another Interface Framework Inspired By Pure Hatred.

A proof of concept to the framework dudes.


Euphoria, by code is inspired by the DroidScript Framework, to get a basic application working, 
download the .not-like-us Folder.

Then create the typical index.html file.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Euphoria PreView</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script type="module" src=".not-like-us/index.mjs"></script>
    <style>
        body, html {
            width: 100vw;
            height: 100vw;
            margin: 0;
            padding: 0;
             /* Prevent horizontal scrolling */
        }
        #AppContainer {
            width: 100vw; /* 100% of the viewport width */
            height: 100vh; /* 100% of the viewport height */
        }
    </style>
<script type="module" src="App.mjs"></script>
</head>

<body id="AppContainer">
    
</body>

</html>
```

After this, we add our App.mjs file where all ui is called.

```javascript
import app from "./.not-like-us/index.mjs"

/**
 * Here is the default code structure.
 */
class Application{
	OnStart(){

	}

	OnBack(){

	}

	OnPause(){
		
	}

	OnResume(){

	}

	OnConfig(){

	}
}

export default Application;
```

If you dont understand hoe to use, check DroidScript Docs, only interface methods are supported.
