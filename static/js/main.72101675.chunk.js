(this["webpackJsonpshopping-tracker"]=this["webpackJsonpshopping-tracker"]||[]).push([[0],{119:function(e,t,n){},128:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),i=n.n(c),o=n(11),a=n.n(o),s=(n(119),n(19)),d=n.n(s),l=n(34),u=n(13),j="SET_LIST",b="TOGGLE_CURRENCY",h="REQUEST_CURRENCY_FAILURE",f="REQUEST_CURRENCY_SUCCESS",x="SET_INNER_WIDTH",p="SET_THEME",O=function(e){return{type:j,payload:e}},m=function(){return{type:b}},g=function(e){return{type:f,payload:e}},v=function(e){return{type:x,payload:e}},w=n(67),y=n(16),D=n(17),S={colors:{backgroundBody:"#111",backgroundTable:"#111",background:"#2A2A2A",main:"#3C4479",font:"white",tableFooter:"#222"}},k={colors:{backgroundBody:"white",backgroundTable:"rgba(180, 180, 180, 0.12)",background:"#FFFFFF",main:"#3f51b5",font:"black",tableFooter:"lightgrey"}},I=n(12),F=n(10);function L(){var e=Object(I.a)(["\n  display: grid;\n  width: 95%;\n  grid-template-columns: ",";\n\n  @media (max-width: 1000px) {\n    grid-template-columns: ",";\n  }\n"]);return L=function(){return e},e}function C(){var e=Object(I.a)(["\n  body {\n    background-color: ",";\n  }\n"]);return C=function(){return e},e}var U=Object(F.b)(C(),(function(e){return e.theme.colors.backgroundBody})),E=F.d.div(L(),(function(e){return e.repeatFormula?e.repeatFormula:"1fr 1fr"}),(function(e){return e.repeatFormula?e.repeatFormula:"1fr"}));function A(){var e=Object(I.a)(["\n  border-radius: 50%;\n  height: 40px;\n  width: 40px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 150ms;\n  color: white;\n  background-color: ",";\n  outline: none;\n  border: solid "," 3px;\n  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.5),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n\n  @media (max-width: 768px) {\n    height: 30px;\n    width: 30px;\n    font-size: 15px;\n  }\n"]);return A=function(){return e},e}function P(){var e=Object(I.a)(["\n          right: 20px;\n          @media (max-width: 768px) {\n            right: 10px;\n          }\n        "]);return P=function(){return e},e}function T(){var e=Object(I.a)(["\n          left: 20px;\n          @media (max-width: 768px) {\n            left: 10px;\n          }\n        "]);return T=function(){return e},e}function B(){var e=Object(I.a)(["\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: 150ms;\n  position: absolute;\n  top: 20px;\n\n  color: white;\n  background-color: ",";\n  outline: none;\n  border: solid "," 3px;\n  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n\n  ","\n\n  &:hover {\n    background-color: ",";\n    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.5),\n      0 0 40px rgba(0, 0, 0, 0.1) inset;\n  }\n\n  @media (max-width: 768px) {\n    top: 10px;\n    height: 40px;\n    width: 40px;\n    font-size: 17px;\n  }\n"]);return B=function(){return e},e}var R=F.d.button(B(),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main}),(function(e){return e.left?Object(F.c)(T()):Object(F.c)(P())}),(function(e){return e.theme.colors.main})),N=F.d.button(A(),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main}),(function(e){return e.theme.colors.main}));function W(){var e=Object(I.a)(["\n  text-align: center;\n"]);return W=function(){return e},e}function z(){var e=Object(I.a)(['\n  margin: 60px auto;\n  width: 80%;\n  padding: 40px;\n  border-radius: 7px;\n  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  min-width: 300px;\n  max-width: 1000px;\n  background-color: white;\n  color: "black";\n  position: relative;\n  background-color: ',";\n\n  @media (max-width: 768px) {\n    padding: 40px 0 0 0;\n    width: 100%;\n  }\n"]);return z=function(){return e},e}function M(){var e=Object(I.a)(["\n  height: 0px;\n  transform: translateY(-60px);\n"]);return M=function(){return e},e}function $(){var e=Object(I.a)(["\n  padding: 10px 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 27px;\n  color: white;\n  margin: 0;\n  display: inline;\n  background-color: ",";\n  border-radius: 5px;\n  min-width: 180px;\n  box-shadow: 5px 4px 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;\n  z-index: 2;\n\n  @media (max-width: 768px) {\n    font-size: 22px;\n  }\n"]);return $=function(){return e},e}var q=F.d.h1($(),(function(e){return e.theme.colors.main})),_=F.d.div(M()),Y=F.d.div(z(),(function(e){return e.theme.colors.background})),H=F.d.div(W());function G(){var e=Object(I.a)(["\n      margin-top: 30vh;\n    "]);return G=function(){return e},e}function J(){var e=Object(I.a)(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  justify-items: center;\n  align-content: center;\n  ","\n  color: ",";\n"]);return J=function(){return e},e}function Q(){var e=Object(I.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 10px;\n  margin: 0 auto;\n  border-radius: 5px;\n  width: 50%;\n  max-width: 300px;\n  background-color: rgba(255, 0, 0, 0.493);\n  color: white;\n  font-weight: bold;\n  font-size: 15px;\n"]);return Q=function(){return e},e}var K=F.d.div(Q()),V=F.d.div(J(),(function(e){return e.marginTop&&Object(F.c)(G())}),(function(e){return e.theme.colors.font}));function X(){var e=Object(I.a)(["\n  width: 50%;\n  min-width: 300px;\n  max-width: 600px;\n  margin: 0 auto;\n"]);return X=function(){return e},e}function Z(){var e=Object(I.a)(["\n  background-color: ",";\n\n  @media (max-width: 768px) {\n    grid-template-columns: 3fr 3fr;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(I.a)(["\n  background-color: ",";\n  color: white;\n"]);return ee=function(){return e},e}function te(){var e=Object(I.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  padding: 10px;\n  align-items: center;\n  background-color: ",";\n  transition: 150ms;\n  border-radius: 2px;\n  margin: 2px;\n  column-gap: 5px;\n  color: ",";\n\n  @media (max-width: 768px) {\n    grid-template-columns: ",";\n  }\n"]);return te=function(){return e},e}function ne(){var e=Object(I.a)(["\n  font-weight: ",";\n  text-align: ",";\n\n  @media (max-width: 768px) {\n    font-size: 12px;\n  }\n"]);return ne=function(){return e},e}function re(){var e=Object(I.a)(["\n  list-style-type: none;\n  padding: 0;\n"]);return re=function(){return e},e}var ce=F.d.ul(re()),ie=F.d.span(ne(),(function(e){return"bold"===e.weight&&"bold"}),(function(e){return e.center&&"center"})),oe=F.d.div(te(),(function(e){return e.repeatFormula?e.repeatFormula:"0.5fr 2fr 1fr 1fr 1.5fr 0.5fr"}),(function(e){return e.theme.colors.backgroundTable}),(function(e){return e.theme.colors.font}),(function(e){return e.repeatFormula?e.repeatFormula:"2fr 1fr 1fr 1.5fr 0.5fr"})),ae=Object(F.d)(oe)(ee(),(function(e){return e.theme.colors.main})),se=Object(F.d)(oe)(Z(),(function(e){return e.theme.colors.tableFooter})),de=F.d.div(X()),le=n(165);function ue(){var e=Object(I.a)(["\n  background-color: ",";\n  height: 100%;\n  width: 220px;\n  overflow: hidden;\n"]);return ue=function(){return e},e}function je(){var e=Object(I.a)(["\n  padding: 25px;\n  color: white;\n  width: 100%;\n  height: 1.5em;\n  transition: 100ms;\n\n  &:hover {\n    color: #3f51b5;\n    background-color: white;\n    cursor: pointer;\n  }\n"]);return je=function(){return e},e}function be(){var e=Object(I.a)(["\n  background-color: ",";\n"]);return be=function(){return e},e}function he(){var e=Object(I.a)(["\n  color: ",";\n  text-decoration: ",";\n"]);return he=function(){return e},e}var fe=Object(F.d)(w.b)(he(),(function(e){return e.color?e.color:"white"}),(function(e){return e.textDecoration?"underline":"none"})),xe=Object(F.d)(le.a)(be(),(function(e){return e.theme.colors.main})),pe=F.d.div(je()),Oe=F.d.div(ue(),(function(e){return e.theme.colors.main})),me={dark:{color:"#DFDFDF",backgroundColor:"#222"}},ge={dark:{color:"#DFDFDF"}},ve={dark:{color:"#DFDFDF"}},we={color:"black"},ye={width:"23px",height:"23px"},De={position:"absolute",right:10},Se=n(177),ke=n(183),Ie=n(25),Fe=function(e){if(e)return e.charAt(0).toUpperCase()+e.slice(1)},Le=function(e){var t=new Date(e);return"".concat(t.getDate().toString().padStart(2,"0"),"/").concat((t.getMonth()+1).toString().padStart(2,"0"),"/").concat(t.getFullYear())},Ce=function(e){for(var t=[],n=0;n<e;n++)t.push(Object(r.jsx)("br",{}));return t},Ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.filter((function(e){return t?e.received:!e.received})),r={};return n.forEach((function(e){r[e.store.toLowerCase()]=r[e.store.toLowerCase()]?{amount:r[e.store.toLowerCase()].amount+1,price:r[e.store.toLowerCase()].price+e.priceInUSD}:{amount:1,price:e.priceInUSD}})),r},Ee=function(e,t){return"USD"===t.current?e:Math.round(e*t.dif)},Ae=n(180),Pe=n(48),Te=n.n(Pe),Be=n(71),Re=n.n(Be),Ne=n(89),We=n.n(Ne);var ze=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})),n=t.shoppingList,i=t.currency,o=t.innerWidth,a=t.theme,s=Object(c.useState)(""),d=Object(D.a)(s,2),l=d[0],j=d[1],b=Object(c.useState)(n.filter((function(e){return!e.received}))),h=Object(D.a)(b,2),f=h[0],x=h[1];Object(c.useEffect)((function(){x(n.filter((function(e){return!e.received}))),j("")}),[n]);var p=Object(c.useMemo)((function(){return f.reduce((function(e,t){return e+t.priceInUSD}),0)}),[f]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(H,{children:Object(r.jsx)(Ae.a,{id:"searchBar",variant:"outlined",value:l,label:"Search",onChange:function(e){var t=e.target.value;j(t);var r,c=[],i=n.filter((function(e){return!e.received})),o=Object(Ie.a)(i);try{for(o.s();!(r=o.n()).done;){for(var a=r.value,s=!1,d=[a.name,a.store],l=0,u=d;l<u.length;l++){var b=u[l];"string"===typeof b&&b.toLowerCase().includes(t.toLowerCase())&&(s=!0)}s&&c.push(a)}}catch(h){o.e(h)}finally{o.f()}x(c)},InputLabelProps:{style:ve[a]},InputProps:{style:me[a]}})}),i.error.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(K,{children:[Object(r.jsx)(Re.a,{style:ye}),"\xa0",i.error]})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(ce,{children:[Object(r.jsx)("li",{children:Object(r.jsxs)(ae,{children:[o>768&&Object(r.jsx)(Te.a,{}),Object(r.jsx)(ie,{weight:"bold",children:"Product"}),Object(r.jsx)(ie,{weight:"bold",children:"Store"}),Object(r.jsx)(ie,{weight:"bold",children:"Price"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Expected Delivery Date"})]})}),0===f.length?Object(r.jsx)("li",{children:Object(r.jsx)(oe,{repeatFormula:"1fr",children:Object(r.jsx)(ie,{center:!0,weight:"bold",children:"You haven't bought any new items!"})})}):f.sort((function(e,t){return e.deliveryDate-t.deliveryDate})).map((function(t,c){return Object(r.jsx)("li",{className:"itemListItem",children:Object(r.jsxs)(oe,{children:[o>768&&Object(r.jsx)(Te.a,{}),Object(r.jsx)(ie,{weight:"bold",children:Fe(t.name)}),Object(r.jsx)(ie,{children:Fe(t.store)}),Object(r.jsxs)(ie,{children:["ILS"===i.current?"\u20aa":"$",Ee(t.priceInUSD,i)]}),Object(r.jsx)(ie,{center:!0,children:Le(t.deliveryDate)}),Object(r.jsx)(ie,{center:!0,children:Object(r.jsx)(ke.a,{title:"Check item as received",children:Object(r.jsx)(N,{id:"receiveButton".concat(c),onClick:function(){return function(t){var r=n.find((function(e){return e.id===t}));We.a.fire({title:"Set ".concat(r.name," As Received?"),icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(r){if(r.value){var c=n.map((function(e){return e.id===t&&(e.received=!0,e.receivedDate=Date.now()),e}));e(O(c))}}))}(t.id)},children:"\u2713"})})})]})},t.id)})),Object(r.jsx)("li",{children:Object(r.jsxs)(se,{repeatFormula:"0.5fr 3fr 3fr",children:[o>768&&Object(r.jsx)(Te.a,{}),Object(r.jsxs)(ie,{weight:"bold",children:["Amount of Products: ",f.length]}),Object(r.jsxs)(ie,{weight:"bold",children:["Sum of Prices: ","ILS"===i.current?"\u20aa":"$",Ee(p,i)]})]})})]})]})},Me=n(40),$e=n.n(Me),qe=function(){var e=Object(u.c)((function(e){return e})),t=e.shoppingList,n=e.currency,i=Object(c.useMemo)((function(){return Ue(t)}),[t]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(de,{children:Object(r.jsxs)(ce,{children:[Object(r.jsx)("li",{children:Object(r.jsxs)(ae,{repeatFormula:"1fr 2fr 2fr 2fr",children:[Object(r.jsx)($e.a,{}),Object(r.jsx)(ie,{weight:"bold",children:"Store"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Product Amount"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Total Price"})]})}),Object.keys(i).map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(oe,{id:e.split(" ").join(""),repeatFormula:"1fr 2fr 2fr 2fr",children:[Object(r.jsx)($e.a,{}),Object(r.jsx)(ie,{id:"".concat(e.split(" ").join(""),"Name"),weight:"bold",children:Fe(e)}),Object(r.jsx)(ie,{id:"".concat(e.split(" ").join(""),"Amount"),center:!0,children:i[e].amount}),Object(r.jsxs)(ie,{id:"".concat(e.split(" ").join(""),"Price"),center:!0,children:["ILS"===n.current?"\u20aa":"$",Ee(i[e].price,n)]})]})},e)}))]})})]})},_e=n(20),Ye=n(182),He=n(181),Ge=n(175),Je=n(131),Qe=n(176),Ke=n(169),Ve=n(172),Xe=n(174),Ze=n(184),et=n(91),tt=n(92),nt=n.n(tt),rt=n(173),ct=function(e){var t=e.tooltipTitle,n=e.id;return Object(r.jsx)(ke.a,{title:t,children:Object(r.jsx)(rt.a,{id:n,style:{cursor:"default"},children:Object(r.jsx)(nt.a,{style:{width:"30px",height:"30px"},color:"error"})})})},it=n(93),ot=n.n(it),at=function(){return Object(r.jsx)(rt.a,{style:{cursor:"default"},children:Object(r.jsx)(ot.a,{style:{color:"green"}})})},st=n(94),dt=n.n(st),lt=n(95),ut=n.n(lt),jt=n(96),bt=n.n(jt);var ht=function(){var e=Object(u.c)((function(e){return e})),t=e.shoppingList,n=e.innerWidth,i=e.theme,o=Object(Xe.a)((function(e){return Object(Ze.a)({root:{width:"100%",textAlign:"center"},paper:{position:"absolute",width:"50%",maxWidth:700,minWidth:300,backgroundColor:i.includes("dark")?"#3A3A3A":"white",borderRadius:7,color:i.includes("dark")?"white":"black",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),outline:"none"}})}))(),a={top:"50%",left:"50%",transform:"translate(-50%, -50%)"},s=Object(c.useState)(!1),d=Object(D.a)(s,2),l=d[0],j=d[1],b=Object(et.a)(),h=b.register,f=b.handleSubmit,x=b.errors,p=Object(u.b)(),m=0===Object.keys(x).length,g=function(){j(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(R,{id:"addItemButton",left:!0,onClick:function(){j(!0)},children:"+"}),Object(r.jsx)(He.a,{closeAfterTransition:!0,BackdropComponent:Ge.a,BackdropProps:{timeout:300},open:l,onClose:g,children:Object(r.jsx)(Je.a,{direction:"up",in:l,children:Object(r.jsx)("div",{style:a,className:o.paper,children:Object(r.jsxs)("div",{className:o.root,children:[Object(r.jsx)("h2",{children:"Add Product"}),Object(r.jsxs)("form",{onSubmit:f((function(e){e.deliveryDate=new Date(e.deliveryDate).valueOf(),e.received=!1,e.receivedDate=null,e.priceInUSD=Number(e.priceInUSD),e.id=Object(Ye.a)(),p(O([].concat(Object(_e.a)(t),[e]))),g()})),children:[Object(r.jsxs)(E,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(Ae.a,{id:"name",label:"Product Name",inputRef:h({required:"Product name is required"}),name:"name",InputLabelProps:{style:ve[i]},InputProps:{style:ge[i],endAdornment:Object(r.jsx)(Qe.a,{position:"end",children:Object(r.jsx)(dt.a,{style:we})})}}),!m&&(x.name?Object(r.jsx)(ct,{id:"nameError",tooltipTitle:x.name.message}):Object(r.jsx)(at,{})),Ce(2),Object(r.jsx)(Ae.a,{id:"store",label:"Store",inputRef:h({required:"Store is required"}),name:"store",InputLabelProps:{style:ve[i]},InputProps:{style:ge[i],endAdornment:Object(r.jsx)(Qe.a,{position:"end",children:Object(r.jsx)(ut.a,{style:we})})}}),!m&&(x.store?Object(r.jsx)(ct,{id:"storeError",tooltipTitle:x.store.message}):Object(r.jsx)(at,{}))]}),n<1e3&&Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(Ae.a,{id:"priceInUSD",label:"Price In USD",inputRef:h({pattern:{value:/^[+-]?\d+(\.\d+)?$/,message:"Please enter a valid price"},required:"Price is required"}),name:"priceInUSD",InputLabelProps:{style:ve[i]},InputProps:{style:ge[i],endAdornment:Object(r.jsx)(Qe.a,{position:"end",children:Object(r.jsx)(bt.a,{style:we})})}}),!m&&(x.priceInUSD?Object(r.jsx)(ct,{id:"priceError",tooltipTitle:x.priceInUSD.message}):Object(r.jsx)(at,{})),Ce(2),Object(r.jsxs)(Ke.a,{children:[Object(r.jsx)(Ve.a,{style:{color:i.includes("dark")&&"#DFDFDF"},children:"Estimated Delivery Date"}),Object(r.jsx)(Ae.a,{type:"date",id:"deliveryDate",name:"deliveryDate",inputRef:h({required:"Delivery Date is required"}),style:{width:"225px"},InputLabelProps:{style:ve[i]},InputProps:{style:ge[i]}})]}),!m&&(x.deliveryDate?Object(r.jsx)(ct,{id:"deliveryDateError",tooltipTitle:x.deliveryDate.message}):Object(r.jsx)(at,{}))]})]}),Ce(2),Object(r.jsx)(Se.a,{id:"submitButton",variant:"contained",color:"primary",type:"submit",children:"Add"})]})]})})})})]})};var ft=n(97),xt=n(98),pt=n(101),Ot=n(100),mt=function(e){Object(pt.a)(n,e);var t=Object(Ot.a)(n);function n(e){var r;return Object(ft.a)(this,n),(r=t.call(this,e)).state={hasError:!1,error:""},r}return Object(xt.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(V,{children:Object(r.jsx)("h1",{children:"Oops! An Error Occurred!"})}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e.toString()}}}]),n}(i.a.Component);function gt(){var e=Object(c.useState)("items"),t=Object(D.a)(e,2),n=t[0],i=t[1],o=Object(u.b)(),a=Object(u.c)((function(e){return e})).currency;return Object(r.jsxs)(Y,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(_,{children:Object(r.jsx)(q,{children:"Bought Items"})}),Object(r.jsx)("br",{}),Object(r.jsx)(Se.a,{id:"itemsButton",style:{marginRight:5},variant:"contained",color:"items"===n?"primary":"default",onClick:function(){return i("items")},children:"Item List"}),Object(r.jsx)(Se.a,{id:"storesButton",style:{marginLeft:5},color:"stores"===n?"primary":"default",variant:"contained",onClick:function(){return i("stores")},children:"Store List"})]}),Object(r.jsx)(ke.a,{arrow:!0,placement:"top",title:"Change Currency",children:Object(r.jsx)(R,{onClick:function(){return o(m())},children:"ILS"===a.current?"\u20aa":"$"})}),Object(r.jsx)("br",{}),Object(r.jsx)(ht,{}),"items"===n?Object(r.jsx)(mt,{children:Object(r.jsx)(ze,{})}):Object(r.jsx)(mt,{children:Object(r.jsx)(qe,{})})]})}var vt=function(){var e=Object(u.c)((function(e){return e})),t=e.shoppingList,n=e.currency,i=e.innerWidth,o=e.theme,a=Object(c.useState)(""),s=Object(D.a)(a,2),d=s[0],l=s[1],j=Object(c.useState)(t.filter((function(e){return e.received}))),b=Object(D.a)(j,2),h=b[0],f=b[1],x=function(e){return"USD"===n.current?e:Math.round(e*n.dif)},p=Object(c.useMemo)((function(){return h.reduce((function(e,t){return e+t.priceInUSD}),0)}),[h]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(H,{children:Object(r.jsx)(Ae.a,{id:"searchBar",variant:"outlined",value:d,label:"Search",onChange:function(e){var n=e.target.value;l(n);var r,c=[],i=t.filter((function(e){return e.received})),o=Object(Ie.a)(i);try{for(o.s();!(r=o.n()).done;){for(var a=r.value,s=!1,d=[a.name,a.store],u=0,j=d;u<j.length;u++){var b=j[u];"string"===typeof b&&b.toLowerCase().includes(n.toLowerCase())&&(s=!0)}s&&c.push(a)}}catch(h){o.e(h)}finally{o.f()}f(c)},InputLabelProps:{style:ve[o]},InputProps:{style:me[o]}})}),n.error.length>0&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsxs)(K,{children:[Object(r.jsx)(Re.a,{style:ye}),"\xa0",n.error]})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(ce,{children:[Object(r.jsx)("li",{children:Object(r.jsxs)(ae,{repeatFormula:i>550?"0.5fr 1.5fr 1fr 1fr 1.5fr":"1.5fr 1fr 1fr 1.5fr",children:[i>550&&Object(r.jsx)(Te.a,{}),Object(r.jsx)(ie,{weight:"bold",children:"Product"}),Object(r.jsx)(ie,{weight:"bold",children:"Store"}),Object(r.jsx)(ie,{weight:"bold",children:"Price"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Received Date"})]})}),0===h.length?Object(r.jsx)("li",{children:Object(r.jsx)(oe,{repeatFormula:"1fr",children:Object(r.jsx)(ie,{center:!0,weight:"bold",children:"You haven't bought any new items!"})})}):h.sort((function(e,t){return e.receivedDate-t.receivedDate})).map((function(e){return Object(r.jsx)("li",{className:"receivedListItem",children:Object(r.jsxs)(oe,{repeatFormula:i>550?"0.5fr 1.5fr 1fr 1fr 1.5fr":"1.5fr 1fr 1fr 1.5fr",children:[i>550&&Object(r.jsx)(Te.a,{}),Object(r.jsx)(ie,{weight:"bold",children:Fe(e.name)}),Object(r.jsx)(ie,{children:Fe(e.store)}),Object(r.jsxs)(ie,{children:["ILS"===n.current?"\u20aa":"$",x(e.priceInUSD)]}),Object(r.jsx)(ie,{center:!0,children:Le(e.receivedDate)})]})},e.id)})),Object(r.jsx)("li",{children:Object(r.jsxs)(se,{repeatFormula:"0.5fr 3fr 3fr",children:[i>768&&Object(r.jsx)(Te.a,{}),Object(r.jsxs)(ie,{weight:"bold",children:["Amount of Products: ",h.length]}),Object(r.jsxs)(ie,{weight:"bold",children:["Sum of Prices: ","ILS"===n.current?"\u20aa":"$",x(p)]})]})})]})]})},wt=function(){var e=Object(u.c)((function(e){return e})),t=e.shoppingList,n=e.currency,i=Object(c.useMemo)((function(){return Ue(t,!0)}),[t]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(de,{children:Object(r.jsxs)(ce,{children:[Object(r.jsx)("li",{children:Object(r.jsxs)(ae,{repeatFormula:"1fr 2fr 2fr 2fr",children:[Object(r.jsx)($e.a,{}),Object(r.jsx)(ie,{weight:"bold",children:"Store"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Product Amount"}),Object(r.jsx)(ie,{center:!0,weight:"bold",children:"Total Price"})]})}),Object.keys(i).map((function(e){return Object(r.jsx)("li",{id:e.split(" ").join(""),children:Object(r.jsxs)(oe,{repeatFormula:"1fr 2fr 2fr 2fr",children:[Object(r.jsx)($e.a,{}),Object(r.jsx)(ie,{id:"".concat(e.split(" ").join(""),"Name"),weight:"bold",children:Fe(e)}),Object(r.jsx)(ie,{id:"".concat(e.split(" ").join(""),"Amount"),center:!0,children:i[e].amount}),Object(r.jsxs)(ie,{id:"".concat(e.split(" ").join(""),"Price"),center:!0,children:["ILS"===n.current?"\u20aa":"$",Ee(i[e].price,n)]})]})},e)}))]})})]})};function yt(){var e=Object(c.useState)("items"),t=Object(D.a)(e,2),n=t[0],i=t[1],o=Object(u.b)(),a=Object(u.c)((function(e){return e})).currency;return Object(r.jsxs)(Y,{children:[Object(r.jsxs)(H,{children:[Object(r.jsx)(_,{children:Object(r.jsx)(q,{children:"Received Items"})}),Object(r.jsx)("br",{}),Object(r.jsx)(Se.a,{id:"itemsButton",style:{marginRight:5},variant:"contained",color:"items"===n?"primary":"default",onClick:function(){return i("items")},children:"Item List"}),Object(r.jsx)(Se.a,{id:"storesButton",style:{marginLeft:5},color:"stores"===n?"primary":"default",variant:"contained",onClick:function(){return i("stores")},children:"Store List"})]}),Object(r.jsx)(ke.a,{arrow:!0,placement:"top",title:"Change Currency",children:Object(r.jsx)(R,{onClick:function(){return o(m())},children:"ILS"===a.current?"\u20aa":"$"})}),Object(r.jsx)("br",{}),"items"===n?Object(r.jsx)(mt,{children:Object(r.jsx)(vt,{})}):Object(r.jsx)(mt,{children:Object(r.jsx)(wt,{})})]})}var Dt=function(){return Object(r.jsxs)(V,{id:"notFound",marginTop:!0,children:[Object(r.jsx)("h1",{children:"404 Not Found :("}),Object(r.jsx)("p",{children:"The requested resource could not be found but may be available again in the future."})]})},St=n(178),kt=n(132),It=n(185),Ft=n(186),Lt=n(179);var Ct=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),n=Object(D.a)(t,2),i=n[0],o=n[1],a=Object(u.c)((function(e){return e})),s=a.innerWidth,d=a.theme;return Object(r.jsxs)("div",{children:[Object(r.jsx)(St.a,{position:"static",children:Object(r.jsxs)(xe,{children:[Object(r.jsx)(rt.a,{onClick:function(){o(!0)},color:"inherit",edge:"start","aria-label":"menu",id:"openMenu",children:Object(r.jsx)(Lt.a,{})}),Object(r.jsx)(fe,{to:"/list",children:Object(r.jsxs)(kt.a,{style:{marginLeft:s>470?30:0},variant:s>470?"h4":s>350?"h5":"h6",children:[s>470&&Object(r.jsx)($e.a,{}),"\xa0 Shopping Tracker"]})}),Object(r.jsx)(kt.a,{style:{position:"absolute",right:10,top:15},children:Object(r.jsx)(ke.a,{title:"Change Theme",children:Object(r.jsx)(It.a,{checked:"dark"===d,onChange:function(){return e(function(e){return{type:p,payload:e}}("dark"===d?"light":"dark"))},name:"checkedA"})})})]})}),Object(r.jsx)(Ft.a,{anchor:"left",open:i,onClose:function(){o(!1)},children:Object(r.jsxs)(Oe,{children:[Object(r.jsx)(fe,{to:"/list",children:Object(r.jsxs)(pe,{id:"boughtItems",onClick:function(){return o(!1)},children:["Bought Items",Object(r.jsx)($e.a,{style:De})]})}),Object(r.jsx)(fe,{to:"/received",children:Object(r.jsxs)(pe,{id:"receivedItems",onClick:function(){return o(!1)},children:["Received Items",Object(r.jsx)($e.a,{style:De})]})})]})})]})};var Ut=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e})).theme,n=Object(c.useCallback)(Object(l.a)(d.a.mark((function t(){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,ILS");case 3:return n=t.sent,t.next=6,n.json();case 6:r=t.sent,c=r.rates.ILS,e(g(c)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),e({type:h,payload:"Currency may not be up to date"});case 14:case"end":return t.stop()}}),t,null,[[0,11]])}))),[e]),i=Object(c.useCallback)((function(){e(v(window.innerWidth))}),[e]);return Object(c.useEffect)((function(){e(v(window.innerWidth)),window.addEventListener("resize",i),n();var t=setInterval(n,1e4);return function(){clearInterval(t),window.removeEventListener("resize",i)}}),[n,e,i]),Object(r.jsx)(w.a,{children:Object(r.jsxs)(F.a,{theme:function(){return function(e){switch(e){case"light":return k;case"dark":return S;default:return k}}(t)},children:[Object(r.jsx)(U,{}),Object(r.jsx)(Ct,{}),Object(r.jsxs)(y.d,{children:[Object(r.jsx)(y.b,{exact:!0,path:"/list",children:Object(r.jsx)(mt,{children:Object(r.jsx)(gt,{})})}),Object(r.jsx)(y.b,{exact:!0,path:"/received",children:Object(r.jsx)(mt,{children:Object(r.jsx)(yt,{})})}),Object(r.jsx)(y.b,{exact:!0,path:"/",children:Object(r.jsx)(y.a,{to:"/list"})}),Object(r.jsx)(y.b,{path:"*",children:Object(r.jsx)(Dt,{})})]})]})})},Et=n(50),At=[{id:Object(Ye.a)(),name:"iPhone 11",store:"Apple Store",priceInUSD:4e3,deliveryDate:Date.now()+4e9,received:!1,receivedDate:null},{id:Object(Ye.a)(),name:"Oneplus 8T",store:"ebay",priceInUSD:2e3,deliveryDate:Date.now()+1e8,received:!1,receivedDate:null},{id:Object(Ye.a)(),name:"Nintendo Switch",store:"Amazon",priceInUSD:800,deliveryDate:Date.now()+2e8,received:!1,receivedDate:null},{id:Object(Ye.a)(),name:"Headphones",store:"Amazon",priceInUSD:750,deliveryDate:Date.now()+3e8,received:!1,receivedDate:null},{id:Object(Ye.a)(),name:"Samsung Galaxy Note 10",store:"Amazon",priceInUSD:2500,deliveryDate:Date.now()+4e8,received:!1,receivedDate:null},{id:Object(Ye.a)(),name:"Sony xm-1000",store:"Ali Express",priceInUSD:750,deliveryDate:Date.now()+5e8,received:!0,receivedDate:Date.now()-5e8},{id:Object(Ye.a)(),name:"Chair",store:"Ikea",priceInUSD:2200,deliveryDate:Date.now()+6e8,received:!0,receivedDate:Date.now()-6e8},{id:Object(Ye.a)(),name:"Banana",store:"Ali Express",priceInUSD:10,deliveryDate:Date.now()+7e8,received:!0,receivedDate:Date.now()-7e8}];var Pt=n(52),Tt={current:"ILS",dif:3.3,error:""},Bt=localStorage.getItem("currency");Bt&&(Tt.current=Bt);var Rt="light",Nt=localStorage.getItem("theme");Nt?Rt=Nt:window.matchMedia("(prefers-color-scheme: dark)").matches&&(Rt="dark");var Wt=Object(Et.c)({shoppingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}},currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return localStorage.setItem("currency","ILS"===e.current?"USD":"ILS"),Object(Pt.a)(Object(Pt.a)({},e),{},{current:"ILS"===e.current?"USD":"ILS"});case f:return Object(Pt.a)(Object(Pt.a)({},e),{},{error:"",dif:t.payload});case h:return Object(Pt.a)(Object(Pt.a)({},e),{},{error:t.payload});default:return e}},innerWidth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload;default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return localStorage.setItem("theme",t.payload),t.payload;default:return e}}}),zt=n(99),Mt=Object(Et.d)(Wt,Object(Et.a)(zt.a)),$t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function qt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(u.a,{store:Mt,children:Object(r.jsx)(Ut,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Amir-Debbie-15-12-2020",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Amir-Debbie-15-12-2020","/service-worker.js");$t?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):qt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):qt(t,e)}))}}()}},[[128,1,2]]]);
//# sourceMappingURL=main.72101675.chunk.js.map