(this["webpackJsonpeager-scrummer"]=this["webpackJsonpeager-scrummer"]||[]).push([[0],{65:function(e,a,t){e.exports=t(77)},70:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),i=(t(70),t(31)),o=t(12),s=t(23),m=t(122),u=t(106),d=t(79),E=t(123),p=t(32),g=t(108),f=t(109),y=t(110),v=t(111),b=t(121),h=t(112),D=t(113),O=t(114),j=t(115),M=t(116),S=t(117),Y=t(118),I=t(119),C=t(54),k=t.n(C),w=t(55),x=t.n(w),N=t(53),B=t.n(N),P=t(52),J=t.n(P),L=t(56),A=t.n(L),F=t(57),T=t.n(F),z=t(11),W=t.n(z),V=Object(m.a)((function(e){return{mainContainer:{width:"100%",height:"95vh",margin:"0.5rem auto"},mainPaper:{width:"90%",height:"90%",margin:"0.5rem auto",padding:"1rem"},mainCard:{width:"90%",height:"90%",margin:"1rem auto"},gridContainer:{marginTop:"15px"},eveningContainer:{backgroundColor:"silver"},dayForeward:{color:e.palette.primary.dark},dayBack:{color:e.palette.secondary.dark}}})),X=function(){var e=V(),a=Object(n.useState)({sprintNumber:0,sprintStartDate:W()(),sprintEndDate:W()(),sprintLength:0,sprintLengthBusiness:0,sprintDay:0,remainingDays:0,hoursPerDay:6,capacity:60,toDo:{morning:0,evening:0},actual:{morning:0,evening:0},vacationDates:[""],stories:[]}),t=Object(s.a)(a,2),l=t[0],c=t[1],m=Object(n.useState)(""),C=Object(s.a)(m,2),w=C[0],N=C[1],P=Object(n.useState)(W()()),L=Object(s.a)(P,2),F=L[0],z=L[1],X=Object(n.useState)({name:"",points:1}),H=Object(s.a)(X,2),R=H[0],U=H[1],$=Object(n.useState)(!1),q=Object(s.a)($,2),G=q[0],K=q[1],Q=Object(n.useState)(l.capacity),Z=Object(s.a)(Q,2),_=Z[0],ee=Z[1],ae={startDate:W()("04/01/2020","MM/DD/YYYY"),endDate:W()("04/14/2020","MM/DD/YYYY"),sprintNumber:7};Object(n.useEffect)((function(){return te()}),[F]);var te=function(){var e=localStorage.getItem("vacations"),a=localStorage.getItem("capacity");a||(a="60"),ee(parseInt(a));var t=[];e&&(t=JSON.parse(e));var n=localStorage.getItem("stories"),r=[];n&&(r=JSON.parse(n));var i=ae.endDate.diff(ae.startDate,"days")+1,s=F.diff(ae.endDate,"days"),m=Math.floor(s/i),u=ae.sprintNumber+m;m*i<s&&(u++,m++);for(var d=ae.startDate.add(i*m,"days"),E=W()(d).add(i-1,"days"),p=0,g=0,f=0,y=function(e){if(t.filter((function(a){return W()(a).isSame(e)})).length||6===e.isoWeekday()||7===e.isoWeekday())return"continue";g++,e.isSameOrBefore(F)?p++:f++},v=W()(d);v.isSameOrBefore(E);v=W()(v).add(1,"days"))y(v);var b=parseInt(a)/g,h=Math.round(f*b),D=Math.round(h+b),O=Math.round(p*b),j=Math.round(O-b);c(Object(o.a)(Object(o.a)({},l),{},{sprintNumber:u,sprintStartDate:d,sprintEndDate:E,sprintLength:i,hoursPerDay:b,capacity:parseInt(a),sprintLengthBusiness:g,sprintDay:p,remainingDays:f,vacationDates:t,stories:r,actual:{morning:j,evening:O},toDo:{morning:D,evening:h}}))};return r.a.createElement(u.a,{className:e.mainContainer},r.a.createElement(d.a,{elevation:5,className:e.mainPaper},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(E.a,{color:"secondary",onClick:function(){z((function(e){return W()(e).add(-1,"days")}))},startIcon:r.a.createElement(J.a,null)},"-1"),W()().isSame(F,"day")&&r.a.createElement(p.a,{variant:"h5"},"Today is: ".concat(F.format("dddd MMMM Do YYYY"))),W()().isBefore(F,"day")&&r.a.createElement(p.a,{variant:"h5",className:e.dayForeward},"If today is: ".concat(F.format("dddd MMMM Do YYYY"))),W()().isAfter(F,"day")&&r.a.createElement(p.a,{variant:"h5",className:e.dayBack},"If today is: ".concat(F.format("dddd MMMM Do YYYY"))),r.a.createElement(E.a,{color:"primary",onClick:function(){z((function(e){return W()(e).add(1,"days")}))},endIcon:r.a.createElement(B.a,null)},"+1")),r.a.createElement(g.a,{container:!0,spacing:3,className:e.gridContainer},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(f.a,{raised:!0},r.a.createElement(y.a,{title:"Sprint ".concat(l.sprintNumber,", ").concat(l.sprintStartDate.format("dddd MMMM Do YYYY"),"-").concat(l.sprintEndDate.format("dddd MMMM Do YYYY")," [").concat(l.sprintLengthBusiness," Business days]"),subheader:"Day: ".concat(l.sprintDay,", Remaining: ").concat(l.remainingDays)}),r.a.createElement(v.a,null,r.a.createElement(g.a,{container:!0,xs:12,justify:"space-between"},r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement("div",null,"Morning"),r.a.createElement(k.a,null),r.a.createElement("div",null,"To do ".concat(l.toDo.morning," hrs")),r.a.createElement("div",null,"Actual ".concat(l.actual.morning," hrs"))),r.a.createElement(g.a,{item:!0,xs:2},r.a.createElement("div",{className:e.eveningContainer},"Evening"),r.a.createElement(x.a,null),r.a.createElement("div",null,"To do ".concat(l.toDo.evening," hrs")),r.a.createElement("div",null,"Actual ".concat(l.actual.evening," hrs")))),r.a.createElement(b.a,{label:"Capacity",disabled:!G,style:{width:"150px"},variant:"standard",autoFocus:!0,size:"small",type:"number",onChange:function(e){e.target.value=Math.max(0,parseInt(e.target.value)).toString().slice(0,2),ee(e.target.value)},value:_,InputProps:{disableUnderline:!0,endAdornment:r.a.createElement(h.a,{position:"end"},!G&&r.a.createElement(E.a,{size:"small",onClick:function(){K(!0)}},r.a.createElement(A.a,null)),G&&r.a.createElement(E.a,{size:"small",onClick:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{capacity:_})})),K(!1),localStorage.setItem("capacity",_.toString()),te()}},r.a.createElement(T.a,null)))}}))))),r.a.createElement(g.a,{container:!0,justify:"space-between",style:{marginTop:"32px"}},r.a.createElement(g.a,{xs:3},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(D.a,null,r.a.createElement(O.a,{size:"small"},r.a.createElement(j.a,null,r.a.createElement(M.a,null,r.a.createElement(S.a,null,"Points"),r.a.createElement(S.a,null,"Hours"),r.a.createElement(S.a,null,"~Days"))),r.a.createElement(Y.a,null,r.a.createElement(M.a,null,r.a.createElement(S.a,null,"1"),r.a.createElement(S.a,null,"0-8"),r.a.createElement(S.a,null,"1")),r.a.createElement(M.a,null,r.a.createElement(S.a,null,"2"),r.a.createElement(S.a,null,"8-20"),r.a.createElement(S.a,null,"3")),r.a.createElement(M.a,null,r.a.createElement(S.a,null,"3"),r.a.createElement(S.a,null,"18-35"),r.a.createElement(S.a,null,"6")),r.a.createElement(M.a,null,r.a.createElement(S.a,null,"5"),r.a.createElement(S.a,null,"30-55"),r.a.createElement(S.a,null,"9")),r.a.createElement(M.a,null,r.a.createElement(S.a,null,"8"),r.a.createElement(S.a,null,"50-85"),r.a.createElement(S.a,null,"14(1.5S)")),r.a.createElement(M.a,null,r.a.createElement(S.a,null,"13"),r.a.createElement(S.a,null,"> 85"),r.a.createElement(S.a,null,">1.5S")))))))),r.a.createElement(g.a,{item:!0,xs:3},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(g.a,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement(b.a,{label:"Vacations",type:"date",value:w,onChange:function(e){return N(e.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement(E.a,{color:"secondary",onClick:function(){var e=Object(i.a)(l.vacationDates);w&&(e.push(w),localStorage.setItem("vacations",JSON.stringify(e)),c(Object(o.a)(Object(o.a)({},l),{},{vacationDates:e})),te())}},"Add"))),r.a.createElement(g.a,null,l.vacationDates.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",null,W()(e).format("ddd DD MMM YYYY")),r.a.createElement(E.a,{onClick:function(){return function(e){var a=Object(i.a)(l.vacationDates);a=a.filter((function(a){return!W()(a).isSame(W()(e))})),localStorage.setItem("vacations",JSON.stringify(a)),c(Object(o.a)(Object(o.a)({},l),{},{vacationDates:a})),te()}(e)}},"X")),r.a.createElement(I.a,null))})))))),r.a.createElement(g.a,{xs:5},r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(b.a,{style:{width:"90%"},label:"Story",type:"text",value:R.name,onChange:function(e){return U(Object(o.a)(Object(o.a)({},R),{},{name:e.target.value}))},InputLabelProps:{shrink:!0}}),r.a.createElement(b.a,{label:"Points",type:"number",value:R.points,onChange:function(e){return U(Object(o.a)(Object(o.a)({},R),{},{points:parseInt(e.target.value)}))},defaultValue:1,InputLabelProps:{shrink:!0}}),r.a.createElement(E.a,{color:"secondary",onClick:function(){var e=Object(i.a)(l.stories);R&&(e.push(R),localStorage.setItem("stories",JSON.stringify(e)),c(Object(o.a)(Object(o.a)({},l),{},{stories:e})),U({name:"",points:1}))}},"Add")),r.a.createElement(g.a,null,l.stories.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},r.a.createElement("div",null,"".concat(e.points,"   ").concat(e.name)),r.a.createElement(E.a,{onClick:function(){return function(e){var a=Object(i.a)(l.stories);a=a.filter((function(a){return a.name!==e})),localStorage.setItem("stories",JSON.stringify(a)),c(Object(o.a)(Object(o.a)({},l),{},{stories:a}))}(e.name)}},"X")),r.a.createElement(I.a,null))})))))))))},H=(t(76),t(58)),R=t(120);var U=function(){var e=Object(H.a)();return r.a.createElement("div",{className:"App"},r.a.createElement(R.a,{theme:e},r.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.a8965666.chunk.js.map