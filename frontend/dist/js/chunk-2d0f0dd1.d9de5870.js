(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0dd1"],{"9dd4":function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AkademikLayout",{scopedSlots:e._u([{key:"filtersidebar",fn:function(){return[t("Filter2",{ref:"filter2",on:{changeTahunAkademik:e.changeTahunAkademik,changeSemesterAkademik:e.changeSemesterAkademik}})]},proxy:!0}])},[t("ModuleHeader",{scopedSlots:e._u([{key:"icon",fn:function(){return[e._v(" mdi-monitor-dashboard ")]},proxy:!0},{key:"name",fn:function(){return[e._v(" ISI NILAI PER DOSEN ")]},proxy:!0},{key:"subtitle",fn:function(){return[e._v(" TAHUN AKADEMIK "+e._s(e.tahun_akademik)+" SEMESTER "+e._s(e.$store.getters["uiadmin/getNamaSemester"](e.semester_akademik))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[t("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[t("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[e._v(" Halaman untuk melakukan pengisian nilai berdasarkan kelas yang diampu oleh Dosen berdasarkan kelas yang telah dibentuk pada pembagian kelas. ")])]},proxy:!0}])}),t("v-container",{attrs:{fluid:""}},[t("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",[t("v-card-text",[t("v-text-field",{attrs:{"append-icon":"mdi-database-search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1)],1)],1)],1),t("v-row",{staticClass:"mb-4",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12"}},[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.datatable,search:e.search,"item-key":"id","show-expand":"",expanded:e.expanded,"single-expand":!0,"disable-pagination":!0,"hide-default-footer":!0,loading:e.datatableLoading,"loading-text":"Loading... Please wait"},on:{"update:expanded":function(a){e.expanded=a},"click:row":e.dataTableRowClicked},scopedSlots:e._u([{key:"top",fn:function(){return[t("v-toolbar",{attrs:{flat:"",color:"white"}},[t("v-toolbar-title",[e._v("DAFTAR KELAS")]),t("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t("v-spacer")],1)]},proxy:!0},{key:"item.nmatkul",fn:function(a){var t=a.item;return[e._v(" "+e._s(t.nmatkul)+" - "+e._s(e.$store.getters["uiadmin/getNamaKelas"](t.idkelas))+" ")]}},{key:"item.jam_masuk",fn:function(a){var t=a.item;return[e._v(" "+e._s(t.jam_masuk)+"-"+e._s(t.jam_keluar)+" ")]}},{key:"item.actions",fn:function(a){var i=a.item;return[i.jumlah_mhs>0?t("v-btn",{attrs:{small:"",icon:""},on:{click:function(a){return a.stopPropagation(),e.$router.push("/akademik/nilai/matakuliah/isiperdosen/"+i.id)}}},[t("v-icon",[e._v(" mdi-video-input-svideo ")])],1):t("span",[e._v(" N.A ")])]}},{key:"expanded-item",fn:function(a){var i=a.headers,n=a.item;return[t("td",{staticClass:"text-center",attrs:{colspan:i.length}},[t("v-col",{attrs:{cols:"12"}},[t("strong",[e._v("ID:")]),e._v(e._s(n.id)+" "),t("strong",[e._v("created_at:")]),e._v(e._s(e.$date(n.created_at).format("DD/MM/YYYY HH:mm"))+" "),t("strong",[e._v("updated_at:")]),e._v(e._s(e.$date(n.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[e._v(" Data belum tersedia ")]},proxy:!0}])})],1)],1)],1)],1)},n=[],r=t("5530"),s=(t("96cf"),t("1da1")),d=t("e60c"),o=t("e477"),l=t("b602"),u=t("2f62"),c={name:"NilaiIsiPerKelasMHS",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"ISI NILAI",disabled:!1,href:"#"},{text:"PER KELAS MAHASISWA",disabled:!0,href:"#"}],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"],this.initialize()},data:function(){return{firstloading:!0,daftar_ta:[],tahun_akademik:null,semester_akademik:null,btnLoadingTable:!1,datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:100},{text:"NAMA MATAKULIAH/KELAS",value:"nmatkul",sortable:!0,width:250},{text:"NAMA DOSEN",value:"nama_dosen",sortable:!0,width:250},{text:"HARI",value:"nama_hari",sortable:!0,width:70},{text:"JAM",value:"jam_masuk",sortable:!0,width:70},{text:"RUANG",value:"namaruang",sortable:!0,width:100},{text:"JUMLAH PESERTA",value:"jumlah_mhs",sortable:!0,width:100},{text:"AKSI",value:"actions",sortable:!1,width:120}],search:""}},methods:{changeTahunAkademik:function(e){this.tahun_akademik=e},changeSemesterAkademik:function(e){this.semester_akademik=e},initialize:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.datatableLoading=!0,e.next=3,this.$ajax.post("/akademik/perkuliahan/pembagiankelas",{ta:this.tahun_akademik,semester_akademik:this.semester_akademik},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(e){var t=e.data;a.datatable=t.pembagiankelas,a.datatableLoading=!1})).catch((function(){a.datatableLoading=!1}));case 3:this.firstloading=!1,this.$refs.filter2.setFirstTimeLoading(this.firstloading);case 5:case"end":return e.stop()}}),e,this)})));function a(){return e.apply(this,arguments)}return a}(),dataTableRowClicked:function(e){e===this.expanded[0]?this.expanded=[]:this.expanded=[e]}},watch:{tahun_akademik:function(){this.firstloading||this.initialize()},semester_akademik:function(){this.firstloading||this.initialize()}},computed:Object(r["a"])({},Object(u["b"])("auth",{CAN_ACCESS:"can"})),components:{AkademikLayout:d["a"],ModuleHeader:o["a"],Filter2:l["a"]}},m=c,h=t("2877"),k=t("6544"),f=t.n(k),b=t("0798"),p=t("2bc5"),v=t("8336"),_=t("b0af"),g=t("99d9"),x=t("62ad"),A=t("a523"),y=t("8fea"),w=t("ce7e"),S=t("132d"),T=t("0fd9"),E=t("2fa4"),I=t("8654"),L=t("71d9"),M=t("2a7f"),C=Object(h["a"])(m,i,n,!1,null,null,null);a["default"]=C.exports;f()(C,{VAlert:b["a"],VBreadcrumbs:p["a"],VBtn:v["a"],VCard:_["a"],VCardText:g["d"],VCol:x["a"],VContainer:A["a"],VDataTable:y["a"],VDivider:w["a"],VIcon:S["a"],VRow:T["a"],VSpacer:E["a"],VTextField:I["a"],VToolbar:L["a"],VToolbarTitle:M["c"]})}}]);