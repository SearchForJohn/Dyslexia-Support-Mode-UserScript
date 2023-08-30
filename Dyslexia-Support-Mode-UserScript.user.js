// ==UserScript==
// @name            Dyslexia-Support-Mode-UserScript
// @description     Dyslexia-Support-Mode-UserScript
// @version         4.1.0.0
// @author          John Litzow
// @downloadURL     https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @updateURL       https://searchforjohn.github.io/Dyslexia-Support-Mode-UserScript/Dyslexia-Support-Mode-UserScript.user.js
// @match           *://www.searchforjohn.com/*
// @include         https://www.searchforjohn.com/*
// @grant           GM_registerMenuCommand
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

// Register the menu commands
GM_registerMenuCommand("Enable Dyslexia Support.", setDyslexic, "d");
GM_registerMenuCommand("Disable Dyslexia Support.", unSetDyslexic, "u");
GM_registerMenuCommand("Reload.", reload, "r");
