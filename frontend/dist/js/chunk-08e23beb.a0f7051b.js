(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08e23beb"],{"684f":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-system-bar",{staticClass:"green lighten-2 white--text",attrs:{app:"",dark:""}}),i("v-app-bar",{attrs:{app:""}},[i("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[i("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),i("v-spacer"),i("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[i("v-avatar",{attrs:{size:"30"}},[i("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[i("v-list",[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list-item",{attrs:{to:"/system-users/profil"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account")])],1),i("v-list-item-title",[t._v("Profil")])],1),i("v-divider"),i("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-power")])],1),i("v-list-item-title",[t._v("Logout")])],1)],1)],1),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[i("v-icon",[t._v("mdi-menu-open")])],1)],1),i("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.hideleftnav,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.ROLE)+" ")])],1)],1),i("v-divider"),i("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-monitor-dashboard")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("BOARD SPMB")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-head-question-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" SOAL PMB ")])],1)],1):t._e(),i("v-subheader",[t._v("DATA MHS. BARU")]),t.CAN_ACCESS("SPMB-PMB_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-account-plus")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PENDAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-file-document-edit-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" BIODATA ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-file-document-edit-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" PERSYARATAN ")])],1)],1):t._e(),i("v-subheader",[t._v("UJIAN PMB")]),t.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-calendar-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" JADWAL UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-calendar-account")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" NILAI UJIAN ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?i("v-subheader",[t._v("LAPORAN")]):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&t.isBentukPT("universitas")?i("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-file-document-edit-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAPORAN FAKULTAS ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-file-document-edit-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAPORAN PRODI ")])],1)],1):t._e(),t.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?i("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-file-document-edit-outline")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v(" LAPORAN KELULUSAN ")])],1)],1):t._e()],1)],1),i("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[i("v-list",{attrs:{dense:""}},[i("v-list-item",[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-menu-open")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),i("v-divider"),i("v-list-item",{staticClass:"teal lighten-5 mb-5"},[i("v-list-item-icon",{staticClass:"mr-2"},[i("v-icon",[t._v("mdi-filter")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1),i("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],s=(i("b0c0"),i("ac1f"),i("5319"),i("5530")),r=i("2f62"),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},hideleftnav:function(){return"ReportFormBMurni"==this.$route.name}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,c=i("2877"),d=i("6544"),u=i.n(d),v=i("40dc"),m=i("5bc1"),h=i("8212"),p=i("ce7e"),f=i("132d"),_=i("adda"),g=i("8860"),A=i("da13"),b=i("8270"),C=i("5d23"),S=i("34c3"),k=i("f6c4"),w=i("e449"),R=i("f774"),E=i("2fa4"),P=i("e0c7"),T=i("afd9"),B=i("2a7f"),N=Object(c["a"])(l,a,n,!1,null,null,null);e["a"]=N.exports;u()(N,{VAppBar:v["a"],VAppBarNavIcon:m["a"],VAvatar:h["a"],VDivider:p["a"],VIcon:f["a"],VImg:_["a"],VList:g["a"],VListItem:A["a"],VListItemAvatar:b["a"],VListItemContent:C["a"],VListItemIcon:S["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VMain:k["a"],VMenu:w["a"],VNavigationDrawer:R["a"],VSpacer:E["a"],VSubheader:P["a"],VSystemBar:T["a"],VToolbarTitle:B["a"]})},7679:function(t,e,i){"use strict";i("c79c");var a=i("e4d3"),n=i("7560"),s=i("80d2"),r=i("afdd"),o=i("326d"),l=i("58df");e["a"]=Object(l["a"])(a["a"],n["a"]).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var t=this.$refs.content.querySelector("input");t&&t.focus()},genButton:function(t,e){return this.$createElement(r["a"],{props:{text:!0,color:"primary",light:!0},on:{click:t}},e)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){t.save(t.returnValue),t.$emit("save")}),this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:function(e){e.keyCode===s["y"].esc&&t.cancel(),e.keyCode===s["y"].enter&&(t.save(t.returnValue),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(o["a"],{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}},scopedSlots:{activator:function(i){var a=i.on;return t("div",{staticClass:"v-small-dialog__activator",on:a},[t("span",{staticClass:"v-small-dialog__activator__content"},e.$slots.default)])}}},[this.genContent(),this.large?this.genActions():null])}})},c79c:function(t,e,i){},e5d6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("SPMBLayout",[i("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-calendar-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" PASSING GRADE NILAI UJIAN ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" "+t._s(t.jadwal_ujian.nama_kegiatan)+" - TAHUN PENDAFTARAN "+t._s(t.jadwal_ujian.ta)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.jadwal_ujian.idsmt))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[i("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[i("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[i("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Berisi informasi passing grade nilai dari sebuah jadwal ujian ")])]},proxy:!0}])}),i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[i("v-col",{attrs:{cols:"12"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,"item-key":"id","sort-by":"id","show-expand":"","disable-pagination":!0,"hide-default-footer":!0,expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-title",[t._v("DAFTAR NILAI PASSING GRADE")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-btn",{staticClass:"mb-2",attrs:{color:"primary",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.loadprodi(e)}}},[t._v(" GENERATE ")])],1)]},proxy:!0},{key:"item.kjur",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.$store.getters["uiadmin/getProdiName"](i.kjur))+" ")]}},{key:"item.nilai",fn:function(e){return[i("v-edit-dialog",{attrs:{"return-value":e.item.nilai,large:""},on:{"update:returnValue":function(i){return t.$set(e.item,"nilai",i)},"update:return-value":function(i){return t.$set(e.item,"nilai",i)},save:function(i){return t.saveItem({id:e.item.id,nilai:e.item.nilai})},cancel:t.cancelItem,open:t.openItem,close:t.closeItem},scopedSlots:t._u([{key:"input",fn:function(){return[i("div",{staticClass:"mt-4 title"},[t._v("Update Nilai")]),i("v-text-field",{attrs:{label:"NILAI PASSING GRADE",rules:t.rule_angka,outlined:"",autofocus:""},model:{value:e.item.nilai,callback:function(i){t.$set(e.item,"nilai",i)},expression:"props.item.nilai"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(e.item.nilai)+" ")])]}},{key:"expanded-item",fn:function(e){var a=e.headers,n=e.item;return[i("td",{staticClass:"text-center",attrs:{colspan:a.length}},[i("v-col",{attrs:{cols:"12"}},[i("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),i("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),i("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],s=(i("96cf"),i("1da1")),r=i("684f"),o=i("e477"),l={name:"PassingGrade",created:function(){this.jadwal_ujian_id=this.$route.params.idjadwalujian,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"#"},{text:"JADWAL UJIAN PMB",disabled:!1,href:"/spmb/jadwalujianpmb"},{text:"PASSING GRADE",disabled:!0,href:"#"}],this.initialize()},data:function(){return{jadwal_ujian_id:null,jadwal_ujian:{id:0,nama_kegiatan:"",ta:"",idsmt:""},breadcrumbs:[],dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"PROGRAM STUDI",value:"kjur",sortable:!0},{text:"NILAI",value:"nilai",sortable:!1,width:100}],search:"",rule_angka:[function(t){return/^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/.test(t)||"Isi dengan nilai antara 0.00 s.d 100.00"}]}},methods:{initialize:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var i=t.data;e.datatableLoading=!1,e.jadwal_ujian=i.jadwal_ujian,e.datatable=i.passing_grade})).catch((function(){e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},loadprodi:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.btnLoading=!0,t.next=3,this.$ajax.post("/spmb/passinggrade/loadprodi",{jadwal_ujian_id:this.jadwal_ujian_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.initialize()})).catch((function(){e.btnLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveItem:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var i,a,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.id,a=e.nilai,this.btnLoading=!0,t.next=4,this.$ajax.post("/spmb/passinggrade/"+i,{_method:"put",id:i,nilai:a},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){n.btnLoading=!1,n.initialize()}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),cancelItem:function(){},openItem:function(){},closeItem:function(){}},computed:{},components:{SPMBLayout:r["a"],ModuleHeader:o["a"]}},c=l,d=i("2877"),u=i("6544"),v=i.n(u),m=i("0798"),h=i("2bc5"),p=i("8336"),f=i("62ad"),_=i("a523"),g=i("8fea"),A=i("ce7e"),b=i("7679"),C=i("132d"),S=i("0fd9"),k=i("2fa4"),w=i("8654"),R=i("71d9"),E=i("2a7f"),P=Object(d["a"])(c,a,n,!1,null,null,null);e["default"]=P.exports;v()(P,{VAlert:m["a"],VBreadcrumbs:h["a"],VBtn:p["a"],VCol:f["a"],VContainer:_["a"],VDataTable:g["a"],VDivider:A["a"],VEditDialog:b["a"],VIcon:C["a"],VRow:S["a"],VSpacer:k["a"],VTextField:w["a"],VToolbar:R["a"],VToolbarTitle:E["a"]})}}]);