(self.webpackChunkblog_with_gatsby_web=self.webpackChunkblog_with_gatsby_web||[]).push([[989],{8367:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Y}});var r=a(5235),n=a(7464),o=a(1554);function l(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}var s=864e5;function i(e,t){(0,o.Z)(2,arguments);var a=l(e),r=l(t),i=a.getTime()-(0,n.Z)(a),u=r.getTime()-(0,n.Z)(r);return Math.round((i-u)/s)}function u(e,t){var a=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return a<0?-1:a>0?1:a}function m(e,t){(0,o.Z)(2,arguments);var a=(0,r.Z)(e),n=(0,r.Z)(t),l=a.getTime()-n.getTime();return l<0?-1:l>0?1:l}function c(e,t){(0,o.Z)(2,arguments);var a=(0,r.Z)(e),n=(0,r.Z)(t),l=a.getFullYear()-n.getFullYear(),s=a.getMonth()-n.getMonth();return 12*l+s}function f(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(23,59,59,999),t}function g(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function d(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return f(t).getTime()===g(t).getTime()}function h(e,t){(0,o.Z)(2,arguments);var a,n=(0,r.Z)(e),l=(0,r.Z)(t),s=m(n,l),i=Math.abs(c(n,l));if(i<1)a=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-s*i);var u=m(n,l)===-s;d((0,r.Z)(e))&&1===i&&1===m(e,l)&&(u=!1),a=s*(i-u)}return 0===a?0:a}function v(e,t){(0,o.Z)(2,arguments);var a=(0,r.Z)(e),n=(0,r.Z)(t);return a.getTime()-n.getTime()}function Z(e,t){(0,o.Z)(2,arguments);var a=v(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var p=a(8563);function E(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var M=1440,D=43200;var b=a(7063);var w=a(7294),y=a(5604),T=a(9773);var N=function(e){var t=e.items,a=e.title;return w.createElement("div",{className:"author-list-module--root--3tnc7"},w.createElement("h2",{className:"author-list-module--headline--3BVPD typography-module--base--2DtHq"},a),w.createElement("ul",{className:"author-list-module--list--1awEt"},t.map((function(e){var t=e.author,a=e._key,r=t&&t.name;return w.createElement("li",{key:a,className:"author-list-module--listItem--13pbd"},w.createElement("div",null,w.createElement("div",{className:"author-list-module--avatar--3sDy5"},t&&t.image&&t.image.asset&&w.createElement("img",{src:(0,T.j)((0,y.jk)(t.image)).width(100).height(100).fit("crop").url(),alt:""}))),w.createElement("div",null,w.createElement("div",null,r||w.createElement("em",null,"Missing name"))))}))))},H=a(5692),k=a(3996);var X=function(e){var t=e._rawBody,a=e.authors,l=e.categories,s=e.title,c=e.mainImage,f=e.publishedAt;return w.createElement("article",{className:"blog-post-module--root--3Bd5E"},c&&c.asset&&w.createElement("div",{className:"blog-post-module--mainImage--bB9Ee"},w.createElement("img",{src:(0,T.j)((0,y.jk)(c)).width(1200).height(Math.floor(675)).fit("crop").auto("format").url(),alt:c.alt})),w.createElement(H.Z,null,w.createElement("div",{className:"blog-post-module--grid--3wRA5"},w.createElement("div",{className:"blog-post-module--mainContent--3bHQt"},w.createElement("h1",{className:"blog-post-module--title--1uZ-o typography-module--responsiveTitle1--2aak3"},s),t&&w.createElement(k.Z,{blocks:t})),w.createElement("aside",{className:"blog-post-module--metaContent--IH9IS"},f&&w.createElement("div",{className:"blog-post-module--publishedAt--2Vzf7 typography-module--small--2jpCI"},function(e,t){(0,o.Z)(2,arguments);var a=(0,r.Z)(e),n=(0,r.Z)(t),l=u(a,n),s=Math.abs(i(a,n));a.setDate(a.getDate()-l*s);var m=u(a,n)===-l,c=l*(s-m);return 0===c?0:c}(new Date(f),new Date)>3?function(e,t,a){(0,o.Z)(2,arguments);var l=a||{},s=l.locale||p.Z;if(!s.formatDistance)throw new RangeError("locale must contain formatDistance property");var i=m(e,t);if(isNaN(i))throw new RangeError("Invalid time value");var u,c,f=E(l);f.addSuffix=Boolean(l.addSuffix),f.comparison=i,i>0?(u=(0,r.Z)(t),c=(0,r.Z)(e)):(u=(0,r.Z)(e),c=(0,r.Z)(t));var g,d=Z(c,u),v=((0,n.Z)(c)-(0,n.Z)(u))/1e3,b=Math.round((d-v)/60);if(b<2)return l.includeSeconds?d<5?s.formatDistance("lessThanXSeconds",5,f):d<10?s.formatDistance("lessThanXSeconds",10,f):d<20?s.formatDistance("lessThanXSeconds",20,f):d<40?s.formatDistance("halfAMinute",null,f):d<60?s.formatDistance("lessThanXMinutes",1,f):s.formatDistance("xMinutes",1,f):0===b?s.formatDistance("lessThanXMinutes",1,f):s.formatDistance("xMinutes",b,f);if(b<45)return s.formatDistance("xMinutes",b,f);if(b<90)return s.formatDistance("aboutXHours",1,f);if(b<M){var w=Math.round(b/60);return s.formatDistance("aboutXHours",w,f)}if(b<2520)return s.formatDistance("xDays",1,f);if(b<D){var y=Math.round(b/M);return s.formatDistance("xDays",y,f)}if(b<86400)return g=Math.round(b/D),s.formatDistance("aboutXMonths",g,f);if((g=h(c,u))<12){var T=Math.round(b/D);return s.formatDistance("xMonths",T,f)}var N=g%12,H=Math.floor(g/12);return N<3?s.formatDistance("aboutXYears",H,f):N<9?s.formatDistance("overXYears",H,f):s.formatDistance("almostXYears",H+1,f)}(new Date(f),new Date):(0,b.Z)(new Date(f),"MMMM Mo, yyyy")),a&&w.createElement(N,{items:a,title:"Authors"}),l&&w.createElement("div",{className:"blog-post-module--categories--3zhTU"},w.createElement("h3",{className:"blog-post-module--categoriesHeadline---x0dT typography-module--base--2DtHq"},"Categories"),w.createElement("ul",null,l.map((function(e){return w.createElement("li",{key:e._id},e.title)}))))))))},x=a(9673),_=a(8239),S=a(6179),Y=function(e){var t=e.data,a=e.errors,r=t&&t.post;return w.createElement(_.Z,null,a&&w.createElement(S.Z,{title:"GraphQL Error"}),r&&w.createElement(S.Z,{title:r.title||"Untitled",description:(0,y.Kv)(r._rawExcerpt),image:r.mainImage}),a&&w.createElement(H.Z,null,w.createElement(x.Z,{errors:a})),r&&w.createElement(X,r))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-28b722623a6d9d703523.js.map