(this["webpackJsonpbudgie-react-web"]=this["webpackJsonpbudgie-react-web"]||[]).push([[0],{308:function(e,t,n){},309:function(e,t,n){},746:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(37),c=n.n(s),o=(n(308),n.p,n(309),n(22)),i=n.n(o),l=n(51),p=n(15),u=n(1),d=a.a.createContext();function j(e){var t=Object(r.useState)([]),n=Object(p.a)(t,2),a=n[0],s=n[1];function c(){return(c=Object(l.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://127.0.0.1:8080/categories/".concat(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function o(){return(o=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=JSON.stringify({categoryName:t}),e.next=4,fetch("http://127.0.0.1:8080/categories/add",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:n});case 4:return e.sent,e.next=7,j();case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function j(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://127.0.0.1:8080/categories/all",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function b(){return(b=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://127.0.0.1:8080/categories/delete?id=".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:e.sent,j(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){j()}),[]),Object(u.jsx)(d.Provider,{value:{categories:a,setCategories:s,addCategory:function(e){return o.apply(this,arguments)},updateCategories:j,getCategoryById:function(e){return c.apply(this,arguments)},deleteCategory:function(e){return b.apply(this,arguments)}},children:e.children})}var f=n(79),b=n(24),m=["title","titleId"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function O(e,t){var n=e.title,a=e.titleId,s=x(e,m);return r.createElement("svg",h({width:"100%",height:"100%",viewBox:"0 0 175 175",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,r.createElement("path",{d:"M166.667,54.167l-158.334,-0l46.658,-45.834",style:{fill:"none",stroke:"url(#_Linear1)",strokeWidth:"16.67px"}}),r.createElement("path",{d:"M8.333,120.833l158.334,0l-46.658,45.834",style:{fill:"none",stroke:"url(#_Linear2)",strokeWidth:"16.67px"}}),r.createElement("defs",null,r.createElement("linearGradient",{id:"_Linear1",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(158.333,0,0,45.8333,8.33333,31.25)"},r.createElement("stop",{offset:0,style:{stopColor:"#4caf50",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#009688",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#00bcd4",stopOpacity:1}})),r.createElement("linearGradient",{id:"_Linear2",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(-158.333,3.42538e-16,1.00939e-16,-45.8333,166.667,143.75)"},r.createElement("stop",{offset:0,style:{stopColor:"#9c27b0",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#e91e63",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#f44336",stopOpacity:1}}))))}var y=r.forwardRef(O),v=(n.p,["title","titleId"]);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function C(e,t){var n=e.title,a=e.titleId,s=w(e,v);return r.createElement("svg",g({width:"100%",height:"100%",viewBox:"0 0 161 148",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,r.createElement("path",{d:"M6.25,57.851l125,-0l0,34.839l23.253,-10.538l-34.401,-75.902l-113.852,51.601Z",style:{fill:"none",stroke:"url(#_lbgmwmqlsr1)",strokeWidth:"12.5px"}}),r.createElement("path",{d:"M131.25,57.851l-125,-0l0,83.333l125,0l0,-83.333Z",style:{fill:"none",stroke:"url(#_lbgmwmqlsr2)",strokeWidth:"12.5px"}}),r.createElement("path",{d:"M107.626,110.771l-77.752,0l22.912,-22.507",style:{fill:"none",stroke:"url(#_lbgmwmqlsr3)",strokeWidth:"12.5px"}}),r.createElement("defs",null,r.createElement("linearGradient",{id:"_lbgmwmqlsr1",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(149.186,-67.615,38.5212,84.9931,-286.894,47.9926)"},r.createElement("stop",{offset:0,style:{stopColor:"#4caf50",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#009688",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#00bcd4",stopOpacity:1}})),r.createElement("linearGradient",{id:"_lbgmwmqlsr2",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(163.793,0,0,93.3151,-256.681,-72.14)"},r.createElement("stop",{offset:0,style:{stopColor:"#00bcd4",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#009688",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#4caf50",stopOpacity:1}})),r.createElement("linearGradient",{id:"_lbgmwmqlsr3",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(77.7515,-3.87125e-15,-1.06299e-16,22.507,29.8742,99.5176)"},r.createElement("stop",{offset:0,style:{stopColor:"#4caf50",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#009688",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#00bcd4",stopOpacity:1}}))))}var E=r.forwardRef(C),N=(n.p,["title","titleId"]);function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function T(e,t){var n=e.title,a=e.titleId,s=S(e,N);return r.createElement("svg",k({width:"100%",height:"100%",viewBox:"0 0 161 148",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,r.createElement("path",{d:"M6.25,57.851l125,-0l0,34.839l23.253,-10.538l-34.401,-75.902l-113.852,51.601Z",style:{fill:"none",stroke:"url(#_pimrmeiwxi1)",strokeWidth:"12.5px"}}),r.createElement("path",{d:"M131.25,57.851l-125,-0l0,83.333l125,0l0,-83.333Z",style:{fill:"none",stroke:"url(#_pimrmeiwxi2)",strokeWidth:"12.5px"}}),r.createElement("path",{d:"M29.874,110.771l77.752,0l-22.912,-22.507",style:{fill:"none",stroke:"url(#_pimrmeiwxi3)",strokeWidth:"12.5px"}}),r.createElement("defs",null,r.createElement("linearGradient",{id:"_pimrmeiwxi1",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(149.186,-67.615,38.5212,84.9931,-286.894,47.9926)"},r.createElement("stop",{offset:0,style:{stopColor:"#f44336",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#e91e63",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#9c27b0",stopOpacity:1}})),r.createElement("linearGradient",{id:"_pimrmeiwxi2",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(163.793,0,0,93.3151,-256.681,-72.14)"},r.createElement("stop",{offset:0,style:{stopColor:"#9c27b0",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#e91e63",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#f44336",stopOpacity:1}})),r.createElement("linearGradient",{id:"_pimrmeiwxi3",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(-77.7515,-7.9107e-15,-2.19168e-15,22.507,107.626,99.5176)"},r.createElement("stop",{offset:0,style:{stopColor:"#9c27b0",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#e91e63",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#f44336",stopOpacity:1}}))))}var D=r.forwardRef(T),I=(n.p,["title","titleId"]);function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function _(e,t){var n=e.title,a=e.titleId,s=A(e,I);return r.createElement("svg",U({width:"100%",height:"100%",viewBox:"0 0 143 143",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve","xmlns:serif":"http://www.serif.com/",style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:1.5},ref:t,"aria-labelledby":a},s),n?r.createElement("title",{id:a},n):null,r.createElement("path",{d:"M65.367,18.256c16.275,-16.071 42.537,-16.008 58.734,0.19c16.261,16.261 16.261,42.664 0,58.925l-58.925,58.926l-58.926,-58.926l58.926,-58.925l0.191,-0.19Z",style:{fill:"none",stroke:"url(#_twwzkvsuhb1)",strokeWidth:"12.5px"}}),r.createElement("path",{d:"M109.37,33.177c8.13,8.131 8.13,21.332 -0,29.463c-8.131,8.13 -21.333,8.13 -29.463,-0c-8.131,-8.131 -8.131,-21.332 -0,-29.463c8.13,-8.13 21.332,-8.13 29.463,0Z",style:{fill:"none",stroke:"url(#_twwzkvsuhb2)",strokeWidth:"12.5px"}}),r.createElement("defs",null,r.createElement("linearGradient",{id:"_twwzkvsuhb1",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(77.2128,77.2128,-65.9838,65.9838,33.1461,-197.419)"},r.createElement("stop",{offset:0,style:{stopColor:"#2196f3",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#03a9f4",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#00bcd4",stopOpacity:1}})),r.createElement("linearGradient",{id:"_twwzkvsuhb2",x1:0,y1:0,x2:1,y2:0,gradientUnits:"userSpaceOnUse",gradientTransform:"matrix(77.2128,77.2128,-65.9838,65.9838,27.2536,-215.096)"},r.createElement("stop",{offset:0,style:{stopColor:"#2196f3",stopOpacity:1}}),r.createElement("stop",{offset:.5,style:{stopColor:"#03a9f4",stopOpacity:1}}),r.createElement("stop",{offset:1,style:{stopColor:"#00bcd4",stopOpacity:1}}))))}var L=r.forwardRef(_);n.p;function P(){return Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("ul",{className:"nav-ul",children:[Object(u.jsx)("li",{className:"nav-li",children:Object(u.jsxs)(f.b,{className:"link",to:"/",children:[Object(u.jsx)(y,{className:"nav-icon"}),Object(u.jsx)("div",{children:"Transactions"})]})}),Object(u.jsx)("li",{className:"nav-li",children:Object(u.jsxs)(f.b,{className:"link",to:"/income",children:[Object(u.jsx)(E,{className:"nav-icon"}),"Income"]})}),Object(u.jsx)("li",{className:"nav-li",children:Object(u.jsxs)(f.b,{className:"link",to:"/expenses",children:[Object(u.jsx)(D,{className:"nav-icon"}),"Expenses"]})}),Object(u.jsx)("li",{className:"nav-li",children:Object(u.jsxs)(f.b,{className:"link",to:"/categories",children:[Object(u.jsx)(L,{className:"nav-icon"}),"Categories"]})})]})})}var M=a.a.createContext();function R(e){var t=Object(r.useContext)(d),n=Object(r.useState)([]),a=Object(p.a)(n,2),s=a[0],c=a[1];function o(){return(o=Object(l.a)(i.a.mark((function e(n,r,a,s){var c,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCategoryById(r);case 2:return c=e.sent,o="",o=n>=0?"http://localhost:8080/transactions/addIncome":"http://localhost:8080/transactions/addExpense",l=JSON.stringify({amount:n,category:c,note:a,transactionDate:s}),e.prev=6,e.next=9,fetch(o,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:l});case 9:e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error("error",e.t0);case 15:return e.next=17,f();case 17:case"end":return e.stop()}}),e,null,[[6,12]])})))).apply(this,arguments)}function j(){return(j=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/transactions/delete/?id=".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return e.sent,e.next=6,f();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(){return b.apply(this,arguments)}function b(){return(b=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:8080/transactions/all",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.next=9,c(n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){f()}),[]),Object(u.jsx)(M.Provider,{value:{transactions:s,setTransactions:c,addTransaction:function(e,t,n,r){return o.apply(this,arguments)},updateTransactions:f,deleteTransaction:function(e){return j.apply(this,arguments)}},children:e.children})}n(318);function F(e){var t=Object(r.useContext)(M),n=(Object(r.useContext)(d),(new Date).toISOString().substr(0,10)),a=Object(r.useRef)(null),s=Object(r.useState)(0),c=Object(p.a)(s,2),o=c[0],f=c[1],b=Object(r.useState)(0),m=Object(p.a)(b,2),h=m[0],x=m[1],O=Object(r.useState)(1),y=Object(p.a)(O,2),v=y[0],g=y[1],w=Object(r.useState)(""),C=Object(p.a)(w,2),E=C[0],N=C[1],k=Object(r.useState)(n),S=Object(p.a)(k,2),T=S[0],D=S[1],I=function(){var n=Object(l.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r.preventDefault(),a=parseFloat(o+h/100),e.income?t.addTransaction(a,v,E,T):t.addTransaction(-1*a,v,E,T),U();case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),U=function(){f(0),x(0),N("")};return Object(u.jsx)("div",{className:"add-transaction-form-container",children:Object(u.jsxs)("form",{className:"add-transaction-form",onSubmit:I,onReset:U,ref:a,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"transactionDollarAmount",children:"Enter dollar amount of transaction:"}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:[e.income?"":"-","$",Object(u.jsx)("input",{type:"number",name:"transactionDollarAmount",id:"transactionDollarAmount",min:"0",max:"99999",value:o,onChange:function(e){f(parseInt(e.target.value))}}),".",Object(u.jsx)("input",{type:"text",min:"0",max:"99",size:"2",value:h,onChange:function(e){parseInt(e.target.value)<100&&x(parseInt(e.target.value))}})]})})]}),Object(u.jsx)(j,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"transactionCategory",children:"Set a category for the transaction:"}),Object(u.jsx)("select",{name:"transactionCategory",value:v,onChange:function(e){g(e.target.value)},children:Object(u.jsx)(d.Consumer,{children:function(e){return e.categories.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.categoryName},e.id)}))}})})]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"transactionNote",children:"Set a note for the transaction:"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{name:"transactionNote",type:"text",placeholder:"Note",value:E,onChange:function(e){N(e.target.value)}})})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"transactionDate",children:"Date of transaction:"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{name:"transactionDate",type:"date",placeholder:"Date",value:T,onChange:function(e){console.log("date",e.target.value),D(e.target.value)}})})]}),Object(u.jsxs)("div",{className:"form-button-container",children:[Object(u.jsx)("button",{type:"reset",className:"form-button reset-button",children:"Clear"}),Object(u.jsx)("button",{type:"submit",className:"form-button submit-button",children:"Submit"})]})]})})}n(747),n(748),n(752),n(290),n(291),n(120),n(117),n(299);var G=["#E91E63","#00BCD4","#2196F3","#9C27B0","#3F51B5","#03A9F4","#009688","#673AB7"];function B(e){var t=e.amount.toFixed(2),n=(-1*e.amount).toFixed(2);return Object(u.jsx)("div",{className:e.amount>=0?"positive-number":"negative-number",children:e.amount>=0?"$".concat(t):"-$".concat(n)})}function W(e){var t=Object(r.useContext)(M);return Object(u.jsxs)("div",{className:"transaction-item",children:[Object(u.jsx)("span",{children:Object(u.jsx)(B,{amount:e.dollars})}),Object(u.jsx)("span",{children:e.category?e.category:"Empty"}),Object(u.jsx)("span",{children:e.note}),Object(u.jsx)("span",{children:e.transactionDate}),Object(u.jsx)("span",{children:Object(u.jsx)("button",{onClick:function(){t.deleteTransaction(e.id)},children:"Delete"})})]})}n(754),n(292),n(146),n(147);var q=n(21),Z=n(149);function z(){var e=Object(r.useContext)(M);Object(r.useContext)(d);q.e.register(q.a,q.q,q.g);var t={responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Chart.js Line Chart"},legend:{labels:{color:"white"}}}};return Object(u.jsx)(j,{children:Object(u.jsx)(d.Consumer,{children:function(n){var r=function(t){var n={labels:[],datasets:[{label:"Categories",data:[],backgroundColor:[],color:[]}]};return t.categories.forEach((function(t,r){var a=0;e.transactions.forEach((function(e){e.category.categoryName===t.categoryName&&(a+=Math.abs(e.amount))})),0!=a&&(n.labels.push(t.categoryName),n.datasets[0].data.push(a),n.datasets[0].backgroundColor.push(G[r%G.length]),n.datasets[0].color.push(G[r%G.length]))})),n}(n);return Object(u.jsx)("div",{className:"chart-js-container main-chart",children:Object(u.jsx)(Z.a,{data:r,options:t})})}})})}var J=function(e){var t=e.transactions,n=e.ascending,r=t.sort((function(e,t){var n=e.amount,r=t.amount;return""===n?1:""===r?-1:n>r?1:n<r?-1:0}));return n||r.reverse(),r},X=function(e){var t=e.transactions,n=e.ascending,r=t.sort((function(e,t){var r=e.category.categoryName.toUpperCase(),a=t.category.categoryName.toUpperCase();return"NONE"===r||"NONE"===a?n?1:-1:r>a?1:r<a?-1:0}));return n||r.reverse(),r},$=function(e){var t=e.transactions,n=e.ascending,r=t.sort((function(e,t){var r=e.note,a=t.note;return"None"===r?n?1:-1:"None"===a?n?-1:1:r>a?1:r<a?-1:0}));return n||r.reverse(),r},H=function(e){var t=e.transactions,n=e.ascending;try{var r=t.sort((function(e,t){var r=e.transactionDate,a=t.transactionDate;return""===r?n?1:-1:""===a?n?-1:1:r>a?1:r<a?-1:0}));return n||r.reverse(),r}catch(a){}return[]};function K(e){Object(r.useContext)(M),Object(r.useContext)(d);q.e.register(q.d,q.j,q.l,q.i,q.p,q.q,q.g);var t={responsive:!0,maintainAspectRatio:!1,plugins:{title:{display:!0,text:"Chart.js Line Chart"},legend:{labels:{color:"white"}}}};return Object(u.jsx)(M.Consumer,{children:function(n){var r=function(e){var t=e.transactions,n=e.filter,r={labels:[],datasets:[]},a={label:"Income",data:[],borderColor:"green",backgroundColor:"green",color:[]},s={label:"Expenses",data:[],borderColor:"red",backgroundColor:"red",color:[]},c={label:"Result",data:[],borderColor:"purple",backgroundColor:"purple",color:[]},o=H({transactions:t,ascending:!0}),i=[];return o.forEach((function(e){i.includes(e.transactionDate)||i.push(e.transactionDate)})),i.forEach((function(e){var t,n=0,i=0;o.forEach((function(t){if(t.transactionDate===e){var r=t.amount;r>=0?n+=r:i+=r}})),t=n-Math.abs(i),r.labels.push(e),a.data.push(n),s.data.push(i),c.data.push(t)})),"income"===n?r.datasets.push(a):"expense"===n?r.datasets.push(s):(r.datasets.push(a),r.datasets.push(s),r.datasets.push(c)),r}({transactions:n.transactions,filter:e.filter});return Object(u.jsx)("div",{className:"chart-js-container",children:Object(u.jsx)(Z.b,{data:r,options:t})})}})}function Q(e){var t=Object(r.useContext)(M),n=Object(r.useState)("amount"),a=Object(p.a)(n,2),s=a[0],c=a[1],o=Object(r.useState)(!0),i=Object(p.a)(o,2),l=i[0],d=i[1],j=Object(r.useState)(!0),f=Object(p.a)(j,2),b=f[0],m=f[1];"expense"===e.filter&&(t.transactions=t.transactions.filter((function(e){return e.amount<0}))),"income"===e.filter&&(t.transactions=t.transactions.filter((function(e){return e.amount>=0})));return Object(u.jsxs)("div",{className:"transaction-list",children:[Object(u.jsx)("div",{className:"sum-line",children:Object(u.jsx)(B,{amount:function(){var e=0;return t.transactions.forEach((function(t){e+=t.amount})),e}()})}),Object(u.jsx)("div",{className:"chart-block",children:Object(u.jsxs)("div",{className:"chart-display",children:[Object(u.jsx)(K,{filter:e.filter}),Object(u.jsx)(z,{})]})}),Object(u.jsxs)("div",{className:"transaction-list-header",children:[Object(u.jsx)("div",{onClick:function(){"amount"!==s?c("amount"):d(!l)},children:"Amount"}),Object(u.jsx)("div",{onClick:function(){"category"!==s?c("category"):d(!l)},children:"Category"}),Object(u.jsx)("div",{onClick:function(){"note"!==s?c("note"):d(!l)},children:"Note"}),Object(u.jsx)("div",{onClick:function(){"transactionDate"!==s?c("transactionDate"):d(!l)},children:"Date"}),Object(u.jsx)("div",{children:e.showAdd?Object(u.jsx)("button",{onClick:function(){m(!b)},children:b?"Hide":"Add New"}):""})]}),b&&e.showAdd?Object(u.jsx)(F,{income:"income"===e.filter}):"",function(){try{return function(e){var t=e.sortType,n=e.transactions,r=e.ascending;switch(t){case"amount":return J({transactions:n,ascending:r});case"category":return X({transactions:n,ascending:r});case"note":return $({transactions:n,ascending:r});case"transactionDate":return H({transactions:n,ascending:r});default:throw"Error: SortType:".concat(t)}}({sortType:s,transactions:t.transactions,ascending:l})}catch(e){}}().map((function(e){return Object(u.jsx)(W,{id:e.id,dollars:e.amount,category:e.category?e.category.categoryName:"",note:e.note,transactionDate:e.transactionDate},e.id)}))]})}function V(){return Object(u.jsx)("div",{className:"content-pane",children:Object(u.jsx)(R,{children:Object(u.jsxs)("div",{className:"transaction-viewer-container",children:[Object(u.jsx)("div",{className:"header-text neutral-number",children:"Transactions"}),Object(u.jsx)(Q,{showAdd:!1})]})})})}function Y(){return Object(u.jsx)("div",{className:"content-pane",children:Object(u.jsx)(R,{children:Object(u.jsxs)("div",{className:"transaction-viewer-container",children:[Object(u.jsx)("div",{className:"header-text negative-number",children:"Expenses"}),Object(u.jsx)(Q,{filter:"expense",showAdd:!0})]})})})}function ee(){return Object(u.jsx)("div",{className:"content-pane",children:Object(u.jsx)(R,{children:Object(u.jsxs)("div",{className:"transaction-viewer-container",children:[Object(u.jsx)("div",{className:"header-text positive-number",children:"Income"}),Object(u.jsx)(Q,{filter:"income",showAdd:!0})]})})})}function te(e){var t=Object(r.useContext)(d);return Object(u.jsxs)("div",{className:"category-list-item",children:[Object(u.jsx)("span",{children:e.categoryName}),"None"!=e.categoryName?Object(u.jsx)("span",{children:Object(u.jsx)("button",{onClick:function(){t.deleteCategory(e.id)},children:"Delete"})}):null]})}function ne(e){var t=Object(r.useContext)(d),n=Object(r.useState)(""),a=Object(p.a)(n,2),s=a[0],c=a[1],o=function(){c("")};return Object(u.jsxs)("form",{className:"add-transaction-form",onSubmit:function(e){e.preventDefault(),t.addCategory(s),o()},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"categoryName",children:"Enter name of category:"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"text",name:"categoryName",id:"categoryName",value:s,onChange:function(e){c(e.target.value)}})})]}),Object(u.jsx)("button",{children:"Submit"})]})}function re(e){var t=Object(r.useContext)(d),n=Object(r.useState)(!0),a=Object(p.a)(n,2),s=a[0],c=a[1],o=t.categories.sort((function(e,t){var n=e.categoryName.toUpperCase(),r=t.categoryName.toUpperCase();return"NONE"===n?1:"NONE"===r?-1:n>r?1:n<r?-1:0}));return Object(u.jsxs)("div",{className:"transaction-list",children:[Object(u.jsxs)("div",{className:"transaction-list-header",children:[Object(u.jsx)("div",{children:"Name"}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:function(){c(!s)},children:s?"Hide":"Add New"})})]}),s?Object(u.jsx)(ne,{}):"",o.map((function(e){return Object(u.jsx)(te,{id:e.id,categoryName:e.categoryName},e.id)}))]})}function ae(){return Object(u.jsx)("div",{className:"content-pane",children:Object(u.jsx)(j,{children:Object(u.jsxs)("div",{className:"transaction-viewer-container",children:[Object(u.jsx)("div",{className:"header-text category-display",children:"Categories"}),Object(u.jsx)(re,{})]})})})}function se(){return Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(f.a,{baseName:"/",children:[Object(u.jsx)(P,{}),Object(u.jsxs)(b.c,{children:[Object(u.jsxs)(j,{children:[Object(u.jsx)(b.a,{exact:!0,path:"/",children:Object(u.jsx)(V,{})}),Object(u.jsx)(b.a,{path:"/income",children:Object(u.jsx)(ee,{})}),Object(u.jsx)(b.a,{path:"/expenses",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(b.a,{path:"/categories",children:Object(u.jsx)(ae,{})})]}),Object(u.jsx)(b.a,{path:"*",children:Object(u.jsx)("div",{children:"404"})})]})]})})}var ce=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(se,{})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,755)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ce,{})}),document.getElementById("root")),oe()}},[[746,1,2]]]);
//# sourceMappingURL=main.a2a7bf04.chunk.js.map