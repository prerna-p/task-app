(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),s=a.n(l),r=(a(12),a(2)),i=a(6),u=a(15),m=Object(n.createContext)(),o=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),l=Object(r.a)(a,2),s=l[0],o=l[1],d=Object(n.useState)(null),f=Object(r.a)(d,2),b=f[0],k=f[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(s))}),[s]);return c.a.createElement(m.Provider,{value:{tasks:s,addTask:function(e){o([].concat(Object(i.a)(s),[{title:e,id:Object(u.a)()}]))},deleteTask:function(e){o(s.filter((function(t){return t.id!==e})))},clearList:function(){o([])},editItem:b,findItem:function(e){var t=s.find((function(t){return t.id===e}));k(t)},editTask:function(e,t){var a=s.map((function(a){return a.id===t?{title:e,id:t}:a}));o(a),k(null)}}},e.children)},d=function(){var e=Object(n.useContext)(m),t=e.addTask,a=e.clearList,l=e.editItem,s=e.editTask,i=Object(n.useState)(""),u=Object(r.a)(i,2),o=u[0],d=u[1];return Object(n.useEffect)((function(){d(l?l.title:"")}),[l]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l?s(o,l.id):(t(o),d(""))},className:"form"},c.a.createElement("input",{onChange:function(e){d(e.target.value)},value:o,type:"text",className:"task-input",placeholder:"Add task...",required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task-btn"},l?"edit task":"add task"),c.a.createElement("button",{onClick:a,className:"btn clear-btn"},"clear")))},f=function(e){var t=e.task,a=Object(n.useContext)(m),l=a.deleteTask,s=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:function(){return l(t.id)},className:"btn-delete task-btn"},c.a.createElement("i",{className:"fas fa-trash-alt"})),c.a.createElement("button",{onClick:function(){return s(t.id)},className:"btn-edit task-btn"},c.a.createElement("i",{className:"fas fa-pen"}))))},b=function(){var e=Object(n.useContext)(m).tasks;return c.a.createElement("div",null,e.length?c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(f,{task:e,key:e.id})}))):c.a.createElement("div",{className:"no-tasks"},"No tasks yet, create one!"))},k=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("h1",null," Task Manager"))},E=function(){return c.a.createElement(o,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(k,null),c.a.createElement(d,null),c.a.createElement(b,null)))))};s.a.render(c.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.502f4d67.chunk.js.map