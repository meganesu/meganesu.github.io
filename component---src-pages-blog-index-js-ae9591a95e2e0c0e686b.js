"use strict";(self.webpackChunkmeganesulli_com=self.webpackChunkmeganesulli_com||[]).push([[524],{4527:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var l=n(7294),o=n(5444),a=n(1264),r=function(e){var t,n=e.text,o=e.color,a=e.onAdd,r=e.onRemove,s=(0,l.useState)(!1),u=s[0],c=s[1];return"blue"===o?t="styles-module--blue--pmeiY":"orange"===o&&(t="styles-module--orange--XDXe2"),l.createElement("button",{type:"button",className:"styles-module--chip--u1Fvv "+t+" "+(u?"styles-module--selected--1cL7b":""),onClick:function(){u?r(n):a(n),c(!u)},"data-text":n,"aria-pressed":u.toString()},n)},s=function(e){var t=e.filters,n=e.color,o=e.onAdd,a=e.onRemove;return l.createElement("ul",{className:"styles-module--list--AAV1d"},t.map((function(e){return l.createElement("li",{className:"styles-module--list-item--2-ZjA"},l.createElement(r,{text:e,color:n,onAdd:o,onRemove:a}))})))},u=function(e){var t=e.data,n=e.location,r=t.allMdx.nodes,u=new Set;r.forEach((function(e){e.frontmatter.tags.forEach((function(e){u.add(e)}))}));var c=(0,l.useState)(new Set),i=c[0],m=c[1],d=(0,l.useState)(r),f=d[0],p=d[1],g=function(e){return 0===i.size||e.frontmatter.tags.some((function(e){return i.has(e)}))};return l.createElement(a.Z,{title:"Blog | Megan Sullivan",description:"A list of my latest blog posts",location:n},l.createElement("h1",null,"Blog"),l.createElement(s,{filters:Array.from(u).sort(),color:"orange",onAdd:function(e){var t=i.add(e);m(t),p(r.filter(g))},onRemove:function(e){var t=i;t.delete(e),m(t),p(r.filter(g))}}),l.createElement("p",{"aria-live":"polite","aria-atomic":"true"},f.length," ",1===f.length?"post":"posts"," found"),l.createElement("ol",{className:"index-module--post-list--237US"},f.map((function(e){return l.createElement("li",{className:"index-module--post--9U3gD"},l.createElement("h2",null,l.createElement(o.rU,{to:"/blog/"+e.slug},e.frontmatter.title)),l.createElement("p",null,e.frontmatter.date+" | "+e.timeToRead+"-minute read"),l.createElement("p",null,e.frontmatter.description||e.excerpt))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-ae9591a95e2e0c0e686b.js.map