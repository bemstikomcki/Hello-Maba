var revapi1,
      tpj;
      (function() {
      	if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();
      
      	function onLoad() {
      		if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
      				if(tpj("#rev_slider_1_1").revolution == undefined){
      					revslider_showDoubleJqueryError("#rev_slider_1_1");
      				}else{
      					revapi1 = tpj("#rev_slider_1_1").show().revolution({
      						sliderType:"hero",
      						jsFileLocation:"assets/revo/",
      						sliderLayout:"auto",
      						dottedOverlay:"none",
      						delay:9000,
      						navigation: {
      						},
      						responsiveLevels:[1200,992,768,576],
      						visibilityLevels:[1200,992,768,576],
      						gridwidth:[1140,960,720,540],
      						gridheight:[855,720,720,720],
      						lazyType:"none",
      						parallax: {
      							type:"scroll",
      							origo:"enterpoint",
      							speed:400,
      							speedbg:0,
      							speedls:0,
      							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
      						},
      						shadow:0,
      						spinner:"spinner0",
      						autoHeight:"off",
      						disableProgressBar:"on",
      						hideThumbsOnMobile:"off",
      						hideSliderAtLimit:0,
      						hideCaptionAtLimit:0,
      						hideAllCaptionAtLilmit:0,
      						debugMode:false,
      						fallbacks: {
      							simplifyAll:"off",
      							disableFocusListener:false,
      						}
      					});
      	}; /* END OF revapi call */
      	}; /* END OF ON LOAD FUNCTION */
      }()); /* END OF WRAPPING FUNCTION */
      