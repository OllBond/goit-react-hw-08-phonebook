"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361],{9361:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(8724),l=t(1413),i=t(9860),u=t(158),o={name:"",email:"",password:""},s={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},c=t(9e3),d="registerForm_form__8tKcV",m=t(3329),f=function(e){var n=e.onSubmit,t=(0,u.Z)({initialState:o,onSubmit:n}),r=t.state,a=t.handleChange,f=t.handleSubmit,p=r.name,h=r.email,b=r.password;return(0,m.jsxs)("form",{onSubmit:f,className:d,children:[(0,m.jsx)(i.Z,(0,l.Z)({value:p,onChange:a},s.name)),(0,m.jsx)(i.Z,(0,l.Z)({value:h,onChange:a},s.email)),(0,m.jsx)(i.Z,(0,l.Z)({value:b,onChange:a},s.password)),(0,m.jsx)(c.Z,{children:"Register"})]})},p=function(){var e=(0,r.I0)();return(0,m.jsx)("div",{children:(0,m.jsx)(f,{onSubmit:function(n){e((0,a.IU)(n))}})})}},9e3:function(e,n,t){t.d(n,{Z:function(){return l}});var r="button_btn__aZIRC",a=t(3329),l=function(e){var n=e.children,t=e.type,l=void 0===t?"submit":t;return(0,a.jsx)("button",{type:l,className:r,children:n})}},9860:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),a=t(3366);var l=t(2791),i="textField_wrapper__50VcK",u="textField_field__38YRA",o="textField_label__sEkJy",s=t(3329),c=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=function(e,n){if(null==e)return{};var t,r,l=(0,a.Z)(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}(e,c),m=(0,l.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}()}),[]);return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("label",{htmlFor:"id",className:o,children:n}),(0,s.jsx)("input",(0,r.Z)({className:u,id:m,onChange:t},d))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),l=t(9439),i=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,u=(0,i.useState)((0,a.Z)({},n)),o=(0,l.Z)(u,2),s=o[0],c=o[1],d=(0,i.useCallback)((function(e){var n=e.target,t=n.name,l=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,l))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}},3366:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=361.d3f0f1d6.chunk.js.map