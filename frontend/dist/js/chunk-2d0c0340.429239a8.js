(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0340"],{"417d":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("AkademikLayout",{attrs:{showrightsidebar:!1}},[t("ModuleHeader",{scopedSlots:a._u([{key:"icon",fn:function(){return[a._v(" mdi-monitor-dashboard ")]},proxy:!0},{key:"name",fn:function(){return[a._v(" PEMBAGIAN KELAS ")]},proxy:!0},{key:"subtitle",fn:function(){return[a._v(" TAHUN AKADEMIK "+a._s(a.tahun_akademik)+" SEMESTER "+a._s(a.$store.getters["uiadmin/getNamaSemester"](a.semester_akademik))+" ")]},proxy:!0},{key:"breadcrumbs",fn:function(){return[t("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:a.breadcrumbs},scopedSlots:a._u([{key:"divider",fn:function(){return[t("v-icon",[a._v("mdi-chevron-right")])]},proxy:!0}])})]},proxy:!0},{key:"desc",fn:function(){return[t("v-alert",{attrs:{color:"cyan",border:"left","colored-border":"",type:"info"}},[a._v(" Halaman untuk melakukan menambah peserta pada kelas terpilih. ")])]},proxy:!0}])}),a.data_kelas_mhs?t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("DataKelasMHS",{attrs:{datakelas:a.data_kelas_mhs,url:"/akademik/perkuliahan/pembagiankelas/daftar"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-data-table",{staticClass:"elevation-1",attrs:{headers:a.headers,items:a.datatable,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0,loading:a.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:a._u([{key:"top",fn:function(){return[t("v-toolbar",{attrs:{flat:"",color:"white"}},[t("v-toolbar-title",[a._v("DAFTAR MATAKULIAH")]),t("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t("v-spacer"),t("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t("v-btn",a._g(a._b({staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:""},on:{click:function(e){return e.stopPropagation(),a.tambahMatakuliah(e)}}},"v-btn",r,!1),n),[t("v-icon",[a._v("mdi-plus")])],1)]}}],null,!1,2114874081)},[t("span",[a._v("Tambah Matakuliah")])])],1)]},proxy:!0},{key:"item.nmatkul",fn:function(e){var t=e.item;return[a._v(" "+a._s(t.nmatkul)+" - TA "+a._s(t.ta)+" ")]}},{key:"item.jam_masuk",fn:function(e){var t=e.item;return[a._v(" "+a._s(t.jam_masuk)+"-"+a._s(t.jam_keluar)+" ")]}},{key:"item.kjur",fn:function(e){var t=e.item;return[a._v(" "+a._s(a.$store.getters["uiadmin/getProdiName"](t.kjur))+" ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[t("v-btn",{attrs:{small:"",icon:"",loading:a.btnLoadingTable,disabled:a.btnLoadingTable},on:{click:function(e){return e.stopPropagation(),a.deleteMatkul(n)}}},[t("v-icon",[a._v(" mdi-delete ")])],1)]}},{key:"no-data",fn:function(){return[a._v(" Data belum tersedia ")]},proxy:!0}],null,!1,3857904925)})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:a.showdialogmatakuliah,callback:function(e){a.showdialogmatakuliah=e},expression:"showdialogmatakuliah"}},[t("v-form",{ref:"frmdatamatkul",attrs:{"lazy-validation":""},model:{value:a.form_valid,callback:function(e){a.form_valid=e},expression:"form_valid"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[a._v("TAMBAH MATAKULIAH DI KELAS INI")])]),t("v-card-text",[t("v-select",{attrs:{items:a.daftar_matakuliah,label:"MATAKULIAH YANG DISELENGGARAKAN",multiple:"",chips:"",hint:"Pilihlah satu atau lebih matakuliah yang akan digabungkan dalam satu kelas","persistent-hint":"",outlined:"","item-text":"nmatkul","item-value":"id"},model:{value:a.formdata.penyelenggaraan_dosen_id,callback:function(e){a.$set(a.formdata,"penyelenggaraan_dosen_id",e)},expression:"formdata.penyelenggaraan_dosen_id"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),a.closedialogmatakuliah(e)}}},[a._v("BATAL")]),t("v-btn",{attrs:{color:"blue darken-1",text:"",loading:a.btnLoading,disabled:!a.form_valid||a.btnLoading},on:{click:function(e){return e.stopPropagation(),a.savematakuliah(e)}}},[a._v(" SIMPAN ")])],1)],1)],1)],1),t("v-dialog",{attrs:{"max-width":"800px",persistent:""},model:{value:a.showdialogpeserta,callback:function(e){a.showdialogpeserta=e},expression:"showdialogpeserta"}},[t("v-form",{ref:"frmdata",attrs:{"lazy-validation":""},model:{value:a.form_valid,callback:function(e){a.form_valid=e},expression:"form_valid"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[a._v("TAMBAH PESERTA")])]),t("v-card-text",[t("v-data-table",{attrs:{headers:a.headers_members,items:a.datatable_members,search:a.search_members,"item-key":"id","sort-by":"name","show-select":"",loading:a.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:a._u([{key:"item.id",fn:function(e){var t=e.item;return[a._v(" "+a._s(t.id)+" ")]}},{key:"expanded-item",fn:function(e){var n=e.headers,r=e.item;return[t("td",{staticClass:"text-center",attrs:{colspan:n.length}},[t("v-col",{attrs:{cols:"12"}},[t("strong",[a._v("ID:")]),a._v(a._s(r.id)+" "),t("strong",[a._v("created_at:")]),a._v(a._s(a.$date(r.created_at).format("DD/MM/YYYY HH:mm"))+" "),t("strong",[a._v("updated_at:")]),a._v(a._s(a.$date(r.updated_at).format("DD/MM/YYYY HH:mm"))+" ")])],1)]}},{key:"no-data",fn:function(){return[a._v(" Data belum tersedia ")]},proxy:!0}],null,!1,132250241),model:{value:a.members_selected,callback:function(e){a.members_selected=e},expression:"members_selected"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return e.stopPropagation(),a.closedialogpeserta(e)}}},[a._v("BATAL")]),t("v-btn",{attrs:{color:"blue darken-1",text:"",loading:a.btnLoading,disabled:!a.form_valid||a.btnLoading},on:{click:function(e){return e.stopPropagation(),a.save(e)}}},[a._v(" SIMPAN ")])],1)],1)],1)],1),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:a.headers_peserta,items:a.datatable_peserta,"item-key":"id","disable-pagination":!0,"hide-default-footer":!0,loading:a.datatableLoading,"loading-text":"Loading... Please wait"},scopedSlots:a._u([{key:"top",fn:function(){return[t("v-toolbar",{attrs:{flat:"",color:"white"}},[t("v-toolbar-title",[a._v("DAFTAR PESERTA")]),t("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t("v-spacer"),t("v-tooltip",{attrs:{bottom:""},scopedSlots:a._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[t("v-btn",a._g(a._b({staticClass:"ma-2",attrs:{color:"primary",icon:"",outlined:"",small:"",disabled:!a.datatable>0},on:{click:function(e){return e.stopPropagation(),a.tambahPeserta(e)}}},"v-btn",r,!1),n),[t("v-icon",[a._v("mdi-plus")])],1)]}}],null,!1,3422396841)},[t("span",[a._v("Tambah Peserta Kelas")])])],1)]},proxy:!0},{key:"item.idkelas",fn:function(e){var t=e.item;return[a._v(" "+a._s(a.$store.getters["uiadmin/getNamaKelas"](t.idkelas))+" ")]}},{key:"item.kjur",fn:function(e){var t=e.item;return[a._v(" "+a._s(a.$store.getters["uiadmin/getProdiName"](t.kjur))+" ")]}},{key:"item.actions",fn:function(e){var n=e.item;return[t("v-btn",{attrs:{small:"",icon:"",loading:a.btnLoadingTable,disabled:a.btnLoadingTable},on:{click:function(e){return e.stopPropagation(),a.deletePeserta(n)}}},[t("v-icon",[a._v(" mdi-delete ")])],1)]}},{key:"no-data",fn:function(){return[a._v(" Data belum tersedia ")]},proxy:!0}],null,!1,89700959)})],1)],1)],1):a._e()],1)},r=[],i=(t("96cf"),t("1da1")),s=t("e60c"),o=t("e477"),l=t("d087"),d={name:"PerkuliahanPembagianKelasTambah",created:function(){this.breadcrumbs=[{text:"HOME",disabled:!1,href:"/dashboard/"+this.$store.getters["auth/AccessToken"]},{text:"AKADEMIK",disabled:!1,href:"/akademik"},{text:"PERKULIAHAN",disabled:!1,href:"#"},{text:"PEMBAGIAN KELAS",disabled:!1,href:"/akademik/perkuliahan/pembagiankelas/daftar"},{text:"PESERTA",disabled:!0,href:"#"}],this.kelas_mhs_id=this.$route.params.kelas_mhs_id,this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"],this.initialize()},data:function(){return{kelas_mhs_id:null,data_kelas_mhs:null,tahun_akademik:null,semester_akademik:null,btnLoadingTable:!1,datatableLoading:!1,btnLoading:!1,datatable:[],daftar_matakuliah:[],datatable_peserta:[],datatable_members:[],headers:[{text:"KODE",value:"kmatkul",sortable:!1,width:100},{text:"NAMA",value:"nmatkul",sortable:!1},{text:"SKS",value:"sks",sortable:!1},{text:"PROGRAM STUDI",value:"kjur",sortable:!1,width:200},{text:"JUMLAH MHS DI KRS",value:"jumlah_mhs",sortable:!1,width:100},{text:"AKSI",value:"actions",sortable:!1,width:60}],headers_peserta:[{text:"NIM",value:"nim",sortable:!1,width:100},{text:"NAMA",value:"nama_mhs",sortable:!1},{text:"PROGRAM STUDI",value:"kjur",sortable:!1},{text:"KELAS",value:"idkelas",sortable:!1},{text:"TAHUN MASUK",value:"tahun",sortable:!1},{text:"AKSI",value:"actions",sortable:!1,width:60}],headers_members:[{text:"NIM",value:"nim",sortable:!1,width:100},{text:"NAMA",value:"nama_mhs",sortable:!1},{text:"KELAS",value:"idkelas",sortable:!1},{text:"TAHUN MASUK",value:"tahun",sortable:!1}],search_members:"",showdialogmatakuliah:!1,showdialogpeserta:!1,form_valid:!0,members_selected:[],formdata:{penyelenggaraan_dosen_id:""}}},methods:{initialize:function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(){var e=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return this.datatableLoading=!0,a.next=3,this.$ajax.get("/akademik/perkuliahan/pembagiankelas/"+this.kelas_mhs_id,{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(a){var t=a.data;e.data_kelas_mhs=t.pembagiankelas,e.datatable=t.penyelenggaraan,e.datatable_peserta=t.peserta,e.datatableLoading=!1}));case 3:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),fetchMatkul:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.datatableLoading=!0,e.next=3,a.$ajax.get("/akademik/perkuliahan/pembagiankelas/matakuliah/"+a.kelas_mhs_id,{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(e){var t=e.data;a.datatable=t.penyelenggaraan,a.datatableLoading=!1}));case 3:case"end":return e.stop()}}),e)})))()},fetchPeserta:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a.datatableLoading=!0,e.next=3,a.$ajax.get("/akademik/perkuliahan/pembagiankelas/peserta/"+a.kelas_mhs_id,{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(e){var t=e.data;a.datatable_peserta=t.peserta,a.datatableLoading=!1}));case 3:case"end":return e.stop()}}),e)})))()},tambahMatakuliah:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$ajax.post("/akademik/perkuliahan/penyelenggaraanmatakuliah/matakuliah",{user_id:a.data_kelas_mhs.user_id,ta:a.data_kelas_mhs.tahun,semester_akademik:a.data_kelas_mhs.idsmt},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(e){var t=e.data;a.daftar_matakuliah=t.matakuliah,a.showdialogmatakuliah=!0}));case 2:case"end":return e.stop()}}),e)})))()},tambahPeserta:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$ajax.post("/akademik/perkuliahan/penyelenggaraanmatakuliah/members",{pid:"belumterdaftar",kelas_mhs_id:a.kelas_mhs_id,penyelenggaraan:JSON.stringify(Object.assign({},a.datatable))},{headers:{Authorization:a.$store.getters["auth/Token"]}}).then((function(e){var t=e.data;a.datatable_members=t.members,a.showdialogpeserta=!0}));case 2:case"end":return e.stop()}}),e)})))()},save:function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(){var e=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.$refs.frmdata.validate()){a.next=4;break}return this.btnLoading=!0,a.next=4,this.$ajax.post("/akademik/perkuliahan/pembagiankelas/storepeserta",{kelas_mhs_id:this.kelas_mhs_id,members_selected:JSON.stringify(Object.assign({},this.members_selected))},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.closedialogpeserta()})).catch((function(){e.btnLoading=!1}));case 4:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),savematakuliah:function(){var a=Object(i["a"])(regeneratorRuntime.mark((function a(){var e=this;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.$refs.frmdatamatkul.validate()){a.next=4;break}return this.btnLoading=!0,a.next=4,this.$ajax.post("/akademik/perkuliahan/pembagiankelas/storematakuliah",{kelas_mhs_id:this.kelas_mhs_id,penyelenggaraan_dosen_id:JSON.stringify(Object.assign({},this.formdata.penyelenggaraan_dosen_id))},{headers:{Authorization:this.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.closedialogmatakuliah()})).catch((function(){e.btnLoading=!1}));case 4:case"end":return a.stop()}}),a,this)})));function e(){return a.apply(this,arguments)}return e}(),deleteMatkul:function(a){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data matakuliah di kelas ini dengan ID "+a.id+" ?",{color:"red",width:600,desc:"proses ini juga menghapus seluruh mahasiswa yang mengontrak matakuliah di kelas ini."}).then((function(t){t&&(e.btnLoading=!0,e.$ajax.post("/akademik/perkuliahan/pembagiankelas/deletematkul/"+a.id,{_method:"DELETE"},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.$router.go()})).catch((function(){e.btnLoading=!1})))}))},deletePeserta:function(a){var e=this;this.$root.$confirm.open("Delete","Apakah Anda ingin menghapus data mahasiswa di kelas ini dengan ID "+a.id+" ?",{color:"red"}).then((function(t){t&&(e.btnLoading=!0,e.$ajax.post("/akademik/perkuliahan/pembagiankelas/deletepeserta/"+a.id,{_method:"DELETE"},{headers:{Authorization:e.$store.getters["auth/Token"]}}).then((function(){e.btnLoading=!1,e.$router.go()})).catch((function(){e.btnLoading=!1})))}))},closedialogpeserta:function(){var a=this;this.showdialogpeserta=!1,setTimeout((function(){a.members_selected=[],a.fetchPeserta(),a.$refs.frmdata.reset()}),300)},closedialogmatakuliah:function(){var a=this;this.showdialogmatakuliah=!1,setTimeout((function(){a.fetchMatkul(),a.$refs.frmdatamatkul.reset()}),300)}},watch:{},components:{AkademikLayout:s["a"],ModuleHeader:o["a"],DataKelasMHS:l["a"]}},u=d,m=t("2877"),c=t("6544"),h=t.n(c),k=t("0798"),b=t("2bc5"),p=t("8336"),f=t("b0af"),g=t("99d9"),v=t("62ad"),_=t("a523"),x=t("8fea"),A=t("169a"),y=t("ce7e"),w=t("4bd4"),L=t("132d"),T=t("0fd9"),$=t("b974"),M=t("2fa4"),S=t("71d9"),P=t("2a7f"),j=t("3a2f"),E=Object(m["a"])(u,n,r,!1,null,null,null);e["default"]=E.exports;h()(E,{VAlert:k["a"],VBreadcrumbs:b["a"],VBtn:p["a"],VCard:f["a"],VCardActions:g["b"],VCardText:g["d"],VCardTitle:g["e"],VCol:v["a"],VContainer:_["a"],VDataTable:x["a"],VDialog:A["a"],VDivider:y["a"],VForm:w["a"],VIcon:L["a"],VRow:T["a"],VSelect:$["a"],VSpacer:M["a"],VToolbar:S["a"],VToolbarTitle:P["c"],VTooltip:j["a"]})}}]);