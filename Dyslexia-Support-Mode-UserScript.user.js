// ==UserScript==
// @name        Dyslexia-Support-Mode-UserScript
// @namespace   John Litzow
// @description Dyslexia-Support-Mode-UserScript
// @match       https://*searchforjohn.com*
// @run-at      document-start
// @grant       none
// @version     1
// ==/UserScript==

Object.defineProperty(navigator, 'userAgent', {
    value: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36 (dyslexia)'
})
  ;
