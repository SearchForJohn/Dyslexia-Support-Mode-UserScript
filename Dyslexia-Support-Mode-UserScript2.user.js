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
// @require         https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/full.js
// ==/UserScript==

GM_addElement('script', {
  src: 'https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/full.js',
  type: 'text/javascript'
});

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

GM_registerMenuCommand("Enable Dyslexia Support.", setDyslexic, "d");

GM_registerMenuCommand("Disable Dyslexia Support.", unSetDyslexic, "u");
