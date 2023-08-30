// ==UserScript==
// @name Dyslexia-Support-Mode-UserScript
// @description Dyslexia-Support-Mode-UserScript
// @version         4.0.0.1
// @author          John Litzow
// @downloadURL     https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @match           *://www.searchforjohn.com/*
// @include         https://www.searchforjohn.com/*
// @grant           GM_registerMenuCommand
// ==/UserScript==

function setDyslexic() {
  document.cookie = "dyslexic=true; SameSite=strict; expires=Fri, 31 Dec 9999 23:59:59 GMT"; console.log('Dyslexic');
};
function unSetDyslexic() {
  document.cookie = "dyslexic=false; SameSite=strict; Max-Age=-99999999;"; console.log('UNDyslexic');
};

GM_registerMenuCommand("Enable Dyslexia Support.", setDyslexic, "d");
GM_registerMenuCommand("Disable Dyslexia Support.", unSetDyslexic, "u");
