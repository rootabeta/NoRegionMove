// ==UserScript==
// @name         TurboClose
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.nationstates.net/page=un*
// @match        https://www.nationstates.net/page=UN_status*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationstates.net
// @grant        window.close
// ==/UserScript==


// NOTE: Requires dom.allow_scripts_to_close_windows to be set to TRUE on Firefox
(function() {
    'use strict';

    if (document.location.href.includes("page=un")) {
        if(document.body.textContent.includes("Welcome to the World Assembly, new member")) {
            window.close();
        }
    }

    if(document.location.href.includes("page=UN_status")) {
        if(document.body.textContent.includes("You inform the World Assembly that") &&
           document.body.textContent.includes("will no longer participate in its corrupt, hollow debates. From this moment forward, your nation is on its own.")
          ) {
            window.close();
        }
    }
})();
