(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6eb9"],{"1ee4":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AkademikLayout",{attrs:{showrightsidebar:!1}},[e("ModuleHeader",{scopedSlots:t._u([{key:"icon",fn:function(){return[t._v(" mdi-format-columns ")]},proxy:!0},{key:"name",fn:function(){return[t._v(" VERIFIKASI KRS (KARTU RENCANA STUDI) ")]},proxy:!0},Object.keys(t.datakrs).length?{key:"subtitle",fn:function(){return[t._v(" TAHUN AKADEMIK "+t._s(t.tahun_akademik)+" SEMESTER "+t._s(t.$store.getters["uiadmin/getNamaSemester"](t.semester_akademik))+" - "+t._s(t.nama_prodi)+" ")]},proxy:!0}:null,{key:"breadcrumbs",fn:function(){return[e("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[e("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[t._v(" Halaman untuk melihat detail dan verifikasi krs mahasiswa ")])]},proxy:!0}],null,!0)}),Object.keys(t.datakrs).length?e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("DataKRS",{attrs:{datakrs:t.datakrs,url:"/akademik/perkuliahan/krs/verifikasi",totalmatkul:t.totalMatkul,totalsks:t.totalSKS}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-card",[e("v-card-title",[t._v(" DAFTAR MATAKULIAH "),e("v-spacer")],1),e("v-card-text",[e("v-data-table",{attrs:{dense:"",headers:t.headers,items:t.datatable,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0,loading:t.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([t.datatable.length>0?{key:"body.append",fn:function(){return[e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("TOTAL MATAKULIAH")]),e("td",[t._v(t._s(t.totalMatkul))]),e("td"),e("td"),e("td")]),e("tr",{staticClass:"grey lighten-4 font-weight-black"},[e("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("TOTAL SKS")]),e("td",[t._v(t._s(t.totalSKS))]),e("td"),e("td"),e("td")])]},proxy:!0}:null,{key:"no-data",fn:function(){return[t._v(" Data matakuliah belum tersedia silahkan tambah ")]},proxy:!0}],null,!0)})],1)],1)],1)],1)],1):t._e()],1)},s=[],n=(e("b64b"),e("96cf"),e("1da1")),d=e("e60c"),i=e("e477"),l=e("b468"),o={name:"PerkuliahanKRSDetail",created:function(){this.krs_id=this.$route.params.krsid,this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"KRS",disabled:!1,href:"/akademik/perkuliahan/krs/daftar"},{text:"DETAIL",disabled:!0,href:"#"}],this.fetchKRS()},data:function(){return{firstloading:!0,nama_prodi:null,tahun_akademik:null,semester_akademik:null,btnLoading:!1,btnLoadingTable:!1,krs_id:null,datakrs:{},datatableLoading:!1,expanded:[],datatable:[],headers:[{text:"KODE",value:"kmatkul",sortable:!0,width:120},{text:"NAMA MATAKULIAH",value:"nmatkul",sortable:!0},{text:"SKS",value:"sks",sortable:!1,width:50},{text:"SMT",value:"semester",sortable:!1,width:50},{text:"KELAS",value:"nama_kelas",sortable:!1,width:200},{text:"NAMA DOSEN",value:"nama_dosen",sortable:!1,width:200}]}},methods:{fetchKRS:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.$ajax.get("/akademik/perkuliahan/krs/"+t.krs_id,{headers:{Authorization:t.$store.getters["auth/Token"]}}).then((function(a){var e=a.data;if(t.datakrs=e.krs,t.datatable=e.krsmatkul,Object.keys(t.datakrs).length){var r=t.datakrs.kjur;t.nama_prodi=t.$store.getters["uiadmin/getProdiName"](r),t.tahun_akademik=t.datakrs.tahun,t.semester_akademik=t.datakrs.idsmt}}));case 2:case"end":return a.stop()}}),a)})))()}},computed:{totalMatkul:function(){return this.datatable.length},totalSKS:function(){var t,a=0;for(t in this.datatable)a+=parseInt(this.datatable[t].sks);return a}},components:{AkademikLayout:d["a"],ModuleHeader:i["a"],DataKRS:l["a"]}},u=o,k=e("2877"),c=e("6544"),h=e.n(c),b=e("0798"),m=e("2bc5"),f=e("b0af"),v=e("99d9"),p=e("62ad"),_=e("a523"),A=e("8fea"),g=e("132d"),x=e("0fd9"),S=e("2fa4"),y=Object(k["a"])(u,r,s,!1,null,null,null);a["default"]=y.exports;h()(y,{VAlert:b["a"],VBreadcrumbs:m["a"],VCard:f["a"],VCardText:v["d"],VCardTitle:v["e"],VCol:p["a"],VContainer:_["a"],VDataTable:A["a"],VIcon:g["a"],VRow:x["a"],VSpacer:S["a"]})}}]);