
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
export const setHotkey = (jQuery) => {
  (function(e){function t(t){if(typeof t.data==="string"){t.data={keys:t.data}}if(!t.data||!t.data.keys||typeof t.data.keys!=="string"){return}var n=t.handler,r=t.data.keys.toLowerCase().split(" ");t.handler=function(t){if(this!==t.target&&(/textarea|select/i.test(t.target.nodeName)||e.hotkeys.options.filterTextInputs&&e.inArray(t.target.type,e.hotkeys.textAcceptingInputTypes)>-1)){return}var i=e.hotkeys.specialKeys[t.keyCode],s=String.fromCharCode(t.which).toLowerCase(),o="",u={};e.each(["alt","ctrl","meta","shift"],function(e,n){if(t[n+"Key"]&&i!==n){o+=n+"+"}});o=o.replace("alt+ctrl+meta+shift","hyper");if(i){u[o+i]=true}if(s){u[o+s]=true;u[o+e.hotkeys.shiftNums[s]]=true;if(o==="shift+"){u[e.hotkeys.shiftNums[s]]=true}}for(var a=0,f=r.length;a<f;a++){if(u[r[a]]){return n.apply(this,arguments)}}}}e.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",10:"return",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",59:";",61:"=",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},shiftNums:{"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"},textAcceptingInputTypes:["text","password","number","email","url","range","date","month","week","time","datetime","datetime-local","search","color","tel"],options:{filterTextInputs:true}};e.each(["keydown","keyup","keypress"],function(){e.event.special[this]={add:t}})})(jQuery)


}
