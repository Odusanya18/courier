(window.webpackJsonp=window.webpackJsonp||[]).push([["admin"],{1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"iA/y":function(e,t,a){"use strict";a.r(t);a("pNMO"),a("ma9I"),a("TeQF"),a("QWBl"),a("eoL8"),a("5DmW"),a("tkto"),a("07d7"),a("5s+n"),a("FZtP");var r=a("q1tI"),n=a.n(r),o=a("i8i4"),l=a.n(o),c=a("clDf"),i=a("JUWL"),s=a.n(i),u=(a("zKZe"),a("HZXQ")),m=a("jKAY"),d=a("m+3I"),f=a("Sqtd"),p=a("lwYI"),E=a("4PEd"),y=a("YRDk"),h=a("2TTE"),b=a("No7f"),w=a("NFGt"),N=a("zNaD"),v=a("RD7I");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var k=Object(v.a)({width:{width:"100%"},h5:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',width:"100%"}}),g=document.getElementById("api-entrypoint").innerText,P=0,R=function(e,t,a){if(e&&e.rawFile instanceof File){var r=new FormData;return r.append("file",e.rawFile),fetch("".concat(g,"/media_objects"),{body:r,method:"POST"}).then(function(e){return e.json()}).then(function(e){return a.products[P].image=e.id,P++,e.id})}return e.src},D=function(e){var t=e.record;return n.a.createElement("span",null,t?'"'.concat(t.title,'"'):"")},I=function(e){return n.a.createElement(u.b,e,n.a.createElement(m.a,null,n.a.createElement(d.a,{source:"title",validation:{required:!0}}),n.a.createElement(f.a,{source:"description",validation:{required:!0}}),n.a.createElement(N.a,{source:"content",validation:{required:!0}})))},T=function(e){return n.a.createElement(p.b,O({title:n.a.createElement(D,null)},e),n.a.createElement(m.a,null,n.a.createElement(E.a,{label:"Id",source:"id"}),n.a.createElement(d.a,{source:"title",validation:{required:!0}}),n.a.createElement(f.a,{source:"description",validation:{required:!0}}),n.a.createElement(N.a,{source:"content",validation:{required:!0}})))},A={name:"product_orders",create:function(e){var t=k(e);return n.a.createElement(u.b,e,n.a.createElement(m.a,null,n.a.createElement("h5",{className:t.h5},"Welcome to our new order form , please read instructions very well before proceeding – This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation – Please kindly drop link you know your capacity can pay, don’t drop too many link and later later ask us to adjust because we are working with time.. – We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)"),n.a.createElement("h5",{className:t.h5},"The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only"),n.a.createElement("div",null,n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"fullname",label:"Full Name"}),n.a.createElement(d.a,{className:t.width,source:"phoneNumber",label:"Phone Number"})),n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"email",label:"Email"})),n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"additionalNote",label:"Additional Notes"})),n.a.createElement("div",{className:"column"},n.a.createElement(y.a,{source:"products"},n.a.createElement(h.a,null,n.a.createElement(d.a,{source:"name"}),n.a.createElement(d.a,{source:"link"}),n.a.createElement(b.a,{accept:"image/*",multiple:!1,source:"image",normalize:R},n.a.createElement(w.a,{source:"src"}))))))))},edit:function(e){var t=k(e);return n.a.createElement(p.b,e,n.a.createElement(m.a,null,n.a.createElement("h5",{className:t.h5},"Welcome to our new order form , please read instructions very well before proceeding – This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation – Please kindly drop link you know your capacity can pay, don’t drop too many link and later later ask us to adjust because we are working with time.. – We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)"),n.a.createElement("h5",{className:t.h5},"The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only"),n.a.createElement("div",null,n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"fullname",label:"Full Name"}),n.a.createElement(d.a,{className:t.width,source:"phoneNumber",label:"Phone Number"})),n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"email",label:"Email"})),n.a.createElement("div",{className:"column"},n.a.createElement(d.a,{className:t.width,source:"additionalNote",label:"Additional Notes"})),n.a.createElement("div",{className:"column"},n.a.createElement(y.a,{source:"products"},n.a.createElement(h.a,null,n.a.createElement(d.a,{source:"name"}),n.a.createElement(d.a,{source:"link"}),n.a.createElement(b.a,{accept:"image/*",multiple:!1,source:"image",normalize:R},n.a.createElement(w.a,{source:"src"}))))))))}},j={name:"posts",create:I,edit:T},F={name:"pages",create:I,edit:T},Y=a("Za1m"),S=(a("rB9j"),a("UxlC"),a("8ikV")),U=a("2INN"),H=a("mf+E");function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){W(e,t,a[t])})}return e}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var B={Authorization:"Bearer ".concat(localStorage.getItem("token"))},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(c.fetchHydra)(e,q({},t,{headers:new Headers(B)}))},C=document.getElementById("api-entrypoint").innerText;l.a.render(n.a.createElement(c.HydraAdmin,{apiDocumentationParser:function(e){return s()(e,{headers:new Headers(B)}).then(function(e){var t=e.api;return Object(Y.a)(t.resources,[A,j,F]),{api:t}}).then(function(e){return{api:e.api}},function(e){var t=e.api,a=e.status;return 401===a?Promise.resolve({api:t,status:a,customRoutes:[n.a.createElement(U.a,{path:"/",render:function(){return n.a.createElement(H.a,{to:"/login"})}})]}):Promise.resolve(e)})},dataProvider:function(e){return Object(c.hydraClient)(e,L)},authProvider:function(e,t){switch(e){case S.d:var a=t.username,r=t.password,n=new Request("/authentication_token",{method:"POST",body:JSON.stringify({email:a,password:r}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then(function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()}).then(function(e){var t=e.token;localStorage.setItem("token",t),window.location.replace("/admin")});case S.e:localStorage.removeItem("token");break;case S.b:if(401===t.status||403===t.status)return localStorage.removeItem("token"),Promise.reject();break;case S.a:return localStorage.getItem("token")?Promise.resolve():Promise.reject();default:return Promise.resolve()}},entrypoint:C}),document.getElementById("api-platform-admin"))}},[["iA/y","runtime",0]]]);