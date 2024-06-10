class Application {
    onStart(){
        let lay = ui.createLayout('linear','FillXY');
        let theme = 'dark'

        let navBar = ui.addElement(lay, 'nav', 1, pxToDeviceRatio(64,'h'), '')
        navBar.style.width = '100%';
        navBar.style.height = '64px'
        navBar.style.zIndex = 1000;
        navBar.style.alignItems = 'center'
        navBar.style.alignContent = 'center'
        navBar.style.verticalAlign = 'center'
        navBar.className = 'nav'

        let navTitle = document.createElement('span');
        navTitle.style.fontSize = '22px'
        navTitle.style.marginLeft = '15px'
        navTitle.className = 'navText'
        navTitle.textContent = 'innerscope.js'
        navTitle.style.fontFamily = 'Josefin Sans, sans-serif'
        navBar.addChild(navTitle)

        let githubIcon = document.createElement('i');
        githubIcon.className = 'fa fa-github navText'
        githubIcon.style.fontSize = '26px'
        githubIcon.style.position = 'absolute'
        githubIcon.style.right = '15px'
        githubIcon.style.top = '19px';
        githubIcon.onclick = function(){
            window.open('https://github.com/oarabiledev/innerscope','_blank')
        }
        navBar.addChild(githubIcon)

        let themeIcon = document.createElement('span');
        themeIcon.className = 'material-symbols-outlined navText'
        themeIcon.textContent = 'light_mode'
        themeIcon.style.fontSize = '26px'
        themeIcon.style.position = 'absolute'
        themeIcon.style.right = '55px'
        themeIcon.style.top = '19px';
        themeIcon.onclick = function(){
            if (theme == 'light') {
                document.querySelector("html").setAttribute("data-theme", 'dark');
                theme = 'dark'
            }
            else {
                document.querySelector("html").setAttribute("data-theme", 'light');
                theme = 'light'
            }
        }
        navBar.addChild(themeIcon)

        let descript = ui.addElement(lay, 'h5', -1, -1, '');
        
        descript.textContent = 'InnerScope.js is a library for \n building interfaces with reduced anxiety.'
        descript.style.position = 'absolute'
        descript.style.left = '15px'
        descript.style.top = '59px';
        
        descript.style.fontSize = '36px'
        descript.style.fontFamily = 'Josefin Sans, sans-serif'
        
        descript.className = 'navText'
        descript.Animate('slideInUp')

        let hr = ui.addElement(lay, 'hr', -1, -1, '');
        hr.style.width = '90%'
        hr.size = 2
        hr.style.position = 'absolute'
        hr.style.left = '15px'
        hr.style.top = '295px';
    
        let notice = ui.addElement(lay, 'p', -1, -1, '')
        notice.textContent = `Hello, thanks for your interest in this
        library. \n
        This very website is built using innerscope.js.
        I will update it and add some meaning to it. <3`

        notice.style.position = 'absolute'
        notice.style.left = '15px'
        notice.style.top = '395px';
        notice.className = 'navText'
        notice.style.fontSize = '26px'
        notice.style.fontFamily = 'Josefin Sans, sans-serif'
        setInterval(()=>{
            notice.Animate('headShake');
        },5500)
         
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            const newTheme = event.matches ? "dark" : "light";
            document.querySelector("html").setAttribute("data-theme", newTheme);
        });
        ui.addLayout(lay)
    }
}
