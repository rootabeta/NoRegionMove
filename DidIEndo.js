// ==UserScript==
// @name         Did I Endo
// @version      0.1
// @namespace    rootabeta
// @description  Provide at-a-glance indication of endorsement status
// @author       rootabeta
// @noframes
// @match        https://www.nationstates.net/*nation=*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    let chosenStyle = "";
    let dataText = "";

    if (document.getElementsByClassName("endorse button icon wa").length == 1) { //If endorse button exists at all
      if (document.getElementsByClassName("endorse button icon wa danger").length == 1) {
          //0 100 0 0.75
        console.log("Unendorse possible"); //GREEN - Endod and good to go!
          chosenStyle = "position:fixed;bottom:0;left:0;width:100%;height:5%;background:rgba(0,175,0,0.75);"; //green
          dataText = "ENDORSED";
      } else {
        console.log("Endorse possible"); //RED - Not endod
        chosenStyle = "position:fixed;bottom:0;left:0;width:100%;height:5%;background:rgba(175,0,0,0.75);";
        dataText = "NOT ENDORSED";
      }
    } else {
      console.log("Endorsement not possible"); //NO MSG - Not endod, but not your fault (region mismatch, someone not WA, etc.)
      return;
    }

    let divIEndo = document.createElement("div"); //Funny pun
    divIEndo.id="endoStatus";
    divIEndo.style=chosenStyle;

    let makeCenter = document.createElement("center");
    let didIText = document.createElement('h3');
    didIText.textContent = dataText;
    makeCenter.appendChild(didIText);
    divIEndo.appendChild(makeCenter);

    document.body.appendChild(divIEndo);
})();
