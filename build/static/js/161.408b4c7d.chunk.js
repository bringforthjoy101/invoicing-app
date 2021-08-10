(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[161],{1002:function(e,t,s){"use strict";var a=s(28),r=s(1),i=s(82),n=s.n(i),c=s(484),l=s(482),o=s(478),d=s(480),j=s(481),b=s(487),u=s(469),h=s(1078),m=s(1418),v=s(1082),f=s(1084),x=s(646),O=s(504),p=s.n(O),g=s(6);t.a=function(e){var t=Object(r.useState)(null),s=Object(a.a)(t,2),i=s[0],O=s[1];Object(r.useEffect)((function(){n.a.get("/card/card-analytics/avg-sessions").then((function(e){return O(e.data)}))}),[]);var A={chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",e.primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}};return null!==i?Object(g.jsx)(l.a,{children:Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(d.a,{className:"pb-50",children:[Object(g.jsxs)(j.a,{sm:{size:6,order:1},xs:{order:2},className:"d-flex justify-content-between flex-column mt-lg-0 mt-2",children:[Object(g.jsxs)("div",{className:"session-info mb-1 mb-lg-0",children:[Object(g.jsx)("h2",{className:"font-weight-bold mb-25",children:Object(c.h)(i.sessions)}),Object(g.jsx)(b.a,{className:"font-weight-bold mb-2",children:"Avg Sessions"}),Object(g.jsxs)("h5",{className:"font-medium-2",children:[Object(g.jsx)("span",{className:"text-success mr-50",children:i.growth}),Object(g.jsx)("span",{className:"font-weight-normal",children:"vs last 7 days"})]})]}),Object(g.jsx)(u.a,{color:"primary",children:"View Details"})]}),Object(g.jsxs)(j.a,{sm:{size:6,order:2},xs:{order:1},className:"d-flex justify-content-between flex-column text-right",children:[Object(g.jsxs)(h.a,{className:"chart-dropdown",children:[Object(g.jsx)(m.a,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),Object(g.jsx)(v.a,{right:!0,children:i.last_days.map((function(e){return Object(g.jsx)(f.a,{className:"w-100",children:e},e)}))})]}),Object(g.jsx)(p.a,{options:A,series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],type:"bar",height:200})]})]}),Object(g.jsx)("hr",{}),Object(g.jsxs)(d.a,{className:"pt-50",children:[Object(g.jsxs)(j.a,{className:"mb-2",md:"6",sm:"12",children:[Object(g.jsxs)("p",{className:"mb-50",children:["Goal: $",i.goal]}),Object(g.jsx)(x.a,{className:"avg-session-progress mt-25",value:"50"})]}),Object(g.jsxs)(j.a,{className:"mb-2",md:"6",sm:"12",children:[Object(g.jsxs)("p",{className:"mb-50",children:["Users: ",Object(c.h)(i.users)]}),Object(g.jsx)(x.a,{className:"avg-session-progress progress-bar-warning mt-25",value:"60"})]}),Object(g.jsxs)(j.a,{md:"6",sm:"12",children:[Object(g.jsxs)("p",{className:"mb-50",children:["Retention: ",i.retention,"%"]}),Object(g.jsx)(x.a,{className:"avg-session-progress progress-bar-danger mt-25",value:"70"})]}),Object(g.jsxs)(j.a,{md:"6",sm:"12",children:[Object(g.jsxs)("p",{className:"mb-50",children:["Duration: ",i.duration,"yr"]}),Object(g.jsx)(x.a,{className:"avg-session-progress progress-bar-success mt-25",value:"80"})]})]})]})}):null}},1003:function(e,t,s){"use strict";var a=s(28),r=s(1),i=s(82),n=s.n(i),c=s(1223),l=s(664),o=s(6);t.a=function(e){var t,s=e.kFormatter,i=e.dashData,d=Object(r.useState)(null),j=Object(a.a)(d,2),b=j[0],u=j[1];return Object(r.useEffect)((function(){n.a.get("/card/card-statistics/subscribers").then((function(e){return u(e.data)}))}),[]),null!==b?Object(o.jsx)(l.a,{icon:Object(o.jsx)(c.a,{size:21}),color:"primary",stats:s(null===i||void 0===i||null===(t=i.subscribers)||void 0===t?void 0:t.registered_subscribers),statTitle:"Subscribers Gained",series:b.series,type:"area"}):null}},1054:function(e,t,s){"use strict";var a=s(1101),r=s(477),i=s(482),n=s(478),c=s(6);t.a=function(e){var t=e.userData;return Object(c.jsx)(i.a,{className:"card-congratulations",children:Object(c.jsxs)(n.a,{className:"text-center",children:[Object(c.jsx)("img",{className:"congratulations-img-left",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAB0CAMAAABExqW4AAAB/lBMVEUAAABiVu5iVu5Hi9L/vAFiVu5iVu7/vAFiVu5iVu5iVu5iVu5iVu5iVu5iVu5iVu78syv/vAFiVu5iVu5iVu7/vAFiVu5iVu7/vAFiVu5iVu7/vAFiVu7tj51iVu5iVu5iVu7/vAH/vAFiVu5iVu5iVu5iVu5iVu7/vAFiVu5iVu5iVu5iVu5iVu5iVu78tCn/vAFiVu7/vAFiVu5iVu5iVu5iVu7/vAH/vAHtj53/vAHtj51iVu5iVu7/vAFiVu4b0af/vAH/vAFiVu5iVu5iVu4b0aftj53/vAH/vAHtj51iVu7/vAEb0acb0adiVu7/vAH/vAHtj53/vAFiVu5iVu7/vAFiVu5iVu5iVu7/vAH/vAFiVu5iVu7tj53tj51iVu4b0adiVu5iVu7/vAH/vAH/vAFiVu7/vAH/vAH/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAFiVu7/vAH/vAH/vAFiVu4b0acb0af/vAFiVu7/vAEb0acb0acb0af/vAEb0af/vAH/vAH/vAH/vAEb0aftj53tj53/vAEb0af/vAH/vAEb0aftj53/vAEb0aftj53tj50b0aftj53tj50b0acb0af/vAEb0acb0acb0acb0aftj53tj53tj50b0aftj53tj53tj53tj53tj51iVu7/vAHtj50b0ae3TuNqAAAApnRSTlMABvYD4f0L8RTpiPLhtTglBP76zEz37L6YGwL0pZmRg0L85uWuoXcvIx4Pl41vXgfruaacZlM8Hw/17+Pb1NLIsa+OamFWS0g+OCMhE/3s19bPwb6yqaF+c1lZSUYYFvzdyMN7e2tONCgXDfvjy7i0m4N0Tzs0LSsiFtzQxcKhlIqHcWVDMZp7b25gXlMzHQoH79fWzru3p5N8d3A/27OhVVE9L6mPdPsNfAAAChJJREFUeNrE2utTElEYBvDHQCgzg5LEyEysJLtgVELYja5iZjo0VlBTlpqa10q7WVnqhybLmma6TH0+R/7LVjda2N1z9pC76++rMw7PvMt73vMusMFghOpww1KNZbCLpy9O7U/oOr2uBPaYH6HU/oSuKkJ2wQ5DZ+voGiQs2UQIqYUN+p2UyQnLOHYTyWlYLjpG6VokdOwgy0obYS3PowBdk4TbjxDZY1gqlvBSkxK21bTcaalpg6Cd5K/9sNDkeICOvj9lSsJLx5eWHb8EIWUk5yqsEuvropIJYPJH06oTtkkB5YhCVbxOFNWwRFIq34oFSMILKe/qEtYs5dTA2A2S5xBk5pdPFoIs2vtiNQlblnJaYOgcybcHZkt257XPOBSt3b7/TnhnKecOjBwiBerNLl9hY0kV/nV22voaXiglhZ7CPE80VToLlYGZgrZzyvTvYeUWonIOJmnXOxc+QMPTn6grOmHbF8FeeksTkFwD1883Z3qGvwuWT2sKegbfdSoJTT0Pm9cRjY0O8HRkJa+Myid/Yi2fBwxJv7uohPhU03K8peYTuCo2Eh0V4PmalXwFT2vERxlGwLaYTnmlhGZq2Eb03AdPT1bSwS8f2zi4QhNjMNHTDURXFXjODH/99vot9ExOjMnlY5uFjTaXE33rXCiep/Wsk9IuaiAJ+1SXE5ZbKFI445cPtXS/k/LULaKA48xFWOX2CcJUhmIsLkTiVOZtl1cwTJ0o9Db78Bessf4kYdsKYbEPiYBqIJkcoUwRFLh4Reparz/DCrUvNxCm0vUQMjg76tMZyTzvA5ThEfI968gu63kOa5Rsbr55Y+fu0/WlRO0CjEXfpTTPY7/RsmkO+V5lZcMfYbYbDcjjqK44drBsx72764RXGQO9I16dPjKEnIUg1dOOfB+Hs7JXMNf2MtY1d31D5dHaPYdPvgTP/ATjTJ+GIvbDa3y9fd6TXdbxDKZyHOF2Sz7PE+nYY5lAvqT2cExA5fNrKeCVizBVyW7O/YHPM+cPUo5Wo9XoBDR+Pcy+hakaq4jkLoqX6Y5TLl8YKqFRdSfSunjGATPd3iqfBy4IG5rqf3820ZVKvqB8o9BKFxQ9Cstdzk0yD2AoPJDpm4mMNP07yobGKVcvdMT8SsdpguUa6kV3hpHpoOokGATQ30Q5JqHrSaeyhbJa8zbh0ZOqjclTzChlinugL9zrU0YeS1XmrSw2FZswDVmfjzIkwBRKKf/DQoe2EEV5kQndYfw1wLoD9oHjw/LzPQBLHSQFXODibB/CM16qZwo87d3egAcW2l5b1LoJ3MO81Um1gjAw1w0rKJOayvmiEr5AgViEcfWznzKpqR0Al9FRl45zltn2c1URjU3FJPSGoBZN0UJRrJ31W4lWObjY1yJlrvZpnmP7KZOaViN4RLac851U4ceaeVpPdFWIJ/TFoGsx75abxlqp2EYU4s1UsE1mgsoe0W7KpMawUzxhBkztCbqiC6aK+p0+pz8KYze3EJbDwgmDHnDMBswfqufc8qg4ByN7CVu9cMIZcIWm5TKbJ+SmMncIfJUbyIFNzM1vo2jCKfB5euvqhsCytALF8At26MYjcox9j2t1YzYLJuwS+T0JzEzoFPtlxq1yItkHWbU25lFwBJWE7yDA1IR1yjkFJtd+suIy8lRXXr9WL9ZMB5ry1hcCbK9h810ia4Da7VzMKvBM5SKOQYi938OSA6WEsVNTYu7eCq75vxHT9icMBagsEIKuByc57UTcfJxK4mH1W9vflidERo7ozugXsHYL94W1uEm3/Jxo3tpanhCh8aA36NevYMNLkq8Sq5D8082d9SYRRXEA/8+QQeiwKDQgiJRoaUMLGFKo0dhUU7VqTTRE0pLY1rQmdYk+qHGNy1Pb9MGosRob9+WI31KYUrY7dzoVZgB/r0xCDsy95957zkwxxHsqVdvlV2gby6KHqXU24d6ux1Cr2j59hDZxj1ODPJpy5g74VVvzBRMiNUqjFdiq7Tu0gXuBWBNoErdqa7rghEgqBtAkXtXWdLEUqVpEy20oVVuzJWVue1PrnX5ngclmLxFPHP+DvI+4htH9bDnSMIKud9dOWkLoeq6QSBr60e3cOXKMhu3E40RV9u2XlW/noMuJs+gIgREPkRewREZ82/dsH2GeoeHb9fvENbSdrUesHu0KvVGZWAuoeFkoyUKXPcUDmr3X0VbWRV/DZCJkcsyYHEPFJPOUkGaERfuuon2EiYNqZ2bWfL/Ii3C1ULKq9y4tOnoGoeHMENogmL9CFdOoM5R0eqjC0fi013f9ER64D6SJpPG+iABz9T7R3iDZ0n6JrU5kCyVzuiO8eBiAVaYSMTUzGIRZXAs6DipmE5tXyah4XSh6Db0R3jqPkmHaYs+lp2CCB8wqOwJ1sRkvkYiKc99Wvrxdhz4Hbt+AYpBqXRnO2GCoqahEjQbB5V4cw795cQhl41RP8vYYNyxtYQ+xAjDUSWKJqYGlIFpuqE8mNQIMZfWRKl8u7UYrCQnON4kwWJi4roycsqE1LCcd3G+BwR6QFikcOraQC88kI24rmjDgIR4vjLZAGvqFmEhl4gV/KJ44NaozVuuUq/fkQDzq9DqcQCwscnsqjJYkvmELsEgM31gq2pPIuGICPyqxsX3J1udr0y5e8BFPn/L5MeKzjzmjfckIE5XqPt06c5BYYRguTuqkNBSXaRun7kqkQXqALUKa/bmmYTg3qRIzKOsnTXFggjREUSOY8TKVCYNY3p9GmZ9U+EaxJSaSBr8FQA9xeaZQL+JnFt6GeP7n5ho25Yl1cFBn85XDhqJgaCdnukv9ElVEYIyNUgXmAxSCnRpdiKGGcIF4PC4oBD+pE2ehwj3iYRbeLf8LS55Dwdxj4zZUaE82aZQNPdlZaSUQlw1eeH8olew3oHBLVMfJ5PTc9ofuNtWsItvAY5v2GbvwXrup/IWKFNWKWtAoJpMar4Aqt32n9T9rwkEyjHP6fSWSDNXoCert9LTHUMslsldYoUlIXoIpLNXFhpQAgzPZSJdRj838CXSKPirz8NJTREeNncn8DgGdIiaRQo6AJ8csN4Ng9DT203cOJ5XYl8AVkBtS5hBYweG6SyzoHL1UdGxKf1u57IYayyWqyqCDWBxE3lkwuJNNhvu24mouCaKTTJPfCm0RzaUKm/kvo6MEogK2E6ItKWaEsZnfj+4TkKsbCgaT+V3oQjOkEJd0vMvQiW4kjOlLc3kiaRCqJrNz6GQRtT3tw+XjbGYJQdXqfOFtZ4cYIhoXUOvj8eI+bA0Nwm6o2K3Ucd+YGOKP9ckdTzb2AGp8LXekPoIOc9mC4jNMcu5nofDpEHYmMYpaz/5sWoYO6wWFaSPx13yhaAVNeVR+ZdlX6PDyjdIvshsmWSkUze9Hc9aKJ1q6H0OZe1OYX4VpDn0qjogfaNbx5YfQbS47CRNNZr/jP/UXWwY/uvmwUHIAAAAASUVORK5CYII=",alt:"decor-left"}),Object(c.jsx)("img",{className:"congratulations-img-right",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII=",alt:"decor-right"}),Object(c.jsx)(r.a,{icon:Object(c.jsx)(a.a,{size:28}),className:"shadow",color:"primary",size:"xl"}),Object(c.jsx)("div",{className:"text-center",children:Object(c.jsxs)("h1",{className:"mb-1 text-white",children:["Welcome ",t?t.first_name:"Admin","!"]})})]})})}},2189:function(e,t,s){"use strict";s.r(t);var a=s(485),r=s.n(a),i=s(486),n=s(28),c=s(1),l=s(484),o=s(126),d=(s(1002),s(82)),j=s.n(d),b=s(482),u=s(483),h=s(479),m=s(478),v=s(480),f=s(481),x=s(487),O=s(504),p=s.n(O),g=s(1223),A=s(6),y=function(e){var t,s,a,r,i,l=e.dashData,o=Object(c.useState)(null),d=Object(n.a)(o,2),O=(d[0],d[1]);Object(c.useEffect)((function(){j.a.get("/card/card-analytics/support-tracker").then((function(e){return O(e.data)}))}),[]);var y=Math.ceil((null===l||void 0===l||null===(t=l.users)||void 0===t?void 0:t.unverified_users)/(null===l||void 0===l||null===(s=l.users)||void 0===s?void 0:s.registered_users)*100),N={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Unverified Users"]},w=[y];return""!==l?Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(u.a,{className:"pb-0",children:[Object(A.jsx)(h.a,{tag:"h4",children:"Users"}),Object(A.jsx)(g.a,{size:20})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(v.a,{children:[Object(A.jsxs)(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(A.jsx)("h1",{className:"font-large-2 font-weight-bolder mt-2 mb-0",children:null===l||void 0===l||null===(a=l.users)||void 0===a?void 0:a.registered_users}),Object(A.jsx)(x.a,{children:"All Users"})]}),Object(A.jsx)(f.a,{sm:"10",className:"d-flex justify-content-center",children:Object(A.jsx)(p.a,{options:N,series:w,type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Active Users"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===l||void 0===l||null===(r=l.users)||void 0===r?void 0:r.active_users})]}),Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Inactive Users"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===l||void 0===l||null===(i=l.users)||void 0===i?void 0:i.inactive_users})]})]})]})]}):null},N=function(e){var t,s,a,r,i,l=e.dashData,o=Object(c.useState)(null),d=Object(n.a)(o,2),O=(d[0],d[1]);Object(c.useEffect)((function(){j.a.get("/card/card-analytics/support-tracker").then((function(e){return O(e.data)}))}),[]);var y=Math.ceil((null===l||void 0===l||null===(t=l.admins)||void 0===t?void 0:t.inactive_admins)/(null===l||void 0===l||null===(s=l.admins)||void 0===s?void 0:s.registered_admins)*100),N={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Inactive admins"]},w=[y];return""!==l?Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(u.a,{className:"pb-0",children:[Object(A.jsx)(h.a,{tag:"h4",children:"Admins"}),Object(A.jsx)(g.a,{size:20})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(v.a,{children:[Object(A.jsxs)(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(A.jsx)("h1",{className:"font-large-2 font-weight-bolder mt-2 mb-0",children:null===l||void 0===l||null===(a=l.admins)||void 0===a?void 0:a.registered_admins}),Object(A.jsx)(x.a,{children:"All admins"})]}),Object(A.jsx)(f.a,{sm:"10",className:"d-flex justify-content-center",children:Object(A.jsx)(p.a,{options:N,series:w,type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Active admins"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===l||void 0===l||null===(r=l.admins)||void 0===r?void 0:r.active_admins})]}),Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Inactive admins"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===l||void 0===l||null===(i=l.admins)||void 0===i?void 0:i.inactive_admins})]})]})]})]}):null},w=s(1167),V=function(e){var t,s,a,r,i,l,o=e.dashData,d=Object(c.useState)(null),O=Object(n.a)(d,2),g=(O[0],O[1]);Object(c.useEffect)((function(){j.a.get("/card/card-analytics/support-tracker").then((function(e){return g(e.data)}))}),[]);var y=Math.ceil((null===o||void 0===o||null===(t=o.fund_requests)||void 0===t?void 0:t.pending_fund_requests)/(null===o||void 0===o||null===(s=o.fund_requests)||void 0===s?void 0:s.fund_requests)*100),N={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Pending Requests"]},V=[y];return""!==o?Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(u.a,{className:"pb-0",children:[Object(A.jsx)(h.a,{tag:"h4",children:"Fund Requests"}),"\\",Object(A.jsx)(w.a,{size:20})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(v.a,{children:[Object(A.jsxs)(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(A.jsx)("h1",{className:"font-large-2 font-weight-bolder mt-2 mb-0",children:null===o||void 0===o||null===(a=o.fund_requests)||void 0===a?void 0:a.fund_requests}),Object(A.jsx)(x.a,{children:"All Requests"})]}),Object(A.jsx)(f.a,{sm:"10",className:"d-flex justify-content-center",children:Object(A.jsx)(p.a,{options:N,series:V,type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Active Fund Requests"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===o||void 0===o||null===(r=o.fund_requests)||void 0===r?void 0:r.approved_fund_requests})]}),Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Inactive Fund Requests"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===o||void 0===o||null===(i=o.fund_requests)||void 0===i?void 0:i.disapproved_fund_requests})]}),Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Pending Fund Requests"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:null===o||void 0===o||null===(l=o.fund_requests)||void 0===l?void 0:l.pending_fund_requests})]})]})]})]}):null},k=s(1211),E=function(e){var t,s,a=e.dashData,r=Object(c.useState)(null),i=Object(n.a)(r,2),l=(i[0],i[1]);Object(c.useEffect)((function(){j.a.get("/card/card-analytics/support-tracker").then((function(e){return l(e.data)}))}),[]);Math.ceil((null===a||void 0===a||null===(t=a.users)||void 0===t?void 0:t.unverified_users)/(null===a||void 0===a||null===(s=a.users)||void 0===s?void 0:s.registered_users)*100);var o={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[e.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[e.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["All feedbacks"]};return""!==a?Object(A.jsxs)(b.a,{children:[Object(A.jsxs)(u.a,{className:"pb-0",children:[Object(A.jsx)(h.a,{tag:"h4",children:"Feedbacks"}),Object(A.jsx)(k.a,{size:20})]}),Object(A.jsxs)(m.a,{children:[Object(A.jsxs)(v.a,{children:[Object(A.jsxs)(f.a,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[Object(A.jsx)("h1",{className:"font-large-2 font-weight-bolder mt-2 mb-0",children:null===a||void 0===a?void 0:a.feedbacks}),Object(A.jsx)(x.a,{children:"All Feedbacks"})]}),Object(A.jsx)(f.a,{sm:"10",className:"d-flex justify-content-center",children:Object(A.jsx)(p.a,{options:o,series:[0],type:"radialBar",height:270,id:"support-tracker-card"})})]}),Object(A.jsxs)("div",{className:"d-flex justify-content-between mt-1",children:[Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Feature"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:a?null===a||void 0===a?void 0:a.feedbacks:"0"})]}),Object(A.jsxs)("div",{className:"text-center",children:[Object(A.jsx)(x.a,{className:"mb-50",children:"Feature"}),Object(A.jsx)("span",{className:"font-large-1 font-weight-bold",children:a?null===a||void 0===a?void 0:a.feedbacks:"0"})]})]})]})]}):null},F=s(1170),Y=s(664),T=function(e){var t=e.kFormatter,s=e.warning,a=e.dashData,r=Object(c.useState)(null),i=Object(n.a)(r,2),l=i[0],o=i[1],d={chart:{id:"revenue",toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:[s],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}};return Object(c.useEffect)((function(){j.a.get("/card/card-statistics/orders").then((function(e){return o(e.data)}))}),[]),null!==l?Object(A.jsx)(Y.a,{icon:Object(A.jsx)(F.a,{size:21}),color:"warning",stats:t(a.contacts),statTitle:"Contact Messages",options:d,series:l.series,type:"area"}):null},H=s(1054),q=s(1003);s(660),t.default=function(){var e=Object(c.useContext)(o.a).colors,t=Object(c.useState)(null),s=Object(n.a)(t,2),a=s[0],d=s[1],j=Object(c.useState)({}),b=Object(n.a)(j,2),u=b[0],h=b[1];Object(c.useEffect)((function(){Object(l.g)()&&d(JSON.parse(localStorage.getItem("userData")))}),[]);var m=function(){var e=Object(i.a)(r.a.mark((function e(){var t,s,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)({url:"/admin/data",method:"GET"});case 2:if(!(t=e.sent)){e.next=12;break}if(!(null===t||void 0===t||null===(s=t.data)||void 0===s?void 0:s.data)||!(null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.success)){e.next=9;break}return e.next=7,h(t.data.data);case 7:e.next=10;break;case 9:console.log(t.error);case 10:e.next=13;break;case 12:Object(l.l)("Oops!","Somthing went wrong with your network.","error");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),Object(A.jsxs)("div",{id:"dashboard-analytics",children:[Object(A.jsxs)(v.a,{className:"match-height",children:[Object(A.jsx)(f.a,{lg:"6",sm:"12",children:Object(A.jsx)(H.a,{userData:a})}),Object(A.jsx)(f.a,{lg:"3",sm:"6",children:Object(A.jsx)(q.a,{kFormatter:l.h,dashData:u})}),Object(A.jsx)(f.a,{lg:"3",sm:"6",children:Object(A.jsx)(T,{kFormatter:l.h,warning:e.warning.main,dashData:u})})]}),Object(A.jsxs)(v.a,{className:"match-height",children:[Object(A.jsx)(f.a,{lg:"6",xs:"12",children:Object(A.jsx)(y,{primary:e.primary.main,danger:e.danger.main,dashData:u})}),Object(A.jsx)(f.a,{lg:"6",xs:"12",children:Object(A.jsx)(N,{primary:e.primary.main,danger:e.danger.main,dashData:u})}),Object(A.jsx)(f.a,{lg:"6",xs:"12",children:Object(A.jsx)(V,{primary:e.primary.main,danger:e.danger.main,dashData:u})}),Object(A.jsx)(f.a,{lg:"6",xs:"12",children:Object(A.jsx)(E,{primary:e.primary.main,danger:e.danger.main,dashData:u})})]})]})}},660:function(e,t,s){},664:function(e,t,s){"use strict";var a=s(0),r=s(58),i=s(122),n=s(477),c=s(27),l=s.n(c),o=s(504),d=s.n(o),j=s(482),b=s(478),u=s(885),h=s(6),m=function(e){var t=e.icon,s=e.color,c=e.stats,o=e.statTitle,u=e.series,m=e.options,v=e.type,f=e.height,x=e.className,O=Object(i.a)(e,["icon","color","stats","statTitle","series","options","type","height","className"]);return Object(h.jsxs)(j.a,Object(a.a)(Object(a.a)({},O),{},{children:[Object(h.jsxs)(b.a,{className:l()("pb-0",Object(r.a)({},x,x)),children:[Object(h.jsx)(n.a,{className:"avatar-stats p-50 m-0",color:"light-".concat(s),icon:t}),Object(h.jsx)("h2",{className:"font-weight-bolder mt-1",children:c}),Object(h.jsx)("p",{className:"card-text",children:o})]}),Object(h.jsx)(d.a,{options:m,series:u,type:v,height:f||100})]}))};t.a=m,m.defaultProps={options:u.a,color:"primary"}},885:function(e,t,s){"use strict";s.d(t,"a",(function(){return a})),s.d(t,"b",(function(){return r}));var a={chart:{toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}},r={chart:{toolbar:{show:!1},sparkline:{enabled:!0},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},grid:{show:!1},colors:["#7367F0"],dataLabels:{enabled:!1},stroke:{curve:"smooth",width:5},fill:{type:"gradient",gradient:{shadeIntensity:1,gradientToColors:["#A9A2F6"],opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},xaxis:{labels:{show:!1},axisBorder:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{x:{show:!1}}}}}]);
//# sourceMappingURL=161.408b4c7d.chunk.js.map