// ==UserScript==
// @name         	Code-Snippet Line-Numbers
// @namespace    	http://stackexchange.com/users/5144572/cliff-burton
// @version      	0.1
// @description		Add line numbers on SO and SE code snippetts
// @author       	Cliff Burton (http://stackoverflow.com/users/4120911/cliff-burton)
// @match	       	*://*.stackexchange.com/questions/*
// @match        	*://*.stackoverflow.com/questions/*
// @match        	*://*.superuser.com/questions/*
// @match        	*://*.serverfault.com/questions/*
// @match        	*://*.askubuntu.com/questions/*
// @match        	*://*.stackapps.com/questions/*
// @match        	*://*.mathoverflow.net/questions/*
// @grant        	GM_addStyle
// ==/UserScript==


function userscript($) {
    var codeSn = $("pre");
    var snippets = codeSn.length;
    for (var i = 0; i < snippets; i++) {
        codeSn[i].innerHTML = "<span class='lineCounter'></span>" + codeSn[i].innerHTML;
        var codeSnLines = codeSn[i].innerHTML.split(/\n/).length;
        for (var j = 0; j < codeSnLines; j++) {
            var number = codeSn[i].getElementsByClassName('lineCounter')[0];
            number.innerHTML += '<span>' + (j + 1) + '</span>';
        }
    }
}

var el = document.createElement('script');
el.type = 'text/javascript';
el.text = '(' + userscript + ')(jQuery);';
document.head.appendChild(el);

/***	CSS Add Global-Style http://stackapps.com/a/4800/10590	***/
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

    addGlobalStyle(function(){
/*
    .lineCounter {
        display:block;
        margin:0 10px 0 -10px; float: left;
        outline: 5px solid #F8F8F8;
        text-align:right;
        }

    pre .lineCounter span {
        display: block;
        background: #F8F8F8; color: #AAA;
        padding:0 2px 0 13px;
        text-align: right;
        }
*/
    }.toString().slice(14,-3));
