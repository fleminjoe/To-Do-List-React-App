(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),i=c(3),l=(c(13),c(8)),d=c(0);function r(t){var e=t.inputText,c=t.setInputText,o=t.todos,s=t.setTodos,n=t.setStatus;return Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{value:e,onChange:function(t){c(t.target.value)},type:"text",className:"todo-input"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(l.a)(o),[{text:e,completed:!1,id:1e3*Math.random()}])),c("")},className:"todo-button",type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){n(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})}var u=c(6);function j(t){var e=t.todo,c=t.text,o=t.todos,s=t.setTodos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(e.completed?"completed":""),children:c}),Object(d.jsx)("button",{className:"complete-btn",onClick:function(t){s(o.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{className:"trash-btn",onClick:function(t){s(o.filter((function(t){return t.id!==e.id})))},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}function b(t){var e=t.todos,c=t.setTodos,o=t.filteredTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:o.map((function(t){return Object(d.jsx)(j,{todo:t,text:t.text,todos:e,setTodos:c},t.id)}))})})}var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)([]),a=Object(i.a)(n,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),m=f[0],O=f[1],p=Object(o.useState)([]),x=Object(i.a)(p,2),h=x[0],v=x[1];Object(o.useEffect)((function(){T()}),[]),Object(o.useEffect)((function(){N(),g()}),[l,m]);var N=function(){switch(m){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}},g=function(){localStorage.setItem("todos",JSON.stringify(l))},T=function(){var t=JSON.parse(localStorage.getItem("todos"));null===t?localStorage.setItem("todos",[]):u(t)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"My Todo List"})}),Object(d.jsx)(r,{inputText:c,setInputText:s,todos:l,setTodos:u,setStatus:O}),Object(d.jsx)(b,{todos:l,setTodos:u,filteredTodos:h})]})},m=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(e){var c=e.getCLS,o=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;c(t),o(t),s(t),n(t),a(t)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.ea92bb0b.chunk.js.map