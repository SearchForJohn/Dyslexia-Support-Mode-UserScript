// ==UserScript==
// @name            Dyslexia-Support-Mode-UserScript
// @description     Dyslexia-Support-Mode-UserScript
// @version         4.1.0.7
// @author          John Litzow
// @downloadURL     https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
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
      GM_addStyle("body { background-color: #222428; color: #ffffff; text: #ffffff} content: { color: #ffffff; text: #ffffff} a:link { color: #ffffff; text-decoration: none; font-weight: normal; } a:visited { color: #0000ff; text-decoration: none; font-weight: normal; } a:active { color: #3399ff; text-decoration: none; } a:hover { color: #990000; text-decoration: none; font-weight: none; } p:hover, li:hover { background-color: rgba(0,0,0,.09) !important; color: #800000;}");
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
