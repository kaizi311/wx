(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c64fa23"],{"39ba":function(t,e,i){},4032:function(t,e,i){"use strict";var a=i("39ba"),s=i.n(a);s.a},cbe6:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isData?i("div",{staticClass:"mangers"},[t._m(0),i("div",{staticClass:"checkManger"},t._l(t.mangerData,function(e,a){return i("div",{staticClass:"isManger"},[i("div",{staticClass:"weui-cells__title titles"},[t._v(t._s(e.city))]),i("div",{staticClass:"weui-cells weui-cells_form"},t._l(e.children,function(e,a){return i("div",{staticClass:"weui-cell weui-cell_switch home_main2 ly-cell"},[i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v(t._s(e.name))])]),i("div",{staticClass:"weui-cell__ft"},[i("input",{staticClass:"weui-switch checkSwiper",attrs:{type:"checkbox"},domProps:{checked:e.is_show},on:{change:function(i){return t.checkBtn(e.guid)}}})])])}),0)])}),0),i("div",{staticClass:"weui-btn-area area"},[i("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:t.reClose}},[t._v("确  定")])])]):t._e()},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cells mar_top0"},[i("div",{staticClass:"weui-cell home_main"},[i("p",[t._v("请选择与你相关的物业企业，打开显示按钮即可展示首页物业服务信息栏中，点击获取物业服务。\n                部分物管未入驻，请耐心等候。")])])])}],c=i("d722"),n={data:function(){return{mangerData:[],isData:!1}},created:function(){var t=this;this.$weui.loading(),Object(c["C"])().then(function(e){0===e.code&&(console.log(e),t.mangerData=e.result,t.$weui.loading().hide(),t.isData=!0)})},methods:{reClose:function(){this.$router.push({name:"home",query:{id:2}})},checkBtn:function(t){var e=this,i={relation_guid:t};Object(c["A"])(i).then(function(t){console.log(t),0===t.code||e.$weui.alert(t.msg)})}}},l=n,u=(i("4032"),i("2877")),r=Object(u["a"])(l,a,s,!1,null,"79a8d4a8",null);e["default"]=r.exports}}]);