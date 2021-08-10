(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[101],{1002:function(e,a,s){"use strict";var t=s(28),r=s(1),c=s(82),n=s.n(c),l=s(484),i=s(482),o=s(478),d=s(480),b=s(481),j=s(487),m=s(469),h=s(1078),p=s(1418),O=s(1082),x=s(1084),u=s(646),g=s(504),f=s.n(g),y=s(6);a.a=function(e){var a=Object(r.useState)(null),s=Object(t.a)(a,2),c=s[0],g=s[1];Object(r.useEffect)((function(){n.a.get("/card/card-analytics/avg-sessions").then((function(e){return g(e.data)}))}),[]);var N={chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",e.primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}};return null!==c?Object(y.jsx)(i.a,{children:Object(y.jsxs)(o.a,{children:[Object(y.jsxs)(d.a,{className:"pb-50",children:[Object(y.jsxs)(b.a,{sm:{size:6,order:1},xs:{order:2},className:"d-flex justify-content-between flex-column mt-lg-0 mt-2",children:[Object(y.jsxs)("div",{className:"session-info mb-1 mb-lg-0",children:[Object(y.jsx)("h2",{className:"font-weight-bold mb-25",children:Object(l.h)(c.sessions)}),Object(y.jsx)(j.a,{className:"font-weight-bold mb-2",children:"Avg Sessions"}),Object(y.jsxs)("h5",{className:"font-medium-2",children:[Object(y.jsx)("span",{className:"text-success mr-50",children:c.growth}),Object(y.jsx)("span",{className:"font-weight-normal",children:"vs last 7 days"})]})]}),Object(y.jsx)(m.a,{color:"primary",children:"View Details"})]}),Object(y.jsxs)(b.a,{sm:{size:6,order:2},xs:{order:1},className:"d-flex justify-content-between flex-column text-right",children:[Object(y.jsxs)(h.a,{className:"chart-dropdown",children:[Object(y.jsx)(p.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(y.jsx)(O.a,{right:!0,children:c.last_days.map((function(e){return Object(y.jsx)(x.a,{className:"w-100",children:e},e)}))})]}),Object(y.jsx)(f.a,{options:N,series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],type:"bar",height:200})]})]}),Object(y.jsx)("hr",{}),Object(y.jsxs)(d.a,{className:"pt-50",children:[Object(y.jsxs)(b.a,{className:"mb-2",md:"6",sm:"12",children:[Object(y.jsxs)("p",{className:"mb-50",children:["Goal: $",c.goal]}),Object(y.jsx)(u.a,{className:"avg-session-progress mt-25",value:"50"})]}),Object(y.jsxs)(b.a,{className:"mb-2",md:"6",sm:"12",children:[Object(y.jsxs)("p",{className:"mb-50",children:["Users: ",Object(l.h)(c.users)]}),Object(y.jsx)(u.a,{className:"avg-session-progress progress-bar-warning mt-25",value:"60"})]}),Object(y.jsxs)(b.a,{md:"6",sm:"12",children:[Object(y.jsxs)("p",{className:"mb-50",children:["Retention: ",c.retention,"%"]}),Object(y.jsx)(u.a,{className:"avg-session-progress progress-bar-danger mt-25",value:"70"})]}),Object(y.jsxs)(b.a,{md:"6",sm:"12",children:[Object(y.jsxs)("p",{className:"mb-50",children:["Duration: ",c.duration,"yr"]}),Object(y.jsx)(u.a,{className:"avg-session-progress progress-bar-success mt-25",value:"80"})]})]})]})}):null}},1004:function(e,a,s){"use strict";var t=s(504),r=s.n(t),c=s(482),n=s(478),l=s(480),i=s(481),o=s(479),d=s(487),b=s(6);a.a=function(e){var a={chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:["#28c76f66","#28c76f33",e.success],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:function(e){return"".concat(parseInt(e)," %")}},total:{show:!0,offsetY:15,label:"App",formatter:function(e){return"53%"}}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1065,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]};return Object(b.jsx)(c.a,{className:"earnings-card",children:Object(b.jsx)(n.a,{children:Object(b.jsxs)(l.a,{children:[Object(b.jsxs)(i.a,{xs:"6",children:[Object(b.jsx)(o.a,{className:"mb-1",children:"Earnings"}),Object(b.jsx)("div",{className:"font-small-2",children:"This Month"}),Object(b.jsx)("h5",{className:"mb-1",children:"$4055.56"}),Object(b.jsxs)(d.a,{className:"text-muted font-small-2",children:[Object(b.jsx)("span",{className:"font-weight-bolder",children:"68.2%"}),Object(b.jsx)("span",{children:" more earnings than last month."})]})]}),Object(b.jsx)(i.a,{xs:"6",children:Object(b.jsx)(r.a,{options:a,series:[53,16,31],type:"donut",height:120})})]})})})}},1007:function(e,a,s){"use strict";var t=s(28),r=s(1),c=s(82),n=s.n(c),l=s(504),i=s.n(l),o=s(1155),d=s(482),b=s(483),j=s(479),m=s(478),h=s(480),p=s(481),O=s(487),x=s(6);a.a=function(e){var a=Object(r.useState)(null),s=Object(t.a)(a,2),c=s[0],l=s[1];Object(r.useEffect)((function(){n.a.get("/card/card-analytics/goal-overview").then((function(e){return l(e.data)}))}),[]);var u={chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:["#51e5a8"],plotOptions:{radialBar:{offsetY:10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#ebe9f1",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:"#5e5873",fontFamily:"Montserrat",fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}};return null!==c?Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(b.a,{children:[Object(x.jsx)(j.a,{tag:"h4",children:"Goal Overview"}),Object(x.jsx)(o.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(x.jsx)(m.a,{className:"p-0",children:Object(x.jsx)(i.a,{options:u,series:[83],type:"radialBar",height:245})}),Object(x.jsxs)(h.a,{className:"border-top text-center mx-0",children:[Object(x.jsxs)(p.a,{xs:"6",className:"border-right py-1",children:[Object(x.jsx)(O.a,{className:"text-muted mb-0",children:"Completed"}),Object(x.jsx)("h3",{className:"font-weight-bolder mb-0",children:c.completed})]}),Object(x.jsxs)(p.a,{xs:"6",className:"py-1",children:[Object(x.jsx)(O.a,{className:"text-muted mb-0",children:"In Progress"}),Object(x.jsx)("h3",{className:"font-weight-bolder mb-0",children:c.inProgress})]})]})]}):null}},1008:function(e,a,s){"use strict";var t=s(28),r=s(1),c=s(82),n=s.n(c),l=s(482),i=s(480),o=s(481),d=s(479),b=s(489),j=s(1418),m=s(1082),h=s(1084),p=s(469),O=s(504),x=s.n(O),u=s(6);a.a=function(e){var a=Object(r.useState)(null),s=Object(t.a)(a,2),c=s[0],O=s[1];Object(r.useEffect)((function(){n.a.get("/card/card-analytics/revenue-report").then((function(e){return O(e.data)}))}),[]);var g={chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[e.primary,e.warning],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}}}},f={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[e.primary,"#dcdae3"],tooltip:{enabled:!1}};return null!==c?Object(u.jsx)(l.a,{className:"card-revenue-budget",children:Object(u.jsxs)(i.a,{className:"mx-0",children:[Object(u.jsxs)(o.a,{className:"revenue-report-wrapper",md:"8",xs:"12",children:[Object(u.jsxs)("div",{className:"d-sm-flex justify-content-between align-items-center mb-3",children:[Object(u.jsx)(d.a,{className:"mb-50 mb-sm-0",children:"Revenue Report"}),Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsxs)("div",{className:"d-flex align-items-center mr-2",children:[Object(u.jsx)("span",{className:"bullet bullet-primary mr-50 cursor-pointer"}),Object(u.jsx)("span",{children:"Earning"})]}),Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)("span",{className:"bullet bullet-warning mr-50 cursor-pointer"}),Object(u.jsx)("span",{children:"Expense"})]})]})]}),Object(u.jsx)(x.a,{id:"revenue-report-chart",type:"bar",height:"230",options:g,series:[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}]})]}),Object(u.jsxs)(o.a,{className:"budget-wrapper",md:"4",xs:"12",children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)(j.a,{className:"budget-dropdown",outline:!0,color:"primary",size:"sm",caret:!0,children:"2020"}),Object(u.jsx)(m.a,{children:c.years.map((function(e){return Object(u.jsx)(h.a,{className:"w-100",children:e},e)}))})]}),Object(u.jsxs)("h2",{className:"mb-25",children:["$",c.price]}),Object(u.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(u.jsx)("span",{className:"font-weight-bolder mr-25",children:"Budget:"}),Object(u.jsx)("span",{children:c.budget})]}),Object(u.jsx)(x.a,{id:"budget-chart",type:"line",height:"80",options:f,series:[{data:[61,48,69,52,60,40,79,60,59,43,62]},{data:[20,10,30,15,23,0,25,15,20,5,27]}]}),Object(u.jsx)(p.a,{color:"primary",children:"Increase Budget"})]})]})}):null}},2168:function(e,a,s){"use strict";s.r(a);var t=s(1),r=s(480),c=s(481),n=s(474),l=s(58),i=s(28),o=s(82),d=s.n(o),b=s(27),j=s.n(b),m=s(482),h=s(483),p=s(479),O=s(1078),x=s(1418),u=s(1082),g=s(1084),f=s(478),y=s(504),N=s.n(y),v=s(472),w=s(1100),k=s(1097),T=s(6),z=function(e){var a=Object(t.useState)(null),s=Object(i.a)(a,2),r=s[0],c=s[1];Object(t.useEffect)((function(){d.a.get("/card/card-analytics/sessions-device").then((function(e){return c(e.data)}))}),[]);var n={chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[e.primary,e.warning,e.danger]};return null!==r?Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{className:"align-items-end",children:[Object(T.jsx)(p.a,{tag:"h4",children:"Session By Device"}),Object(T.jsxs)(O.a,{className:"chart-dropdown",children:[Object(T.jsx)(x.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(T.jsx)(u.a,{right:!0,children:r.last_days.map((function(e){return Object(T.jsx)(g.a,{className:"w-100",children:e},e)}))})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(N.a,{className:"my-1",options:n,series:[58.6,34.9,6.5],type:"donut",height:300}),r.chart_info.map((function(e,a){var s=v[e.icon];return Object(T.jsxs)("div",{className:j()("d-flex justify-content-between",{"mb-1":a!==r.chart_info.length-1}),children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(s,{size:17,className:j()(Object(l.a)({},e.iconColor,e.iconColor))}),Object(T.jsx)("span",{className:"font-weight-bold ml-75 mr-25",children:e.name}),Object(T.jsxs)("span",{children:["- ",e.usage,"%"]})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("span",{children:[e.upDown,"%"]}),e.upDown>0?Object(T.jsx)(w.a,{size:14,className:"ml-25 text-success"}):Object(T.jsx)(k.a,{size:14,className:"ml-25 text-danger"})]})]},a)}))]})]}):null},C=s(1120),S=function(e){var a=Object(t.useState)(null),s=Object(i.a)(a,2),r=s[0],c=s[1];Object(t.useEffect)((function(){d.a.get("/card/card-analytics/product-orders").then((function(e){return c(e.data)}))}),[]);var n={labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter:function(){return 42459}}}}},colors:[e.primary,e.warning,e.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}};return null!==r?Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{children:[Object(T.jsx)(p.a,{tag:"h4",children:"Product Orders"}),Object(T.jsxs)(O.a,{className:"chart-dropdown",children:[Object(T.jsx)(x.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(T.jsx)(u.a,{right:!0,children:r.last_days.map((function(e){return Object(T.jsx)(g.a,{className:"w-100",children:e},e)}))})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(N.a,{options:n,series:[70,52,26],type:"radialBar",height:325}),Object(T.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(C.a,{size:15,className:"text-primary"}),Object(T.jsx)("span",{className:"font-weight-bold ml-75",children:"Finished"})]}),Object(T.jsx)("span",{children:r.chart_info.finished})]}),Object(T.jsxs)("div",{className:"d-flex justify-content-between mb-1",children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(C.a,{size:15,className:"text-warning"}),Object(T.jsx)("span",{className:"font-weight-bold ml-75",children:"Pending"})]}),Object(T.jsx)("span",{children:r.chart_info.pending})]}),Object(T.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(C.a,{size:15,className:"text-danger"}),Object(T.jsx)("span",{className:"font-weight-bold ml-75",children:"Rejected"})]}),Object(T.jsx)("span",{children:r.chart_info.rejected})]})]})]}):null},P=function(e){var a=Object(t.useState)(null),s=Object(i.a)(a,2),r=s[0],c=s[1];Object(t.useEffect)((function(){d.a.get("/card/card-analytics/customers").then((function(e){return c(e.data)}))}),[]);var n={chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[e.primary,e.warning,e.danger]};return null!==r?Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{className:"align-items-end",children:[Object(T.jsx)(p.a,{tag:"h4",children:"Customers"}),Object(T.jsxs)(O.a,{className:"chart-dropdown",children:[Object(T.jsx)(x.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(T.jsx)(u.a,{right:!0,children:r.last_days.map((function(e){return Object(T.jsx)(g.a,{className:"w-100",children:e},e)}))})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)(N.a,{options:n,series:[690,258,149],type:"pie",height:325}),Object(T.jsx)("div",{className:"pt-25",children:r.listData.map((function(e,a){var s=v[e.icon];return Object(T.jsxs)("div",{className:j()("d-flex justify-content-between",{"mb-1":a!==r.listData.length-1}),children:[Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(s,{size:15,className:j()(Object(l.a)({},e.iconColor,e.iconColor))}),Object(T.jsx)("span",{className:"font-weight-bold ml-75",children:e.text})]}),Object(T.jsx)("span",{children:e.result})]},a)}))})]})]}):null},M=s(1180),A=s(487),E=function(e){var a={chart:{height:300,type:"radar",dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1},offsetY:5},stroke:{width:0},dataLabels:{background:{foreColor:["#ebe9f1"]}},legend:{show:!1},colors:[e.primary,e.info],plotOptions:{radar:{polygons:{strokeColors:["#ebe9f1","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[e.primary,e.info],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},yaxis:{show:!1},grid:{show:!1,padding:{bottom:-27}}};return Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{className:"d-flex justify-content-between align-items-start pb-1",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(p.a,{className:"mb-25",tag:"h4",children:"Sales"}),Object(T.jsx)(A.a,{children:"Last 6 months"})]}),Object(T.jsxs)(O.a,{className:"chart-dropdown",children:[Object(T.jsx)(x.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:Object(T.jsx)(M.a,{size:18,className:"cursor-pointer"})}),Object(T.jsxs)(u.a,{right:!0,children:[Object(T.jsx)(g.a,{className:"w-100",children:"Last 28 Days"}),Object(T.jsx)(g.a,{className:"w-100",children:"Last Month"}),Object(T.jsx)(g.a,{className:"w-100",children:"Last Year"})]})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsx)("div",{className:"d-inline-block mr-1",children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(C.a,{size:13,className:"text-primary mr-50"}),Object(T.jsx)("h6",{className:"mb-0",children:"Sales"})]})}),Object(T.jsx)("div",{className:"d-inline-block",children:Object(T.jsxs)("div",{className:"d-flex align-items-center",children:[Object(T.jsx)(C.a,{size:13,className:"text-info mr-50"}),Object(T.jsx)("h6",{className:"mb-0",children:"Visits"})]})}),Object(T.jsx)(N.a,{options:a,series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}],type:"radar",height:300})]})]})},L=function(e){var a=Object(t.useState)(null),s=Object(i.a)(a,2),n=s[0],l=s[1];Object(t.useEffect)((function(){d.a.get("/card/card-analytics/support-tracker").then((function(e){return l(e.data)}))}),[]);var o={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]};return null!==n?Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{className:"pb-0",children:[Object(T.jsx)(p.a,{tag:"h4",children:n.title}),Object(T.jsxs)(O.a,{className:"chart-dropdown",children:[Object(T.jsx)(x.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(T.jsx)(u.a,{right:!0,children:n.last_days.map((function(e){return Object(T.jsx)(g.a,{className:"w-100",children:e},e)}))})]})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsxs)(r.a,{children:[Object(T.jsxs)(c.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(T.jsx)("h1",{className:"font-large-2 font-weight-bolder mt-2 mb-0",children:n.totalTicket}),Object(T.jsx)(A.a,{children:"Tickets"})]}),Object(T.jsx)(c.a,{sm:"10",className:"d-flex justify-content-center",children:Object(T.jsx)(N.a,{options:o,series:[83],type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(T.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)(A.a,{className:"mb-50",children:"New Tickets"}),Object(T.jsx)("span",{className:"font-large-1 font-weight-bold",children:n.newTicket})]}),Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)(A.a,{className:"mb-50",children:"Open Tickets"}),Object(T.jsx)("span",{className:"font-large-1 font-weight-bold",children:n.openTicket})]}),Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)(A.a,{className:"mb-50",children:"Response Time"}),Object(T.jsxs)("span",{className:"font-large-1 font-weight-bold",children:[n.responseTime,"d"]})]})]})]})]}):null},D=s(1008),F=s(1068),B=function(e){var a=Object(t.useState)(null),s=Object(i.a)(a,2),r=s[0],c=s[1];Object(t.useEffect)((function(){d.a.get("/card/card-analytics/revenue").then((function(e){return c(e.data)}))}),[]);var n={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter:function(e){return e>999?"".concat((e/1e3).toFixed(0),"k"):e}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}};return null!==r?Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{children:[Object(T.jsx)(p.a,{tag:"h4",children:"Revenue"}),Object(T.jsx)(F.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(T.jsxs)(f.a,{children:[Object(T.jsxs)("div",{className:"d-flex justify-content-start mb-3",children:[Object(T.jsxs)("div",{className:"mr-2",children:[Object(T.jsx)(A.a,{className:"mb-50",children:"This Month"}),Object(T.jsxs)("h3",{className:"font-weight-bolder",children:[Object(T.jsx)("sup",{className:"font-medium-1 font-weight-bold mr-25",children:"$"}),Object(T.jsx)("span",{className:"text-primary",children:"86,589"})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)(A.a,{className:"mb-50",children:"Last Month"}),Object(T.jsxs)("h3",{className:"font-weight-bolder",children:[Object(T.jsx)("sup",{className:"font-medium-1 font-weight-bold mr-25",children:"$"}),Object(T.jsx)("span",{children:"73,683"})]})]})]}),Object(T.jsx)(N.a,{options:n,series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],type:"line",height:240})]})]}):null},R=s(1007),Y=s(1002),J=function(e){var a={chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[e.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem",fontFamily:"Montserrat"},formatter:function(e){return e>999?"".concat((e/1e3).toFixed(1),"k"):e}}},tooltip:{x:{show:!1}}};return Object(T.jsxs)(m.a,{children:[Object(T.jsxs)(h.a,{className:"align-items-start",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(p.a,{className:"mb-25",tag:"h4",children:"Sales"}),Object(T.jsx)(A.a,{className:"mb-0",children:"2020 Total Sales: 12.84k"})]}),Object(T.jsx)(F.a,{size:18,className:"text-muted cursor-pointer"})]}),Object(T.jsx)(f.a,{className:"pb-0",children:Object(T.jsx)(N.a,{options:a,series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],type:"line",height:240})})]})},_=s(1004),I=s(126);s(660),a.default=function(){var e=Object(t.useContext)(I.a);return Object(T.jsxs)(t.Fragment,{children:[Object(T.jsx)(n.a,{breadCrumbTitle:"Analytics Cards",breadCrumbParent:"Card",breadCrumbActive:"Analytics Cards"}),Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{lg:"6",sm:"12",children:Object(T.jsx)(L,{primary:e.colors.primary.main,danger:e.colors.danger.main})}),Object(T.jsx)(c.a,{lg:"6",sm:"12",children:Object(T.jsx)(Y.a,{primary:e.colors.primary.main})})]}),Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{lg:"8",sm:"12",children:Object(T.jsx)(D.a,{primary:e.colors.primary.main,warning:e.colors.warning.main})}),Object(T.jsx)(c.a,{lg:"4",sm:"12",children:Object(T.jsx)(R.a,{success:e.colors.success.main})})]}),Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{lg:"8",sm:"12",children:Object(T.jsx)(B,{primary:e.colors.primary.main})}),Object(T.jsx)(c.a,{lg:"4",sm:"12",children:Object(T.jsx)(E,{primary:e.colors.primary.main,info:e.colors.info.main})})]}),Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{lg:"8",sm:"12",children:Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{sm:"12",children:Object(T.jsx)(J,{primary:e.colors.primary.main})}),Object(T.jsx)(c.a,{md:"6",sm:"12",children:Object(T.jsx)(z,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})}),Object(T.jsx)(c.a,{md:"6",sm:"12",children:Object(T.jsx)(P,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})})]})}),Object(T.jsx)(c.a,{lg:"4",sm:"12",children:Object(T.jsxs)(r.a,{className:"match-height",children:[Object(T.jsx)(c.a,{sm:"12",children:Object(T.jsx)(S,{primary:e.colors.primary.main,warning:e.colors.warning.main,danger:e.colors.danger.main})}),Object(T.jsx)(c.a,{sm:"12",children:Object(T.jsx)(_.a,{success:e.colors.success.main})})]})})]})]})}},474:function(e,a,s){"use strict";var t=s(473),r=s(1153),c=s(1112),n=s(1175),l=s(1170),i=s(1109),o=s(490),d=s(491),b=s(489),j=s(1418),m=s(1082),h=s(1084),p=s(6);a.a=function(e){var a=e.breadCrumbTitle,s=e.breadCrumbParent,O=e.breadCrumbParent2,x=e.breadCrumbParent3,u=e.breadCrumbActive;return Object(p.jsxs)("div",{className:"content-header row",children:[Object(p.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(p.jsx)("div",{className:"row breadcrumbs-top",children:Object(p.jsxs)("div",{className:"col-12",children:[a?Object(p.jsx)("h2",{className:"content-header-title float-left mb-0",children:a}):"",Object(p.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(p.jsxs)(o.a,{children:[Object(p.jsx)(d.a,{tag:"li",children:Object(p.jsx)(t.b,{to:"/",children:"Home"})}),Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:s}),O?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:O}):"",x?Object(p.jsx)(d.a,{tag:"li",className:"text-primary",children:x}):"",Object(p.jsx)(d.a,{tag:"li",active:!0,children:u})]})})]})})}),Object(p.jsx)("div",{className:"content-header-right text-md-right col-md-3 col-12 d-md-block d-none",children:Object(p.jsx)("div",{className:"form-group breadcrum-right dropdown",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(j.a,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(p.jsx)(r.a,{size:14})}),Object(p.jsxs)(m.a,{tag:"ul",right:!0,children:[Object(p.jsxs)(h.a,{tag:t.b,to:"/apps/chat",children:[Object(p.jsx)(c.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(p.jsxs)(h.a,{tag:t.b,to:"/apps/chat",children:[Object(p.jsx)(n.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(p.jsxs)(h.a,{tag:t.b,to:"/apps/email",children:[Object(p.jsx)(l.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(p.jsxs)(h.a,{tag:t.b,to:"/apps/calendar",children:[Object(p.jsx)(i.a,{className:"mr-1",size:14}),Object(p.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},475:function(e,a,s){"use strict";var t=s(14),r=s(1),c=s.n(r),n=s(2),l=s.n(n),i=s(488),o={children:l.a.node},d=function(e){return c.a.createElement(i.a,Object(t.a)({group:!0},e))};d.propTypes=o,a.a=d},487:function(e,a,s){"use strict";var t=s(14),r=s(15),c=s(1),n=s.n(c),l=s(2),i=s.n(l),o=s(27),d=s.n(o),b=s(80),j={tag:b.tagPropType,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,s=e.cssModule,c=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),i=Object(b.mapToCssModules)(d()(a,"card-text"),s);return n.a.createElement(c,Object(t.a)({},l,{className:i}))};m.propTypes=j,m.defaultProps={tag:"p"},a.a=m},489:function(e,a,s){"use strict";s.d(a,"a",(function(){return p}));var t=s(476),r=s(14),c=s(121),n=s(57),l=s(1),i=s.n(l),o=s(2),d=s.n(o),b=s(475),j=s(80);function m(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}var h=["defaultOpen"],p=function(e){function a(a){var s;return(s=e.call(this,a)||this).state={isOpen:a.defaultOpen||!1},s.toggle=s.toggle.bind(Object(c.a)(s)),s}Object(n.a)(a,e);var s=a.prototype;return s.toggle=function(){this.setState({isOpen:!this.state.isOpen})},s.render=function(){return i.a.createElement(b.a,Object(r.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.omit)(this.props,h)))},a}(l.Component);p.propTypes=function(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?m(Object(s),!0).forEach((function(a){Object(t.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}({defaultOpen:d.a.bool},b.a.propTypes)},490:function(e,a,s){"use strict";var t=s(14),r=s(15),c=s(1),n=s.n(c),l=s(2),i=s.n(l),o=s(27),d=s.n(o),b=s(80),j={tag:b.tagPropType,listTag:b.tagPropType,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},m=function(e){var a=e.className,s=e.listClassName,c=e.cssModule,l=e.children,i=e.tag,o=e.listTag,j=e["aria-label"],m=Object(r.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(b.mapToCssModules)(d()(a),c),p=Object(b.mapToCssModules)(d()("breadcrumb",s),c);return n.a.createElement(i,Object(t.a)({},m,{className:h,"aria-label":j}),n.a.createElement(o,{className:p},l))};m.propTypes=j,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},491:function(e,a,s){"use strict";var t=s(14),r=s(15),c=s(1),n=s.n(c),l=s(2),i=s.n(l),o=s(27),d=s.n(o),b=s(80),j={tag:b.tagPropType,active:i.a.bool,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,s=e.cssModule,c=e.active,l=e.tag,i=Object(r.a)(e,["className","cssModule","active","tag"]),o=Object(b.mapToCssModules)(d()(a,!!c&&"active","breadcrumb-item"),s);return n.a.createElement(l,Object(t.a)({},i,{className:o,"aria-current":c?"page":void 0}))};m.propTypes=j,m.defaultProps={tag:"li"},a.a=m},646:function(e,a,s){"use strict";var t=s(14),r=s(476),c=s(15),n=s(1),l=s.n(n),i=s(2),o=s.n(i),d=s(27),b=s.n(d),j=s(80);function m(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function h(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?m(Object(s),!0).forEach((function(a){Object(r.a)(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):m(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}var p={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:j.tagPropType,value:o.a.oneOfType([o.a.string,o.a.number]),min:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object,style:o.a.object,barAriaValueText:o.a.string,barAriaLabelledBy:o.a.string},O=function(e){var a=e.children,s=e.className,r=e.barClassName,n=e.cssModule,i=e.value,o=e.min,d=e.max,m=e.animated,p=e.striped,O=e.color,x=e.bar,u=e.multi,g=e.tag,f=e.style,y=e.barAriaValueText,N=e.barAriaLabelledBy,v=Object(c.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),w=Object(j.toNumber)(i)/Object(j.toNumber)(d)*100,k=Object(j.mapToCssModules)(b()(s,"progress"),n),T=Object(j.mapToCssModules)(b()("progress-bar",x&&s||r,m?"progress-bar-animated":null,O?"bg-"+O:null,p||m?"progress-bar-striped":null),n),z=u?a:l.a.createElement("div",Object(t.a)({},v,{className:T,style:h(h({},f),{},{width:w+"%"}),role:"progressbar","aria-valuenow":i,"aria-valuemin":o,"aria-valuemax":d,"aria-valuetext":y,"aria-labelledby":N,children:a}));return x?z:l.a.createElement(g,Object(t.a)({},v,{className:k,children:z}))};O.propTypes=p,O.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=O},660:function(e,a,s){}}]);
//# sourceMappingURL=101.c20369d4.chunk.js.map