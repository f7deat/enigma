(this["webpackJsonpjubilant-enigma"]=this["webpackJsonpjubilant-enigma"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(1),n=c.n(a),r=c(29),i=c.n(r),l=c(11),j=c(25),o=c(16),b=c(7),d="update_text",x="add_text";function u(){var e=Object(b.f)(),t=Object(a.useRef)(null),c=Object(a.useState)(),r=Object(l.a)(c,2),i=r[0],d=r[1],x=Object(a.useRef)(),u=Object(o.c)((function(e){return e.textReducer.listText})),h=Object(o.b)();Object(a.useEffect)((function(){i&&(x.current.nodes([t.current]),x.current.getLayer().batchDraw())}),[i]);var f=function(e){e.evt.preventDefault()},m=function(){e.push("/text/edit"),h({type:"SET_TEXT",payload:i}),console.log(i)};return Object(s.jsx)(j.b,{width:500,height:500,className:"bg-white border border-blue-500",onMouseDown:function(e){e.target===e.target.getStage()&&d(null)},children:Object(s.jsx)(j.a,{children:u&&u.map((function(e,c){return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsx)(j.c,{id:e.id,ref:t,text:e.text,draggable:!0,onClick:function(){return d(e.id)},onContextMenu:f,onDblClick:m}),Object(s.jsx)(j.d,{ref:x,id:e.id,visible:e.id===i})]},c)}))})})}var h=function(e){return Object(s.jsxs)("div",{className:"".concat(e.visible?"flex justify-center items-center h-screen w-screen absolute top-0 left-0":"hidden"),children:[Object(s.jsx)("div",{className:"w-screen h-screen bg-gray-500 opacity-50 absolute z-10 top-0 left-0"}),Object(s.jsxs)("div",{className:"h-3/4 w-1/2 bg-white absolute z-20 rounded shadow-lg",children:[Object(s.jsxs)("div",{className:"flex justify-between items-center px-3 py-1 text-gray-800",children:[Object(s.jsx)("div",{className:"font-bold",children:e.title}),Object(s.jsx)("button",{className:"p-2 transition duration-300 ease-in-out transform hover:rotate-90",onClick:e.onCanel,children:Object(s.jsx)("i",{className:"fas fa-times"})})]}),Object(s.jsx)("div",{className:"h-full",style:{height:"calc(100% - 48px)"},children:e.children})]})]})},f=c(21),m=c(10),O="SET_IMAGE",p={image:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(m.a)(Object(m.a)({},e),{},{image:t.payload});default:return e}},g=c(32),N={textId:"",nodes:{},listText:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_NODE":return Object(m.a)(Object(m.a)({},e),{},{nodes:t.payload});case"SET_TEXT":return Object(m.a)(Object(m.a)({},e),{},{textId:t.payload});case x:return Object(m.a)(Object(m.a)({},e),{},{listText:[].concat(Object(g.a)(e.listText),[t.payload])});case d:return e.listText.find((function(e){return e.id===t.payload.id})).text=t.payload.text,Object(m.a)(Object(m.a)({},e),{},{listText:e.listText.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},w={node:{}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TRANSFORM_NODE":return Object(m.a)(Object(m.a)({},e),{},{node:t.payload});default:return e}},S=Object(f.a)({imageReducer:v,textReducer:y,TransformReducer:C}),k=Object(f.b)(S);function T(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"border-b bg-white flex items-center",children:[Object(s.jsxs)("div",{className:"px-4 py-3 flex-grow",children:[Object(s.jsx)("button",{type:"button",className:"px-2",children:Object(s.jsx)("i",{className:"fas fa-bars"})}),Object(s.jsx)("button",{type:"button",className:"px-2 font-medium hover:text-blue-700",onClick:function(){return n(!0)},children:"New Design"})]}),Object(s.jsx)("div",{className:"px-2",children:Object(s.jsxs)("button",{className:"px-4 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold",onClick:function(){console.log(k.getState())},children:[Object(s.jsx)("i",{className:"fas fa-eye mr-2"}),"Preview"]})})]}),Object(s.jsx)(h,{title:"Start new design",visible:c,onCanel:function(){return n(!1)},children:Object(s.jsxs)("div",{className:"flex h-full border-t",children:[Object(s.jsxs)("div",{className:"w-1/4 bg-gray-100 h-full",children:[Object(s.jsxs)("div",{className:"py-2 px-3 hover:bg-gray-200 font-medium cursor-pointer",children:[Object(s.jsx)("i",{className:"fas fa-award mr-2"}),"Recommendation"]}),Object(s.jsxs)("div",{className:"py-2 px-3 hover:bg-blue-200 font-medium cursor-pointer",children:[Object(s.jsx)("i",{className:"fab fa-facebook text-blue-600 mr-2"}),"Facebook"]}),Object(s.jsxs)("div",{className:"py-2 px-3 hover:bg-purple-200 font-medium cursor-pointer",children:[Object(s.jsx)("i",{className:"fab fa-instagram text-purple-600 mr-2"}),"Instagram"]}),Object(s.jsxs)("div",{className:"py-2 px-3 hover:bg-red-200 font-medium cursor-pointer",children:[Object(s.jsx)("i",{className:"fab fa-accusoft text-red-600 mr-2"}),"Custom"]})]}),Object(s.jsx)("div",{className:"w-3/4 h-full"})]})})]})}function R(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],r=c[1];return k.subscribe((function(){k.getState().imageReducer.image&&r(k.getState().imageReducer.image.currentSrc)})),Object(s.jsxs)("div",{className:"".concat(e.isShowCrop?"flex justify-center items-center h-screen w-screen absolute top-0 left-0":"hidden"),children:[Object(s.jsx)("div",{className:"w-screen h-screen bg-gray-500 opacity-50 absolute z-10 top-0 left-0"}),Object(s.jsxs)("div",{className:"h-3/4 w-1/2 bg-white absolute z-20 rounded shadow-lg",children:[Object(s.jsxs)("div",{className:"flex justify-between items-center px-3 pt-2 text-gray-600",children:[Object(s.jsx)("div",{className:"font-bold",children:"CROP IMAGE"}),Object(s.jsx)("button",{className:"p-2 transition duration-300 ease-in-out transform hover:rotate-90",onClick:function(){return e.setIsShowCrop(!1)},children:Object(s.jsx)("i",{className:"fas fa-times"})})]}),Object(s.jsxs)("div",{className:"px-2 h-full",children:[Object(s.jsxs)("div",{className:"border border-gray-200 rounded",style:{height:"calc(100% - 150px)"},children:[Object(s.jsxs)("div",{className:"bg-gray-100 rounded p-2 text-sm text-gray-600",children:[Object(s.jsx)("button",{onClick:function(){},children:Object(s.jsx)("i",{className:"fas fa-undo px-2"})}),Object(s.jsx)("button",{children:Object(s.jsx)("i",{className:"fas fa-redo px-2"})})]}),Object(s.jsx)("div",{className:"p-4 flex justify-center",style:{height:"calc(100% - 36px)"},children:Object(s.jsx)("img",{src:n,alt:""})})]}),Object(s.jsxs)("div",{className:"text-right mt-4",children:[Object(s.jsx)("button",{className:"text-gray-600 rounded font-medium px-6 py-2 mr-2 hover:text-gray-700",onClick:function(){return e.setIsShowCrop(!1)},children:"Cancel"}),Object(s.jsxs)("button",{className:"bg-blue-500 text-white rounded font-medium px-6 py-2 hover:bg-blue-600",children:[Object(s.jsx)("i",{className:"fas fa-crop"})," Crop"]})]})]})]})]})}var E=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(100),i=Object(l.a)(r,2),j=i[0],o=i[1];function b(e){o(e),n(!0)}function d(e){o(e?j+10:j-10)}return Object(s.jsxs)("div",{className:"flex text-sm",children:[Object(s.jsx)("div",{className:"px-2 py-3 text-gray-400 cursor-pointer hover:text-blue-500",onClick:function(){return d(!1)},children:Object(s.jsx)("i",{className:"fas fa-search-minus"})}),Object(s.jsxs)("div",{className:"px-2 py-3 font-medium text-gray-700 cursor-pointer relative",children:[Object(s.jsxs)("div",{onClick:function(){return n(!c)},children:[j,"%"]}),Object(s.jsxs)("div",{className:"absolute bg-white mt-1 rounded",style:{right:-10},hidden:c,children:[Object(s.jsx)("div",{className:"px-4 py-2 hover:text-blue-500",onClick:function(){return b(50)},children:"50%"}),Object(s.jsx)("div",{className:"px-4 py-2 hover:text-blue-500",onClick:function(){return b(75)},children:"75%"}),Object(s.jsx)("div",{className:"px-4 py-2 hover:text-blue-500",onClick:function(){return b(100)},children:"100%"}),Object(s.jsx)("div",{className:"px-4 py-2 hover:text-blue-500",onClick:function(){return b(125)},children:"125%"}),Object(s.jsx)("div",{className:"px-4 py-2 hover:text-blue-500",onClick:function(){return b(150)},children:"150%"})]})]}),Object(s.jsx)("div",{className:"px-2 py-3 text-gray-400 cursor-pointer hover:text-blue-500",onClick:function(){return d(!0)},children:Object(s.jsx)("i",{className:"fas fa-search-plus"})})]})};function I(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(R,{isShowCrop:c,setIsShowCrop:n}),Object(s.jsxs)("div",{className:"flex text-gray-700",children:[Object(s.jsxs)("div",{className:"flex text-sm flex-grow",children:[Object(s.jsx)(F,{icon:"fas fa-undo"}),Object(s.jsx)(F,{icon:"fas fa-redo"}),Object(s.jsx)("div",{className:"pl-4 py-3 text-gray-600 hover:text-gray-700 cursor-pointer",onClick:function(){n(!0)},children:Object(s.jsx)("i",{className:"fas fa-crop"})}),Object(s.jsx)(F,{icon:"fas fa-fill-drip"})]}),Object(s.jsx)(E,{})]})]})}var F=function(e){return Object(s.jsx)("div",{className:"pl-4 py-3 text-gray-400",children:Object(s.jsx)("i",{className:e.icon})})};function D(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],r=function(e){var t;k.dispatch((t=e.currentTarget,{type:O,payload:t}))};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"font-bold text-xl text-gray-700 mb-3",children:"Photo"}),Object(s.jsxs)("label",{className:"bg-blue-500 text-white block p-2 text-center font-bold cursor-pointer hover:bg-blue-600 shadow rounded",htmlFor:"image",children:[Object(s.jsx)("input",{type:"file",hidden:!0,accept:"image/*",id:"image",onChange:function(e){var t=e.currentTarget.files[0],s=[].concat(Object(g.a)(c),[URL.createObjectURL(t)]);n(s)}}),Object(s.jsx)("i",{className:"fas fa-cloud-upload-alt mr-2"})," Upload"]}),Object(s.jsx)("div",{className:"overflow-auto mt-1",style:{height:"calc(100vh - 150px)"},children:c&&c.map((function(e){return Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("img",{src:e,alt:"",onClick:r})},Math.floor(100*Math.random()))}))})]})}c(99);var M=function(){var e=Object(o.b)(),t=function(t){var c=t.target.ownerDocument.defaultView.getComputedStyle(t.target,null),s={id:Math.random().toString(36).substring(7),text:t.target.innerText,fontFamily:c.fontFamily,fontSize:Number(c.fontSize.match(/\d+/)[0])};e({type:x,payload:s})};return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"font-bold text-xl text-gray-700 mb-3",children:"Text"}),Object(s.jsxs)("div",{className:"p-2 text-xl",children:[Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("button",{className:"font-bold",onClick:t,children:"Bold"})}),Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("button",{className:"font-bold italic",onClick:t,children:"Bold Italic"})}),Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("button",{onClick:t,children:"Normal"})}),Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("button",{onClick:t,className:"italic",children:"Normal Italic"})})]})]})},_=c(18);function z(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"bg-gray-800 w-16 h-full flex-col",children:[Object(s.jsx)("div",{className:"text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer",children:Object(s.jsx)(_.b,{to:"/",children:Object(s.jsx)("i",{className:"fas fa-image text-2xl"})})}),Object(s.jsx)("div",{className:"text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer",children:Object(s.jsx)("i",{className:"fas fa-disease text-2xl"})}),Object(s.jsx)("div",{className:"text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer",children:Object(s.jsx)("i",{className:"fas fa-paragraph text-2xl"})}),Object(s.jsx)("div",{className:"text-white w-full h-16 flex justify-center items-center hover:bg-gray-900 cursor-pointer",children:Object(s.jsx)(_.b,{to:"/text",children:Object(s.jsx)("i",{className:"fab fa-autoprefixer text-2xl"})})})]})})}var B=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(b.f)(),i=Object(o.b)(),j=Object(o.c)((function(e){return e.textReducer.textId})),x=Object(o.c)((function(e){return e.textReducer.listText}));function u(e){var t=Object(m.a)({},c);t.text=e,i({type:d,payload:t})}return Object(a.useEffect)((function(){var e=x.find((function(e){return e.id===j}));e?n(e):console.error("text config not found!!!")}),[x,j]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"mb-2 font-medium",children:"Text"}),Object(s.jsx)("input",{type:"text",className:"px-4 py-2 bg-gray-100 w-full mb-3 rounded",defaultValue:null===c||void 0===c?void 0:c.text,onChange:function(e){return u(e.target.value)}}),Object(s.jsx)("div",{className:"mb-2 font-medium",children:"Font style"}),Object(s.jsx)("div",{className:"mb-4 text-sm",children:Object(s.jsxs)("div",{className:"flex justify-between items-center",children:[Object(s.jsxs)("label",{className:"mr-2 font-bold",children:[Object(s.jsx)("input",{type:"checkbox"})," Bold"]}),Object(s.jsxs)("label",{className:"mr-2 italic",children:[Object(s.jsx)("input",{type:"checkbox"})," Italic"]}),Object(s.jsxs)("label",{className:"mr-2 underline",children:[Object(s.jsx)("input",{type:"checkbox"})," Underline"]})]})}),Object(s.jsxs)("button",{className:"px-6 py-2 bg-blue-500 text-white rounded font-medium",onClick:function(){r.push("/text")},children:[Object(s.jsx)("i",{className:"fas fa-save mr-2"}),"Save"]})]})};var L=function(){return Object(s.jsxs)("div",{className:"bg-gray-100 h-full",children:[Object(s.jsx)(T,{}),Object(s.jsxs)("div",{className:"flex",style:{height:"calc(100vh - 49px)"},children:[Object(s.jsx)(z,{}),Object(s.jsx)("div",{className:"w-72 border-r bg-white p-3",children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/text/edit",children:Object(s.jsx)(B,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/text",children:Object(s.jsx)(M,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/",children:Object(s.jsx)(D,{})})]})}),Object(s.jsxs)("div",{className:"flex-grow",children:[Object(s.jsx)(I,{}),Object(s.jsx)("div",{className:"flex items-center justify-center",style:{height:"calc(100% - 48px)"},children:Object(s.jsx)(u,{})})]})]})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))},U=Object(f.b)(S);i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(_.a,{children:Object(s.jsx)(o.a,{store:U,children:Object(s.jsx)(L,{})})})}),document.getElementById("root")),P()},99:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.1dfc9a77.chunk.js.map