(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e81c91"],{afe1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KepegawaianLayout",[a("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-account ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" DOSEN ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[a("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[a("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini untuk melakukan pengelolaan data dosen. Namun untuk menghapus dan menambah di halaman user dosen. ")])]},proxy:!0}])}),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1)],1)],1),a("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.daftar_dosen,search:t.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(e){t.expanded=e},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("DAFTAR DOSEN")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"700px",persistent:""},model:{value:t.dialogEdit,callback:function(e){t.dialogEdit=e},expression:"dialogEdit"}},[a("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(e){t.form_valid=e},expression:"form_valid"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("UBAH DATA DOSEN")])]),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{label:"GELAR DPN",outlined:""},model:{value:t.editedItem.gelar_depan,callback:function(e){t.$set(t.editedItem,"gelar_depan",e)},expression:"editedItem.gelar_depan"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{label:"NAMA DOSEN",outlined:"",rules:t.rule_user_name},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"3"}},[a("v-text-field",{attrs:{label:"GELAR BLK",outlined:""},model:{value:t.editedItem.gelar_belakang,callback:function(e){t.$set(t.editedItem,"gelar_belakang",e)},expression:"editedItem.gelar_belakang"}})],1)],1),a("v-text-field",{attrs:{label:"NIDN (NOMOR INDUK DOSEN NASIONAL)",outlined:""},model:{value:t.editedItem.nidn,callback:function(e){t.$set(t.editedItem,"nidn",e)},expression:"editedItem.nidn"}}),a("v-text-field",{attrs:{label:"NIPY (NOMOR INDUK PEGAWAI YAYASAN)",outlined:"",rules:t.rule_nipy},model:{value:t.editedItem.nipy,callback:function(e){t.$set(t.editedItem,"nipy",e)},expression:"editedItem.nipy"}}),a("v-select",{attrs:{label:"JABATAN AKADEMIK",items:t.daftar_jabatan,"item-text":"nama_jabatan","item-value":"id_jabatan",outlined:""},model:{value:t.editedItem.id_jabatan,callback:function(e){t.$set(t.editedItem,"id_jabatan",e)},expression:"editedItem.id_jabatan"}}),a("v-text-field",{attrs:{label:"EMAIL",outlined:"",rules:t.rule_user_email},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}}),a("v-text-field",{attrs:{label:"NOMOR HP",outlined:"",rules:t.rule_user_nomorhp},model:{value:t.editedItem.nomor_hp,callback:function(e){t.$set(t.editedItem,"nomor_hp",e)},expression:"editedItem.nomor_hp"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),t.close(e)}}},[t._v("BATAL")]),a("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[t._v("SIMPAN")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.nidn",fn:function(e){var a=e.item;return[t._v(" "+t._s((a.nidn&&a.nidn.length>0)>0?a.nidn:"N.A")+" ")]}},{key:"item.actions",fn:function(e){var i=e.item;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"primary",icon:"","x-small":"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},"v-btn",s,!1),n),[a("v-icon",[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v("Ubah data user dosen")])])]}},{key:"item.foto",fn:function(e){var i=e.item;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",{attrs:{src:t.$api.url+"/"+i.foto}})],1)]}},{key:"expanded-item",fn:function(e){var i=e.headers,n=e.item;return[a("td",{staticClass:"text-center",attrs:{colspan:i.length}},[a("v-col",{attrs:{cols:"12"}},[a("strong",[t._v("ID:")]),t._v(t._s(n.id)+" "),a("strong",[t._v("DW:")]),t._v(t._s(0==n.is_dw?"BUKAN":"YA")+" "),a("strong",[t._v("Email:")]),t._v(t._s(n.email)+" "),a("strong",[t._v("created_at:")]),t._v(t._s(t.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),a("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[t._v(" Data belum tersedia ")]},proxy:!0}])}),a("p",{staticClass:"text--secondary"},[t._v("DW : Dosen Wali")])],1)],1)],1)],1)},n=[],s=(a("c975"),a("b0c0"),a("5530")),r=(a("96cf"),a("1da1")),o=a("2f62"),d=a("d9e5"),l=a("e477"),c={name:"KepegawaianDosen",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.ACCESS_TOKEN},{text:"KEPEGAWAIAN",disabled:!1,href:"/kepegawaian"},{text:"DOSEN",disabled:!0,href:"#"}],this.initialize()},data:function(){return{datatableLoading:!1,btnLoading:!1,headers:[{text:"",value:"foto"},{text:"NAMA DOSEN",value:"nama_dosen",sortable:!0,width:250},{text:"NIDN",value:"nidn",sortable:!0},{text:"NIPY",value:"nipy",sortable:!0},{text:"NOMOR HP",value:"nomor_hp",sortable:!0},{text:"JABATAN AKADEMIK",value:"nama_jabatan",sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",daftar_dosen:[],form_valid:!0,dialogEdit:!1,editedIndex:-1,daftar_jabatan:[],editedItem:{id:0,username:"",name:"",nama_dosen:"",id_jabatan:1,gelar_depan:"",gelar_belakang:"1",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},defaultItem:{id:0,username:"",name:"",nama_dosen:"",id_jabatan:1,gelar_depan:"",gelar_belakang:"1",nidn:"",nipy:"",email:"",nomor_hp:"",is_dw:!1,created_at:"",updated_at:""},rule_user_name:[function(t){return!!t||"Mohon untuk di isi nama Dosen !!!"},function(t){return/^[A-Za-z\s]*$/.test(t)||"Nama Dosen hanya boleh string dan spasi"}],rule_nidn:[function(t){return/^[0-9]+$/.test(t)||"NIDN hanya boleh angka"}],rule_nipy:[function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Pegawai Yayasan (NIPY) hanya boleh angka"}],rule_user_email:[function(t){return!!t||"Mohon untuk di isi email User !!!"},function(t){return/.+@.+\..+/.test(t)||"Format E-mail harus benar"}],rule_user_nomorhp:[function(t){return!!t||"Nomor HP mohon untuk diisi !!!"},function(t){return/^\+[1-9]{1}[0-9]{1,14}$/.test(t)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}]}},methods:{initialize:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.get("/kepegawaian/dosen",{headers:{Authorization:this.TOKEN}}).then((function(t){var a=t.data;e.daftar_dosen=a.dosen,e.datatableLoading=!1}));case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},editItem:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$ajax.get("/datamaster/jabatanakademik",{headers:{Authorization:this.TOKEN}}).then((function(t){var e=t.data;a.daftar_jabatan=e.jabatan_akademik})),this.editedIndex=this.daftar_dosen.indexOf(e),this.editedItem=Object.assign({},e),this.dialogEdit=!0;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){var t=this;this.btnLoading=!1,this.dialogEdit=!1,setTimeout((function(){t.$refs.frmdata.resetValidation(),t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this;this.$refs.frmdata.validate()&&(this.btnLoading=!0,this.editedIndex>-1&&this.$ajax.post("/kepegawaian/dosen/"+this.editedItem.id,{_method:"PUT",name:this.editedItem.name,id_jabatan:this.editedItem.id_jabatan,gelar_depan:this.editedItem.gelar_depan,gelar_belakang:this.editedItem.gelar_belakang,nidn:this.editedItem.nidn,nipy:this.editedItem.nipy,email:this.editedItem.email,nomor_hp:this.editedItem.nomor_hp},{headers:{Authorization:this.TOKEN}}).then((function(){t.initialize(),t.close()})).catch((function(){t.btnLoading=!1})))}},computed:Object(s["a"])({},Object(o["b"])("auth",{ACCESS_TOKEN:"AccessToken",TOKEN:"Token"})),watch:{dialogEdit:function(t){t||this.close()}},components:{KepegawaianLayout:d["a"],ModuleHeader:l["a"]}},u=c,m=a("2877"),v=a("6544"),h=a.n(v),p=a("0798"),f=a("8212"),_=a("2bc5"),g=a("8336"),b=a("b0af"),A=a("99d9"),k=a("62ad"),I=a("a523"),x=a("8fea"),T=a("169a"),E=a("ce7e"),S=a("4bd4"),C=a("132d"),w=a("adda"),N=a("0fd9"),y=a("b974"),V=a("2fa4"),O=a("8654"),$=a("71d9"),D=a("2a7f"),R=a("3a2f"),L=Object(m["a"])(u,i,n,!1,null,null,null);e["default"]=L.exports;h()(L,{VAlert:p["a"],VAvatar:f["a"],VBreadcrumbs:_["a"],VBtn:g["a"],VCard:b["a"],VCardActions:A["b"],VCardText:A["d"],VCardTitle:A["e"],VCol:k["a"],VContainer:I["a"],VDataTable:x["a"],VDialog:T["a"],VDivider:E["a"],VForm:S["a"],VIcon:C["a"],VImg:w["a"],VRow:N["a"],VSelect:y["a"],VSpacer:V["a"],VTextField:O["a"],VToolbar:$["a"],VToolbarTitle:D["c"],VTooltip:R["a"]})},d9e5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[a("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),a("v-app-bar",{attrs:{app:""}},[a("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V-APP-BAR-NAV-ICON-CSS-CLASS"),on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(e){e.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[a("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),a("v-spacer"),a("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-avatar",{attrs:{size:"30"}},[a("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list-item",{attrs:{to:"/system-users/profil"}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-account")])],1),a("v-list-item-title",[t._v("Profil")])],1),a("v-divider"),a("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-power")])],1),a("v-list-item-title",[t._v("Logout")])],1)],1)],1),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}},[a("v-icon",[t._v("mdi-menu-open")])],1)],1),a("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V-NAVIGATION-DRAWER-CSS-CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:t.photoUser},on:{click:function(e){return e.stopPropagation(),t.toProfile(e)}}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),a("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),a("v-divider"),a("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEPEGAWAIAN-GROUP")?a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-CSS-CLASS"),attrs:{to:{path:"/kepegawaian"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-COLOR")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-monitor-dashboard")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("BOARD KEPEGAWAIAN")])],1)],1):t._e(),t.CAN_ACCESS("KEPEGAWAIAN-DOSEN_BROWSE")?a("v-list-item",{attrs:{link:"",to:"/kepegawaian/dosen","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-teach")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(" DOSEN ")])],1)],1):t._e()],1)],1),t.showrightsidebar?a("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-menu-open")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),a("v-divider"),a("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")},[a("v-list-item-icon",{staticClass:"mr-2"},[a("v-icon",[t._v("mdi-filter")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),a("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},n=[],s=(a("b0c0"),a("ac1f"),a("5319"),a("5530")),r=a("2f62"),o={name:"KepegawaianLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(s["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,e=this.ATTRIBUTE_USER("foto");return t=""==e?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+e,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var e=this;t>=0?setTimeout((function(){e.loginTime=1==e.AUTHENTICATED?e.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},d=o,l=a("2877"),c=a("6544"),u=a.n(c),m=a("40dc"),v=a("5bc1"),h=a("8212"),p=a("ce7e"),f=a("132d"),_=a("adda"),g=a("8860"),b=a("da13"),A=a("8270"),k=a("5d23"),I=a("34c3"),x=a("f6c4"),T=a("e449"),E=a("f774"),S=a("2fa4"),C=a("afd9"),w=a("2a7f"),N=Object(l["a"])(d,i,n,!1,null,null,null);e["a"]=N.exports;u()(N,{VAppBar:m["a"],VAppBarNavIcon:v["a"],VAvatar:h["a"],VDivider:p["a"],VIcon:f["a"],VImg:_["a"],VList:g["a"],VListItem:b["a"],VListItemAvatar:A["a"],VListItemContent:k["g"],VListItemIcon:I["a"],VListItemSubtitle:k["j"],VListItemTitle:k["k"],VMain:x["a"],VMenu:T["a"],VNavigationDrawer:E["a"],VSpacer:S["a"],VSystemBar:C["a"],VToolbarTitle:w["c"]})},e477:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:t.isReportPage}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("h1",{staticClass:"subheading grey--text"},[a("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},n=[],s={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=s,o=a("2877"),d=a("6544"),l=a.n(d),c=a("62ad"),u=a("a523"),m=a("132d"),v=a("0fd9"),h=Object(o["a"])(r,i,n,!1,null,null,null);e["a"]=h.exports;l()(h,{VCol:c["a"],VContainer:u["a"],VIcon:m["a"],VRow:v["a"]})}}]);