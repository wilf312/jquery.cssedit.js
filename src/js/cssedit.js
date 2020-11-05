import {setHotkey} from './jQuery.Hotkeys'
setHotkey()


var nowKey = '';          // keydown時の入力キー
var isDblClicked = false; // ダブルクリック済み
var dom = {
  select : null,       //
  parent  : null
};
var isPadding  = false;
var isChanging = false;


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
      border : 'solid 3px red',
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


// 選択中のDOMからデバッグテキストにHTMLを出力
$.fn.cssedit.moveAction = function(aEvent, aMoveDistance) {
  
  $.fn.cssedit.outputDebug(dom.select, isPadding);
  
  $.fn.cssedit.moveDom(dom.select, aMoveDistance, nowKey, isPadding);
};


$(document).on('contextmenu', function() {
  if (dom.select === null) {
    return;
  }
  
  dom.select.css({
    outline : 'none'
  })
  
  dom.select = dom.select.parent();
  
  
  dom.select.css({
    outline : 'solid 3px red'
  })
  
  
  return false;
});



// キー入力の操作
$(document)
.keypress((event) => {
  // key codeを取得
  const key = String.fromCodePoint(event.which)
  
  if (key === 'a') {
    nowKey = 'left';
  }
  else if (key === 'd') {
    nowKey = 'right';
  }
  else if (key === 'w') {
    nowKey = 'up';
  }
  else if (key === 's') {
    nowKey = 'down';
  }
  // action実行
  $.fn.cssedit.moveAction(nowKey, 1);
})

.bind('keydown', 'shift+up', function(e) {
  $.fn.cssedit.moveAction(e, 10);
})
.bind('keydown', 'shift+down', function(e) {
  $.fn.cssedit.moveAction(e, -10);
})

.bind('keydown', 'alt+up', function(e) {
  $.fn.cssedit.moveAction(e, 0.1);
})
.bind('keydown', 'alt+down', function(e) {
  $.fn.cssedit.moveAction(e, -0.1);
})

.bind('keydown', 'up', function(e) {
  $.fn.cssedit.moveAction(e, 1);
})
.bind('keydown', 'down', function(e) {
  $.fn.cssedit.moveAction(e, 1);
})
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


