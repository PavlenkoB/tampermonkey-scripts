// ==UserScript==
// @name         animevost
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://animevost.org/tip/tv/*
// require https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log('log')
    console.log('log')
    console.log('log')
    console.log('log')
    document.down_all=function (){
    jQuery('.epizode').each(function(index, element){
        return jQuery(element).click();
    })
    }
    console.log('log')
})();
