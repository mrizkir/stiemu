(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e01dec4"],{"0636":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("BlogLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Kategori")])],1)],1),a("v-list-item",[a("v-list-item-content",[a("v-select",{attrs:{items:t.daftar_category,label:"KATEGORI","item-value":"id","item-text":"name",outlined:""},model:{value:t.INFO_KAMPUS_TERM_ID,callback:function(e){t.INFO_KAMPUS_TERM_ID=e},expression:"INFO_KAMPUS_TERM_ID"}})],1)],1)]},proxy:!0}])},[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-google-classroom ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" INFO KAMPUS ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk mengelola informasi seputar kampus ")])]},proxy:!0}])}),t.INFO_KAMPUS_TERM_ID?a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"nama_prodi","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR INFORMASI")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""},on:{click:function(e){return e.stopPropagation(),t.tambahItem(e)}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:t.dialogfrm,callback:function(e){t.dialogfrm=e},expression:"dialogfrm"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-text-field",{attrs:{label:"JUDUL INFORMASI",outlined:"",rules:t.rule_judul},model:{value:t.formdata.judul,callback:function(e){t.$set(t.formdata,"judul",e)},expression:"formdata.judul"}}),a("tiptap-vuetify",{attrs:{extensions:t.extensions,rules:t.rule_content},model:{value:t.formdata.content,callback:function(e){t.$set(t.formdata,"content",e)},expression:"formdata.content"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogfrm(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v(" SIMPAN ")])],1)],1)],1)],1),t.dialogdetailitem?a("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:t.dialogdetailitem,callback:function(e){t.dialogdetailitem=e},expression:"dialogdetailitem"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("DETAIL INFORMASI")])]),a("v-card-text",[t._v(" "+t._s(t.formdata.content)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.closedialogdetailitem(e)}}},[t._v("KELUAR")])],1)],1)],1):t._e()],1)]},proxy:!0},{key:"item.config",fn:function(e){var a=e.item;return[t._v(" "+t._s(t.kaprodi(a))+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[t._v(" mdi-pencil ")]),a("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")])]}},{key:"expanded-item",fn:function(e){var i=e.headers,n=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(n.id)+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}],null,!1,769928127)})],1)],1)],1):a("v-container",{attrs:{fluid:""}},[a("v-alert",{attrs:{type:"info"}},[t._v(" KATEGORI untuk Info Kampus belum disetting. ")])],1)],1)},n=[],r=a("1da1"),o=(a("96cf"),a("f242")),s=a("e477"),l=a("3f38"),c={name:"PageInfoKampus",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"BLOG",disabled:!1,href:"/blog"},{text:"INFO KAMPUS",disabled:!0,href:"#"}],this.fetchConfig(),this.fetchCategories(),this.fetchPost()},data:function(){return{firstloading:!0,extensions:[l["h"],l["a"],l["k"],l["r"],l["o"],l["j"],l["l"],l["c"],l["m"],[l["g"],{options:{levels:[1,2,3]}}],l["b"],l["d"],l["e"],l["i"],l["n"],l["f"]],btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"JUDUL",value:"judul",width:150},{text:"AKSI",value:"actions",sortable:!1,width:100}],search:"",dialogfrm:!1,dialogdetailitem:!1,daftar_category:[],INFO_KAMPUS_TERM_ID:null,form_valid:!0,formdata:{judul:"",content:""},formdefault:{judul:"",content:""},editedIndex:-1,rule_judul:[function(t){return!!t||"Mohon judul informasi untuk di isi !!!"}],rule_content:[function(t){return!!t||"Mohon konten informasi untuk di isi !!!"}]}},methods:{fetchConfig:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax.get("/blog/pages/infokampus/config",{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.INFO_KAMPUS_TERM_ID=a.config.INFO_KAMPUS_TERM_ID,t.firstloading=!1}));case 2:case"end":return e.stop()}}),e)})))()},fetchCategories:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$ajax.get("/blog/categories",{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(e){var a=e.data;t.daftar_category=a.categories}));case 2:case"end":return e.stop()}}),e)})))()},fetchPost:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},tambahItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.dialogfrm=!0;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},save:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.$refs.frmdata.reset(),t.editedIndex=-1}),300)},closedialogdetailitem:function(){var t=this;this.dialogdetailitem=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.editedIndex=-1,t.firstloading=!0}),300)}},computed:{formTitle:function(){return-1===this.editedIndex?"TAMBAH INFO":"UBAH INFO"}},watch:{INFO_KAMPUS_TERM_ID:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.firstloading||e.$ajax.post("/system/setting/variables",{_method:"PUT",pid:"blog",setting:JSON.stringify({601:t})},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1})).catch((function(){e.btnLoading=!1}));case 1:case"end":return a.stop()}}),a)})))()}},components:{BlogLayout:o["a"],TiptapVuetify:l["p"],ModuleHeader:s["a"]}},d=c,u=a("2877"),m=a("6544"),v=a.n(m),f=a("0798"),p=a("2bc5"),g=a("8336"),h=a("b0af"),b=a("99d9"),_=a("62ad"),x=a("a523"),k=a("8fea"),T=a("169a"),I=a("ce7e"),A=a("4bd4"),w=a("132d"),C=a("da13"),R=a("5d23"),y=a("34c3"),V=a("0fd9"),S=a("b974"),E=a("2fa4"),O=a("8654"),P=a("71d9"),L=a("2a7f"),M=Object(u["a"])(d,i,n,!1,null,null,null);e["default"]=M.exports;v()(M,{VAlert:f["a"],VBreadcrumbs:p["a"],VBtn:g["a"],VCard:h["a"],VCardActions:b["b"],VCardText:b["d"],VCardTitle:b["e"],VCol:_["a"],VContainer:x["a"],VDataTable:k["a"],VDialog:T["a"],VDivider:I["a"],VForm:A["a"],VIcon:w["a"],VListItem:C["a"],VListItemContent:R["g"],VListItemIcon:y["a"],VListItemTitle:R["k"],VRow:V["a"],VSelect:S["a"],VSpacer:E["a"],VTextField:O["a"],VToolbar:P["a"],VToolbarTitle:L["c"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},n=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},o=r,s=a("2877"),l=a("6544"),c=a.n(l),d=a("62ad"),u=a("a523"),m=a("132d"),v=a("0fd9"),f=Object(s["a"])(o,i,n,!1,null,null,null);e["a"]=f.exports;c()(f,{VCol:d["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})},f242:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("BLOG-GROUP")?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/blog"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-home-floor-b")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD BLOG")])],1)],1):t._e(),a("v-subheader",[t._v("PAGES")]),a("v-list-item",{attrs:{link:"",to:"/blog/pages/infokampus"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-seat-legroom-extra")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" INFO KAMPUS ")])],1)],1)],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),a("v-footer",{attrs:{app:"",padless:"",fixed:""}},[a("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[a("v-divider"),a("v-card-text",{staticClass:"py-2 black--text text-center"},[a("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),a("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[a("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},n=[],r=a("5530"),o=(a("5319"),a("ac1f"),a("2f62")),s={name:"BlogLayout",props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])(Object(r["a"])({},Object(o["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=s,c=a("2877"),d=a("6544"),u=a.n(d),m=a("40dc"),v=a("5bc1"),f=a("8212"),p=a("8336"),g=a("b0af"),h=a("99d9"),b=a("ce7e"),_=a("553a"),x=a("132d"),k=a("adda"),T=a("8860"),I=a("da13"),A=a("8270"),w=a("5d23"),C=a("34c3"),R=a("f6c4"),y=a("e449"),V=a("f774"),S=a("2fa4"),E=a("e0c7"),O=a("afd9"),P=a("2a7f"),L=Object(c["a"])(l,i,n,!1,null,null,null);e["a"]=L.exports;u()(L,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:f["a"],VBtn:p["a"],VCard:g["a"],VCardText:h["d"],VDivider:b["a"],VFooter:_["a"],VIcon:x["a"],VImg:k["a"],VList:T["a"],VListItem:I["a"],VListItemAvatar:A["a"],VListItemContent:w["g"],VListItemIcon:C["a"],VListItemSubtitle:w["j"],VListItemTitle:w["k"],VMain:R["a"],VMenu:y["a"],VNavigationDrawer:V["a"],VSpacer:S["a"],VSubheader:E["a"],VSystemBar:O["a"],VToolbarTitle:P["c"]})}}]);