(this.webpackJsonpreactjsdasar=this.webpackJsonpreactjsdasar||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(17),i=c.n(s),l=(c(42),c(43),c(10)),o=c(4),r=c(15),j=c(12),b=c(3),d=c(16),u=(c(48),c(0)),p=function(e){var t=e.label,c=Object(d.a)(e,["label"]);return Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("p",{className:"label",children:t}),Object(u.jsx)("input",Object(b.a)({className:"input"},c))]})},h=(c(50),function(e){var t=e.title,c=Object(d.a)(e,["title"]);return Object(u.jsxs)("button",Object(b.a)(Object(b.a)({className:"btn"},c),{},{children:[" ",t]}))}),g=function(e){var t=e.width,c=e.height;return Object(u.jsx)("div",{style:{width:t,height:c}})},O=(c(51),function(e){var t=e.title,c=e.onClick;return Object(u.jsx)("p",{className:"link",onClick:c,children:t})}),m=(c(52),function(e){var t=e.img,c=Object(d.a)(e,["img"]);return Object(u.jsxs)("div",{className:"upload",children:[t&&Object(u.jsx)("img",{src:t,className:"preview",alt:"preview"}),Object(u.jsx)("input",Object(b.a)({type:"file"},c))]})}),f=(c(53),function(e){var t=Object.assign({},e);return Object(u.jsx)("div",{children:Object(u.jsx)("textarea",Object(b.a)({className:"text-area"},t))})}),x=(c(54),function(){var e=Object(o.f)();return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("p",{className:"logo-app",children:"iniBlog"}),Object(u.jsx)("p",{className:"menu-item",onClick:function(){return e.push("/login")},children:" Log out"})]})}),v=c.p+"static/media/form-bg.54999b8c.jpg",N=c.p+"static/media/login-bg.f3a4f5c5.jpg",y=c.p+"static/media/logo.6ce24c58.svg",k=c.p+"static/media/002youtube.e20f869b.svg",w=c.p+"static/media/007-whatsapp.f179709d.svg",P=c.p+"static/media/014-twitter.3fb30ee0.svg",C=c.p+"static/media/045-facebook.3f7115f9.svg",E=(c(56),function(e){var t=e.img;return Object(u.jsx)("div",{className:"icon-wrapper",children:Object(u.jsx)("img",{src:t,alt:"icon-medsos",className:"icon-medsos"})})}),_=function(){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:y,alt:"logo",className:"logo"})}),Object(u.jsxs)("div",{className:"social-wrapper",children:[Object(u.jsx)(E,{img:k}),Object(u.jsx)(E,{img:w}),Object(u.jsx)(E,{img:P}),Object(u.jsx)(E,{img:C})]})]}),Object(u.jsx)("div",{className:"copyright",children:Object(u.jsx)("p",{children:"Copyright"})})]})},A=(c(57),function(e){var t=Object(o.f)(),c=e.image,a=e.title,n=e.name,s=e.date,i=e.body,l=e._id,r=e.onDelete;return Object(u.jsxs)("div",{className:"blog-item",children:[Object(u.jsx)("img",{src:c,alt:"post",className:"image-thumb"}),Object(u.jsxs)("div",{className:"content-detail",children:[Object(u.jsxs)("div",{className:"title-wrapper",children:[Object(u.jsx)("p",{className:"title",children:a}),Object(u.jsxs)("div",{className:"edit-wrapper",children:[Object(u.jsx)("p",{className:"edit",onClick:function(){return t.push("/create-blog/".concat(e._id))},children:"Edit"})," | ",Object(u.jsx)("p",{className:"delete",onClick:function(){return r(l)},children:" Delete"})]})]}),Object(u.jsxs)("p",{className:"author",children:[n," - ",s]}),Object(u.jsx)("p",{className:"body",children:i}),Object(u.jsx)(g,{height:10}),Object(u.jsx)(h,{title:"View detail",onClick:function(){return t.push("/detail-blog/".concat(e._id))}})]})]})}),D=(c(58),c(11)),T=c.n(D),B=function(e){return function(t){T.a.get("https://api-blog-mern.herokuapp.com/v1/blog/posts?page=".concat(e,"&perPage=2")).then((function(e){var c=e.data;console.log("data API :",e.data),t({type:"UPDATE_DATA_BLOG",payload:c.data}),t({type:"UPDATE_PAGE",payload:{currentPage:c.current_page,totalPage:Math.ceil(c.total_data/c.per_page)}})})).catch((function(e){console.log("Error :",e)}))}},R=c(36),F=(c(77),function(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(j.c)((function(e){return e.homeReducer})),i=s.dataBlog,l=s.page,b=Object(j.b)();console.log("state global: ",i),console.log("page: ",l),Object(a.useEffect)((function(){b(B(c))}),[c,b]);var d=Object(o.f)(),p=function(e){Object(R.confirmAlert)({title:"Confirm to delete",message:"Apakah anda yakin akan menghapus post ini?",buttons:[{label:"Yes",onClick:function(){T.a.delete("http://localhost:4000/v1/blog/post/".concat(e)).then((function(e){console.log("success :",e.data),b(B(c))})).catch((function(e){console.log("err :",e)}))}},{label:"No",onClick:function(){return console.log("use disagree")}}]})};return Object(u.jsxs)("div",{className:"home-page-wrapper",children:[Object(u.jsx)("div",{className:"create-wrapper",children:Object(u.jsx)(h,{title:"Create blog",onClick:function(){return d.push("/create-blog")}})}),Object(u.jsx)(g,{height:20}),Object(u.jsx)("div",{className:"content-wrapper",children:i.map((function(e){return Object(u.jsx)(A,{image:"http://localhost:4000/".concat(e.image),title:e.title,name:e.author.name,date:e.updatedAt,body:e.body,_id:e._id,onDelete:p},e._id)}))}),Object(u.jsxs)("div",{className:"pagination",children:[Object(u.jsx)(h,{title:"Previous",onClick:function(){n(c<=1?1:c-1),console.log(c)}}),Object(u.jsx)(g,{width:20}),Object(u.jsxs)("p",{className:"text-page",children:[l.currentPage," / ",l.totalPage]}),Object(u.jsx)(g,{width:20}),Object(u.jsx)(h,{title:"Next",onClick:function(){n(c===l.totalPage?l.totalPage:c+1),console.log(c)}})]}),Object(u.jsx)(g,{height:20})]})}),L=function(){var e=Object(o.f)();return Object(u.jsxs)("div",{className:"main-page",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{src:N,className:"bg-image",alt:""})}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsx)("p",{className:"title",children:"Login"}),Object(u.jsx)(p,{label:"Email",placeholder:"Email"}),Object(u.jsx)(g,{height:10}),Object(u.jsx)(p,{label:"Password ",placeholder:"Password"}),Object(u.jsx)(g,{height:30}),Object(u.jsx)(h,{title:"Login",onClick:function(){return e.push("/")}}),Object(u.jsx)(O,{title:"Belum punya akun? silahkan daftar",onClick:function(){return e.push("/register")}})]})]})},S=(c(78),function(){var e=Object(o.f)();return Object(u.jsxs)("div",{className:"main-page",children:[Object(u.jsx)("div",{className:"left",children:Object(u.jsx)("img",{src:v,className:"bg-image",alt:""})}),Object(u.jsxs)("div",{className:"right",children:[Object(u.jsx)("p",{className:"title",children:"Register"}),Object(u.jsx)(p,{label:"Full Name",placeholder:"Full Name"}),Object(u.jsx)(g,{height:10}),Object(u.jsx)(p,{label:"Email",placeholder:"Email"}),Object(u.jsx)(g,{height:10}),Object(u.jsx)(p,{label:"Password ",placeholder:"Password"}),Object(u.jsx)(g,{height:30}),Object(u.jsx)(h,{title:"Register",onClick:function(){return e.push("/login")}}),Object(u.jsx)(O,{title:"Back to login",onClick:function(){return e.push("/login")}})]})]})}),U=(c(79),function(e,t){return{type:"SET_FORM_DATA",formType:e,formValue:t}}),I=function(e){return{type:"SET_IMG_PREVIEW",payload:e}},M=Object(o.g)((function(e){var t=Object(j.c)((function(e){return e.createBlogReducer})),c=t.form,n=t.imgPreview,s=c.title,i=c.body,l=(c.image,Object(a.useState)(!1)),b=Object(r.a)(l,2),d=b[0],x=b[1],v=Object(j.b)(),N=Object(o.f)();Object(a.useEffect)((function(){console.log("params: ",e);var t=e.match.params.id;t&&(x(!0),T.a.get("http://localhost:4000/v1/blog/post/".concat(t)).then((function(e){var t=e.data.data;console.log("success: ",t),v(U("title",t.title)),v(U("body",t.body)),v(I("http://localhost:4000/".concat(t.image)))})).catch((function(e){console.log("err: ",e)})))}),[e]);return Object(u.jsxs)("div",{className:"blog-post",children:[Object(u.jsx)(O,{title:"kembali",onClick:function(){return N.push("/")}}),Object(u.jsxs)("p",{className:"title",children:[d?"Update":"Create New"," Blog Post"]}),Object(u.jsx)(p,{label:"Post Title",value:s,onChange:function(e){return v(U("title",e.target.value))}}),Object(u.jsx)(m,{onChange:function(e){return function(e){var t=e.target.files[0];v(U("image",t)),v(I(URL.createObjectURL(t)))}(e)},img:n}),Object(u.jsx)(f,{value:i,onChange:function(e){return v(U("body",e.target.value))}}),Object(u.jsx)(g,{height:20}),Object(u.jsx)("div",{className:"btn-create",children:Object(u.jsx)(h,{title:d?"Update":"Simpan",onClick:function(){var t=e.match.params.id;d?(console.log("Update Data"),function(e,t){var c=new FormData;c.append("title",e.title),c.append("body",e.body),c.append("image",e.image),T.a.put("https://api-blog-mern.herokuapp.com/v1/blog/post/".concat(t),c,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log("update success: ",e)})).catch((function(e){console.log("err :",e)}))}(c,t)):(console.log("Create Data"),function(e){var t=new FormData;t.append("title",e.title),t.append("body",e.body),t.append("image",e.image),T.a.post("https://api-blog-mern.herokuapp.com/v1/blog/post",t,{headers:{"content-type":"multipart/form-data"}}).then((function(e){console.log("post success: ",e)})).catch((function(e){console.log("err :",e)}))}(c))}})})]})})),G=(c(80),Object(o.g)((function(e){var t=Object(a.useState)({}),c=Object(r.a)(t,2),n=c[0],s=c[1];Object(a.useEffect)((function(){var t=e.match.params.id;T.a.get("http://localhost:4000/v1/blog/post/".concat(t)).then((function(e){console.log("success: ",e),s(e.data.data)})).catch((function(e){console.log("err: ",e)}))}),[e]);var i=Object(o.f)();return n.author?Object(u.jsxs)("div",{className:"detail-blog-wrapper",children:[Object(u.jsx)("img",{className:"img-cover",src:"http://localhost:4000/".concat(n.image),alt:"thumb"}),Object(u.jsx)("p",{className:"blog-title",children:n.title}),Object(u.jsxs)("p",{className:"blog-author",children:[n.author.name," - ",n.createdAt]}),Object(u.jsx)("p",{className:"blog-body",children:n.body}),Object(u.jsx)(g,{height:20}),Object(u.jsx)(O,{title:"Kembali ke Home",onClick:function(){return i.push("/")}})]}):Object(u.jsx)("p",{children:"Loading data..."})}))),V=(c(81),function(){return Object(u.jsxs)("div",{className:"main-app-wrapper",children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{className:"content-wrapper",children:Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/create-blog/:id?",children:Object(u.jsx)(M,{})}),Object(u.jsx)(o.a,{path:"/detail-blog/:id",children:Object(u.jsx)(G,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(F,{})})]})})}),Object(u.jsx)(_,{})]})}),J=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/login",children:Object(u.jsx)(L,{})}),Object(u.jsx)(o.a,{path:"/register",children:Object(u.jsx)(S,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(V,{})})]})})},W=c(14),H={name:"Daffa"},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_NAME"===t.type?Object(b.a)(Object(b.a)({},e),{},{name:"Akbar Daffa"}):e},Y={dataBlog:[],page:{currentPage:1,totalPage:1}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_DATA_BLOG"===t.type?Object(b.a)(Object(b.a)({},e),{},{dataBlog:t.payload}):"UPDATE_PAGE"===t.type?Object(b.a)(Object(b.a)({},e),{},{page:t.payload}):e},z=c(20),Q={form:{title:"",body:"",image:""},imgPreview:null},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return"SET_FORM_DATA"===t.type?Object(b.a)(Object(b.a)({},e),{},{form:Object(b.a)(Object(b.a)({},e.form),{},Object(z.a)({},t.formType,t.formValue))}):"SET_IMG_PREVIEW"===t.type?Object(b.a)(Object(b.a)({},e),{},{imgPreview:t.payload}):e},Z=Object(W.c)({homeReducer:q,globalReducer:K,createBlogReducer:X}),$=c(37),ee=Object(W.d)(Z,Object(W.a)($.a));var te=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j.a,{store:ee,children:Object(u.jsx)(J,{})})})},ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(te,{})}),document.getElementById("root")),ce()}},[[82,1,2]]]);
//# sourceMappingURL=main.1bfab9d2.chunk.js.map