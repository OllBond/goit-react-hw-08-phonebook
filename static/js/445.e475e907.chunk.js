"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{3445:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var r=t(9434),a=t(4942),o=t(1413),u=t(9439),c=t(2791),i=t(3355),s={name:"",number:""},l="ContactForm_wrapper__-Umw-",f="ContactForm_contactFormBlock__XJFtZ",m="ContactForm_conactFormGroup__wbR0V",p="ContactForm_title__jZguf",d="ContactForm_label__-cVXI",v="ContactForm_input__Bl93P",h="ContactForm_btnAddContact__AepU1",_=t(3329),y=function(){var e=(0,c.useState)((0,o.Z)({},s)),n=(0,u.Z)(e,2),t=n[0],p=n[1],y=(0,r.I0)();(0,c.useEffect)((function(){y((0,i.yF)())}),[y]);var b=function(e){var n=e.target,t=n.name,r=n.value;p((function(e){return(0,o.Z)((0,o.Z)({},e),{},(0,a.Z)({},t,r))}))},x=t.name,C=t.number;return(0,_.jsx)("div",{className:l,children:(0,_.jsx)("div",{className:f,children:(0,_.jsxs)("form",{className:"",onSubmit:function(e){e.preventDefault(),y((0,i.v6)({name:x,number:C})),p((0,o.Z)({},s))},children:[(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("label",{className:d,children:"Name"}),(0,_.jsx)("input",{className:v,value:x,onChange:b,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("label",{className:d,children:"Number"}),(0,_.jsx)("input",{className:v,value:C,onChange:b,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsx)("button",{className:h,type:"submit",children:"Add contact"})]})})})},b=t(5653),x=function(e){return e.filter},C="Filter_conactFormGroup__vb5s5",j="Filter_label__vEd1E",g="Filter_input__N7T3z",N=function(){var e=(0,r.v9)(x),n=(0,r.I0)();return(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("label",{className:j,children:"Find contacts by name"}),(0,_.jsx)("input",{className:g,value:e,onChange:function(e){var t=e.target;n((0,b.T)(t.value))},type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})},F="NOT_FOUND";var A=function(e,n){return e===n};function w(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?A:r,o=t.maxSize,u=void 0===o?1:o,c=t.resultEqualityCheck,i=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),s=1===u?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:F},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(i):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return F}return{get:r,put:function(n,a){r(n)===F&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,i);function l(){var n=s.get(arguments);if(n===F){if(n=e.apply(null,arguments),c){var t=s.getEntries(),r=t.find((function(e){return c(e.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function k(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function Z(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var o,u=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,l=s.memoizeOptions,f=void 0===l?t:l,m=Array.isArray(f)?f:[f],p=k(r),d=e.apply(void 0,[function(){return u++,i.apply(null,arguments)}].concat(m)),v=e((function(){for(var e=[],n=p.length,t=0;t<n;t++)e.push(p[t].apply(null,arguments));return o=d.apply(null,e)}));return Object.assign(v,{resultFunc:i,memoizedResultFunc:d,dependencies:p,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var z=Z(w),E=z([x,function(e){return e.contacts.items}],(function(e,n){var t=e.toLowerCase();return n.filter((function(e){var n=e.name,r=e.phone;return n.toLowerCase().includes(t)||r.toLowerCase().includes(t)}))})),I="ContactItem_btnDeleteContact__qOFx1",q="ContactItem_listItems__r3-QR",O=function(e){var n=e.id,t=e.name,a=e.phone,o=(0,r.I0)();return(0,_.jsxs)("li",{className:q,children:[t,": ",a,(0,_.jsx)("button",{className:I,onClick:function(){return o((0,i.in)(n))},type:"button",children:"Delete"})]})},B="ContactList_listContact__gg2c1",R=function(){var e=(0,r.v9)(E);return(0,_.jsx)("ul",{className:B,children:e.map((function(e){var n=e.id,t=e.name,r=e.phone;return(0,_.jsx)(O,{id:n,name:t,number:r},n)}))})},S=R;R.defaultProps={contacts:[]};var D=function(){var e=Boolean((0,r.v9)(E).length);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h1",{className:p,children:"Phonebook"}),(0,_.jsx)(y,{}),(0,_.jsx)("h2",{className:p,children:"Contacts"}),(0,_.jsx)(N,{}),e&&(0,_.jsx)(S,{}),!e&&(0,_.jsx)("p",{children:"No contacts in list"})]})},L=function(){return(0,_.jsx)(D,{})}}}]);
//# sourceMappingURL=445.e475e907.chunk.js.map