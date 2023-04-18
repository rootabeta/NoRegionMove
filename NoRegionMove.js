// ==UserScript==
// @name         No region move
// @version      0.2
// @namespace    dithpri
// @description  prevent moving regions on defined nations
// @author       rootabeta stole from dithpri stole with permsion by 9003
// @noframes
// @match        https://www.nationstates.net/*region=*
// ==/UserScript==

(function() {
    'use strict';
    var nations = ['volstrostia','someother_nation']; //DO NOT FORGET TO MAKE LOWERCASE AND UNDERSCORE FOR SPACES
    if (nations.includes(document.body.dataset.nname)) {
    // if (document.body.dataset.nname == 'volstrostia') { //Old code was limited to one nation
        document
            .querySelectorAll('button[name="move_region"]')
            .forEach(function (el, idx) {
            el.disabled = true;
        });
    }
})();
