webpackJsonp([1],{"01A+":function(t,e){},"0Ron":function(t,e){},"1GJV":function(t,e){},"2QFz":function(t,e){},"3nwK":function(t,e){},"8cQr":function(t,e){},Bqva:function(t,e){},DPJ7:function(t,e){},DWc2:function(t,e){},EZPG:function(t,e){},KAhP:function(t,e){},MU3i:function(t,e){},MkH3:function(t,e){},Mkvb:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={data:()=>({NavData:[{to:"/",text:"首页",class:"homeText"},{to:"/books",text:"书籍",class:"booksText"},{to:"/movie",text:"电影",class:"movieText"},{to:"/Mine",text:"我的",class:"myText"}]})},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("ul",t._l(t.NavData,function(e){return s("router-link",{class:e.class,attrs:{to:e.to,tag:"li"}},[t._v("\n          "+t._s(e.text)+"\n    ")])}))])},staticRenderFns:[]};var o={name:"App",components:{NavBar:s("VU/8")(a,n,!1,function(t){s("MkH3")},"data-v-29f7c48a",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("01A+")},null,null).exports,l=s("/ocq"),v={data:()=>({}),components:{}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("h1",[t._v("欢迎来到豆瓣")]),t._v(" "),s("div",{staticClass:"LoginContent"},[t._m(0),t._v(" "),s("div",{staticClass:"Wrapper"},[s("router-link",{attrs:{to:"Register"}},[t._v("注册豆瓣")]),t._v("\n          |\n          "),t._v(" "),s("router-link",{attrs:{to:"RecoverPassword"}},[t._v("找回密码")])],1),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{attrs:{action:"",method:"get"}},[e("div",{staticClass:"LoginInfo"},[e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"邮箱 / 手机号 / 用户名"}})]),this._v(" "),e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"请输入密码"}})])]),this._v(" "),e("button",{staticClass:"SubmitBtn",attrs:{type:"submit"}},[this._v("登录")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"LoginFooter"},[e("div",{staticClass:"MoreLogin"},[e("a",{attrs:{href:""}},[this._v("微信登录")]),this._v(" "),e("span",[this._v("|")]),this._v(" "),e("a",{attrs:{href:""}},[this._v("微博登录")])])])}]};var d=s("VU/8")(v,u,!1,function(t){s("1GJV")},"data-v-6160f187",null).exports,_={data:()=>({}),components:{}},m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Register"},[e("h1",[this._v("欢迎来到豆瓣")]),this._v(" "),e("div",{staticClass:"RegisterContent"},[e("form",{attrs:{action:"",method:"get"}},[e("div",{staticClass:"RegisterInfo"},[e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"邮箱 / 手机号"}})]),this._v(" "),e("label",{attrs:{for:""}},[e("input",{attrs:{type:"password",placeholder:"请输入密码"}})]),this._v(" "),e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"请输入昵称"}})])]),this._v(" "),e("button",{staticClass:"SubmitBtn",attrs:{type:"submit"}},[this._v("登录")])])])])}]};var h=s("VU/8")(_,m,!1,function(t){s("Mkvb")},"data-v-34649853",null).exports,p={data:()=>({}),components:{}},f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"RecoverPassword"},[e("h1",[this._v("欢迎来到豆瓣")]),this._v(" "),e("div",{staticClass:"RegisterContent"},[e("form",{attrs:{action:"",method:"get"}},[e("div",{staticClass:"RegisterInfo"},[e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"邮箱 / 手机号"}})]),this._v(" "),e("label",{attrs:{for:""}},[e("input",{attrs:{type:"text",placeholder:"请输入验证码"}}),this._v(" "),e("img",{attrs:{src:"https://www.douban.com/misc/captcha?id=ZSqNugpSdIoz26crasVJUheF:en&size=m",alt:""}})])]),this._v(" "),e("button",{staticClass:"SubmitBtn",attrs:{type:"submit"}},[this._v("登录")])])])])}]};var b=s("VU/8")(p,f,!1,function(t){s("edZ8")},"data-v-087d561f",null).exports,g={data:()=>({items:[{text:"登录",to:"/login"},{text:"即将上映",to:"CinemaMore/fox"},{text:"虚构类",to:"BookMore/BookFiction"},{text:"非虚构类",to:"BookMore/BookNonfiction"}]}),components:{}},C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"HomeSubnav"},t._l(t.items,function(e){return s("router-link",{attrs:{to:e.to}},[t._v("\n          "+t._s(e.text)+" \n      ")])}))},staticRenderFns:[]};var k=s("VU/8")(g,C,!1,function(t){s("2QFz")},"data-v-014f53ed",null).exports,M={data:()=>({events:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/event/list?loc=108288").then(e=>{t.events=e.events})},components:{}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"HomeList"},t._l(t.events,function(e,i){return s("router-link",{attrs:{to:e.alt}},[s("div",{staticClass:"ov"},[s("div",{staticClass:"ArticleContent fl"},[s("h3",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("2018年第15周，《头号玩家》口碑炸裂上映，一百多个彩蛋眼花缭乱，年过七十的斯皮尔伯格竟然能拍出一部让影迷游戏迷动漫迷集体叫好的作品实在难得！《暴烈无声》《第三度嫌疑人》等院线成本小佳片纷纷上榜，为榜单注入新鲜血液。  ")])]),t._v(" "),s("div",{staticClass:"ArticleDetail fl"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image_hlarge,expression:"items.image_hlarge"}],attrs:{alt:""}})])]),t._v(" "),s("div",{staticClass:"ArticleFooter ov"},[s("p",{staticClass:"author fl"},[t._v(t._s(e.category_name))]),t._v(" "),s("p",{staticClass:"fr"},[t._v("来自栏目 "+t._s(e.subcategory_name))])])])}))},staticRenderFns:[]};var y={components:{HomeSubnav:k,HomeList:s("VU/8")(M,x,!1,function(t){s("0Ron")},"data-v-5e99b690",null).exports}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"Home"},[e("div",{staticClass:"content"},[e("HomeSubnav"),this._v(" "),e("HomeList")],1)])},staticRenderFns:[]};var B=s("VU/8")(y,$,!1,function(t){s("DPJ7"),s("o5kV")},"data-v-1c70ce9c",null).exports,E={data:()=>({hotfiction:"最受关注图书｜虚构类",books:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/book/search?q=虚构类&count=8",null).then(e=>{t.books=e.books}).catch(function(t){console.log(t)})}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotfiction"},[s("div",{staticClass:"CategoryTitle"},[s("div",{staticClass:"title"},[t._v(t._s(t.hotfiction))]),t._v(" "),s("router-link",{attrs:{to:"BookMore/BookFiction"}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"BookList"},t._l(t.books,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.large,expression:"items.images.large"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"BookText"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var j=s("VU/8")(E,R,!1,function(t){s("Bqva")},"data-v-d76b130a",null).exports,F={data:()=>({hotnonfiction:"最受关注图书｜非虚构类",books:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/book/search?q=非虚构类&count=8").then(e=>{t.books=e.books}).catch(function(t){console.log(t)})}},V={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hotnonfiction"},[s("div",{staticClass:"CategoryTitle"},[s("div",{staticClass:"title"},[t._v(t._s(t.hotnonfiction))]),t._v(" "),s("router-link",{attrs:{to:"BookMore/BookNonfiction"}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"BookList"},t._l(t.books,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.large,expression:"items.images.large"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"BookText"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var w={components:{hotfiction:j,hotnonfiction:s("VU/8")(F,V,!1,function(t){s("EZPG")},"data-v-c02220d2",null).exports}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"books"},[e("div",{staticClass:"content"},[e("hotfiction"),this._v(" "),e("hotnonfiction")],1)])},staticRenderFns:[]};var D=s("VU/8")(w,U,!1,function(t){s("h2wE")},"data-v-631d9b86",null).exports,T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MovieList"},[e("div",{staticClass:"tabs"},[e("router-link",{attrs:{to:"/BookMore/BookFiction"}},[this._v("虚构类")]),this._v(" "),e("router-link",{attrs:{to:"/BookMore/BookNonfiction"}},[this._v("非虚构类")])],1),this._v(" "),e("div",[e("router-view")],1)])},staticRenderFns:[]};var z=s("VU/8")({components:{}},T,!1,function(t){s("tRV+")},"data-v-31988256",null).exports,L={data:()=>({DetailBtn:"详情",books:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/book/search?q=虚构类").then(e=>{t.books=e.books})}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"BookList"},t._l(t.books,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt,tag:"li"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.large,expression:"items.images.large"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"BookText"},[s("div",{staticClass:"BookTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"BookDetail"},[s("p",[t._v(t._s(e.author[0])+"/"+t._s(e.author[1])+"/"+t._s(e.publisher)+"/"+t._s(e.binding)+"/"+t._s(e.pages)+"/"+t._s(e.price))]),t._v(" "),s("p",[t._v(t._s(e.pubdate))])])]),t._v(" "),s("div",{staticClass:"DetailBtn"},[s("router-link",{attrs:{to:{name:"MovieDetail",params:{userId:e.id}}}},[t._v(t._s(t.DetailBtn))])],1)])}))},staticRenderFns:[]};var H=s("VU/8")(L,N,!1,function(t){s("OQAA")},"data-v-03712e1c",null).exports,S={data:()=>({DetailBtn:"详情",books:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/book/search?q=非虚构类").then(e=>{t.books=e.books})}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"BookList"},t._l(t.books,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt,tag:"li"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.large,expression:"items.images.large"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"BookText"},[s("div",{staticClass:"BookTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"BookDetail"},[s("p",[t._v(t._s(e.author[0])+"/"+t._s(e.author[1])+"/"+t._s(e.publisher)+"/"+t._s(e.binding)+"/"+t._s(e.pages)+"/"+t._s(e.price))]),t._v(" "),s("p",[t._v(t._s(e.pubdate))])])]),t._v(" "),s("div",{staticClass:"DetailBtn"},[s("router-link",{attrs:{to:{name:"MovieDetail",params:{userId:e.id}}}},[t._v(t._s(t.DetailBtn))])],1)])}))},staticRenderFns:[]};var I=s("VU/8")(S,P,!1,function(t){s("jdQB")},"data-v-35c1766e",null).exports,A={data:()=>({fllowed:"111111",fllower:"11",list:[{to:"/Mine/MyLikes",name:"MyLikes",icon:"https://img3.doubanio.com/f/talion/091d828e06cc8fa88ad7be161becfea88e14cf1c/pics/card/favourite.png",text:"喜欢"},{to:"/Mine/MyNotes",icon:"https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png",text:"日记"},{to:"/Mine/MyPhotos",icon:"https://img3.doubanio.com/f/talion/1a4604b83e0d7e091c610fe662c9a50518188193/pics/card/album.png",text:"相册"},{to:"/Mine/MyStatus",icon:"https://img3.doubanio.com/f/talion/a827877341968d09f309b70646f409d9fe39a2f9/pics/card/broadcast.png",text:"广播"},{to:"/Mine/MyMovies",icon:"https://img3.doubanio.com/f/talion/7d8c1ccedee37780b29e790e311da66ac863cd7b/pics/card/movie.png",text:"电视"},{to:"/Mine/MyBooks",icon:"https://img3.doubanio.com/f/talion/d0ffbee4f5ce5b59594dc53fad59c93cb3e8f646/pics/card/read.png",text:"读书"},{to:"/Mine/MyMusics",icon:"https://img3.doubanio.com/f/talion/d91d24876aaf5a441a4677a893a8d86068fbf5b1/pics/card/music.png",text:"音乐"},{to:"/Mine/MyNotes",icon:"https://img3.doubanio.com/f/talion/15be66dc7121d728f11cbf4e3ac674a0a68331ca/pics/card/diary.png",text:"日记"}]}),components:{}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my"},[s("div",{staticClass:"MyHeader"},[s("div",{staticClass:"container"},[s("img",{attrs:{src:"https://img.mukewang.com/5333a1a90001c8d802000200-100-100.jpg",alt:""}}),t._v(" "),s("div",{staticClass:"NameDetail"},[s("div",{staticClass:"BasicInfo"},[s("p",[t._v("浅浅时光")]),t._v(" "),s("p",[s("span",[t._v("ID:748648464")]),t._v(" "),s("router-link",{attrs:{to:{name:"HomePage"}}},[t._v("个人主页 >")])],1)]),t._v(" "),s("div",{staticClass:"RelationShip"},[s("router-link",{attrs:{to:{name:"fllower"}}},[t._v("关注 "+t._s(t.fllowed))]),t._v(" "),s("router-link",{attrs:{to:{name:"fllowed"}}},[t._v("被关注 "+t._s(t.fllower))])],1)])])]),t._v(" "),s("div",{staticClass:"List"},[s("ul",t._l(t.list,function(e){return s("router-link",{attrs:{to:e.to,tag:"li"}},[s("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),t._v(" "),s("span",[t._v(t._s(e.text))]),t._v(" "),s("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(">")])])}))])])},staticRenderFns:[]};var q=s("VU/8")(A,J,!1,function(t){s("uW/E")},"data-v-44d2b0d7",null).exports,W={data:()=>({ComingSoon:"免费观看",subjects:[]}),created(){const t=this;this.$jsonp("https://api.douban.com//v2/movie/coming_soon?&count=8").then(e=>{t.subjects=e.subjects})}},Q={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ComingSoon"},[s("div",{staticClass:"CategoryTitle"},[s("div",{staticClass:"CinemaHot"},[t._v(t._s(t.ComingSoon))]),t._v(" "),s("router-link",{attrs:{to:"CinemaMore/rose"}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"MovieList"},t._l(t.subjects,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var Z=s("VU/8")(W,Q,!1,function(t){s("rJHs")},"data-v-189affce",null).exports,G={data:()=>({inTheaters:"影院热线",subjects:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/in_theaters").then(e=>{t.subjects=e.subjects})}},K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Theater"},[s("div",{staticClass:"CategoryTitle"},[s("div",{staticClass:"CinemaHot"},[t._v(t._s(t.inTheaters))]),t._v(" "),s("router-link",{attrs:{to:"CinemaMore/prince"}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"MovieList"},t._l(t.subjects,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var O=s("VU/8")(G,K,!1,function(t){s("8cQr")},null,null).exports,X={data:()=>({top250:"新片速递",subjects:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/top250?&count=8").then(e=>{t.subjects=e.subjects})}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ComingSoon"},[s("div",{staticClass:"CategoryTitle"},[s("div",{staticClass:"CinemaHot"},[t._v(t._s(t.top250))]),t._v(" "),s("router-link",{attrs:{to:"CinemaMore/fox"}},[t._v("更多")])],1),t._v(" "),s("div",{staticClass:"MovieList"},t._l(t.subjects,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[t._v(t._s(e.title))])])}))])},staticRenderFns:[]};var tt={components:{Theater:O,ComingSoon:Z,Latest:s("VU/8")(X,Y,!1,function(t){s("l2zZ")},"data-v-7aa6a2ac",null).exports}},et={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"movie"},[e("div",{staticClass:"content"},[e("div",[e("Theater"),this._v(" "),e("Latest"),this._v(" "),e("ComingSoon")],1)])])},staticRenderFns:[]},st=s("VU/8")(tt,et,!1,null,null,null).exports,it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MovieList"},[e("div",{staticClass:"tabs"},[e("router-link",{attrs:{to:"/CinemaMore/prince"}},[this._v("正在热映")]),this._v(" "),e("router-link",{attrs:{to:"/CinemaMore/fox"}},[this._v("即将上映")]),this._v(" "),e("router-link",{attrs:{to:"/CinemaMore/rose"}},[this._v("免费观看2")])],1),this._v(" "),e("div",[e("router-view")],1)])},staticRenderFns:[]};var at=s("VU/8")(null,it,!1,function(t){s("3nwK")},"data-v-2486ecfa",null).exports,nt={data:()=>({DetailBtn:"详情",subjects:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/coming_soon").then(e=>{t.subjects=e.subjects})}},ot={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MovieList"},t._l(t.subjects,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt,tag:"li"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[s("div",{staticClass:"MovieTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"director"},[s("p",[t._v("导演："+t._s(e.directors[0].name))]),t._v(" "),s("p",[t._v("演员："),t._l(e.casts,function(i,a){return s("span",{key:a},[t._v(t._s(e.casts[a].name)+"/")])})],2)])]),t._v(" "),s("div",{staticClass:"DetailBtn"},[s("router-link",{attrs:{to:{name:"MovieDetail",params:{userId:e.id}}}},[t._v(t._s(t.DetailBtn))])],1)])}))},staticRenderFns:[]};var rt=s("VU/8")(nt,ot,!1,function(t){s("MU3i")},"data-v-22955027",null).exports,ct={data:()=>({DetailBtn:"详情",subjects:[]}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/in_theaters").then(e=>{t.subjects=e.subjects})}},lt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MovieList"},[s("ul",t._l(t.subjects,function(e,i){return s("li",{key:i,attrs:{to:e.alt}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[s("div",{staticClass:"MovieTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"director"},[s("p",[t._v("导演："+t._s(e.directors[0].name))]),t._v(" "),s("p",[t._v("演员："),t._l(e.casts,function(i,a){return s("span",{key:a},[t._v(t._s(e.casts[a].name)+"/")])})],2)])]),t._v(" "),s("div",{staticClass:"DetailBtn"},[s("router-link",{attrs:{to:{name:"MovieDetail",params:{userId:e.id}}}},[t._v(t._s(t.DetailBtn))])],1)])}))])},staticRenderFns:[]};var vt=s("VU/8")(ct,lt,!1,function(t){s("bRkv")},"data-v-2860e086",null).exports,ut={data:()=>({DetailBtn:"详情1",subjects:[]}),components:{prince:vt,rose:rt},created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/coming_soon").then(e=>{t.subjects=e.subjects})}},dt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MovieList"},t._l(t.subjects,function(e,i){return s("router-link",{key:i,attrs:{to:e.alt,tag:"li"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.images.medium,expression:"items.images.medium"}],attrs:{alt:""}}),t._v(" "),s("div",{staticClass:"MovieText"},[s("div",{staticClass:"MovieTitle"},[t._v(t._s(e.title))]),t._v(" "),s("div",{staticClass:"director"},[s("p",[t._v("导演2："+t._s(e.directors[0].name))]),t._v(" "),s("p",[t._v("演员："),t._l(e.casts,function(i,a){return s("span",{key:a},[t._v(t._s(e.casts[a].name)+"/")])})],2)])]),t._v(" "),s("div",{staticClass:"DetailBtn"},[s("router-link",{attrs:{to:{name:"MovieDetail",params:{userId:e.id}}}},[t._v(t._s(t.DetailBtn))])],1)])}))},staticRenderFns:[]};var _t=s("VU/8")(ut,dt,!1,function(t){s("u5bH")},"data-v-0bdd8dba",null).exports,mt={data:()=>({DetailBtn:"详情",subjects:[],title:""}),created(){const t=this;this.$jsonp("https://api.douban.com/v2/movie/in_theaters").then(e=>{t.subjects=e.subjects,console.log(e.subjects)})}},ht={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MovieList"},[e("h1",[this._v(this._s(this.subjects[0].title))])])},staticRenderFns:[]};var pt=s("VU/8")(mt,ht,!1,function(t){s("gbVp")},"data-v-159b5709",null).exports,ft={data:()=>({}),components:{}},bt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fllowed"},[e("h1",[this._v("我是被关注")])])}]},gt=s("VU/8")(ft,bt,!1,null,null,null).exports,Ct={data:()=>({}),components:{}},kt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fllower"},[e("h1",[this._v("关注")])])}]},Mt=s("VU/8")(Ct,kt,!1,null,null,null).exports,xt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"HomePage"},[e("h1",[this._v("我是主页")])])}]},yt=s("VU/8")(null,xt,!1,null,null,null).exports,$t={data:()=>({}),components:{}},Bt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是喜欢页面")])])}]};var Et=s("VU/8")($t,Bt,!1,function(t){s("KAhP")},"data-v-0b7b82f7",null).exports,Rt={data:()=>({}),components:{}},jt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是笔记页面")])])}]};var Ft=s("VU/8")(Rt,jt,!1,function(t){s("htrn")},"data-v-6aa5e634",null).exports,Vt={data:()=>({}),components:{}},wt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MyPhotos"},[e("h1",[this._v("我是照片页面")])])}]};var Ut=s("VU/8")(Vt,wt,!1,function(t){s("DWc2")},"data-v-e10b9ae2",null).exports,Dt={data:()=>({}),components:{}},Tt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是广播页面")])])}]};var zt=s("VU/8")(Dt,Tt,!1,function(t){s("nv69")},"data-v-9e3f9276",null).exports,Lt={data:()=>({}),components:{}},Nt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是电视页面")])])}]};var Ht=s("VU/8")(Lt,Nt,!1,function(t){s("gGI3")},"data-v-ceb1f85a",null).exports,St={data:()=>({}),components:{}},Pt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是音乐页面")])])}]};var It=s("VU/8")(St,Pt,!1,function(t){s("WXhC")},"data-v-66139c9c",null).exports,At={data:()=>({}),components:{}},Jt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("h1",[this._v("我是书籍页面")])])}]};var qt=s("VU/8")(At,Jt,!1,function(t){s("xJU5")},"data-v-38482524",null).exports;i.a.use(l.a);var Wt=new l.a({routes:[{path:"/",component:B},{path:"/Login",component:d},{path:"/Login",component:d},{path:"/Register",component:h},{path:"/RecoverPassword",component:b},{path:"/books",component:D},{path:"/Mine",component:q},{path:"/movie",component:st},{path:"/BookMore",component:z,children:[{path:"/",component:I},{path:"BookNonfiction",component:I},{path:"BookFiction",component:H}]},{path:"/CinemaMore",component:at,children:[{path:"/",component:rt},{path:"prince",component:vt},{path:"rose",component:rt},{path:"fox",component:_t}]},{path:"/Movie/MovieDetail/:userId",name:"MovieDetail",component:pt},{path:"/Mine/fllowed",component:gt,name:"fllowed"},{path:"/Mine/fllower",component:Mt,name:"fllower"},{path:"/Mine/HomePage",component:yt,name:"HomePage"},{path:"/Mine/MyPhotos",component:Ut,name:"MyPhotos"},{path:"/Mine/MyLikes",component:Et,name:"MyLikes"},{path:"/Mine/MyNotes",component:Ft,name:"MyNotes"},{path:"/Mine/MyBooks",component:qt,name:"MyBooks"},{path:"/Mine/MyStatus",component:zt,name:"MyStatus"},{path:"/Mine/MyMovies",component:Ht,name:"MyMovies"},{path:"/Mine/MyMusics",component:It,name:"MyMusics"}]}),Qt=s("mtWM"),Zt=s.n(Qt),Gt=s("Rf8U"),Kt=s.n(Gt),Ot=s("cTzj"),Xt=s.n(Ot),Yt=s("qJdI"),te=s.n(Yt);i.a.use(te.a),i.a.use(Kt.a,Zt.a),i.a.use(Xt.a,{error:"./static/error.png",loading:"./static/loading.gif"}),i.a.config.productionTip=!1,new i.a({el:"#app",router:Wt,components:{App:c},template:"<App/>"})},OQAA:function(t,e){},WXhC:function(t,e){},bRkv:function(t,e){},edZ8:function(t,e){},gGI3:function(t,e){},gbVp:function(t,e){},h2wE:function(t,e){},htrn:function(t,e){},jdQB:function(t,e){},l2zZ:function(t,e){},nv69:function(t,e){},o5kV:function(t,e){},rJHs:function(t,e){},"tRV+":function(t,e){},u5bH:function(t,e){},"uW/E":function(t,e){},xJU5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a77abf8c6876e5c52454.js.map