"use strict";(self["webpackChunkyur"]=self["webpackChunkyur"]||[]).push([[541],{541:function(e,t,n){n.r(t),n.d(t,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return k},keyboardDidClose:function(){return w},keyboardDidOpen:function(){return b},keyboardDidResize:function(){return g},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return p},setKeyboardOpen:function(){return f},startKeyboardAssist:function(){return h},trackViewportChanges:function(){return D}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i="ionKeyboardDidShow",r="ionKeyboardDidHide",o=150;let s={},u={},a=!1;const d=()=>{s={},u={},a=!1},h=e=>{c(e),e.visualViewport&&(u=k(e.visualViewport),e.visualViewport.onresize=()=>{D(e),b()||g(e)?f(e):w(e)&&p(e)})},c=e=>{e.addEventListener("keyboardDidShow",(t=>f(e,t))),e.addEventListener("keyboardDidHide",(()=>p(e)))},f=(e,t)=>{y(e,t),a=!0},p=e=>{l(e),a=!1},b=()=>{const e=(s.height-u.height)*u.scale;return!a&&s.width===u.width&&e>o},g=e=>a&&!w(e),w=e=>a&&u.height===e.innerHeight,y=(e,t)=>{const n=t?t.keyboardHeight:e.innerHeight-u.height,r=new CustomEvent(i,{detail:{keyboardHeight:n}});e.dispatchEvent(r)},l=e=>{const t=new CustomEvent(r);e.dispatchEvent(t)},D=e=>{s=Object.assign({},u),u=k(e.visualViewport)},k=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=541.38e775d9.js.map