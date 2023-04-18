// ==UserScript==
// @name         No region move
// @version      0.2
// @namespace    dithpri
// @description  prevent moving regions on defined nations
// @author       rootabeta, based on https://github.com/jmikk/NS/blob/master/No%20Region%20Move.js
// @noframes
// @match        https://www.nationstates.net/*region=*
// @match        https://www.nationstates.net/*region=*/
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var nations = ['volstrostia','other_nation'];
    
    var currentNation = document.body.dataset.nname;
    if (currentNation) {
        if (nations.includes(document.body.dataset.nname)) {
            // if (document.body.dataset.nname == 'volstrostia') {
            document
            .querySelectorAll('button[name="move_region"]')
            .forEach(function (el, idx) {
            el.disabled = true;
            });
        }
    } else { //Horrible, awful, evil hack. BUT IT WORKS!!!
        console.log("Could not identify current nation. Activating contingency plan.");
            // Move Big Nation to Suspicious
            // My contingency plan is awful - find the move button, and if nsifying the text and removing the Move_ reveals our_nation_to_ (not just our_nation) then we can move safely
        var regionName = document.getElementsByName("region_name")[0].value; //pre_nsified :)

        document.querySelectorAll('button[name="move_region"]').forEach(function (el, idx) { var buttonText = el.children[0].nextSibling.wholeText.toLowerCase().replace(/ /gi,"_") ; console.log(regionName); var nationName = buttonText.substring(5,buttonText.length-(regionName.length + 5)); console.log(nationName) ; if (nations.includes(nationName)) {el.disabled = true;} });
    }
})();
