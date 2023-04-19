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
    if (document.getElementsByClassName("endorse button icon wa")) { //If endorse button exists at all
      if (document.getElementsByClassName("endorse button icon wa danger")) { 
        console.log("Unendorse possible"); //GREEN - Endod and good to go!
      } else { 
        console.log("Endorse possible"); //RED - Not endod
      }
    } else { 
      console.log("Endorsement not possible"); //YELLOW - Not endod, but not your fault (region mismatch, someone not WA, etc.)
    }
})();
