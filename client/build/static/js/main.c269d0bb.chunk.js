(this.webpackJsonpscheddit=this.webpackJsonpscheddit||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(7),r=c.n(i),o=c(2),l=Object(a.createContext)({}),d=function(e){var t=e.children,c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],r=s[1],d=Object(a.useState)(null),u=Object(o.a)(d,2),j=u[0],m=u[1],b=Object(a.useState)(!0),h=Object(o.a)(b,2),O=h[0],g=h[1];return Object(n.jsx)(l.Provider,{value:{isAuth:i,userName:j,isLoading:O,setAuthData:function(e){r(e)},setLoadingState:function(e){g(e)},setUserData:function(e){m(e)}},children:t})},u=c(6),j=function(e){var t=e.imgClickEvent,c=e.postFullname,a=e.imgSrc,s=e.imgAlt;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("img",{className:"image-container_item img-med",onClick:t,src:a,alt:s},c)})},m=function(e){var t=e.currImageSrc,c=e.currImageAlt,a=(e.currImageKey,e.setModalActive);return Object(n.jsx)("div",{className:"modal-background",onClick:function(){a(!1)},children:Object(n.jsx)("div",{className:"image-modal",children:Object(n.jsx)(j,{imgSrc:t,imgAlt:c})})})},b=function(){return Object(n.jsxs)("div",{className:"loading-container",children:[Object(n.jsx)("span",{className:"loading loading-anim_1",children:"."}),Object(n.jsx)("span",{className:"loading loading-anim_2",children:"."}),Object(n.jsx)("span",{className:"loading loading-anim_3",children:"."})]})},h=function(e){var t=e.videoSrc;return Object(n.jsx)("video",{className:"video","cross-origin":"anonymous",muted:!0,autoplay:"true",controls:!0,children:Object(n.jsx)("source",{src:t,type:"video/mp4"})})},O=function(e){var t=e.unchangedSrc,c=(e.currAlt,e.currKey,e.setModalActive),s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(a.useEffect)((function(){!function(){var e=t.slice(0,-4).concat("","mp4");l(e)}()}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"modal-background",onClick:function(){c(!1)},children:Object(n.jsx)("div",{className:"image-modal",children:Object(n.jsx)(h,{videoSrc:r})})})})},g=function(e){var t=e.src;return console.log(t),Object(n.jsx)("iframe",{width:"100%",height:"100%",frameborder:"0",className:"iframe",src:t,scrolling:"no",allowFullScreen:!0})},x=function(e){var t=e.embedHTML,c=(e.currAlt,e.currKey,e.setModalActive),s=Object(a.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1];return Object(a.useEffect)((function(){!function(){var e=t.split(" ").filter((function(e){return e.includes("src")})).toString().slice(4).slice(1,-1);l(e)}()}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"modal-background",onClick:function(){c(!1)},children:Object(n.jsx)("div",{className:"image-modal",children:Object(n.jsx)(g,{src:r})})})})},f=function(e){var t,c=e.userName,a=e.userSavedPosts,s=e.dataLoading,i=e.getSavedQuery,r=e.userSelectedImg,o=e.modalActive,l=e.setModalActive,d=e.imgClickEvent;return console.log(r),t=r&&o&&"image"===r.postHint?Object(n.jsx)(m,{currImageSrc:r.src,currImageAlt:r.alt,currImageKey:r.title,setModalActive:l}):r&&o&&"rich:video"===r.postHint?Object(n.jsx)(x,{embedHTML:r.mediaEmbed,setModalActive:l}):r&&o&&"link"===r.postHint&&"i.imgur.com"===r.mediaDomain?Object(n.jsx)(O,{unchangedSrc:r.src,setModalActive:l}):null,Object(n.jsxs)("main",{className:"dashboard-container",children:[Object(n.jsx)("aside",{className:"dashboard-header",children:Object(n.jsxs)("h1",{className:"dashboard-header_text",children:["Showing saved content for"," ",Object(n.jsxs)("span",{className:"contrast-text",children:["u/",c]})]})}),Object(n.jsx)("section",{className:"image-container",children:a?a.map((function(e){return Object(n.jsx)(j,{imgClickEvent:d,postFullname:e.postFullName,imgSrc:e.imgMed,imgAlt:e.title})})):Object(n.jsx)("p",{children:"No saved images found."})}),a&&!s?Object(n.jsx)("button",{className:"btn",onClick:i,children:Object(n.jsx)("p",{children:"Load More"})}):Object(n.jsx)(b,{}),t]})},v=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(!1),r=Object(o.a)(i,2),d=r[0],j=r[1],m=Object(a.useState)([]),b=Object(o.a)(m,2),h=b[0],O=b[1],g=Object(a.useState)(1),x=Object(o.a)(g,2),v=x[0],p=x[1],N=Object(a.useState)(!1),S=Object(o.a)(N,2),A=S[0],k=S[1],w=Object(a.useState)(!1),F=Object(o.a)(w,2),E=(F[0],F[1],Object(a.useContext)(l).userName),C=function(){k(!0),console.log("".concat("http://localhost:8081/dashboard")),fetch("".concat("http://localhost:8081/dashboard","/").concat(v),{mode:"cors",method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){if(200===e.status)return e.json();throw new Error("Failed to retrieve subreddits")})).then((function(e){O(1!==v?function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))}:e),k(!1)})).catch((function(e){console.error(e)}))};return Object(a.useEffect)((function(){C()}),[]),Object(a.useEffect)((function(){h.length>1&&p(h.slice(h.length-1)[0].postFullname)}),[h]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(f,{userName:E,userSavedPosts:h,dataLoading:A,getSavedQuery:C,userSelectedImg:c,modalActive:d,setModalActive:j,imgClickEvent:function(e){var t=h.find((function(t){return t.title===e.target.alt})),c=t.imgFull,n=t.title,a=t.postHint,i=t.mediaEmbed,r=t.domain;s({src:c,alt:n,postHint:a,mediaEmbed:i,mediaDomain:r}),j(!0)}})})},p=function(e){var t=e.url;return Object(n.jsx)(s.a.Fragment,{children:Object(n.jsx)("section",{className:"login",children:Object(n.jsx)("a",{className:"high-contrast-btn login-link",href:t,children:"Login"})})})},N=function(e){var t="http://localhost:8081/auth/reddit";return console.log(t),Object(n.jsx)(s.a.Fragment,{children:Object(n.jsxs)("section",{className:"welcome",children:[Object(n.jsx)("h1",{className:"welcome-header_text",children:"All of your saved images"}),Object(n.jsx)("h2",{className:"welcome-subhead",children:"in one convenient place"}),Object(n.jsx)("p",{className:"welcome-description_text",children:"Log in through Reddit and we\u2019ll take care of the rest. You will be able to scroll through all images saved to your Reddit account to your heart\u2019s content."}),Object(n.jsx)(p,{url:t})]})})},S=function(e){var t=Object(a.useContext)(l),c=t.isAuth,s=t.setAuthData,i=t.setLoadingState,r=t.setUserData;return Object(a.useEffect)((function(){fetch("http://localhost:8081/auth/login/success",{mode:"cors",method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){if(i(!0),200===e.status)return e.json();throw new Error("Failed to authenticate user")})).then((function(e){s(!0),i(!1),r(e.user)})).catch((function(e){s(!1),r(null),i(!0),console.error(e)}))}),[]),Object(n.jsx)(n.Fragment,{children:c?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(v,{})}):Object(n.jsx)(N,{})})},A=function(){var e=Object(a.useContext)(l),t=e.isAuth,c=e.setAuthData;e.setLoadingState;return Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsx)("ul",{className:"navbar-list",children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"navbar-title",children:"Saveddit"}),Object(n.jsx)("li",{className:"high-contrast-btn-sm navbar-list_item",onClick:function(){window.open("https://aqueous-hollows-02149.herokuapp.com/auth/logout","_self"),c(!1)},children:"Sign out"})]}):Object(n.jsx)("h1",{className:"navbar-title",children:"Saveddit"})})})};var k=function(){return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(S,{})]})};c(13);r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(d,{children:Object(n.jsx)(k,{})})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c269d0bb.chunk.js.map