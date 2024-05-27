
ui.loadCSS('.src/resourcesFldr/main.css')

class Application {
	OnStart(){
	
		ui.setTitle(`Warner Bro's Set`)
		ui.setTheme('auto')
	
		if (platform.type == 'mobile'){
			this.OnMobile();
		}else this.OnDesktop();
	}

	OnMobile(){
		this.lay = ui.createLayout('Linear','Top,Left');

		this.tabBar = ui.createLayout('Absolute', 'FillXy');
		this.tabBar.setSize(1, 0.189)
		this.tabBar.setBackColor('#566573')
		this.lay.addChild(this.tabBar);

		this.logo = ui.addImage(this.tabBar, '.not-like-us/.src/resourcesFldr/logo.svg', '52.7px', '55px',"")
		this.logo.setPosition(0.5,0.011, pxToDeviceRatio(52.7,'w'))
		ui.addLayout(this.lay)	
	}

	OnDesktop(){

	}
	OnResume(){

	}
	OnPause(){

	}

}

window.Application = Application;

