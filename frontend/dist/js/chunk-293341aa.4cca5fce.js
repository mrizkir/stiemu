(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-293341aa"],{"684f":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[a._v("Hak Akses Sebagai :")]),a._v(" "+a._s(a.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{staticClass:"grey--text",on:{click:function(t){t.stopPropagation(),a.drawer=!a.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(t){t.stopPropagation(),a.$router.push("/dashboard/"+a.$store.getters["auth/AccessToken"]).catch((function(a){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[a._v(a._s(a.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",a._g({attrs:{src:a.photoUser}},i))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[a._v(" "+a._s(a.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[a._v(" ["+a._s(a.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-account")])],1),e("v-list-item-title",[a._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(t){return t.preventDefault(),a.logout(t)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-power")])],1),e("v-list-item-title",[a._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),a.drawerRight=!a.drawerRight}}},[e("v-icon",[a._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{staticClass:"green darken-1",attrs:{width:"300",dark:"",temporary:a.temporaryleftsidebar,app:""},model:{value:a.drawer,callback:function(t){a.drawer=t},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:a.photoUser},on:{click:function(t){return t.stopPropagation(),a.toProfile(t)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[a._v(" "+a._s(a.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[a._v(" ["+a._s(a.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[a.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=a.dashboard&&"mahasiswa"!=a.dashboard?e("v-list-item",{staticClass:"yellow",attrs:{to:{path:"/spmb"},link:"",color:"green"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v("BOARD SPMB")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-SOAL_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/soalpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-head-question-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" SOAL PMB ")])],1)],1):a._e(),e("v-subheader",[a._v("DATA MHS. BARU")]),a.CAN_ACCESS("SPMB-PMB_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/pendaftaranbaru"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-account-plus")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" PENDAFTAR ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-FORMULIR-PENDAFTARAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/formulirpendaftaran"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" BIODATA ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-PERSYARATAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/persyaratan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" PERSYARATAN ")])],1)],1):a._e(),e("v-subheader",[a._v("UJIAN PMB")]),a.CAN_ACCESS("SPMB-PMB-JADWAL-UJIAN_BROWSE")&&"mahasiswabaru"!=a.dashboard&&"mahasiswa"!=a.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/jadwalujianpmb"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" JADWAL UJIAN ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-NILAI-UJIAN_BROWSE")&&"mahasiswabaru"!=a.dashboard&&"mahasiswa"!=a.dashboard?e("v-list-item",{attrs:{link:"",to:"/spmb/nilaiujian"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-calendar-account")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" NILAI UJIAN ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-GROUP")&&"mahasiswabaru"!=a.dashboard&&"mahasiswa"!=a.dashboard?e("v-subheader",[a._v("LAPORAN")]):a._e(),a.CAN_ACCESS("SPMB-PMB-LAPORAN-FAKULTAS_BROWSE")&&a.isBentukPT("universitas")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanfakultas"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" LAPORAN FAKULTAS ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-LAPORAN-PRODI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporanprodi"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" LAPORAN PRODI ")])],1)],1):a._e(),a.CAN_ACCESS("SPMB-PMB-LAPORAN-KELULUSAN_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/spmb/laporankelulusan"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-file-document-edit-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v(" LAPORAN KELULUSAN ")])],1)],1):a._e()],1)],1),a.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:a.drawerRight,callback:function(t){a.drawerRight=t},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[a._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{staticClass:"teal lighten-5 mb-5"},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[a._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[a._v("FILTER")])],1)],1),a._t("filtersidebar")],2)],1):a._e(),e("v-main",{staticClass:"mx-4 mb-4"},[a._t("default")],2)],1)},r=[],n=(e("ac1f"),e("5319"),e("5530")),s=e("2f62"),o={name:"SPMBLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var a=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){a.$store.dispatch("auth/logout"),a.$store.dispatch("uifront/reinit"),a.$store.dispatch("uiadmin/reinit"),a.$router.push("/")})).catch((function(){a.$store.dispatch("auth/logout"),a.$store.dispatch("uifront/reinit"),a.$store.dispatch("uiadmin/reinit"),a.$router.push("/")}))},isBentukPT:function(a){return this.$store.getters["uifront/getBentukPT"]==a}},computed:Object(n["a"])({},Object(s["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var a,t=this.ATTRIBUTE_USER("foto");return a=""==t?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+t,a}}),watch:{loginTime:{handler:function(a){var t=this;a>=0?setTimeout((function(){t.loginTime=1==t.AUTHENTICATED?t.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},l=o,d=e("2877"),u=e("6544"),m=e.n(u),c=e("40dc"),f=e("5bc1"),_=e("8212"),v=e("ce7e"),h=e("132d"),p=e("adda"),b=e("8860"),k=e("da13"),g=e("8270"),A=e("5d23"),S=e("34c3"),x=e("f6c4"),C=e("e449"),L=e("f774"),T=e("2fa4"),P=e("e0c7"),E=e("afd9"),N=e("2a7f"),R=Object(d["a"])(l,i,r,!1,null,null,null);t["a"]=R.exports;m()(R,{VAppBar:c["a"],VAppBarNavIcon:f["a"],VAvatar:_["a"],VDivider:v["a"],VIcon:h["a"],VImg:p["a"],VList:b["a"],VListItem:k["a"],VListItemAvatar:g["a"],VListItemContent:A["g"],VListItemIcon:S["a"],VListItemSubtitle:A["j"],VListItemTitle:A["k"],VMain:x["a"],VMenu:C["a"],VNavigationDrawer:L["a"],VSpacer:T["a"],VSubheader:P["a"],VSystemBar:E["a"],VToolbarTitle:N["c"]})},"72ca":function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("SPMBLayout",{attrs:{showrightsidebar:!1}},[e("ModuleHeader",{scopedSlots:a._u([{key:"icon",fn:function(){return[a._v(" mdi-file-document-edit-outline ")]},proxy:!0},{key:"name",fn:function(){return[a._v(" BIODATA ")]},proxy:!0},"mahasiswabaru"!=a.dashboard?{key:"subtitle",fn:function(){return[a._v(" TAHUN PENDAFTARAN "+a._s(a.tahun_pendaftaran)+" - "+a._s(a.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:a.breadcrumbs},scopedSlots:a._u([{key:"divider",fn:function(){return[e("v-icon",[a._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Berisi kelengkapan biodata, silahkan melakukan filter tahun akademik dan program studi. ")])]},proxy:!0}],null,!0)}),e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:a.form_valid,callback:function(t){a.form_valid=t},expression:"form_valid"}},[e("v-card",{staticClass:"mb-4"},[e("v-card-title",[a._v(" IDENTITAS DIRI ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"NAMA LENGKAP",rules:a.rule_nama_mhs,filled:""},model:{value:a.formdata.nama_mhs,callback:function(t){a.$set(a.formdata,"nama_mhs",t)},expression:"formdata.nama_mhs"}}),e("v-text-field",{attrs:{label:"TEMPAT LAHIR",rules:a.rule_tempat_lahir,filled:""},model:{value:a.formdata.tempat_lahir,callback:function(t){a.$set(a.formdata,"tempat_lahir",t)},expression:"formdata.tempat_lahir"}}),e("v-menu",{ref:"menuTanggalLahir",attrs:{"close-on-content-click":!1,"return-value":a.formdata.tanggal_lahir,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return a.$set(a.formdata,"tanggal_lahir",t)},"update:return-value":function(t){return a.$set(a.formdata,"tanggal_lahir",t)}},scopedSlots:a._u([{key:"activator",fn:function(t){var i=t.on;return[e("v-text-field",a._g({attrs:{label:"TANGGAL LAHIR",readonly:"",filled:"",rules:a.rule_tanggal_lahir},model:{value:a.formdata.tanggal_lahir,callback:function(t){a.$set(a.formdata,"tanggal_lahir",t)},expression:"formdata.tanggal_lahir"}},i))]}}]),model:{value:a.menuTanggalLahir,callback:function(t){a.menuTanggalLahir=t},expression:"menuTanggalLahir"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:a.formdata.tanggal_lahir,callback:function(t){a.$set(a.formdata,"tanggal_lahir",t)},expression:"formdata.tanggal_lahir"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){a.menuTanggalLahir=!1}}},[a._v("Cancel")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return a.$refs.menuTanggalLahir.save(a.formdata.tanggal_lahir)}}},[a._v("OK")])],1)],1),e("v-radio-group",{attrs:{row:""},model:{value:a.formdata.jk,callback:function(t){a.$set(a.formdata,"jk",t)},expression:"formdata.jk"}},[a._v(" JENIS KELAMIN : "),e("v-radio",{attrs:{label:"LAKI-LAKI",value:"L"}}),e("v-radio",{attrs:{label:"PEREMPUAN",value:"P"}})],1),e("v-text-field",{attrs:{label:"NOMOR HP",filled:"",rules:a.rule_nomorhp},model:{value:a.formdata.nomor_hp,callback:function(t){a.$set(a.formdata,"nomor_hp",t)},expression:"formdata.nomor_hp"}}),e("v-text-field",{attrs:{label:"EMAIL",rules:a.rule_email,filled:""},model:{value:a.formdata.email,callback:function(t){a.$set(a.formdata,"email",t)},expression:"formdata.email"}}),e("v-text-field",{attrs:{label:"NAMA IBU KANDUNG",rules:a.rule_nama_ibu_kandung,filled:""},model:{value:a.formdata.nama_ibu_kandung,callback:function(t){a.$set(a.formdata,"nama_ibu_kandung",t)},expression:"formdata.nama_ibu_kandung"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-title",[a._v(" ALAMAT ")]),e("v-card-text",[e("v-select",{attrs:{label:"PROVINSI",items:a.daftar_provinsi,"item-text":"nama","item-value":"id","return-object":"",loading:a.btnLoadingProv,filled:""},model:{value:a.provinsi_id,callback:function(t){a.provinsi_id=t},expression:"provinsi_id"}}),e("v-select",{attrs:{label:"KABUPATEN/KOTA",items:a.daftar_kabupaten,"item-text":"nama","item-value":"id","return-object":"",loading:a.btnLoadingKab,filled:""},model:{value:a.kabupaten_id,callback:function(t){a.kabupaten_id=t},expression:"kabupaten_id"}}),e("v-select",{attrs:{label:"KECAMATAN",items:a.daftar_kecamatan,"item-text":"nama","item-value":"id","return-object":"",filled:""},model:{value:a.kecamatan_id,callback:function(t){a.kecamatan_id=t},expression:"kecamatan_id"}}),e("v-select",{attrs:{label:"DESA/KELURAHAN",items:a.daftar_desa,"item-text":"nama","item-value":"id","return-object":"",rules:a.rule_desa,filled:""},model:{value:a.desa_id,callback:function(t){a.desa_id=t},expression:"desa_id"}}),e("v-text-field",{attrs:{label:"ALAMAT RUMAH",rules:a.rule_alamat_rumah,filled:""},model:{value:a.formdata.alamat_rumah,callback:function(t){a.$set(a.formdata,"alamat_rumah",t)},expression:"formdata.alamat_rumah"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-title",[a._v(" RENCANA STUDI ")]),e("v-card-text",["universitas"==a.$store.getters["uifront/getBentukPT"]?e("v-select",{attrs:{label:"FAKULTAS",filled:"",rules:a.rule_fakultas,items:a.daftar_fakultas,"item-text":"nama_fakultas","item-value":"kode_fakultas",loading:a.btnLoadingFakultas},model:{value:a.kode_fakultas,callback:function(t){a.kode_fakultas=t},expression:"kode_fakultas"}}):a._e(),e("v-select",{attrs:{label:"PROGRAM STUDI",items:a.daftar_prodi,"item-text":"nama_prodi2","item-value":"id",rules:a.rule_prodi,filled:""},model:{value:a.formdata.kjur1,callback:function(t){a.$set(a.formdata,"kjur1",t)},expression:"formdata.kjur1"}}),e("v-select",{attrs:{label:"KELAS",items:a.daftar_kelas,"item-text":"nkelas","item-value":"idkelas",rules:a.rule_kelas,filled:""},model:{value:a.formdata.idkelas,callback:function(t){a.$set(a.formdata,"idkelas",t)},expression:"formdata.idkelas"}})],1)],1),e("v-card",{staticClass:"mb-4"},[e("v-card-actions",[a._v(" Kode Billing: "),e("strong",[a._v(a._s(a.kode_billing))]),e("v-spacer"),e("v-btn",{attrs:{color:"blue darken-1",text:"",loading:a.btnLoading,disabled:!a.form_valid||a.btnLoading},on:{click:function(t){return t.stopPropagation(),a.save(t)}}},[a._v("SIMPAN")])],1)],1)],1)],1)],1)],1)],1)},r=[],n=(e("96cf"),e("1da1")),s=e("684f"),o=e("e477"),l={name:"FormulirPendaftaranEdit",created:function(){this.user_id=this.$route.params.user_id,this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"/spmb"},{text:"BIODATA",disabled:!1,href:"/spmb/formulirpendaftaran"},{text:"EDIT",disabled:!0,href:"#"}],this.initialize()},data:function(){return{breadcrumbs:[],dashboard:null,tahun_pendaftaran:null,nama_prodi:null,btnLoading:!1,btnLoadingProv:!1,btnLoadingKab:!1,btnLoadingKec:!1,btnLoadingFakultas:!1,user_id:null,kode_billing:"N.A",form_valid:!0,menuTanggalLahir:!1,daftar_provinsi:[],provinsi_id:0,daftar_kabupaten:[],kabupaten_id:0,daftar_kecamatan:[],kecamatan_id:0,daftar_desa:[],desa_id:0,daftar_fakultas:[],kode_fakultas:"",daftar_prodi:[],daftar_kelas:[],formdata:{nama_mhs:"",tempat_lahir:"",tanggal_lahir:"",jk:"L",nomor_hp:"",email:"",alamat_rumah:"",nama_ibu_kandung:"",kjur1:"",idkelas:""},rule_nama_mhs:[function(a){return!!a||"Nama Mahasiswa mohon untuk diisi !!!"},function(a){return/^[A-Za-z\s\\,\\.]*$/.test(a)||"Nama Mahasiswa hanya boleh string dan spasi"}],rule_nidn:[function(a){return!!a||"Mohon untuk di isi NIDN !!!"},function(a){return/^[0-9]+$/.test(a)||"NIDN hanya boleh angka"}],rule_nipy:[function(a){return!!a||"Mohon untuk di isi NIP Yayasan !!!"},function(a){return/^[0-9]+$/.test(a)||"NIP Yayasan hanya boleh angka"}],rule_tempat_lahir:[function(a){return!!a||"Tempat Lahir mohon untuk diisi !!!"}],rule_tanggal_lahir:[function(a){return!!a||"Tanggal Lahir mohon untuk diisi !!!"}],rule_nomorhp:[function(a){return!!a||"Nomor HP mohon untuk diisi !!!"},function(a){return/^\+[1-9]{1}[0-9]{1,14}$/.test(a)||"Nomor HP hanya boleh angka dan gunakan kode negara didepan seperti +6281214553388"}],rule_email:[function(a){return!!a||"Email mohon untuk diisi !!!"},function(a){return/.+@.+\..+/.test(a)||"Format E-mail mohon di isi dengan benar"}],rule_nama_ibu_kandung:[function(a){return!!a||"Nama Ibu Kandung mohon untuk diisi !!!"},function(a){return/^[A-Za-z\s\\,\\.]*$/.test(a)||"Nama Ibu Kandung hanya boleh string dan spasi"}],rule_desa:[function(a){return!!a||"Mohon Desa mohon untuk diisi !!!"}],rule_alamat_rumah:[function(a){return!!a||"Alamat Rumah mohon untuk diisi !!!"}],rule_fakultas:[function(a){return!!a||"Fakultas mohon untuk dipilih !!!"}],rule_prodi:[function(a){return!!a||"Program studi mohon untuk dipilih !!!"}],rule_kelas:[function(a){return!!a||"Kelas mohon untuk dipilih !!!"}]}},methods:{initialize:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t,e=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t=this.$store.getters["uifront/getBentukPT"],this.$ajax.get("/datamaster/provinsi").then((function(a){var t=a.data;e.daftar_provinsi=t.provinsi})),"universitas"!=t){a.next=7;break}return a.next=5,this.$ajax.get("/datamaster/fakultas").then((function(a){var t=a.data;e.daftar_fakultas=t.fakultas}));case 5:a.next=9;break;case 7:return a.next=9,this.$ajax.get("/datamaster/programstudi").then((function(a){var t=a.data;e.daftar_prodi=t.prodi}));case 9:return this.$ajax.get("/datamaster/kelas").then((function(a){var t=a.data;e.daftar_kelas=t.kelas})),a.next=12,this.$ajax.get("/spmb/formulirpendaftaran/"+this.user_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var i=a.data;e.formdata.nama_mhs=i.formulir.nama_mhs,e.formdata.tempat_lahir=i.formulir.tempat_lahir,e.formdata.tanggal_lahir=i.formulir.tanggal_lahir,e.formdata.jk=i.formulir.jk,e.formdata.nomor_hp="+".data.formulir.nomor_hp,e.formdata.email=i.formulir.email,e.formdata.nama_ibu_kandung=i.formulir.nama_ibu_kandung,e.provinsi_id={id:""+i.formulir.address1_provinsi_id,nama:""+i.formulir.address1_provinsi},e.kabupaten_id={id:""+i.formulir.address1_kabupaten_id,nama:""+i.formulir.address1_kabupaten},e.kecamatan_id={id:""+i.formulir.address1_kecamatan_id,nama:""+i.formulir.address1_kecamatan},e.desa_id={id:""+i.formulir.address1_desa_id,nama:""+i.formulir.address1_kelurahan},e.formdata.alamat_rumah=i.formulir.alamat_rumah,"universitas"==t&&null!=i.formulir.kode_fakultas&&(e.kode_fakultas=i.formulir.kode_fakultas),e.formdata.kjur1=i.formulir.kjur1,e.formdata.idkelas=i.formulir.idkelas,e.kode_billing=i.no_transaksi,e.nama_prodi=e.$store.getters["uiadmin/getProdiName"](i.formulir.kjur1),e.tahun_pendaftaran=i.ta,e.$refs.frmdata.resetValidation()}));case 12:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}(),save:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.$refs.frmdata.validate()){a.next=6;break}return this.btnLoading=!0,a.next=4,this.$ajax.post("/spmb/formulirpendaftaran/"+this.user_id,{_method:"put",nama_mhs:this.formdata.nama_mhs,tempat_lahir:this.formdata.tempat_lahir,tanggal_lahir:this.formdata.tanggal_lahir,jk:this.formdata.jk,nomor_hp:this.formdata.nomor_hp,email:this.formdata.email,nama_ibu_kandung:this.formdata.nama_ibu_kandung,address1_provinsi_id:this.provinsi_id.id,address1_provinsi:this.provinsi_id.nama,address1_kabupaten_id:this.kabupaten_id.id,address1_kabupaten:this.kabupaten_id.nama,address1_kecamatan_id:this.kecamatan_id.id,address1_kecamatan:this.kecamatan_id.nama,address1_desa_id:this.desa_id.id,address1_kelurahan:this.desa_id.nama,alamat_rumah:this.formdata.alamat_rumah,kjur1:this.formdata.kjur1,idkelas:this.formdata.idkelas},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.kode_billing=e.no_transaksi,t.btnLoading=!1})).catch((function(){t.btnLoading=!1}));case 4:this.form_valid=!0,this.$refs.frmdata.resetValidation();case 6:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}()},watch:{provinsi_id:function(a){var t=this;null!=a.id&&""!=a.id&&(this.btnLoadingProv=!0,this.$ajax.get("/datamaster/provinsi/"+a.id+"/kabupaten").then((function(a){var e=a.data;t.daftar_kabupaten=e.kabupaten,t.btnLoadingProv=!1})),this.daftar_kecamatan=[])},kabupaten_id:function(a){var t=this;null!=a.id&&""!=a.id&&(this.btnLoadingKab=!0,this.$ajax.get("/datamaster/kabupaten/"+a.id+"/kecamatan").then((function(a){var e=a.data;t.daftar_kecamatan=e.kecamatan,t.btnLoadingKab=!1})))},kecamatan_id:function(a){var t=this;null!=a.id&&""!=a.id&&(this.btnLoadingKec=!0,this.$ajax.get("/datamaster/kecamatan/"+a.id+"/desa").then((function(a){var e=a.data;t.daftar_desa=e.desa,t.btnLoadingKec=!1})))},kode_fakultas:function(a){var t=this;this.btnLoadingFakultas=!0,this.$ajax.get("/datamaster/fakultas/"+a+"/programstudi").then((function(a){var e=a.data;t.daftar_prodi=e.programstudi,t.btnLoadingFakultas=!1}))}},components:{SPMBLayout:s["a"],ModuleHeader:o["a"]}},d=l,u=e("2877"),m=e("6544"),c=e.n(m),f=e("0798"),_=e("2bc5"),v=e("8336"),h=e("b0af"),p=e("99d9"),b=e("62ad"),k=e("a523"),g=e("2e4b"),A=e("4bd4"),S=e("132d"),x=e("e449"),C=e("67b6"),L=e("43a6"),T=e("0fd9"),P=e("b974"),E=e("2fa4"),N=e("8654"),R=Object(u["a"])(d,i,r,!1,null,null,null);t["default"]=R.exports;c()(R,{VAlert:f["a"],VBreadcrumbs:_["a"],VBtn:v["a"],VCard:h["a"],VCardActions:p["b"],VCardText:p["d"],VCardTitle:p["e"],VCol:b["a"],VContainer:k["a"],VDatePicker:g["a"],VForm:A["a"],VIcon:S["a"],VMenu:x["a"],VRadio:C["a"],VRadioGroup:L["a"],VRow:T["a"],VSelect:P["a"],VSpacer:E["a"],VTextField:N["a"]})},e477:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",{attrs:{fluid:a.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[a._t("icon")],2),a._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[a._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a._t("desc")],2)],1)],1)},r=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},s=n,o=e("2877"),l=e("6544"),d=e.n(l),u=e("62ad"),m=e("a523"),c=e("132d"),f=e("0fd9"),_=Object(o["a"])(s,i,r,!1,null,null,null);t["a"]=_.exports;d()(_,{VCol:u["a"],VContainer:m["a"],VIcon:c["a"],VRow:f["a"]})}}]);