(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{70:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return h}));var n=c(58),s=c(59),i=c(0),r=c(60),a=c.n(r),o=c(1);function h(e){var t=e.movieId,c=Object(i.useState)([]),r=Object(n.a)(c,2),h=r[0],u=r[1];return Object(i.useEffect)((function(){Object(s.c)(t).then((function(e){u(e.results),console.log(u)}))}),[t]),Object(o.jsx)(o.Fragment,{children:h.length>0?Object(o.jsx)("ul",{children:h.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{className:a.a.authorReviews,children:e.author}),Object(o.jsxs)("p",{children:["Character: ",e.content]})]},e.id)}))}):Object(o.jsx)("p",{className:a.a.text,children:"We don't have any reviews for this movie "})})}}}]);
//# sourceMappingURL=reviews-view.f779257b.chunk.js.map