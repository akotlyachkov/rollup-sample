import $ from 'jquery';
import set1 from './module1';
import set2 from './module2';
import set3 from './module3';

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
