"scrollingElement"in document||function(){function e(e){return window.getComputedStyle?getComputedStyle(e,null):e.currentStyle}function t(e){return window.HTMLBodyElement?e instanceof HTMLBodyElement:/body/i.test(e.tagName)}function n(e){for(var n=e;n=n.nextSibling;)if(1==n.nodeType&&t(n))return n;return null}function o(e){return"none"!=e.display&&!("collapse"==e.visibility&&/^table-(.+-group|row|column)$/.test(e.display))}function r(t){var n=e(t),r=e(document.documentElement);return"visible"!=n.overflow&&"visible"!=r.overflow&&o(n)&&o(r)}var i,l=function(){if(!/^CSS1/.test(document.compatMode))return!1;if(void 0===i){var e=document.createElement("iframe");e.style.height="1px",(document.body||document.documentElement||document).appendChild(e);var t=e.contentWindow.document;t.write('<!DOCTYPE html><div style="height:9999em">x</div>'),t.close(),i=t.documentElement.scrollHeight>t.body.scrollHeight,e.parentNode.removeChild(e)}return i},c=function(){if(l())return document.documentElement;var e=document.body;return(e=e&&!/body/i.test(e.tagName)?n(e):e)&&r(e)?null:e};Object.defineProperty?Object.defineProperty(document,"scrollingElement",{get:c}):document.__defineGetter__?document.__defineGetter__("scrollingElement",c):(document.scrollingElement=c(),document.attachEvent&&document.attachEvent("onpropertychange",function(){"activeElement"==window.event.propertyName&&(document.scrollingElement=c())}))}();