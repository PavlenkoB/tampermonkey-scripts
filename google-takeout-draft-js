// ==UserScript==
// @name         Google takeout download in new tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://takeout.google.com/settings/takeout/downloads*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
    }

    document.querySelectorAll('div.I7OXgf.nxteG.ZEeHrd.Inn9w.iWO5td > span > table > tbody > tr.p06IYb > td.jS7JJb.y1qrSd.schvPe >div>div>a').forEach(function(aItem){
        let url=aItem.href;
        console.log(url);
        openInNewTab(url);
    })

})();
