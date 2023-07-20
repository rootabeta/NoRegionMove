// ==UserScript==
// @name         Who Goes There?
// @namespace    rootabeta
// @version      0.1
// @description  Count the number of unique endorsers in the activity feed
// @author       You
// @match        https://www.nationstates.net/page=activity/view=region.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationstates.net
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    console.log("Loaded!");
    // Seconds, not millis
    var current = new Date().getTime() / 1000;
    var cutoff = 3600 * 6; //Six hours ago
    var active = [];

    var reports = document.getElementById("reports").children[0].children;
    for(var i = 0 ; i < reports.length ; i++ ) {
        if (reports[i].innerText.includes(" endorsed ")) {
            var secondsAgo = current - Number(reports[i].children[0].attributes["data-epoch"].value);
            if (secondsAgo < cutoff) {
                console.log(secondsAgo);
                console.log(reports[i].children[1].href);
                console.log(reports[i].children[2].href);
                if (!active.includes(reports[i].children[1].href)) {
                    active.push(reports[i].children[1].href);
                }

                if (!active.includes(reports[i].children[2].href)) {
                    active.push(reports[i].children[2].href);
                }


            }
        }
    }
    window.alert(`Tracked ${active.length} unique endorsers`);
})();
