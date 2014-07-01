;(function($) {




/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

/*
 * One small change is: now keys are passed by object { keys: '...' }
 * Might be useful, when you want to pass some other data to your handler
 */
(function(e){function t(t){if(typeof t.data==="string"){t.data={keys:t.data}}if(!t.data||!t.data.keys||typeof t.data.keys!=="string"){return}var n=t.handler,r=t.data.keys.toLowerCase().split(" ");t.handler=function(t){if(this!==t.target&&(/textarea|select/i.test(t.target.nodeName)||e.hotkeys.options.filterTextInputs&&e.inArray(t.target.type,e.hotkeys.textAcceptingInputTypes)>-1)){return}var i=e.hotkeys.specialKeys[t.keyCode],s=String.fromCharCode(t.which).toLowerCase(),o="",u={};e.each(["alt","ctrl","meta","shift"],function(e,n){if(t[n+"Key"]&&i!==n){o+=n+"+"}});o=o.replace("alt+ctrl+meta+shift","hyper");if(i){u[o+i]=true}if(s){u[o+s]=true;u[o+e.hotkeys.shiftNums[s]]=true;if(o==="shift+"){u[e.hotkeys.shiftNums[s]]=true}}for(var a=0,f=r.length;a<f;a++){if(u[r[a]]){return n.apply(this,arguments)}}}}e.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],options:{filterTextInputs:true}};e.each(["keydown","keyup","keypress"],function(){e.event.special[this]={add:t}})})(this.jQuery)



/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});




    var nowKey = '';          // keydown時の入力キー
    var isDblClicked = false; // ダブルクリック済み
    var dom = {
        select : null,       //
        parent  : null
    };
    var isPadding  = false;
    var isChanging = false;
    var weight     = 5;


    $('body')
        .append('<div style="background: white; width: 300px; height: 240px; position: fixed; right: 0; top: 0;"><p id="cssedit-type" style="font-size: 20px;">margin</p><textarea style="font-size: 16px; width: 300px; height: 100px;" id="cssedit-debug"></textarea><p style="padding:5px;">W : Top<br>D : Right<br>S : Down<br>A : Left<br>Shift + F : change margin / padding </p></div>');




    // 要素に対してダブルクリック時のイベント発行
    $.fn.cssedit = function() {
        var elements = this;
        elements.each(function(_idx) {
            var _dom = $(this);

            $.fn.cssedit.setDblClick(_dom);
        });
        return this;
    };

    // ダブルクリックのイベントセット
    $.fn.cssedit.setDblClick = function(aDom) {
        aDom.on("dblclick", function() {

            // 前回のDOMをリセットするために保管
            var before = dom.select;

            // ダブルクリック済みだったら前回のDOMをリセット
            if (isDblClicked) {
                before.css({
                    webkitFilter: "grayscale(0%)"
                });
            }

            isDblClicked = true; // クリック済み

            dom.select = $(this).css({
                                webkitFilter: "grayscale(100%)"
                            });
        });
    };

    // DOMの移動
    $.fn.cssedit.moveDom = function(aDom, aMove, aInputKey, aIsPad) {

        var changeValue   = '';
        var changeMove = 'margin';

        if (aIsPad) {
            changeMove = 'padding';
        }

        if (aInputKey === 'up') {
            changeValue = changeMove + 'Top';
        }
        else if (aInputKey === 'down') {
            changeValue = changeMove + 'Bottom';
        }
        else if (aInputKey === 'left') {
            changeValue = changeMove + 'Left';
        }
        else if (aInputKey === 'right') {
            changeValue = changeMove + 'Right';
        }
        else {
            return;
        }
        aDom.css(changeValue , parseInt(aDom.css(changeValue), 10) + aMove);

    };

    // 選択中のDOMからデバッグテキストにHTMLを出力
    $.fn.cssedit.outputDebug = function(aDom, aIsPad) {

        var changeMove = 'margin';
        var text       = '';

        if (aIsPad) {
            changeMove = 'padding';
        }
        text = parseInt(aDom.css(changeMove + "Top"), 10)    + 'px '+
               parseInt(aDom.css(changeMove + "Right"), 10)  + 'px '+
               parseInt(aDom.css(changeMove + "Bottom"), 10) + 'px '+
               parseInt(aDom.css(changeMove + "Left"), 10)   + 'px';



        $(document.getElementById('cssedit-debug')).text(changeMove + ' : ' + text + ';');

    };

    // マウスホイールでDOM操作
    $("body").on({
        mousewheel: function(e) {

            var y = 0;

            // ダブルクリックされ、キー入力中だったときにDOMを移動させる
            if (isDblClicked &&
                nowKey !== '') {

                // 移動距離の設定
                y = event.deltaY / weight;

                // DOMの移動
                $.fn.cssedit.moveDom(dom.select, y, nowKey, isPadding);

                // 現在のmargin,paddingをデバッグエリアに表示
                $.fn.cssedit.outputDebug(dom.select, isPadding);

                // scrollイベントのキャンセル
                if (e.target == 'body') return;
                e.preventDefault();
                e.stopPropagation();
            }
        }});




    // キー入力の操作
    $(document)
        .bind('keydown', 'a', function() {
            nowKey = 'left';
        })
        .bind('keydown', 'd', function() {
            nowKey = 'right';
        })
        .bind('keydown', 'w', function() {
            nowKey = 'up';
        })
        .bind('keydown', 's', function(e) {
            nowKey = 'down';
        })
        .bind('keyup', 'a', function() {
            nowKey = '';
        })
        .bind('keyup', 'd', function() {
            nowKey = '';
        })
        .bind('keyup', 'w', function() {
            nowKey = '';
        })
        .bind('keyup', 's', function() {
            nowKey = '';
        })
        // paddingとmarginを切り返る
        .bind('keydown', 'shift+f', function() {
            if (isChanging) { // 連続で入力されたときは処理を実行しない
                return;
            }

            // デバッグエリアの切替表示
            var dom = $(document.getElementById('cssedit-type'));

            if (isPadding) {
                isPadding  = false;
                dom.text("margin");
            }
            else {
                isPadding  = true;
                dom.text("padding");
            }

            isChanging = true;

            // 連打回避
            setTimeout(function() {
                isChanging = false;
            }, 200);
        });
})(jQuery);
