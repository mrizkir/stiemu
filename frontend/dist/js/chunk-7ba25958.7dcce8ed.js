(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ba25958"],{7679:function(t,e,a){"use strict";a("c79c");var i=a("e4d3"),s=a("7560"),n=a("80d2"),r=a("afdd"),o=a("326d"),l=a("58df");e["a"]=Object(l["a"])(i["a"],s["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var t=this.$refs.content.querySelector("input");t&&t.focus()},genButton:function(t,e){return this.$createElement(r["a"],{props:{text:!0,color:"primary",light:!0},on:{click:t}},e)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){t.save(t.returnValue),t.$emit("save")}),this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:function(e){e.keyCode===n["y"].esc&&t.cancel(),e.keyCode===n["y"].enter&&(t.save(t.returnValue),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(o["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}},scopedSlots:{activator:function(a){var i=a.on;return t("div",{staticClass:"v-small-dialog__activator",on:i},[t("span",{staticClass:"v-small-dialog__activator__content"},e.$slots.default)])}}},[this.genContent(),this.large?this.genActions():null])}})},c79c:function(t,e,a){},c8b0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),a("v-subheader",[t._v("DAFTAR ULANG")]),a("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-video-input-component")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-triforce")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?a("v-subheader",[t._v("METODE PEMBAYARAN")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),a("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-SPP_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-spp"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" TRANSAKSI SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account-cash")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e()],1)],1),a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{staticClass:"teal lighten-5 mb-5"},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},hideleftnav:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=a("2877"),u=a("6544"),d=a.n(u),v=a("40dc"),m=a("5bc1"),h=a("8212"),p=a("ce7e"),f=a("132d"),A=a("adda"),_=a("8860"),g=a("da13"),b=a("8270"),S=a("5d23"),T=a("34c3"),k=a("f6c4"),C=a("e449"),E=a("f774"),N=a("2fa4"),y=a("e0c7"),R=a("afd9"),x=a("2a7f"),w=Object(c["a"])(l,i,s,!1,null,null,null);e["a"]=w.exports;d()(w,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:h["a"],VDivider:p["a"],VIcon:f["a"],VImg:A["a"],VList:_["a"],VListItem:g["a"],VListItemAvatar:b["a"],VListItemContent:S["a"],VListItemIcon:T["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VMain:k["a"],VMenu:C["a"],VNavigationDrawer:E["a"],VSpacer:N["a"],VSubheader:y["a"],VSystemBar:R["a"],VToolbarTitle:x["a"]})},d63e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KeuanganLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" STATUS TRANSAKSI ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi informasi status transaksi. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id_status","sort-by":"id_status","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR STATUS TRANSAKSI")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer")],1)]},proxy:!0},{key:"item.style",fn:function(e){return[a("v-edit-dialog",{attrs:{"return-value":e.item.style,large:""},on:{"update:returnValue":function(a){return t.$set(e.item,"style",a)},"update:return-value":function(a){return t.$set(e.item,"style",a)},save:function(a){return t.saveItem({id:e.item.id_status,style:e.item.style})},cancel:t.cancelItem,open:t.openItem,close:t.closeItem},scopedSlots:t._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 title"},[t._v("Update Style")]),a("v-text-field",{attrs:{label:"STYLE STATUS TRANSAKSI",outlined:"",autofocus:""},model:{value:e.item.style,callback:function(a){t.$set(e.item,"style",a)},expression:"props.item.style"}})]},proxy:!0}],null,!0)},[a("v-chip",{attrs:{color:e.item.style,dark:""}},[t._v(t._s(e.item.style))])],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,s=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(s.id_status)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],n=(a("96cf"),a("1da1")),r=a("c8b0"),o=a("e477"),l={name:"StatusTransaksi",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"STATUS TRANSAKSI",disabled:!0,href:"#"}],this.initialize()},data:function(){return{firstloading:!0,breadcrumbs:[],btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"ID",value:"id_status",width:10,sortable:!1},{text:"NAMA STATUS",value:"nama_status",sortable:!1},{text:"STYLE",value:"style",width:200,sortable:!1}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/keuangan/statustransaksi",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var a=t.data;e.datatable=a.status,e.datatableLoading=!1}));case 3:this.firstloading=!1;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},saveItem:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.id,i=e.style,t.next=3,this.$ajax.post("/keuangan/statustransaksi/"+a,{_method:"put",id_status:a,style:i},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){s.initialize()}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelItem:function(){},openItem:function(){},closeItem:function(){}},components:{KeuanganLayout:r["a"],ModuleHeader:o["a"]}},c=l,u=a("2877"),d=a("6544"),v=a.n(d),m=a("0798"),h=a("2bc5"),p=a("cc20"),f=a("62ad"),A=a("a523"),_=a("8fea"),g=a("ce7e"),b=a("7679"),S=a("132d"),T=a("0fd9"),k=a("2fa4"),C=a("8654"),E=a("71d9"),N=a("2a7f"),y=Object(u["a"])(c,i,s,!1,null,null,null);e["default"]=y.exports;v()(y,{VAlert:m["a"],VBreadcrumbs:h["a"],VChip:p["a"],VCol:f["a"],VContainer:A["a"],VDataTable:_["a"],VDivider:g["a"],VEditDialog:b["a"],VIcon:S["a"],VRow:T["a"],VSpacer:k["a"],VTextField:C["a"],VToolbar:E["a"],VToolbarTitle:N["a"]})}}]);