(function ($) {
'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

function set1() {
    $('.test1').text('проверка 1');
}
function test3() {
    console.log('test3');
}
test3();

function set2() {
    $('.test2').text('проверка 2');
}

function test3$1() {
    console.log('test3');
}
test3$1();

function set3() {
    set1();
    set2();
}

let templ = `
<h1>Rollup iife</h1>
<div class="test1"></div>
<div class="test2"></div>`;

function start() {
    $('.test').html(templ);
    set1();
    set2();
    set3();
}


document.addEventListener('DOMContentLoaded', start, false);

}($));
