(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8ddf740"],{a796:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("KeuanganLayout",{scopedSlots:t._u([{key:"filtersidebar",fn:function(){return[e("Filter2",{ref:"filter2",on:{changeTahunAkademik:t.changeTahunAkademik,changeSemesterAkademik:t.changeSemesterAkademik}})]},proxy:!0}])},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-video-input-component ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" TRANSAKSI REGISTRASI KRS ")]},proxy:!0},{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman ini digunakan untuk melakukan transaksi Registrasi KRS mahasiswa lama. ")])]},proxy:!0}])}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.datatable,search:t.search,"item-key":"id","sort-by":"nama_mhs","show-expand":"",expanded:t.expanded,"single-expand":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){t.expanded=a},"click:row":t.dataTableRowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[t._v("DAFTAR TRANSAKSI")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""},on:{click:function(a){return a.stopPropagation(),t.addItem(a)}}},[e("v-icon",[t._v("mdi-plus")])],1),e("v-btn",{staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""},on:{click:function(a){return a.stopPropagation(),t.showDialogPrintout(a)}}},[e("v-icon",[t._v("mdi-printer")])],1),e("v-dialog",{attrs:{"max-width":"500px",persistent:""},model:{value:t.dialogfrm,callback:function(a){t.dialogfrm=a},expression:"dialogfrm"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:t.form_valid,callback:function(a){t.form_valid=a},expression:"form_valid"}},[e("v-card",[e("v-card-title",[e("span",{staticClass:"headline"},[t._v("TAMBAH TRANSAKSI T.A "+t._s(t.tahun_akademik))])]),e("v-card-text",[e("v-text-field",{attrs:{label:"NIM",outlined:"",rules:t.rule_nim,disabled:"mahasiswa"==t.dashboard},model:{value:t.formdata.nim,callback:function(a){t.$set(t.formdata,"nim",a)},expression:"formdata.nim"}}),e("v-select",{attrs:{items:t.daftar_semester,label:"TRANSAKSI UNTUK SEMESTER",rules:t.rule_semester,"item-text":"text","item-value":"id",outlined:""},model:{value:t.formdata.semester_akademik,callback:function(a){t.$set(t.formdata,"semester_akademik",a)},expression:"formdata.semester_akademik"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(a){return a.stopPropagation(),t.closedialogfrm(a)}}},[t._v("BATAL")]),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:t.btnLoading,disabled:!t.form_valid||t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.save(a)}}},[t._v(" BUAT ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.tanggal",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$date(e.tanggal).format("DD/MM/YYYY"))+" ")]}},{key:"item.sub_total",fn:function(a){var e=a.item;return[t._v(" "+t._s(t._f("formatUang")(e.sub_total))+" ")]}},{key:"item.idsmt",fn:function(a){var e=a.item;return[t._v(" "+t._s(t.$store.getters["uiadmin/getNamaSemester"](e.idsmt))+" ")]}},{key:"item.nama_status",fn:function(a){var i=a.item;return[e("v-chip",{attrs:{color:i.style,dark:""}},[t._v(t._s(i.nama_status))])]}},t.datatable.length>0?{key:"body.append",fn:function(){return[e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI PAID")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("formatUang")(t.totaltransaksi_paid)))]),e("td"),e("td")]),e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI UNPAID")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("formatUang")(t.totaltransaksi_unpaid)))]),e("td"),e("td")]),e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI CANCELED")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("formatUang")(t.totaltransaksi_canceled)))]),e("td"),e("td")]),e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"6"}},[t._v("TOTAL TRANSAKSI")]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("formatUang")(t.totaltransaksi_canceled+t.totaltransaksi_paid+t.totaltransaksi_unpaid)))]),e("td"),e("td")])]},proxy:!0}:null,{key:"expanded-item",fn:function(a){var i=a.headers,s=a.item;return[e("td",{staticClass:"text-center",attrs:{colspan:i.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[t._v("TRANS.DETAIL ID:")]),t._v(t._s(s.id)+" "),e("strong",[t._v("created_at:")]),t._v(t._s(t.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[t._v("updated_at:")]),t._v(t._s(t.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"item.actions",fn:function(a){var i=a.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){return a.stopPropagation(),t.viewItem(i)}}},[t._v(" mdi-eye ")]),0==i.status?e("v-icon",{attrs:{small:"",loading:t.btnLoading,disabled:t.btnLoading},on:{click:function(a){return a.stopPropagation(),t.deleteItem(i)}}},[t._v(" mdi-delete ")]):t._e()]}},{key:"no-data",fn:function(){return[t._v(" Data transaksi Registrasi KRS belum tersedia ")]},proxy:!0}],null,!0)})],1)],1)],1),e("dialog-printout",{ref:"dialogprint",attrs:{pid:"registrasikrs",title:"Registrasi KRS"}})],1)},s=[],n=(e("4160"),e("c975"),e("a434"),e("159b"),e("96cf"),e("1da1")),r=e("c8b0"),o=e("e477"),l=e("b602"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"500px"},on:{keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.cancel(a)}},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary",dense:"",flat:""}},[e("v-toolbar-title",{staticClass:"white--text"},[t._v(" Printout "+t._s(t.title)+" ")]),e("v-spacer"),e("v-icon",[t._v("mdi-printer")])],1)],1)],1)},c=[],m={name:"DialogPrintoutKeuangan",props:{pid:{type:String,required:!0},title:{type:String,default:""}},data:function(){return{dialog:!1}},methods:{open:function(){this.dialog=!0},cancel:function(){this.resolve(!1),this.dialog=!1}}},u=m,v=e("2877"),h=e("6544"),f=e.n(h),k=e("b0af"),g=e("169a"),_=e("132d"),p=e("2fa4"),A=e("71d9"),b=e("2a7f"),S=Object(v["a"])(u,d,c,!1,null,null,null),T=S.exports;f()(S,{VCard:k["a"],VDialog:g["a"],VIcon:_["a"],VSpacer:p["a"],VToolbar:A["a"],VToolbarTitle:b["c"]});var E={name:"TransaksiRegistrasiKRS",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"KEUANGAN",disabled:!1,href:"/keuangan"},{text:"TRANSAKSI REGISTRASI KRS",disabled:!0,href:"#"}],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"]},mounted:function(){this.initialize()},data:function(){return{dashboard:null,firstloading:!0,breadcrumbs:[],tahun_akademik:0,semester_akademik:null,btnLoading:!1,datatableLoading:!1,datatable:[],headers:[{text:"KODE BILLING",value:"no_transaksi",width:100,sortable:!0},{text:"TANGGAL",value:"tanggal",width:90,sortable:!0},{text:"NIM",value:"nim",sortable:!0,width:100},{text:"NAMA MAHASISWA",value:"nama_mhs",sortable:!0,width:250},{text:"SMT",value:"idsmt",width:100,sortable:!1},{text:"JUMLAH",value:"sub_total",width:100,sortable:!1,align:"right"},{text:"STATUS",value:"nama_status",width:100,sortable:!1},{text:"AKSI",value:"actions",sortable:!1,width:100}],expanded:[],search:"",dialogfrm:!1,form_valid:!0,daftar_semester:[],formdata:{nim:"",semester_akademik:""},formdefault:{nim:"",semester_akademik:""},rule_nim:[function(t){return!!t||"Nomor Induk Mahasiswa (NIM) mohon untuk diisi !!!"},function(t){return/^[0-9]+$/.test(t)||"Nomor Induk Mahasiswa (NIM) hanya boleh angka"}],rule_semester:[function(t){return!!t||"Mohon dipilih Semester untuk transaksi ini !!!"}]}},methods:{changeTahunAkademik:function(t){this.tahun_akademik=t},changeSemesterAkademik:function(t){this.semester_akademik=t},initialize:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.datatableLoading=!0,t.next=3,this.$ajax.post("/keuangan/transaksi-registrasikrs",{TA:this.tahun_akademik,SEMESTER_AKADEMIK:this.semester_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(t){var e=t.data;a.datatable=e.transaksi,a.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter2.setFirstTimeLoading(this.firstloading);case 5:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),dataTableRowClicked:function(t){t===this.expanded[0]?this.expanded=[]:this.expanded=[t]},addItem:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.daftar_semester=t.$store.getters["uiadmin/getDaftarSemester"],t.formdata.semester_akademik=t.semester_akademik,"mahasiswa"==t.dashboard&&(t.formdata.nim=t.$store.getters["auth/AttributeUser"]("username")),t.dialogfrm=!0;case 4:case"end":return a.stop()}}),a)})))()},viewItem:function(t){this.$router.push("/keuangan/transaksi-registrasikrs/"+t.transaksi_id)},save:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.$refs.frmdata.validate()){t.next=4;break}return this.btnLoading=!0,t.next=4,this.$ajax.post("/keuangan/transaksi-registrasikrs/store",{nim:this.formdata.nim,semester_akademik:this.formdata.semester_akademik,TA:this.tahun_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){a.closedialogfrm(),a.btnLoading=!1,a.initialize()})).catch((function(){a.btnLoading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}(),showDialogPrintout:function(){this.$refs.dialogprint.open()},closedialogfrm:function(){var t=this;this.dialogfrm=!1,setTimeout((function(){t.formdata=Object.assign({},t.formdefault),t.$refs.frmdata.reset()}),300)},deleteItem:function(t){var a=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data transaksi registrasi krs dengan ID "+t.id+" ?",{color:"red",width:"500px"}).then((function(e){e&&(a.btnLoading=!0,a.$ajax.post("/keuangan/transaksi-registrasikrs/"+t.transaksi_id,{_method:"DELETE"},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(){var e=a.datatable.indexOf(t);a.datatable.splice(e,1),a.btnLoading=!1})).catch((function(){a.btnLoading=!1})))}))}},computed:{totaltransaksi_paid:function(){var t=0;return this.datatable.forEach((function(a){1==a.status&&(t+=a.total)})),t},totaltransaksi_unpaid:function(){var t=0;return this.datatable.forEach((function(a){0==a.status&&(t+=a.total)})),t},totaltransaksi_canceled:function(){var t=0;return this.datatable.forEach((function(a){2==a.status&&(t+=a.total)})),t}},watch:{tahun_akademik:function(){this.firstloading||this.initialize()},semester_akademik:function(){this.firstloading||this.initialize()}},components:{KeuanganLayout:r["a"],ModuleHeader:o["a"],Filter2:l["a"],"dialog-printout":T}},C=E,R=e("0798"),x=e("2bc5"),N=e("8336"),w=e("99d9"),I=e("cc20"),y=e("62ad"),K=e("a523"),$=e("8fea"),L=e("ce7e"),V=e("4bd4"),O=e("0fd9"),D=e("b974"),M=e("8654"),U=Object(v["a"])(C,i,s,!1,null,null,null);a["default"]=U.exports;f()(U,{VAlert:R["a"],VBreadcrumbs:x["a"],VBtn:N["a"],VCard:k["a"],VCardActions:w["b"],VCardText:w["d"],VCardTitle:w["e"],VChip:I["a"],VCol:y["a"],VContainer:K["a"],VDataTable:$["a"],VDialog:g["a"],VDivider:L["a"],VForm:V["a"],VIcon:_["a"],VRow:O["a"],VSelect:D["a"],VSpacer:p["a"],VTextField:M["a"],VToolbar:A["a"],VToolbarTitle:b["c"]})},b602:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",[e("v-list-item-content",[e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN AKADEMIK",outlined:""},model:{value:t.tahun_akademik,callback:function(a){t.tahun_akademik=a},expression:"tahun_akademik"}}),e("v-select",{attrs:{items:t.daftar_semester,"item-text":"text","item-value":"id",label:"SEMESTER",outlined:""},model:{value:t.semester_akademik,callback:function(a){t.semester_akademik=a},expression:"semester_akademik"}})],1)],1)},s=[],n={name:"FilterMode6",created:function(){this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.daftar_semester=this.$store.getters["uiadmin/getDaftarSemester"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"]},data:function(){return{firstloading:!0,daftar_ta:[],tahun_akademik:null,daftar_semester:[],semester_akademik:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunAkademik",t),this.$emit("changeTahunAkademik",t))},semester_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateSemesterAkademik",t),this.$emit("changeSemesterAkademik",t))}}},r=n,o=e("2877"),l=e("6544"),d=e.n(l),c=e("da13"),m=e("5d23"),u=e("b974"),v=Object(o["a"])(r,i,s,!1,null,null,null);a["a"]=v.exports;d()(v,{VListItem:c["a"],VListItemContent:m["g"],VSelect:u["a"]})},c8b0:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(a){a.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(a){return a.stopPropagation(),t.toProfile(a)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("KEUANGAN-GROUP")&&"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/keuangan"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD KEUANGAN")])],1)],1):t._e(),e("v-subheader",[t._v("DAFTAR ULANG")]),e("v-list-item",{attrs:{link:"",to:"/keuangan/channelpembayaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-triforce")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" CHANNEL PEMBAYARAN ")])],1)],1),t.CAN_ACCESS("KEUANGAN-STATUS-TRANSAKSI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/statustransaksi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-triforce")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" STATUS TRANSAKSI ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-KOMPONEN-BIAYA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponen"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-video-input-component")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIAYA KOMPONEN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-BIAYA-KOMPONEN-PERIODE_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/biayakomponenperiode"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-triforce")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BIAYA KOMPONEN PERIODE ")])],1)],1):t._e(),"mahasiswabaru"!=t.dashboard&&"mahasiswa"!=t.dashboard?e("v-subheader",[t._v("METODE PEMBAYARAN")]):t._e(),t.CAN_ACCESS("KEUANGAN-METODE-TRANSFER-BANK_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/transferbank"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-cash")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TRANSFER BANK ")])],1)],1):t._e(),e("v-subheader",[t._v("TRANSAKSI")]),t.CAN_ACCESS("KEUANGAN-KONFIRMASI-PEMBAYARAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/konfirmasipembayaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-cash")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KONFIRMASI PEMBAYARAN ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-cash")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR TRANSAKSI ")])],1)],1):t._e(),e("v-divider"),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-REGISTRASIKRS_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-registrasikrs"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-cash")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TRANSAKSI REGISTRASI KRS ")])],1)],1):t._e(),t.CAN_ACCESS("KEUANGAN-TRANSAKSI-SPP_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/keuangan/transaksi-spp"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-cash")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TRANSAKSI SPP ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(a){t.drawerRight=a},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],n=(e("ac1f"),e("5319"),e("5530")),r=e("2f62"),o={name:"KeuanganLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(n["a"])({},Object(r["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,a=this.ATTRIBUTE_USER("foto");return t=""==a?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+a,t}}),watch:{loginTime:{handler:function(t){var a=this;t>=0?setTimeout((function(){a.loginTime=1==a.AUTHENTICATED?a.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),c=e("6544"),m=e.n(c),u=e("40dc"),v=e("5bc1"),h=e("8212"),f=e("ce7e"),k=e("132d"),g=e("adda"),_=e("8860"),p=e("da13"),A=e("8270"),b=e("5d23"),S=e("34c3"),T=e("f6c4"),E=e("e449"),C=e("f774"),R=e("2fa4"),x=e("e0c7"),N=e("afd9"),w=e("2a7f"),I=Object(d["a"])(l,i,s,!1,null,null,null);a["a"]=I.exports;m()(I,{VAppBar:u["a"],VAppBarNavIcon:v["a"],VAvatar:h["a"],VDivider:f["a"],VIcon:k["a"],VImg:g["a"],VList:_["a"],VListItem:p["a"],VListItemAvatar:A["a"],VListItemContent:b["g"],VListItemIcon:S["a"],VListItemSubtitle:b["j"],VListItemTitle:b["k"],VMain:T["a"],VMenu:E["a"],VNavigationDrawer:C["a"],VSpacer:R["a"],VSubheader:x["a"],VSystemBar:N["a"],VToolbarTitle:w["c"]})},e477:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},r=n,o=e("2877"),l=e("6544"),d=e.n(l),c=e("62ad"),m=e("a523"),u=e("132d"),v=e("0fd9"),h=Object(o["a"])(r,i,s,!1,null,null,null);a["a"]=h.exports;d()(h,{VCol:c["a"],VContainer:m["a"],VIcon:u["a"],VRow:v["a"]})}}]);