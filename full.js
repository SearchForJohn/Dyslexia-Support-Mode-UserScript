// ==UserScript==
// @name Dyslexia-Support-Mode-UserScript
// @description Dyslexia-Support-Mode-UserScript
// @version         2.3.2.1
// @author          John Litzow
// @installURL      https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @match           *://www.searchforjohn.com/*
// @include         https://www.searchforjohn.com/*
// @grant           GM_registerMenuCommand
// @grant           GM_cookie
// @grant           GM_addElement
// ==/UserScript==

//Object.defineProperty(navigator, 'userAgent', {
//    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36 dyslexia'
//});
function setDyslexic() {
  GM_cookie.set({
    url: 'https://www.searchforjohn.com',
    name: 'dyslexia',
    value: '1',
    domain: 'searchforjohn.com',
    path: '/',
    secure: true,
  });
  console.log('Dyslexic');
}
function unSetDyslexic() {
  GM_cookie.delete({ name: 'dyslexia' });
  console.log('UNDyslexic');
};
