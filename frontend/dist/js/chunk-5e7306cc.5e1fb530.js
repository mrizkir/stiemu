(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e7306cc"],{"4a74":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("KeuanganLayout",{attrs:{showrightsidebar:!1}},[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" BIAYA KOMPONEN ")]},proxy:!0},{key:"subtitle",fn:function(){},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini berisi informasi komponen biaya. ID dan Nama Komponen melekat ke sistem sehingga tidak bisa diubah. ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"id","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"expanded-item",fn:function(a){var e=a.headers,s=a.item;return[i("td",{staticClass:"text-center",attrs:{colspan:e.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],n=i("1da1"),r=(i("96cf"),i("c8b0")),o=i("e477"),l={name:"BiayaKomponen",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"KOMPONEN BIAYA",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"ID",value:"id",width:10,sortable:!1},{text:"NAMA KOMPONEN",value:"nama",sortable:!1},{text:"PERIODE",value:"periode",width:150,sortable:!1}]}},methods:{initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/keuangan/komponenbiaya",{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;a.datatable=i.kombi,a.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]}},components:{KeuanganLayout:r["a"],ModuleHeader:o["a"]}},c=l,v=i("2877"),d=i("6544"),m=i.n(d),u=i("0798"),A=i("2bc5"),_=i("62ad"),h=i("a523"),p=i("8fea"),N=i("132d"),S=i("0fd9"),E=Object(v["a"])(c,e,s,!1,null,null,null);a["default"]=E.exports;m()(E,{VAlert:u["a"],VBreadcrumbs:A["a"],VCol:_["a"],VContainer:h["a"],VDataTable:p["a"],VIcon:N["a"],VRow:S["a"]})},c8b0:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[i("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},e))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v("["+t._s(t.DEFAULT_ROLE)+"]")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),i("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-video-input-component")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-triforce")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-subheader",[t._v(" METODE PEMBAYARAN ")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),i("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),i("v-divider"),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-DULANG-MHS-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-dulangmhsbaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ULANG MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-registrasikrs"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-SPP_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-spp"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-KKN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-kkn"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" KKN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-UJIAN-MUNAQASAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-ujianmunaqasah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-subheader",[t._v(" LAPORAN PENERIMAAN ")]):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-PENDAFTARAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanpendaftaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PENDAFTARAN MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-DULANG-MHS-BARU_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporandulangmhsbaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" DAFTAR ULANG MHS. BARU ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-REGISTRASI-KRS_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanregistrasikrs"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-PENERIMAAN-SPP_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanspp"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SPP ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-LAPORAN-UJIAN-MUNAQASAH_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-laporanujianmunaqasah"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-cash")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" UJIAN MUNAQASAH ")])],1)],1):t._e()],1)],1),t.showrightsidebar?i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5 mb-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2),i("v-footer",{attrs:{app:"",padless:"",fixed:""}},[i("v-card",{staticClass:"flex",attrs:{color:"yellow darken-2",flat:"",tile:""}},[i("v-divider"),i("v-card-text",{staticClass:"py-2 black--text text-center"},[i("strong",[t._v(t._s(t.APP_NAME)+" (2021-2021)")]),t._v(" dikembangkan oleh TIM IT STAI Miftahul 'Ulum Tanjungpinang "),i("v-btn",{attrs:{icon:"",href:"https://github.com/mrizkir/stiemu"}},[i("v-icon",[t._v("mdi-github")])],1)],1)],1)],1)],1)},s=[],n=i("5530"),r=(i("5319"),i("ac1f"),i("2f62")),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])(Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"})),{},{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),v=i("6544"),d=i.n(v),m=i("40dc"),u=i("5bc1"),A=i("8212"),_=i("8336"),h=i("b0af"),p=i("99d9"),N=i("ce7e"),S=i("553a"),E=i("132d"),g=i("adda"),b=i("8860"),f=i("da13"),C=i("8270"),k=i("5d23"),R=i("34c3"),T=i("f6c4"),I=i("e449"),O=i("f774"),U=i("2fa4"),K=i("e0c7"),P=i("afd9"),w=i("2a7f"),x=Object(c["a"])(l,e,s,!1,null,null,null);a["a"]=x.exports;d()(x,{VAppBar:m["a"],VAppBarNavIcon:u["a"],VAvatar:A["a"],VBtn:_["a"],VCard:h["a"],VCardText:p["d"],VDivider:N["a"],VFooter:S["a"],VIcon:E["a"],VImg:g["a"],VList:b["a"],VListItem:f["a"],VListItemAvatar:C["a"],VListItemContent:k["g"],VListItemIcon:R["a"],VListItemSubtitle:k["j"],VListItemTitle:k["k"],VMain:T["a"],VMenu:I["a"],VNavigationDrawer:O["a"],VSpacer:U["a"],VSubheader:K["a"],VSystemBar:P["a"],VToolbarTitle:w["c"]})},e477:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{fluid:t.isReportPage}},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("h1",{staticClass:"subheading grey--text"},[i("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[i("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=i("2877"),l=i("6544"),c=i.n(l),v=i("62ad"),d=i("a523"),m=i("132d"),u=i("0fd9"),A=Object(o["a"])(r,e,s,!1,null,null,null);a["a"]=A.exports;c()(A,{VCol:v["a"],VContainer:d["a"],VIcon:m["a"],VRow:u["a"]})}}]);