(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae17fe9a"],{b602:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-list-item",[e("v-list-item-content",[e("v-select",{attrs:{items:t.daftar_ta,label:"TAHUN AKADEMIK",outlined:""},model:{value:t.tahun_akademik,callback:function(i){t.tahun_akademik=i},expression:"tahun_akademik"}}),e("v-select",{attrs:{items:t.daftar_semester,"item-text":"text","item-value":"id",label:"SEMESTER",outlined:""},model:{value:t.semester_akademik,callback:function(i){t.semester_akademik=i},expression:"semester_akademik"}})],1)],1)},s=[],r={name:"FilterMode6",created:function(){this.daftar_ta=this.$store.getters["uiadmin/getDaftarTA"],this.tahun_akademik=this.$store.getters["uiadmin/getTahunAkademik"],this.daftar_semester=this.$store.getters["uiadmin/getDaftarSemester"],this.semester_akademik=this.$store.getters["uiadmin/getSemesterAkademik"]},data:function(){return{firstloading:!0,daftar_ta:[],tahun_akademik:null,daftar_semester:[],semester_akademik:null}},methods:{setFirstTimeLoading:function(t){this.firstloading=t}},watch:{tahun_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateTahunAkademik",t),this.$emit("changeTahunAkademik",t))},semester_akademik:function(t){this.firstloading||(this.$store.dispatch("uiadmin/updateSemesterAkademik",t),this.$emit("changeSemesterAkademik",t))}}},n=r,l=e("2877"),o=e("6544"),m=e.n(o),c=e("da13"),A=e("5d23"),v=e("b974"),d=Object(l["a"])(n,a,s,!1,null,null,null);i["a"]=d.exports;m()(d,{VListItem:c["a"],VListItemContent:A["g"],VSelect:v["a"]})},e477:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-container",{attrs:{fluid:t.isReportPage}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("breadcrumbs")],2)],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("h1",{staticClass:"subheading grey--text"},[e("v-icon",{attrs:{large:""}},[t._t("icon")],2),t._t("name")],2)]),e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[e("span",{staticClass:"ml-10 subtitle-1 green--text font-weight-bold"},[t._t("subtitle")],2)])],1),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12"}},[t._t("desc")],2)],1)],1)},s=[],r={name:"ModuleHeader",computed:{isReportPage:function(){return!0}}},n=r,l=e("2877"),o=e("6544"),m=e.n(o),c=e("62ad"),A=e("a523"),v=e("132d"),d=e("0fd9"),S=Object(l["a"])(n,a,s,!1,null,null,null);i["a"]=S.exports;m()(S,{VCol:c["a"],VContainer:A["a"],VIcon:v["a"],VRow:d["a"]})},e60c:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-system-bar",{class:this.$store.getters["uiadmin/getTheme"]("V-SYSTEM-BAR-CSS-CLASS"),attrs:{app:"",dark:""}},[e("strong",[t._v("Hak Akses Sebagai :")]),t._v(" "+t._s(t.ROLE)+" ")]),e("v-app-bar",{attrs:{app:""}},[e("v-app-bar-nav-icon",{class:this.$store.getters["uiadmin/getTheme"]("V-APP-BAR-NAV-ICON-CSS-CLASS"),on:{click:function(i){i.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"headline clickable",on:{click:function(i){i.stopPropagation(),t.$router.push("/dashboard/"+t.$store.getters["auth/AccessToken"]).catch((function(t){}))}}},[e("span",{staticClass:"hidden-sm-and-down"},[t._v(t._s(t.APP_NAME))])]),e("v-spacer"),e("v-menu",{attrs:{"close-on-content-click":!0,origin:"center center",transition:"scale-transition","offset-y":!0,bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[e("v-avatar",{attrs:{size:"30"}},[e("v-img",t._g({attrs:{src:t.photoUser}},a))],1)]}}])},[e("v-list",[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list-item",{attrs:{to:"/system-users/profil"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account")])],1),e("v-list-item-title",[t._v("Profil")])],1),e("v-divider"),e("v-list-item",{on:{click:function(i){return i.preventDefault(),t.logout(i)}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-power")])],1),e("v-list-item-title",[t._v("Logout")])],1)],1)],1),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e("v-app-bar-nav-icon",{on:{click:function(i){i.stopPropagation(),t.drawerRight=!t.drawerRight}}},[e("v-icon",[t._v("mdi-menu-open")])],1)],1),e("v-navigation-drawer",{class:this.$store.getters["uiadmin/getTheme"]("V-NAVIGATION-DRAWER-CSS-CLASS"),attrs:{width:"300",dark:"",temporary:t.temporaryleftsidebar,app:""},model:{value:t.drawer,callback:function(i){t.drawer=i},expression:"drawer"}},[e("v-list-item",[e("v-list-item-avatar",[e("v-img",{attrs:{src:t.photoUser},on:{click:function(i){return i.stopPropagation(),t.toProfile(i)}}})],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" "+t._s(t.ATTRIBUTE_USER("username"))+" ")]),e("v-list-item-subtitle",[t._v(" ["+t._s(t.DEFAULT_ROLE)+"] ")])],1)],1),e("v-divider"),e("v-list",{attrs:{expand:""}},[t.CAN_ACCESS("AKADEMIK-GROUP")?e("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-CSS-CLASS"),attrs:{to:{path:"/akademik"},link:"",color:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-BOARD-COLOR")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-monitor-dashboard")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("BOARD AKADEMIK")])],1)],1):t._e(),t.CAN_ACCESS("SYSTEM-USERS-DOSEN-WALI_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dosenwali","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-teach")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN WALI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")||t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?e("v-subheader",[t._v("DAFTAR ULANG")]):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mhsbelumpunyanim","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-alert")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" BELUM PUNYA NIM ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-BARU_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswabaru","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-arrow-left")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" MAHASISWA BARU ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-DULANG-LAMA_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/dulang/mahasiswalama","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-account-box-multiple")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" MAHASISWA LAMA ")])],1)],1):t._e(),e("v-subheader",[t._v("PERKULIAHAN")]),t.CAN_ACCESS("AKADEMIK-MATAKULIAH_BROWSE")?e("v-list-item",{attrs:{link:"",to:"/akademik/matakuliah","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-book")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" MATAKULIAH ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?e("v-list-group",{attrs:{group:"/akademik/perkuliahan/penyelenggaraan","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-home-floor-b")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("PENYELENGGARAAN")])],1)]},proxy:!0}],null,!1,2791626149)},[e("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/penyelenggaraan/daftar",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/penyelenggaraan/tambah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PENYELENGGARAAN_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/penyelenggaraan/"+t.paramid+"/dosenpengampu"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DOSEN PENGAMPU ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?e("v-list-group",{attrs:{group:"/akademik/perkuliahan/krs","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-format-columns")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("KRS")])],1)]},proxy:!0}],null,!1,2196385036)},[e("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/krs/daftar",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/krs/tambah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_SHOW")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/detail"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DETAIL KRS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-KRS_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/krs/"+t.paramid+"/tambahmatkul"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH MATKUL ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-VERIFIKASI-KRS_STORE")?e("v-list-item",{attrs:{link:"",to:{path:"/akademik/perkuliahan/krs/verifikasi"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" VERIFIKASI KRS ")])],1)],1):t._e()],1)]):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?e("v-list-group",{attrs:{group:"/akademik/perkuliahan/pembagiankelas","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-google-classroom")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("PEMBAGIAN KELAS")])],1)]},proxy:!0}],null,!1,3897047730)},[e("div",[t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/perkuliahan/pembagiankelas/daftar",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" DAFTAR ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:"/akademik/perkuliahan/pembagiankelas/tambah"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TAMBAH KELAS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-PERKULIAHAN-PEMBAGIAN-KELAS_STORE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),disabled:"",to:{path:"/akademik/perkuliahan/pembagiankelas/"+t.paramid+"/peserta"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PESERTA ")])],1)],1):t._e()],1)]):t._e(),e("v-subheader",[t._v("NILAI")]),!t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_BROWSE")||"puslahta"!=t.dashboard&&"dosen"!=t.dashboard?t._e():e("v-list-group",{attrs:{group:"/akademik/nilai/matakuliah","active-class":"yellow","no-action":"",color:"green"},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-format-columns")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("ISI NILAI")])],1)]},proxy:!0}],null,!1,927400214)},[e("div",[t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"dosen"==t.dashboard?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperdosen",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkelasmhs",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PER KELAS MHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-MATAKULIAH_STORE")&&"puslahta"==t.dashboard?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:"/akademik/nilai/matakuliah/isiperkrs",color:"white"}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" PER KRS ")])],1)],1):t._e()],1)]),t.CAN_ACCESS("AKADEMIK-NILAI-KONVERSI_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/konversi"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KONVERSI NILAI ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-KHS_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/khs"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" KHS ")])],1)],1):t._e(),t.CAN_ACCESS("AKADEMIK-NILAI-TRANSKRIP-KURIKULUM_BROWSE")?e("v-list-item",{attrs:{link:"","active-class":this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS"),to:{path:"/akademik/nilai/transkripkurikulum"}}},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-arrow-right-bold-hexagon-outline")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(" TRANSKRIP KURIKULUM ")])],1)],1):t._e()],1)],1),t.showrightsidebar?e("v-navigation-drawer",{attrs:{width:"300",app:"",fixed:"",right:"",temporary:""},model:{value:t.drawerRight,callback:function(i){t.drawerRight=i},expression:"drawerRight"}},[e("v-list",{attrs:{dense:""}},[e("v-list-item",[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-menu-open")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"title"},[t._v(" OPTIONS ")])],1)],1),e("v-divider"),e("v-list-item",{class:this.$store.getters["uiadmin/getTheme"]("V-LIST-ITEM-ACTIVE-CSS-CLASS")},[e("v-list-item-icon",{staticClass:"mr-2"},[e("v-icon",[t._v("mdi-filter")])],1),e("v-list-item-content",[e("v-list-item-title",[t._v("FILTER")])],1)],1),t._t("filtersidebar")],2)],1):t._e(),e("v-main",{staticClass:"mx-4 mb-4"},[t._t("default")],2)],1)},s=[],r=(e("b0c0"),e("ac1f"),e("5319"),e("5530")),n=e("2f62"),l={name:"AkademikLayout",created:function(){this.dashboard=this.$store.getters["uiadmin/getDefaultDashboard"]},props:{showrightsidebar:{type:Boolean,default:!0},temporaryleftsidebar:{type:Boolean,default:!1}},data:function(){return{loginTime:0,drawer:null,drawerRight:null,dashboard:null}},methods:{logout:function(){var t=this;this.loginTime=0,this.$ajax.post("/auth/logout",{},{headers:{Authorization:this.TOKEN}}).then((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")})).catch((function(){t.$store.dispatch("auth/logout"),t.$store.dispatch("uifront/reinit"),t.$store.dispatch("uiadmin/reinit"),t.$router.push("/")}))},isBentukPT:function(t){return this.$store.getters["uifront/getBentukPT"]==t}},computed:Object(r["a"])({},Object(n["b"])("auth",{AUTHENTICATED:"Authenticated",ACCESS_TOKEN:"AccessToken",TOKEN:"Token",DEFAULT_ROLE:"DefaultRole",ROLE:"Role",CAN_ACCESS:"can",ATTRIBUTE_USER:"AttributeUser"}),{APP_NAME:function(){return"PortalEkampus v3"},photoUser:function(){var t,i=this.ATTRIBUTE_USER("foto");return t=""==i?this.$api.url+"/storage/images/users/no_photo.png":this.$api.url+"/"+i,t},paramid:function(){var t="empty";switch(this.$route.name){case"PerkuliahanPenyelenggaraanDosenPengampu":t=this.$route.params.idpenyelenggaraan;break;case"PerkuliahanKRSDetail":t=this.$route.params.krsid;break;case"PerkuliahanKRSTambahMatkul":t=this.$route.params.krsid;break;case"PerkuliahanPembagianKelasPeserta":t=this.$route.params.kelas_mhs_id;break}return t}}),watch:{loginTime:{handler:function(t){var i=this;t>=0?setTimeout((function(){i.loginTime=1==i.AUTHENTICATED?i.loginTime+1:-1}),1e3):(this.$store.dispatch("auth/logout"),this.$router.replace("/login"))},immediate:!0}}},o=l,m=e("2877"),c=e("6544"),A=e.n(c),v=e("40dc"),d=e("5bc1"),S=e("8212"),u=e("ce7e"),h=e("132d"),E=e("adda"),_=e("8860"),C=e("56b0"),g=e("da13"),k=e("8270"),I=e("5d23"),T=e("34c3"),p=e("f6c4"),L=e("e449"),K=e("f774"),R=e("2fa4"),N=e("e0c7"),b=e("afd9"),f=e("2a7f"),M=Object(m["a"])(o,a,s,!1,null,null,null);i["a"]=M.exports;A()(M,{VAppBar:v["a"],VAppBarNavIcon:d["a"],VAvatar:S["a"],VDivider:u["a"],VIcon:h["a"],VImg:E["a"],VList:_["a"],VListGroup:C["a"],VListItem:g["a"],VListItemAvatar:k["a"],VListItemContent:I["g"],VListItemIcon:T["a"],VListItemSubtitle:I["j"],VListItemTitle:I["k"],VMain:p["a"],VMenu:L["a"],VNavigationDrawer:K["a"],VSpacer:R["a"],VSubheader:N["a"],VSystemBar:b["a"],VToolbarTitle:f["c"]})}}]);