(this["webpackJsonptoll-india-frontend"]=this["webpackJsonptoll-india-frontend"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=n(14),a=n.n(s),l=(n(21),n(22),n(0)),r=function(){return Object(l.jsxs)("nav",{className:"navbar is-dark",role:"navigation",children:[Object(l.jsx)("div",{className:"navbar-brand",children:Object(l.jsx)("div",{className:"navbar-item",children:Object(l.jsx)("h1",{className:"is-size-3 is-uppercase",children:"Toll India"})})}),Object(l.jsx)("div",{className:"navbar-end",children:Object(l.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(l.jsx)("a",{className:"navbar-link",children:"Kiran's Project"}),Object(l.jsxs)("div",{className:"navbar-dropdown is-right",children:[Object(l.jsx)("a",{className:"navbar-item",href:"https://kiranhpe.github.io/covid19-react/#/",target:"_blank",children:"Covid-19 Statistics"}),Object(l.jsx)("a",{className:"navbar-item",href:"http://toll-india.herokuapp.com/api/toll/",target:"_blank",children:"Toll India API"})]})]})})]})},d=n(16),h=n(15),j=n.n(h),o=function(e){var t,n=Object(c.useState)({}),i=Object(d.a)(n,2),s=i[0],a=i[1];return Object(c.useEffect)((function(){j.a.get("https://toll-india.herokuapp.com/api/toll/16").then((function(e){a(e.data)}))}),[]),Object(l.jsxs)("div",{className:"container.is-fullhd p-4",children:[e.children,Object(l.jsx)("input",{className:"input is-info",type:"text",placeholder:"search toll name"}),Object(l.jsxs)("table",{className:"table is-fullwidth is-hoverable",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Type of Vehicle"}),Object(l.jsx)("th",{children:"Single Journey"}),Object(l.jsx)("th",{children:"Return Journey"}),Object(l.jsx)("th",{children:"Monthly Pass"}),Object(l.jsx)("th",{children:"Commercial Vehicle Registered within the district of plaza"})]})}),Object(l.jsx)("tbody",{children:null===(t=s.tollFees)||void 0===t?void 0:t.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.vehicleType}),Object(l.jsx)("td",{children:e.single}),Object(l.jsx)("td",{children:e.return}),Object(l.jsx)("td",{children:e.monthly}),Object(l.jsx)("td",{children:e.commercialVehiclesWithinDist})]})}))})]})]})};var b=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(r,{}),Object(l.jsx)(o,{})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(42);a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.72254931.chunk.js.map