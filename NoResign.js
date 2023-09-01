// ==UserScript==
// @name         NoResign
// @version      0.2
// @namespace    rootabeta
// @description  prevent resignation
// @author       rootabeta
// @noframes
// @match        https://www.nationstates.net/page=region_control*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Neutralize the action
    let officerRes = document.getElementById("resignofficer");
    let abdicate = document.getElementById("abdicate");
    let abdicate_conf = document.getElementsByName("abdicate_confirm")[0];

    if (officerRes){
        officerRes.value = 0;
        officerRes.disabled = true;
     //   officerRes.remove();
    }

    if (abdicate) {
        abdicate.value = 0;
        abdicate.disabled = true;
     //   abdicate.remove();
    }

    if (abdicate_conf) {
        abdicate_conf.value = 0;
        abdicate_conf.disabled = true;
     //   abdicate_conf.remove();
    }
})();
