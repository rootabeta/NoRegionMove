// ==UserScript==
// @name         NoWAy
// @version      0.2
// @namespace    rootabeta
// @description  prevent resignation from the WA
// @author       rootabeta
// @noframes
// @match        https://www.nationstates.net/page=un
// @match        https://www.nationstates.net/page=un?*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    /*
    // Commented out because of potential that modifying existing values is actually illegal? I don't see anything prohibiting this behavior, but I can't ask someone more qualified bc opsec, so I'll just comment this out for now.
    // Deleting the form should be more than enough anyway.
    // Brick the form data used to confirm a join/resignation
    document.getElementsByName("chk")[0].value = "DISABLED";
    document.getElementsByName("action")[0].value="DISABLED";
    */

    // Physically disable the button
    document.getElementsByClassName("button icon")[1].disabled = true;

    // Destroy the form in it's entirety
    document.getElementsByTagName("form")[1].remove();
})();
