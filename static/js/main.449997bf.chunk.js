(this["webpackJsonpegplus-code-challenge"]=this["webpackJsonpegplus-code-challenge"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(4),i=n.n(r),l=(n(9),n(2)),a=(n(10),n(0)),d=function(e){return Object(a.jsx)("div",{id:"outer-modal-div",children:Object(a.jsxs)("div",{id:"inner-modal-div",children:[Object(a.jsx)("button",{className:"modal-close-button",onClick:e.handleModalToggle,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"35",height:"35",viewBox:"0 0 18 18",children:Object(a.jsx)("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})})}),Object(a.jsx)("h1",{className:"modal-user-name",children:e.user.name.first}),Object(a.jsx)("img",{className:"modal-user-image",src:e.user.picture.large}),Object(a.jsxs)("h3",{children:["email: ",e.user.email]}),Object(a.jsxs)("h3",{children:["Phone: ",e.user.phone]}),Object(a.jsxs)("h3",{children:["Cell: ",e.user.cell]})]})})},j=function(e){return Object(a.jsxs)("tr",{className:"table-row",children:[Object(a.jsx)("td",{children:Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"#",onClick:function(){return e.handleUserInModal(e.userIndex)},children:e.user.name.title+" "+e.user.name.first+" "+e.user.name.last})})}),Object(a.jsx)("td",{children:Object(a.jsx)("div",{children:new Date(e.user.dob.date).toDateString()})}),Object(a.jsx)("td",{children:Object(a.jsx)("div",{children:e.user.location.state})}),Object(a.jsx)("td",{children:Object(a.jsx)("div",{children:e.user.location.country})})]})};var o=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],h=i[1],u=Object(c.useState)(0),b=Object(l.a)(u,2),O=b[0],x=b[1];Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo").then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[]);var m=function(e){h(!0),x(n[e]),console.log(e)};return Object(a.jsx)("div",{children:Object(a.jsxs)("section",{className:"container",children:[Object(a.jsxs)("table",{className:"table",children:[Object(a.jsxs)("tr",{className:"table-row",children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Date of Birth"}),Object(a.jsx)("th",{children:"State"}),Object(a.jsx)("th",{children:"Country"})]}),n.map((function(e){return Object(a.jsx)(j,{user:e,userIndex:n.indexOf(e),handleUserInModal:m})}))]}),o&&Object(a.jsx)(d,{handleModalToggle:function(){h(!o)},user:O})]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.449997bf.chunk.js.map