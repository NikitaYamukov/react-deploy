(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,function(e,t,a){e.exports={nav:"Navbar_nav__31IDo",item:"Navbar_item__EEX2q",activeLink:"Navbar_activeLink__35d06"}},,,function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2htOn",dialogsItems:"Dialogs_dialogsItems__2e_Yh",active:"Dialogs_active__3f1S3",messages:"Dialogs_messages__3D-2U",message:"Dialogs_message__2Vzmm",button:"Dialogs_button__1Zphk"}},,,,,function(e,t,a){e.exports={item:"MyPosts_item__1iRXc",postsBlock:"MyPosts_postsBlock__1Jp61",posts:"MyPosts_posts__3o6AI",button:"MyPosts_button__urbuQ"}},,,,function(e,t,a){e.exports={size:"ProfileInfo_size__y2m8u",descriptionBlock:"ProfileInfo_descriptionBlock__2icl3"}},,,,function(e,t,a){e.exports={header:"Header_header__rxOkS"}},,,function(e,t,a){e.exports={item:"Post_item__2s0hf"}},function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=function(e,t){switch(t.type){case"ADD-POST":var a={id:5,message:e.newPostText,likesCount:0};return e.posts.push(a),e.newPostText="",e;case"UPDATE-NEW-POST-TEXT":return e.newPostText=t.newText,e;default:return e}},s=function(e,t){switch(t.type){case"UPDATE-NEW-MESSAGE_BODY":return e.newMessageBody=t.body,e;case"SEND_MESSAGE":var a=e.newMessageBody;return e.newMessageBody="",e.messages.push({id:5,message:a}),e;default:return e}},i=function(e,t){return e},r={_state:{profilePage:{posts:[{id:1,message:"Hi, how are you?",likesCount:10},{id:2,message:"It's my first post",likesCount:25},{id:3,message:"\u041f\u0440\u0438\u0432\u0435\u0442\u0442\u0442\u0442\u0442",likesCount:12},{id:4,message:"\u0423\u0423\u0423\u0423\u0423\u0423\u0423",likesCount:21}],newPostText:"new posts"},dialogsPage:{dialogs:[{id:1,name:"Sasha"},{id:2,name:"Valera"},{id:3,name:"Andrey"},{id:4,name:"Dima"},{id:5,name:"Masha"},{id:6,name:"Vitya"}],messages:[{id:1,message:"Hello"},{id:2,message:"How are you?"},{id:3,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:4,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:5,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"}],newMessageBody:""},sidebar:{}},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profilePage=n(this._state.profilePage,e),this._state.dialogsPage=s(this._state.dialogsPage,e),this._state.sidebar=i(this._state.sidebar,e),this._callSubscriber(this._state)}},c=r;window.state=r;var l=a(0),o=a.n(l),u=a(18),m=a.n(u),d=(a(28),a(29),a(19)),g=a.n(d),E=function(){return o.a.createElement("header",{className:g.a.header},o.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/63/Logo_tutu_480x270_%D0%B1%D0%B5%D0%B7_%D1%84%D0%BE%D0%BD%D0%B0.png"}))},p=a(3),v=a.n(p),h=a(5),f=function(){return o.a.createElement("nav",{className:v.a.nav},o.a.createElement("div",{className:v.a.item},o.a.createElement(h.b,{to:"/profile",activeClassName:v.a.activeLink},"Profile")),o.a.createElement("div",{className:"".concat(v.a.item," ").concat(v.a.active)},o.a.createElement(h.b,{to:"/dialogs",activeClassName:v.a.activeLink},"Messages")),o.a.createElement("div",{className:v.a.item},o.a.createElement(h.b,{to:"/news",activeClassName:v.a.activeLink},"News")),o.a.createElement("div",{className:v.a.item},o.a.createElement(h.b,{to:"/music",activeClassName:v.a.activeLink},"Music")),o.a.createElement("div",{className:v.a.item},o.a.createElement(h.b,{to:"/settings",activeClassName:v.a.activeLink},"Settings")))},w=a(11),N=a.n(w),_=a(22),b=a.n(_),P=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:b.a.item},o.a.createElement("img",{src:"data:image/png;base64,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"}),e.message,o.a.createElement("div",null,o.a.createElement("span",null,"like")," ",e.likesCount)))},A=function(e){var t=e.posts.map((function(e){return o.a.createElement(P,{message:e.message,likesCount:e.likesCount})})),a=o.a.createRef();return o.a.createElement("div",{className:N.a.postsBlock},o.a.createElement("h3",null,"My posts"),o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("textarea",{onChange:function(){var t=a.current.value;e.dispatch(function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(t))},ref:a,value:e.newPostText})," "),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.dispatch({type:"ADD-POST"})},className:N.a.button},"Add post"))),o.a.createElement("div",{className:N.a.posts},t))},x=a(15),D=a.n(x),k=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:D.a.size},o.a.createElement("img",{src:"https://images.wallpaperscraft.ru/image/plyazh_okean_pesok_palmy_bungalo_95633_1920x1080.jpg"})),o.a.createElement("div",{className:D.a.descriptionBlock},"ava + description"))},L=function(e){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(A,{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,dispatch:e.dispatch}))},y=a(6),S=a.n(y),C=function(e){var t="/dialogs/"+e.id;return o.a.createElement("div",{className:"".concat(S.a.dialog," ").concat(S.a.active)},o.a.createElement(h.b,{to:t},e.name))},B=function(e){return o.a.createElement("div",{className:S.a.dialog},e.message)},T=function(e){var t=e.store.getState().dialogsPage,a=t.dialogs.map((function(e){return o.a.createElement(C,{name:e.name,id:e.id})})),n=t.messages.map((function(e){return o.a.createElement(B,{message:e.message})})),s=t.newMessageBody;return o.a.createElement("div",{className:S.a.dialogs},o.a.createElement("div",{className:S.a.dialogsItems},a),o.a.createElement("div",{className:S.a.messages},o.a.createElement("div",null,n),o.a.createElement("div",null,o.a.createElement("textarea",{value:s,onChange:function(t){var a=t.target.value;e.store.dispatch(function(e){return{type:"UPDATE-NEW-MESSAGE_BODY",body:e}}(a))},placeholder:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){e.store.dispatch({type:"SEND_MESSAGE"})},className:S.a.button},"Send"))))},O=a(8),Y=(a(35),function(e){return o.a.createElement("div",null,"News")}),X=(a(36),function(e){return o.a.createElement("div",null,"Music")}),j=(a(37),function(e){return o.a.createElement("div",null,"Settings")}),V=function(e){return o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement("div",{className:"app-wrapper-content"},o.a.createElement(O.a,{path:"/dialogs",render:function(){return o.a.createElement(T,{store:e.store})}}),o.a.createElement(O.a,{path:"/profile",render:function(){return o.a.createElement(L,{profilePage:e.state.profilePage,dispatch:e.dispatch})}}),o.a.createElement(O.a,{exact:!0,path:"/news",render:function(){return o.a.createElement(Y,null)}}),o.a.createElement(O.a,{exact:!0,path:"/music",render:function(){return o.a.createElement(X,null)}}),o.a.createElement(O.a,{exact:!0,path:"/settings",render:function(){return o.a.createElement(j,null)}})))},M=function(e){m.a.render(o.a.createElement(h.a,null,o.a.createElement(V,{state:e,dispatch:c.dispatch.bind(c),store:c})),document.getElementById("root"))};M(c.getState()),c.subscribe(M)}],[[23,1,2]]]);
//# sourceMappingURL=main.535c80a2.chunk.js.map