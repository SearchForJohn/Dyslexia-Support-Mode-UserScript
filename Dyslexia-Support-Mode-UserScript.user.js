// ==UserScript==
// @name Dyslexia-Support-Mode-UserScript
// @description Dyslexia-Support-Mode-UserScript
// @version         2.3.0.2
// @author          John Litzow
// @installURL      https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @match           *searchforjohn.com*
// @grant           none
// ==/UserScript==

//Object.defineProperty(navigator, 'userAgent', {
//    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36 dyslexia'
//});
    function setDyslexic(){
    // Build the expiration date string:
    var expiration_date = new Date();
    var cookie_string = '';
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
    // Build the set-cookie string:
    cookie_string = "dyslexia = 1; path=/; expires=" + expiration_date.toUTCString();
    // Create or update the cookie:
    document.cookie = cookie_string;
};

function unSetDyslexic() {
    var expiration_date = new Date();
    var cookie_string_rm = '';
    expiration_date.setFullYear(expiration_date.getFullYear() + 1);
    // Build the set-cookie string:
    cookie_string_rm = "dyslexia = 1; path=/; Max-Age=-99;";
    document.cookie = cookie_string_rm;
};
GM_registerMenuCommand("Enable Dyslexia Support.", setDyslexic, "h");
GM_registerMenuCommand("Disable Dyslexia Support.", unSetDyslexic, "h");
