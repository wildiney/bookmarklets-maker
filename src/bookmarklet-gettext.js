function getPageText(){
    var script=document.createElement('script');
    script.setAttribute("id","gettext");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src","https://www.slicedpixel.com/apps/save-page-text-to-doc/gettext.js"); 
    document.getElementsByTagName('head')[0].appendChild(script);
}
getPageText();