(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a703151e"],{"0554":function(t,e,a){"use strict";var s=a("7e2f"),i=a.n(s);i.a},4455:function(t,e,a){"use strict";(function(t){a("4917"),a("a481");var s=a("025e");e["a"]={data:function(){return{imgList:[],fileList:[],uploadCount:0,Photos:[],ishidden:!0,isCount:!0,num:5}},created:function(){var t=this;this.$nextTick(function(){console.log(t.isCount),!0===t.isCount?t.num=5:t.num=8})},mounted:function(){var e=this,a="http://wkf.yiwindow.com/backend/",i=a+"server/media/upload?type=image";this.$nextTick(function(){e.$weui.uploader("#uploader",{url:i,auto:!0,type:"file",fileVal:"media",compress:{width:1600,height:1600,quality:.8},onBeforeQueued:function(t){return["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0?(e.$weui.alert("请上传图片"),!1):this.size>10485760?(e.$weui.alert("请上传不超过10M的图片"),!1):t.length>e.num?(e.$weui.alert("最多只能上传"+e.num+"张图片，请重新选择"),!1):e.uploadCount+1>e.num?(e.$weui.alert("最多只能上传"+e.num+"张图片"),!1):void++e.uploadCount},onQueued:function(){var t=this;s["a"].blobTobase(t,function(e){t.url=e})},onBeforeSend:function(a,s){t.extend(s,{Authorization:e.$store.state.Token})},onProgress:function(t){},onSuccess:function(t){e.imgList.push(this),0===t.code?e.Photos.push(t.result.fuid):e.$weui.alert(t.msg)},onError:function(t){console.log(this,t)}})})},watch:{uploadCount:function(t,e){t==this.num?this.ishidden=!1:this.ishidden=!0,console.log(t)}},methods:{handelGallery:function(t){console.log("执行了");var e=t.target,a=this;while(!e.classList.contains("weui-uploader__file")&&e)e=e.parentNode;if(e){var s=e.getAttribute("style")||"",i=e.getAttribute("data-id");s&&(s=s.match(/url\((.*?)\)/)[1].replace(/"/g,""));var l=a.$weui.gallery(s,{onDelete:function(){a.$weui.confirm("确定删除该图片？",function(){for(var t,s=0,n=a.imgList.length;s<n;s++){var o=a.imgList[s];if(o.id==i){t=s;break}}t>=0&&(console.log(t),a.Photos.splice(t,1),a.imgList.splice(t,1)),a.uploadCount--,e.remove(),l.hide()},function(){console.log("no deleted~ ~ ~ ~ ~ ~")})}})}}}}}).call(this,a("1157"))},4917:function(t,e,a){"use strict";var s=a("cb7c"),i=a("9def"),l=a("0390"),n=a("5f1b");a("214f")("match",1,function(t,e,a,o){return[function(a){var s=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,s):new RegExp(a)[e](String(s))},function(t){var e=o(a,t,this);if(e.done)return e.value;var r=s(t),c=String(this);if(!r.global)return n(r,c);var u=r.unicode;r.lastIndex=0;var d,p=[],_=0;while(null!==(d=n(r,c))){var h=String(d[0]);p[_]=h,""===h&&(r.lastIndex=l(c,i(r.lastIndex),u)),_++}return 0===_?null:p}]})},"4dac":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"describe_item"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDescribe,expression:"!isDescribe"}],staticClass:"describe_placeholder"},[t._v(t._s(t.placeText))]),a("div",{staticClass:"describe_edit",attrs:{contenteditable:"plaintext-only"},domProps:{innerHTML:t._s(t.innerText)},on:{input:t.changeText}})])},i=[],l={data:function(){return{isDescribe:"",innerText:"",placeText:this.$parent.placetxt}},props:["placetxt"],mounted:function(){""!==this.$parent.textVal2&&(this.innerText=this.$parent.textVal2)},methods:{changeText:function(){this.isDescribe=this.$el.lastChild.innerHTML,this.$emit("edit-handler",this.$el.lastChild.innerHTML)}},watch:{value:function(t){this.innerText||(this.innerText=t)}}},n=l,o=(a("b4a6"),a("2877")),r=Object(o["a"])(n,s,i,!1,null,"0116c24e",null);e["a"]=r.exports},"50a2":function(t,e,a){},"7e2f":function(t,e,a){},b4a6:function(t,e,a){"use strict";var s=a("50a2"),i=a.n(s);i.a},c280:function(t,e,a){},e21f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.msgData?a("div",{staticClass:"pages msgData"},[a("div",{staticClass:"weui-panel"},[a("div",{staticClass:"repair_data_header"},[a("div",{staticClass:"header_left"},[a("span",{staticClass:"state",class:"weixiu"+t.comInfo.status}),"1"===t.comInfo.status?a("span",[t._v("待维修")]):"2"===t.comInfo.status?a("span",[t._v("已维修")]):"3"===t.comInfo.status?a("span",[t._v("已完成")]):a("span",[t._v("已评价")])])]),a("div",{staticClass:"weui-panel__bd"},[a("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:"javascript:void(0);"}},[a("div",{staticClass:"weui-media-box__bd"},["1"===t.comInfo.status||"2"===t.comInfo.status?a("div",{staticClass:"notComponey"},["1"===t.comInfo.status?a("div",{staticClass:"tip"},[t._v("尊敬的业主/住户：您好！您的报修我们已收到，我们会尽快联系处理。负责工作人员信息：")]):"2"===t.comInfo.status?a("div",{staticClass:"tip"},[t._v("尊敬的业主/住户：您好！您的报修我们已维修，为确保维修质量，我们正在复核验收中。负责工作人员信息：")]):t._e(),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("工作人员:")]),a("p",{staticClass:"wx_flex col_name"},[t._v(t._s(t.comData.handler))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("联系电话:")]),a("p",{staticClass:"wx_flex col_phone"},[a("a",{attrs:{href:"tel:"+t.comData.handler_telephone}},[t._v(t._s(t.comData.handler_telephone))])])])]):"3"===t.comInfo.status?a("div",{staticClass:"componey"},[a("div",{staticClass:"tip"},[t._v("尊敬的业主/住户：您好！您的报修已完成维修，谢谢您使用微信客服系统。")]),a("div",{},[a("button",{staticClass:"weui-btn weui-btn_primary ly-btn_whiter",on:{click:t.getExmine}},[t._v("我要评价")])])]):t._e()])])])]),"1"===t.comInfo.status||"2"===t.comInfo.status?a("div",{staticClass:"weui-cells mar_top10"},[t._m(0),a("div",{staticClass:"weui-cell beforeTop textAreas"},[a("com-textarea",{ref:"childText",on:{"edit-handler":t.onEditHandler}})],1),a("com-upload",{ref:"childUpload"}),a("div",{staticClass:"weui-btn-area"},[a("button",{staticClass:"weui-btn weui-btn_primary ly-btn_defalut",on:{click:t.newQuery}},[t._v("确定")])])],1):t._e(),a("div",{staticClass:"requairMsg mar_top15"},[a("div",{staticClass:"weui-panel"},[t._m(1),a("div",{staticClass:"weui-panel__bd"},[a("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:"javascript:void(0);"}},[a("div",{staticClass:"weui-media-box__bd"},[a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("报修房屋:")]),a("p",{staticClass:"wx_flexs"},[t._v(t._s(t.comInfo.repair_room))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("报修区域:")]),a("p",{staticClass:"wx_flexs"},[t._v(t._s(t.comInfo.repair_area))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label  ly-label label"},[t._v("报修项目:")]),a("p",{staticClass:"wx_flexs"},[t._v(t._s(t.comInfo.repair_type))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("问题描述:")]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.comInfo.content))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("联系人:")]),a("p",{staticClass:"wx_flexs"},[t._v(t._s(t.comInfo.name))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("联系电话:")]),a("p",{staticClass:"wx_flexs col_phone"},[a("a",{attrs:{href:"tel:"+t.comInfo.telephone}},[t._v(t._s(t.comInfo.telephone))])])]),t.photos.length>0?a("div",{staticClass:"repair_data flex1"},[a("p",{staticClass:"weui-label ly-label label"},[t._v("上传图片")]),a("div",{staticClass:"repair_img"},[a("ul",t._l(t.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgurl"}],key:t,attrs:{preview:"100",alt:""}})])}),0)])]):t._e()])])])])]),t.addMsg.length>0?a("div",{staticClass:"supple_msg mar_top10"},[a("div",{staticClass:"weui-panel mar_bott"},[t._m(2),a("div",{staticClass:"weui-panel__bd"},t._l(t.addMsg,function(e,s){return a("div",{staticClass:"repair_datas repair_flex"},[a("p",{staticClass:"media_left"},[t._v(t._s(t.comInfo.name))]),a("div",{staticClass:"weui-media-box media_right"},[a("div",{staticClass:"arcticle"},[a("p",[t._v(t._s(e.content))]),e.photos.length>0?a("div",{staticClass:"repair_img"},[a("ul",t._l(e.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgs"}],key:t,attrs:{preview:s,alt:""}})])}),0)]):t._e()]),a("ul",{staticClass:"weui-media-box__info"},[a("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(e.created_at))])]),t._m(3,!0)])])}),0)])]):t._e(),a("div",{staticClass:"weui-btn-area area"},[a("button",{staticClass:"weui-btn ly-btn_defalut",on:{click:t.reClose}},[t._v("返回")])])]):t._e()},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cells__title"},[a("p",{staticStyle:{color:"#000"}},[t._v("问题补充")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"msgTxt"},[a("span",[t._v("报修信息")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"msgTxt"},[a("span",[t._v("补充信息")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot_info"},[a("p",[t._v("您补充信息已收到，我们会继续跟进。")])])}],l=a("d722"),n=a("4dac"),o=a("f037"),r={data:function(){return{title:"",stateColor:"",comText:[],isShow:!1,placetxt:"如果你有新的内容补充，请在此录入",type:"",repairData:[],code:this.$store.state.roomCode||"",comData:{},comInfo:{},msgData:!1,isload:!0,loadmore:"加载更多",current:1,photos:[],allcount:0,addMsg:[]}},created:function(){this.type=this.$route.query.type,this.init()},components:{ComTextarea:n["a"],ComUpload:o["a"]},methods:{init:function(){var t=this,e="",a="";1===this.current&&(a=this.$weui.loading()),"repair"===this.type?(e={company_repair_code:this.code},Object(l["y"])(e).then(function(e){console.log(e),0===e.code?1===t.current&&(t.isload=!0,t.comData=e.result,t.comInfo=e.result.repair_info,t.photos=e.result.repair_info.photos,t.addMsg=e.result.repair_additional,t.allcount=t.addMsg.length,t.msgData=!0,a.hide()):(1===t.current&&a.hide(),t.$weui.alert(e.msg))})):"prorepair"===this.type?(e={property_repair_code:this.code},Object(l["t"])(e).then(function(e){console.log(e),0===e.code?1===t.current&&(t.isload=!0,t.comData=e.result,t.comInfo=e.result.repair_info,t.photos=e.result.repair_info.photos,t.addMsg=e.result.repair_additional,t.allcount=t.addMsg.length,t.msgData=!0,a.hide()):(1===t.current&&a.hide(),t.$weui.alert(e.msg))})):this.$router.push("/home")},getExmine:function(){this.$router.push({name:"Examine",query:{type:this.type}})},onEditHandler:function(t){this.textVal=t,console.log(t)},newQuery:function(){var t=this;if("repair"===this.type){var e={company_repair_code:this.code,content:this.textVal,photos:this.$refs.childUpload.Photos};Object(l["f"])(e).then(function(e){console.log(e),0===e.code?t.resuccess():t.$weui.alert(e.msg)})}else if("prorepair"===this.type){var a={property_repair_code:this.code,content:this.textVal,photos:this.$refs.childUpload.Photos};Object(l["E"])(a).then(function(e){console.log(e),0===e.code?t.resuccess():t.$weui.alert(e.msg)})}},resuccess:function(){var t=this;this.$store.commit("setReFresh",1),this.$weui.alert("提交成功",{buttons:[{label:"确定",type:"primary",onClick:function(){t.$router.push({name:"HouseRepair",query:{type:t.type}})}}]})},reClose:function(){this.$router.push({name:"HouseRepair",query:{type:this.type}})}}},c=r,u=(a("0554"),a("2877")),d=Object(u["a"])(c,s,i,!1,null,"289691a6",null);e["default"]=d.exports},f037:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cells weui-cells_form mar_bott mar_top0 ",attrs:{id:"uploader"}},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__bd"},[a("div",{staticClass:"weui-uploader"},[a("div",{staticClass:"weui-uploader__hd"},[a("p",{staticClass:"weui-uploader__title titleImg"},[t._v("上传照片 "),t.isCount?a("span",{staticClass:"countImg"},[t._v("(最多5张)")]):a("span",{staticClass:"countImg"},[t._v("(非必选  最多8张)")])])]),a("div",{staticClass:"weui-uploader__bd"},[a("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"},on:{click:function(e){return t.handelGallery(e)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ishidden,expression:"ishidden"}],staticClass:"weui-uploader__input-box uploadImg"},[a("input",{staticClass:"weui-uploader__input",attrs:{id:"uploaderCustomInput",name:"img[]",type:"file",accept:"image/*",multiple:""}})])])])])])])},i=[],l=a("4455"),n=l["a"],o=(a("f368"),a("2877")),r=Object(o["a"])(n,s,i,!1,null,"7e27ba3f",null);e["a"]=r.exports},f368:function(t,e,a){"use strict";var s=a("c280"),i=a.n(s);i.a}}]);