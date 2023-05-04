// ==UserScript==
// @name         Template Image Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block images from loading when template-overall=none is applied
// @author       rootabeta
// @match        https://www.nationstates.net/*/template-overall=none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationstates.net
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("img").forEach(function (el, idx) { el.remove(); }); //This does a good job of removing images, which helps unclutter the screen, but does not prevent them from downloading
})();
