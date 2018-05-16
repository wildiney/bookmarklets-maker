"use strict";
function changeLanguage() {
    var url = window.location.href;
    var urls = url.split("/");
    var idiom = urls[3];
    var urlRedir = "";
    switch (idiom) {
        case "pt-br":
            urls[3] = "es";
            break;
        case "es":
            urls[3] = "en";
            break;
        case "en":
            urls[3] = "pt-br";
            break;
        default:
            urls[3] = "pt-br/" + urls[3];
    }
    for (var i = 0; i < urls.length; i++) {
        urlRedir += urls[i] + "/";
    }
    console.log(urlRedir);
    window.location.href = urlRedir;
}
changeLanguage();
