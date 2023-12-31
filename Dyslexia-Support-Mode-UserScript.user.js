// ==UserScript==
// @name            Dyslexia-Support-Mode-UserScript
// @description     dyslexia support script made for www.searchforjohn.com
// @license         MIT
// @version         4.1.1.1
// @author          John Litzow
// @namespace       https://www.searchforjohn.com/
// @website         https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/
// @homepage        https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/
// @homepageURL     https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/
// @homepageURL     https://greasyfork.org/en/scripts/474253-dyslexia-support-mode-userscript
// @iconURL            https://opendyslexic.org/core/misc/favicon.ico
// @icon64URL          https://opendyslexic.org/core/misc/favicon.ico
// @downloadURL     https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @supportURL      https://github.com/SearchForJohn/Dyslexia-Support-Mode-UserScript/issues
// @match           *://www.searchforjohn.com/*
// @include         https://www.searchforjohn.com/*
// @grant           GM_registerMenuCommand
// @grant           GM_addStyle
// ==/UserScript==

// Enable dyslexic mode by setting a cookie and reload the page
function setDyslexic() {
  try {
    if (document.cookie.indexOf("dyslexic=true") === -1) {
      document.cookie = "dyslexic=true; SameSite=strict; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      alert("Dyslexia support mode enabled. Reloading page...");
      window.location.reload();
    }
  } catch (e) {
    console.error("Error enabling dyslexic mode:", e);
  }
}

// Disable dyslexic mode by setting a cookie and reload the page
function unSetDyslexic() {
  try {
    if (document.cookie.indexOf("dyslexic=false") === -1) {
      document.cookie = "dyslexic=false; SameSite=strict; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      alert("Dyslexia support mode disabled. Reloading page...");
      window.location.reload();
    }
  } catch (e) {
    console.error("Error disabling dyslexic mode:", e);
  }
}

// Reload the current page
function reload() {
  try {
    window.location.reload(true);
  } catch (e) {
    console.error("Error reloading the page:", e);
  }
}

// Set the CSS override
function styletest() {
  try {
    if (document.cookie.indexOf("dyslexic=false") === -1) {
      GM_addStyle("body { background-color: #222428; color: #ffffff; text: #ffffff} content: { color: #ffffff; text: #ffffff} a:link { color: #ffffff; text-decoration: none; font-weight: normal; } a:visited { color: #0000ff; text-decoration: none; font-weight: normal; } a:active { color: #3399ff; text-decoration: none; } a:hover { color: #FFFFFF; text-decoration: none; font-weight: none; } p:hover, li:hover { background-color: rgba(0,0,0,.09) !important; color: #FFFFFF;}");
      console.log("Added Custom CSS.");
    }
  } catch (e) {
    console.error("Error Setting CSS:", e);
  }
}

// Init stylesheet
styletest();
window.onload = styletest;

// Register the menu commands
GM_registerMenuCommand("Enable Dyslexia Support.", setDyslexic, "d");
GM_registerMenuCommand("Disable Dyslexia Support.", unSetDyslexic, "u");
GM_registerMenuCommand("Reload.", reload, "r");
