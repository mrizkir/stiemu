(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110fd3d8"],{"071d":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("SPMBLayout",{attrs:{ismhsbaru:a.$store.getters["uifront/getBentukPT"]},scopedSlots:a._u(["mahasiswabaru"!=a.dashboard?{key:"filtersidebar",fn:function(){return[e("Filter7",{ref:"filter7",on:{changeTahunPendaftaran:a.changeTahunPendaftaran,changeProdi:a.changeProdi}})]},proxy:!0}:null],null,!0)},[e("ModuleHeader",{scopedSlots:a._u([{key:"icon",fn:function(){return[a._v(" mdi-file-document-edit-outline ")]},proxy:!0},{key:"name",fn:function(){return[a._v(" PERSYARATAN ")]},proxy:!0},"mahasiswabaru"!=a.dashboard?{key:"subtitle",fn:function(){return[a._v(" TAHUN PENDAFTARAN "+a._s(a.tahun_pendaftaran)+" - "+a._s(a.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:a.breadcrumbs},scopedSlots:a._u([{key:"divider",fn:function(){return[e("v-icon",[a._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},"mahasiswabaru"==a.dashboard?{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Berisi daftar peryaratan pendaftaran yang harus di isi dengan benar dan lengkap; "),a.showcomponentpersyaratan?a._e():e("span",{staticClass:"red--text"},[a._v("Bila form isian tidak tampil mohon lengkapi terlebih dahulu Form Biodata")])])]},proxy:!0}:{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Berisi file-file persyaratan pendaftaran mahasiswa baru, silahkan melakukan filter tahun akademik dan program studi. ")])]},proxy:!0}],null,!0)}),"mahasiswabaru"==a.dashboard?e("v-container",{attrs:{fluid:""}},[a.showcomponentpersyaratan?e("FormPersyaratan",{attrs:{user_id:a.$store.getters["auth/AttributeUser"]("id")}}):a._e()],1):e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-text",[e("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:a.search,callback:function(t){a.search=t},expression:"search"}})],1)],1)],1)],1),e("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},[e("v-data-table",{staticClass:"elevation-1",attrs:{headers:a.headers,items:a.datatable,search:a.search,"item-key":"id","sort-by":"name","show-expand":"",expanded:a.expanded,"single-expand":!0,loading:a.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(t){a.expanded=t},"click:row":a.dataTableRowClicked},scopedSlots:a._u([{key:"top",fn:function(){return[e("v-toolbar",{attrs:{flat:"",color:"white"}},[e("v-toolbar-title",[a._v("DAFTAR MAHASISWA BARU")]),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-spacer"),e("v-dialog",{attrs:{fullscreen:!0},model:{value:a.dialogprofilmhsbaru,callback:function(t){a.dialogprofilmhsbaru=t},expression:"dialogprofilmhsbaru"}},[a.dialogprofilmhsbaru?e("ProfilMahasiswaBaru",{attrs:{item:a.datamhsbaru},on:{closeProfilMahasiswaBaru:a.closeProfilMahasiswaBaru}}):a._e()],1)],1)]},proxy:!0},{key:"item.foto",fn:function(t){var r=t.item;return[e("v-badge",{attrs:{bordered:"",color:a.badgeColor(r),icon:a.badgeIcon(r),value:r.jumlah_persyaratan>0,overlap:""}},[e("v-avatar",{attrs:{size:"30"}},[e("v-img",{attrs:{src:a.$api.url+"/"+r.foto}})],1)],1)]}},{key:"item.actions",fn:function(t){var r=t.item;return[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return t.stopPropagation(),a.viewItem(r)}}},[a._v(" mdi-eye ")])]}},{key:"expanded-item",fn:function(t){var r=t.headers,s=t.item;return[e("td",{staticClass:"text-center",attrs:{colspan:r.length}},[e("v-col",{attrs:{cols:"12"}},[e("strong",[a._v("ID:")]),a._v(a._s(s.id)+" "),e("strong",[a._v("created_at:")]),a._v(a._s(a.$date(s.created_at).format("DD/MM/YYYY HH:mm"))+" "),e("strong",[a._v("updated_at:")]),a._v(a._s(a.$date(s.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[a._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},s=[],n=e("1da1"),i=(e("96cf"),e("684f")),o=e("e477"),d=e("7cbb"),l=e("b229"),u=e("0639"),c={name:"PersyaratanPMB",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"],this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"SPMB",disabled:!1,href:"/spmb"},{text:"FORMULIR PENDAFTARAN",disabled:!0,href:"#"}],this.breadcrumbs[1].disabled="mahasiswabaru"==this.dashboard||"mahasiswa"==this.dashboard;var a=this.$store.getters["uiadmin/getProdiID"];this.prodi_id=a,this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](a),this.tahun_pendaftaran=this.$store.getters["uiadmin/getTahunPendaftaran"],this.initialize()},data:function(){return{firstloading:!0,prodi_id:null,tahun_pendaftaran:null,nama_prodi:null,dialogprofilmhsbaru:!1,breadcrumbs:[],dashboard:null,btnLoading:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"",value:"foto",width:70},{text:"NAMA MAHASISWA",value:"name",width:350,sortable:!0},{text:"NOMOR HP",value:"nomor_hp",width:100},{text:"KELAS",value:"nkelas",width:100,sortable:!0},{text:"STATUS",value:"status",width:120,sortable:!0},{text:"AKSI",value:"actions",sortable:!1,width:50}],search:"",showcomponentpersyaratan:!1,datamhsbaru:{}}},methods:{changeTahunPendaftaran:function(a){this.tahun_pendaftaran=a},changeProdi:function(a){this.prodi_id=a},initialize:function(){var a=Object(n["a"])(regeneratorRuntime.mark((function a(){var t=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if("mahasiswabaru"!=this.dashboard&&"mahasiswa"!=this.dashboard){a.next=5;break}return a.next=3,this.$ajax.get("/spmb/formulirpendaftaran/"+this.$store.getters["auth/AttributeUser"]("id"),{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.showcomponentpersyaratan=null!=e.formulir.idkelas&&""!=e.formulir.idkelas}));case 3:a.next=10;break;case 5:return this.datatableLoading=!0,a.next=8,this.$ajax.post("/spmb/pmbpersyaratan",{TA:this.tahun_pendaftaran,prodi_id:this.prodi_id},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;t.datatable=e.persyaratan,t.datatableLoading=!1}));case 8:this.firstloading=!1,this.$refs.filter7.setFirstTimeLoading(this.firstloading);case 10:case"end":return a.stop()}}),a,this)})));function t(){return a.apply(this,arguments)}return t}(),dataTableRowClicked:function(a){a===this.expanded[0]?this.expanded=[]:this.expanded=[a]},badgeColor:function(a){return a.persyaratan<a.jumlah_persyaratan?"error":"success"},badgeIcon:function(a){return a.persyaratan<a.jumlah_persyaratan==1?"mdi-close-thick":"mdi-check-bold"},viewItem:function(a){this.datamhsbaru=Object.assign({},a),this.dialogprofilmhsbaru=!0},closeProfilMahasiswaBaru:function(){this.dialogprofilmhsbaru=!1}},watch:{tahun_pendaftaran:function(){this.firstloading||this.initialize()},prodi_id:function(a){this.firstloading||(this.nama_prodi=this.$store.getters["uiadmin/getProdiName"](a),this.initialize())}},components:{SPMBLayout:i["a"],ModuleHeader:o["a"],FormPersyaratan:d["a"],ProfilMahasiswaBaru:l["a"],Filter7:u["a"]}},h=c,f=e("2877"),m=e("6544"),b=e.n(m),p=e("0798"),g=e("8212"),v=e("4ca6"),_=e("2bc5"),x=e("b0af"),y=e("99d9"),w=e("62ad"),k=e("a523"),A=e("8fea"),P=e("169a"),T=e("ce7e"),M=e("132d"),V=e("adda"),C=e("0fd9"),$=e("2fa4"),S=e("8654"),B=e("71d9"),R=e("2a7f"),D=Object(f["a"])(h,r,s,!1,null,null,null);t["default"]=D.exports;b()(D,{VAlert:p["a"],VAvatar:g["a"],VBadge:v["a"],VBreadcrumbs:_["a"],VCard:x["a"],VCardText:y["d"],VCol:w["a"],VContainer:k["a"],VDataTable:A["a"],VDialog:P["a"],VDivider:T["a"],VIcon:M["a"],VImg:V["a"],VRow:C["a"],VSpacer:$["a"],VTextField:S["a"],VToolbar:B["a"],VToolbarTitle:R["c"]})},e477:function(a,t,e){"use strict";var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-container",{attrs:{fluid:a.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[a._t("icon")],2),a._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[a._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[a._t("desc")],2)],1)],1)},s=[],n={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},i=n,o=e("2877"),d=e("6544"),l=e.n(d),u=e("62ad"),c=e("a523"),h=e("132d"),f=e("0fd9"),m=Object(o["a"])(i,r,s,!1,null,null,null);t["a"]=m.exports;l()(m,{VCol:u["a"],VContainer:c["a"],VIcon:h["a"],VRow:f["a"]})}}]);