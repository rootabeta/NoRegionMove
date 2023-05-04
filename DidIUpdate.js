// ==UserScript==
// @name         Influence Update Checker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Track the NS reports page (feather's U) to see when you've updated
// @author       You
// @match        https://www.nationstates.net/page=reports/view=self/filter=change/template-overall=none
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationstates.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var nationName = document.getElementsByTagName("h1")[0].outerText.toLowerCase().replace(/ /gi,"_").split("'")[0]; //Take the title, "Spy Satellite's Reports", convert to "spy_satellite's_reports", then take everything before the '
    let elements = document.getElementsByTagName("li");
    for (let i = 0 ; i < elements.length ; i++) {
        if (elements[i].getElementsByTagName("a")[0].outerText.toLowerCase().replace(/ /gi,"_") == nationName && elements[i].textContent.includes("influence") && !elements[i].textContent.includes("hours ago: ")) {
            console.log(elements[i].textContent);
            let didItUpd = document.createElement("div"); //Funny pun
            didItUpd.id="updStatus";
            didItUpd.style="position:fixed;top:0;left:0;width:100%;height:5%;background:rgba(0,175,0,0.75);"; //Put it at the top, no reason not to (unlike nations and regions that have data up there, this is just the title)

            let makeCenter = document.createElement("center");
            let regionUpdText = document.createElement('h3');
            regionUpdText.textContent = elements[i].textContent;
            makeCenter.appendChild(regionUpdText);
            didItUpd.appendChild(makeCenter);

            document.body.appendChild(didItUpd);
            break;
        }
    }
})();
