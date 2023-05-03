// ==UserScript==
// @name         Did It Update
// @version      0.1
// @namespace    rootabeta
// @description  Provide at-a-glance indication of update time status
// @author       rootabeta
// @noframes
// @match        https://www.nationstates.net/*region=*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var el = document.getElementById("regioncontent").getElementsByTagName("p")[3].children[1]; //THIS SHOULD BE THE LAST UPDATE TIME ELEMENT
    if (el.tagName == "TIME") {
        console.log("IDENTIFIED TIME SUCCESSFULLY");
    }
    if (el.textContent == "Seconds ago") {
        let didItUpd = document.createElement("div"); //Funny pun
        didItUpd.id="updStatus";
        didItUpd.style="position:fixed;bottom:0;left:0;width:100%;height:5%;background:rgba(0,175,0,0.75);";;
        console.log("UPDATED JUST NOW");
        let makeCenter = document.createElement("center");
        let regionUpdText = document.createElement('h3');
        regionUpdText.textContent = "REGION HAS UPDATED";
        makeCenter.appendChild(regionUpdText);
        didItUpd.appendChild(makeCenter);

        document.body.appendChild(didItUpd);
    } else {
        console.log(el.textContent);
    }
})();
