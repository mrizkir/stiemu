(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31ca8ddf"],{1828:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("SystemUserLayout")},n=[],a=e("e0b6"),o={name:"SystemUsers",components:{SystemUserLayout:a["a"]}},r=o,c=e("2877"),u=Object(c["a"])(r,s,n,!1,null,null,null);i["default"]=u.exports},"5bc1":function(t,i,e){"use strict";e("498a");var s=e("5530"),n=e("9d26"),a=e("8336"),o=e("2b0e");i["a"]=o["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,i){var e=i.slots,o=i.listeners,r=i.props,c=i.data,u=Object.assign(c,{staticClass:"v-app-bar__nav-icon ".concat(c.staticClass||"").trim(),props:Object(s["a"])({},r,{icon:!0}),on:o}),h=e().default;return t(a["a"],u,h||[t(n["a"],"$menu")])}})},7958:function(t,i,e){},8308:function(t,i,e){},afd9:function(t,i,e){"use strict";e("a9e3"),e("c7cd");var s=e("5530"),n=(e("8308"),e("3a66")),a=e("a9ad"),o=e("7560"),r=e("58df"),c=e("80d2");i["a"]=Object(r["a"])(Object(n["a"])("bar",["height","window"]),a["a"],o["a"]).extend({name:"v-system-bar",props:{height:[Number,String],lightsOut:Boolean,window:Boolean},computed:{classes:function(){return Object(s["a"])({"v-system-bar--lights-out":this.lightsOut,"v-system-bar--absolute":this.absolute,"v-system-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-system-bar--window":this.window},this.themeClasses)},computedHeight:function(){return this.height?isNaN(parseInt(this.height))?this.height:parseInt(this.height):this.window?32:24},styles:function(){return{height:Object(c["g"])(this.computedHeight)}}},methods:{updateApplication:function(){return this.$el?this.$el.clientHeight:this.computedHeight}},render:function(t){var i={staticClass:"v-system-bar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,i),Object(c["s"])(this))}})},c3f0:function(t,i,e){"use strict";e("4160"),e("159b");var s=e("80d2"),n=function(t){var i=t.touchstartX,e=t.touchendX,s=t.touchstartY,n=t.touchendY,a=.5,o=16;t.offsetX=e-i,t.offsetY=n-s,Math.abs(t.offsetY)<a*Math.abs(t.offsetX)&&(t.left&&e<i-o&&t.left(t),t.right&&e>i+o&&t.right(t)),Math.abs(t.offsetX)<a*Math.abs(t.offsetY)&&(t.up&&n<s-o&&t.up(t),t.down&&n>s+o&&t.down(t))};function a(t,i){var e=t.changedTouches[0];i.touchstartX=e.clientX,i.touchstartY=e.clientY,i.start&&i.start(Object.assign(t,i))}function o(t,i){var e=t.changedTouches[0];i.touchendX=e.clientX,i.touchendY=e.clientY,i.end&&i.end(Object.assign(t,i)),n(i)}function r(t,i){var e=t.changedTouches[0];i.touchmoveX=e.clientX,i.touchmoveY=e.clientY,i.move&&i.move(Object.assign(t,i))}function c(t){var i={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return a(t,i)},touchend:function(t){return o(t,i)},touchmove:function(t){return r(t,i)}}}function u(t,i,e){var n=i.value,a=n.parent?t.parentElement:t,o=n.options||{passive:!0};if(a){var r=c(i.value);a._touchHandlers=Object(a._touchHandlers),a._touchHandlers[e.context._uid]=r,Object(s["z"])(r).forEach((function(t){a.addEventListener(t,r[t],o)}))}}function h(t,i,e){var n=i.value.parent?t.parentElement:t;if(n&&n._touchHandlers){var a=n._touchHandlers[e.context._uid];Object(s["z"])(a).forEach((function(t){n.removeEventListener(t,a[t])})),delete n._touchHandlers[e.context._uid]}}var l={inserted:u,unbind:h};i["a"]=l},e0b6:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(i){i.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var s=i.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},s))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(i){return i.preventDefault(),t.logout(i)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(i){return i.stopPropagation(),t.toProfile(i)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SYSTEM-USERS-GROUP")?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/system-users"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD USERS")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-PERMISSIONS")?e("v-list-item",{attrs:{link:"",to:"/system-users/permissions"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-key")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PERMISSIONS ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-SETTING-ROLES")?e("v-list-item",{attrs:{link:"",to:"/system-users/roles"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-group")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" ROLES ")])],1)],1):t._e(),e("v-divider"),t.CAN_ACCESS("SYSTEM-USERS-SUPERADMIN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/superadmin"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" SUPERADMIN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-KEUANGAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/keuangan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KEUANGAN ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/pmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TIM PMB ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-AKADEMIK_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/akademik"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" AKADEMIK ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-PROGRAM-STUDI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/prodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PROGRAM STUDI ")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/system-users/dosen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e()],1)],1),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],a=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),o=e("2f62"),r={name:"SystemUserLayout",data:function(){return{loginTime:0,drawer:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(a["a"])({},Object(o["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,i=this.ATTRIBUTE_USER("foto");return t=""==i?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+i,t},hideleftnav:function(){return"UsersProfil"==this.$route.name}}),watch:{loginTime:{handler:function(t){var i=this;t>=0?setTimeout((function(){i.loginTime=1==i.AUTHENTICATED?i.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},c=r,u=e("2877"),h=e("6544"),l=e.n(h),v=e("40dc"),d=e("5bc1"),m=e("8212"),p=e("ce7e"),f=e("132d"),g=e("adda"),b=e("8860"),S=e("da13"),A=e("8270"),_=e("5d23"),E=e("34c3"),C=e("f6c4"),y=e("e449"),w=e("f774"),T=e("2fa4"),O=e("afd9"),M=e("2a7f"),k=Object(u["a"])(c,s,n,!1,null,null,null);i["a"]=k.exports;l()(k,{VAppBar:v["a"],VAppBarNavIcon:d["a"],VAvatar:m["a"],VDivider:p["a"],VIcon:f["a"],VImg:g["a"],VList:b["a"],VListItem:S["a"],VListItemAvatar:A["a"],VListItemContent:_["a"],VListItemIcon:E["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VMain:C["a"],VMenu:y["a"],VNavigationDrawer:w["a"],VSpacer:T["a"],VSystemBar:O["a"],VToolbarTitle:M["a"]})},e4cd:function(t,i,e){"use strict";e("caad"),e("b0c0"),e("a9e3");var s=e("d9bd"),n=e("2b0e");i["a"]=n["a"].extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default:function(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:function(t){return!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}}},computed:{isMobile:function(){var t=this.$vuetify.breakpoint,i=t.mobile,e=t.width,s=t.name,n=t.mobileBreakpoint;if(n===this.mobileBreakpoint)return i;var a=parseInt(this.mobileBreakpoint,10),o=!isNaN(a);return o?e<a:s===this.mobileBreakpoint}},created:function(){this.$attrs.hasOwnProperty("mobile-break-point")&&Object(s["d"])("mobile-break-point","mobile-breakpoint",this)}})},f774:function(t,i,e){"use strict";e("99af"),e("a9e3"),e("c7cd");var s=e("5530"),n=(e("7958"),e("adda")),a=e("3a66"),o=e("a9ad"),r=e("b848"),c=e("e4cd"),u=e("e707"),h=e("d10f"),l=e("7560"),v=e("a293"),d=e("dc22"),m=e("c3f0"),p=e("80d2"),f=e("58df"),g=Object(f["a"])(Object(a["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),o["a"],r["a"],c["a"],u["a"],h["a"],l["a"]);i["a"]=g.extend({name:"v-navigation-drawer",provide:function(){return{isInNav:"nav"===this.tag}},directives:{ClickOutside:v["a"],Resize:d["a"],Touch:m["a"]},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(s["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&c["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX",i={height:Object(p["g"])(this.height),top:this.isBottom?"auto":Object(p["g"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(p["g"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(p["g"])(this.computedTransform,"%"),")"),width:Object(p["g"])(this.computedWidth)};return i}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,i){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=i&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var i=t.getBoundingClientRect();this.touchArea={left:i.left+50,right:i.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},i=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[i])},genDirectives:function(){var t=this,i=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||i.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),i},genListeners:function(){var t=this,i={transitionend:function(i){if(i.target===i.currentTarget){t.$emit("transitionend",i);var e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}}};return this.miniVariant&&(i.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(i.mouseenter=function(){return t.isMouseover=!0},i.mouseleave=function(){return t.isMouseover=!1}),i},genPosition:function(t){var i=Object(p["s"])(this,t);return i?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},i):i},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var i=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(p["s"])(this,"img"))&&i.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),i)}})}}]);