(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-025b99e6"],{2164:function(t,s,a){"use strict";var e=a("ce7b"),i=a.n(e);i.a},"31fe":function(t,s,a){},4455:function(t,s,a){"use strict";(function(t){a("4917"),a("a481");var e=a("025e");s["a"]={data:function(){return{imgList:[],fileList:[],uploadCount:0,Photos:[],ishidden:!0,isCount:!0,num:5}},created:function(){var t=this;this.$nextTick(function(){console.log(t.isCount),!0===t.isCount?t.num=5:t.num=8})},mounted:function(){var s=this,a="http://wkf.yiwindow.com/backend/",i=a+"server/media/upload?type=image";this.$nextTick(function(){s.$weui.uploader("#uploader",{url:i,auto:!0,type:"file",fileVal:"media",compress:{width:1600,height:1600,quality:.8},onBeforeQueued:function(t){return["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0?(s.$weui.alert("请上传图片"),!1):this.size>10485760?(s.$weui.alert("请上传不超过10M的图片"),!1):t.length>s.num?(s.$weui.alert("最多只能上传"+s.num+"张图片，请重新选择"),!1):s.uploadCount+1>s.num?(s.$weui.alert("最多只能上传"+s.num+"张图片"),!1):void++s.uploadCount},onQueued:function(){var t=this;e["a"].blobTobase(t,function(s){t.url=s})},onBeforeSend:function(a,e){t.extend(e,{Authorization:s.$store.state.Token})},onProgress:function(t){},onSuccess:function(t){s.imgList.push(this),0===t.code?s.Photos.push(t.result.fuid):s.$weui.alert(t.msg)},onError:function(t){console.log(this,t)}})})},watch:{uploadCount:function(t,s){t==this.num?this.ishidden=!1:this.ishidden=!0,console.log(t)}},methods:{handelGallery:function(t){console.log("执行了");var s=t.target,a=this;while(!s.classList.contains("weui-uploader__file")&&s)s=s.parentNode;if(s){var e=s.getAttribute("style")||"",i=s.getAttribute("data-id");e&&(e=e.match(/url\((.*?)\)/)[1].replace(/"/g,""));var l=a.$weui.gallery(e,{onDelete:function(){a.$weui.confirm("确定删除该图片？",function(){for(var t,e=0,r=a.imgList.length;e<r;e++){var n=a.imgList[e];if(n.id==i){t=e;break}}t>=0&&(console.log(t),a.Photos.splice(t,1),a.imgList.splice(t,1)),a.uploadCount--,s.remove(),l.hide()},function(){console.log("no deleted~ ~ ~ ~ ~ ~")})}})}}}}}).call(this,a("1157"))},4917:function(t,s,a){"use strict";var e=a("cb7c"),i=a("9def"),l=a("0390"),r=a("5f1b");a("214f")("match",1,function(t,s,a,n){return[function(a){var e=t(this),i=void 0==a?void 0:a[s];return void 0!==i?i.call(a,e):new RegExp(a)[s](String(e))},function(t){var s=n(a,t,this);if(s.done)return s.value;var o=e(t),c=String(this);if(!o.global)return r(o,c);var p=o.unicode;o.lastIndex=0;var d,u=[],_=0;while(null!==(d=r(o,c))){var h=String(d[0]);u[_]=h,""===h&&(o.lastIndex=l(c,i(o.lastIndex),p)),_++}return 0===_?null:u}]})},"4dac":function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"describe_item"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDescribe,expression:"!isDescribe"}],staticClass:"describe_placeholder"},[t._v(t._s(t.placeText))]),a("div",{staticClass:"describe_edit",attrs:{contenteditable:"plaintext-only"},domProps:{innerHTML:t._s(t.innerText)},on:{input:t.changeText}})])},i=[],l={data:function(){return{isDescribe:"",innerText:"",placeText:this.$parent.placetxt}},props:["placetxt"],mounted:function(){""!==this.$parent.textVal2&&(this.innerText=this.$parent.textVal2)},methods:{changeText:function(){this.isDescribe=this.$el.lastChild.innerHTML,this.$emit("edit-handler",this.$el.lastChild.innerHTML)}},watch:{value:function(t){this.innerText||(this.innerText=t)}}},r=l,n=(a("b4a6"),a("2877")),o=Object(n["a"])(r,e,i,!1,null,"0116c24e",null);s["a"]=o.exports},"50a2":function(t,s,a){},6133:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"tab"},[a("ul",{staticClass:"nav_tab"},[a("li",{class:{"is-actived":"AllMessage"===t.currentView},on:{click:function(s){return t.changeFlightMode("AllMessage")}}},[a("span",[t._v("报修信息")])]),a("li",{class:{"is-actived":"AllDealtair"===t.currentView},on:{click:function(s){return t.changeFlightMode("AllDealtair")}}},[a("span",[t._v("处理流程")])])]),t.isShow?a("div",{staticClass:"porject_lett"},[a(t.currentView,{ref:"childRefs",tag:"component",attrs:{sendlist:t.hardList}})],1):t._e()])},i=[],l=a("c980"),r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("transition",{attrs:{name:"slideRight",appear:""}},[a("router-view",{staticStyle:{"animation-duration":"0.3s"},attrs:{handelval:t.chandel},on:{checkText:t.getText,checkduty:t.getDuty}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],staticClass:"dealTair"},[a("div",{staticClass:"hasData"},[a("div",{staticClass:"weui-panel"},[a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"header_left"},[a("span",{staticClass:"state weixiu1",class:"weixiu"+t.detailData.status}),"1"===t.detailData.status?a("span",[t._v("待维修")]):"2"===t.detailData.status?a("span",[t._v("已维修")]):"3"===t.detailData.status?a("span",[t._v("已完成")]):a("span",[t._v("已评价")])])]),"1"===t.detailData.status||"2"===t.detailData.status?a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"weui-flex space-flex"},[a("p",{staticClass:"desced"},[t._v("添加描述")]),a("p",{staticClass:"cyyu",on:{click:t.checkLang}},[t._v("选择常用语")])]),t.isShow?t._e():a("div",{staticClass:"textAreas space-flex"},[a("com-textarea",{ref:"childText",on:{"edit-handler":t.onEditHandler}})],1),a("com-upload",{ref:"childUpload"}),"1"===t.detailData.status?a("div",{staticClass:"weui-cell ly-cell weui-cell_access",on:{click:t.getHandel}},[t.ishandel?a("div",{staticClass:"weui-cell__hd"},[t._m(0)]):t._e(),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dealVal,expression:"dealVal"}],staticClass:"weui-input",attrs:{id:"nextOwn",name:"city",type:"text",readonly:"readonly"},domProps:{value:t.dealVal},on:{input:function(s){s.target.composing||(t.dealVal=s.target.value)}}})]),a("div",{staticClass:"weui-cell__ft"},[t.ishandel?a("span",[t._v("请选择")]):t._e()])]):t._e(),t._m(1),a("div",{staticClass:"btn-area"},t._l(t.comTxt,function(s){return a("button",{staticClass:"resucess",class:{reactive:s.active},on:{click:function(a){return t.getValue(s)}}},[t._v(t._s(s.txt))])}),0),a("div",{staticClass:"weui-btn-area area"},[a("button",{staticClass:"weui-btn ly-btn_defalut",class:"2"===t.detailData.status?"defalut":"",on:{click:t.submitBtn}},[t._v("提  交")]),"2"===t.detailData.status?a("button",{staticClass:"weui-btn ly-btn_white",on:{click:t.submitBtns}},[t._v("退回处理人")]):t._e(),"2"===t.detailData.status?a("div",{staticClass:"btn_tip"},[t._v("提示：")]):t._e()])],1):t._e()])]),t.processData.length>0?a("div",{staticClass:"supple_msg mar_top10"},[a("div",{staticClass:"weui-panel mar_bott"},[t._m(2),a("div",{staticClass:"weui-panel__bd"},t._l(t.processData,function(s,e){return a("div",{staticClass:"repair_datas repair_flex"},[a("p",{staticClass:"media_left"},[t._v(t._s(s.submit_staff.nickname))]),a("div",{staticClass:"weui-media-box media_right"},[a("div",{staticClass:"arcticle"},[a("p",[t._v(t._s(s.content))]),s.photos.length>0?a("div",{staticClass:"repair_img"},[a("ul",t._l(s.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgs"}],key:t,attrs:{preview:e,alt:""}})])}),0)]):t._e()]),a("ul",{staticClass:"weui-media-box__info"},[a("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(s.created_at))])]),a("div",{staticClass:"foot_info"},[a("p",[a("span",[t._v("状态：")]),"1"===s.status?a("span",{staticClass:"foot_handel"},[t._v("待维修")]):"2"===s.status?a("span",{staticClass:"foot_handel"},[t._v("已维修")]):"3"===s.status?a("span",{staticClass:"foot_handel"},[t._v("已完成")]):a("span",{staticClass:"foot_handel"},[t._v("已评价")])]),a("p",[a("span",[t._v("责任人：")]),a("span",{staticClass:"foot_handel"},[t._v(t._s(s.handle_staff.nickname))])]),a("p",[a("span",[t._v("操作事项：")]),a("span",{staticClass:"foot_handel"},[t._v(t._s(s.desc))])])])])])}),0)])]):t._e(),a("div",{staticClass:"weui-btn-area area"},[a("button",{staticClass:"weui-btn weui-btn_primary ly-btn_defalut",on:{click:t.reClose}},[t._v("返回")])])])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("label",{staticClass:"weui-label ly-label",attrs:{for:"nextOwn"}},[t._v("下一步处理人  "),a("span",{staticClass:"com_color"},[t._v("（转单时选择）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"weui-cell"},[a("p",{staticClass:"ly-color"},[t._v("状态修改（状态不改变，只记录问题时不用选择）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"msgTxt"},[a("span",[t._v("处理信息")])])])}],o=a("4dac"),c=a("f037"),p=a("6860"),d={props:["sendlist"],data:function(){return{isload:!0,isShow:!1,loadmore:"加载更多",disabled:!0,placetxt:"请输入",textVal2:"",dealVal:"",repairTxt:[{id:0,active:!1,txt:"无效报修"},{id:0,active:!1,txt:"维修完成"}],type:"",comTxt:[],reanplTxt:[{ids:0,active:!0,txt:"不通过"},{ids:1,active:!1,txt:"销项通过"}],checkVal:"",ishandel:!0,ishandels:!0,chandel:"",detailData:"",contentId:"",dealId:"",checkId:0,actives:"",processData:[]}},created:function(){this.type=this.$route.params.type,this.detailData=this.sendlist.repair_info,this.ishanels=this.detailData.is_handle_staff,this.processData=this.sendlist.repair_process,"componey"===this.$store.state.staffType&&(this.chandel=this.detailData.company_guid),"1"===this.detailData.status?this.comTxt=this.repairTxt:"2"===this.detailData.status&&(this.comTxt=this.reanplTxt)},mounted:function(){this.$refs.childUpload&&(this.$refs.childUpload.isCount=!1)},components:{ComTextarea:o["a"],ComUpload:c["a"]},methods:{reClose:function(){this.$router.push({name:"StaffRepair",params:this.type})},onEditHandler:function(t){this.textVal2=t,console.log(t)},checkLang:function(){this.$router.push({name:"ComLanguages"})},getText:function(t){this.textVal2=t.content,this.placetxt="",this.contentId=t.id},getHandel:function(){this.$router.push({name:"Searches",query:{id:1}})},getDuty:function(t){this.isShow=!1,this.ishandel=!1,this.dealVal=t.nickname,this.dealId=t.psuid},getValue:function(t){for(var s in this.comTxt)t.txt===this.comTxt[s].txt?"1"===this.detailData.status?(t.active=!t.active,this.actives=t.active,!0===this.actives?this.$set(this.comTxt[s],"id",1):this.$set(this.comTxt[s],"id",0)):(t.active=!0,this.checkId=t.ids):(this.$set(this.comTxt[s],"active",!1),this.$set(this.comTxt[s],"id",0))},submitBtn:function(){var t=this,s="";console.log(this.comTxt[0].id,this.comTxt[1].id),console.log(this.checkId),"1"===this.detailData.status?"wuye"===this.$store.state.staffType?(s={property_repair_code:this.$store.state.roomCode,content:this.textVal2,version:this.detailData.version,photos:this.$refs.childUpload.Photos,is_invalid:this.comTxt[0].id,is_complete:this.comTxt[1].id,handle_psuid:this.dealId},Object(p["a"])(s).then(function(s){console.log(s),0===s.code?t.successed():t.$weui.alert(s.msg),t.$store.commit("setReFreshs",1)})):(s={company_repair_code:this.$store.state.roomCode,content:this.textVal2,version:this.detailData.version,photos:this.$refs.childUpload.Photos,is_invalid:this.comTxt[0].id,is_complete:this.comTxt[1].id,handle_csuid:this.dealId},Object(p["i"])(s).then(function(s){console.log(s),0===s.code?t.successed():t.$weui.alert(s.msg),t.$store.commit("setReFreshs",1)})):"wuye"===this.$store.state.staffType?(s={property_repair_code:this.$store.state.roomCode,content:this.textVal2,version:this.detailData.version,photos:this.$refs.childUpload.Photos,is_pass:this.checkId},Object(p["T"])(s).then(function(s){0===s.code?t.successed():t.$weui.alert(s.msg),t.$store.commit("setReFreshs",1)})):(s={company_repair_code:this.$store.state.roomCode,content:this.textVal2,version:this.detailData.version,photos:this.$refs.childUpload.Photos,is_pass:this.checkId},Object(p["z"])(s).then(function(s){0===s.code?t.successed():t.$weui.alert(s.msg),t.$store.commit("setReFreshs",1)}))},successed:function(){var t=this;this.$weui.alert("提交成功",{buttons:[{label:"确定",type:"primary",onClick:function(){t.$router.push({name:"StaffRepair",params:t.type})}}]}),this.$store.commit("setrelationId","Mine")},submitBtns:function(){var t=this,s="";if("wuye"===this.$store.state.staffType){s={property_repair_code:this.$store.state.roomCode,version:this.detailData.version};var a=this;Object(p["h"])(s).then(function(s){console.log(s),0===s.code?(t.$weui.alert("已退回",{buttons:[{label:"确定",type:"primary",onClick:function(){a.$router.push({name:"StaffRepair",params:{type:a.type}})}}]}),t.$store.commit("setrelationId","Mine")):t.$weui.alert(s.msg)}),this.$store.commit("setReFreshs",1)}else{s={company_repair_code:this.$store.state.roomCode,version:this.detailData.version};var e=this;Object(p["p"])(s).then(function(s){console.log(s),0===s.code?(t.$weui.alert("已退回",{buttons:[{label:"确定",type:"primary",onClick:function(){e.$router.push({name:"StaffRepair",params:{type:e.type}})}}]}),t.$store.commit("setrelationId","Mine")):t.$weui.alert(s.msg)}),this.$store.commit("setReFreshs",1)}}},beforeRouteEnter:function(t,s,a){a(function(t){document.title=t.title})}},u=d,_=(a("2164"),a("2877")),h=Object(_["a"])(u,r,n,!1,null,"07b3bbed",null),m=h.exports,v={data:function(){return{currentView:"",hardList:{},isShow:!1,areaMode:!0,parentShow:""}},created:function(){var t=this,s={},a=this.$weui.loading();"wuye"===this.$store.state.staffType?(s={property_repair_code:this.$store.state.roomCode},Object(p["U"])(s).then(function(s){a.hide(),0===s.code?(t.hardList=s.result,t.isShow=!0):t.$weui.alert(s.msg)})):(s={company_repair_code:this.$store.state.roomCode},Object(p["A"])(s).then(function(s){a.hide(),0===s.code?(t.hardList=s.result,t.isShow=!0):t.$weui.alert(s.msg)})),1===this.$store.state.reFresh?this.currentView="AllDealtair":this.currentView="AllMessage"},components:{AllMessage:l["a"],AllDealtair:m},methods:{changeFlightMode:function(t){this.currentView=t,"AllMessage"===this.currentView?this.$store.commit("setReFresh",0):this.$store.commit("setReFresh",1)}}},f=v,C=(a("84cb"),Object(_["a"])(f,e,i,!1,null,"1fd1d36e",null));s["default"]=C.exports},"7ca6":function(t,s,a){},"84cb":function(t,s,a){"use strict";var e=a("31fe"),i=a.n(e);i.a},b2e1:function(t,s,a){"use strict";var e=a("7ca6"),i=a.n(e);i.a},b4a6:function(t,s,a){"use strict";var e=a("50a2"),i=a.n(e);i.a},c280:function(t,s,a){},c980:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pages"},[a("div",{staticClass:"hasData"},[a("div",{staticClass:"weui-panel weui-panel_access"},[a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"header_left"},[a("span",{staticClass:"state weixiu1",class:"weixiu"+t.repairMsg.status}),"1"===t.repairMsg.status?a("span",[t._v(t._s("repair"===t.type?"待维修":"处理中"))]):"2"===t.repairMsg.status?a("span",[t._v(t._s("repair"===t.type?"已维修":"已回复"))]):"3"===t.repairMsg.status?a("span",[t._v(t._s((t.type,"已完成")))]):a("span",[t._v("已评价")])])]),a("div",{staticClass:"weui-panel__bd"},[a("div",{staticClass:"weui-media-box ly-media-box weui-media-box_appmsg"},[t.iscompany?a("div",{staticClass:"weui-media-box__bd"},[a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[0]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.created_at))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[1]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.city:t.repairMsg.project_name))])]),"repair"===t.type?a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[2]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.repair_room))])]):t._e(),"complaint"===t.type?a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[2]))]),a("p",{staticClass:"wx_flex",domProps:{innerHTML:t._s(!0===t.repairMsg.is_relation_room?"有":"无")}})]):t._e(),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[3]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.repair_area:t.repairMsg.complaint_room))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[4]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.repair_type:t.repairMsg.complaint_type))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[5]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.content:t.repairMsg.title))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("联系人:")]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.name))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("电话:")]),a("p",{staticClass:"wx_flex"},[a("a",{staticClass:"col_phone",attrs:{href:"tel:"+t.repairMsg.telephone}},[t._v(t._s(t.repairMsg.telephone))])])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("渠道:")]),a("p",{staticClass:"wx_flex",domProps:{innerHTML:t._s("1"===t.repairMsg.channel?"会员":"员工")}})]),t.photos.length>0?a("div",{staticClass:"repair_data flex1"},[a("p",{staticClass:"label"},[t._v("上传图片")]),a("div",{staticClass:"repair_img"},[a("ul",t._l(t.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgurl"}],key:t,attrs:{preview:"100",alt:""}})])}),0)])]):t._e()]):a("div",{staticClass:"weui-media-box__bd"},[a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[0]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.created_at))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[1]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.company_name))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[2]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.city))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[3]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.repair_room:t.repairMsg.complaint_room))])]),"repair"===t.type?a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[4]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.repair_area))])]):t._e(),"complaint"===t.type?a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[4]))]),a("p",{staticClass:"wx_flex",domProps:{innerHTML:t._s(!0===t.repairMsg.is_relation_room?"有":"无")}})]):t._e(),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[5]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.repair_type:t.repairMsg.complaint_type))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v(t._s(t.comData[6]))]),a("p",{staticClass:"wx_flex"},[t._v(t._s("repair"===t.type?t.repairMsg.content:t.repairMsg.title))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("联系人:")]),a("p",{staticClass:"wx_flex"},[t._v(t._s(t.repairMsg.name))])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("电话:")]),a("p",{staticClass:"wx_flex"},[a("a",{staticClass:"col_phone",attrs:{href:"tel:"+t.repairMsg.telephone}},[t._v(t._s(t.repairMsg.telephone))])])]),a("div",{staticClass:"repair_data"},[a("p",{staticClass:"label"},[t._v("渠道:")]),a("p",{staticClass:"wx_flex",domProps:{innerHTML:t._s("1"===t.repairMsg.channel?"会员":"员工")}})]),t.photos.length>0?a("div",{staticClass:"repair_data flex1"},[a("p",{staticClass:"label"},[t._v("上传图片")]),a("div",{staticClass:"repair_img"},[a("ul",t._l(t.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgurl"}],key:t,attrs:{preview:"100",alt:""}})])}),0)])]):t._e()])])])])]),t.addMsg.length>0?a("div",{staticClass:"supple_msg mar_top10"},[a("div",{staticClass:"weui-panel mar_bott"},[t._m(0),a("div",{staticClass:"weui-panel__bd"},t._l(t.addMsg,function(s,e){return a("div",{staticClass:"repair_datas repair_flex"},[a("p",{staticClass:"media_left"},[t._v(t._s(t.repairMsg.name))]),a("div",{staticClass:"weui-media-box media_right"},[a("div",{staticClass:"arcticle"},[a("p",[t._v(t._s(s.content))]),s.photos.length>0?a("div",{staticClass:"repair_img"},[a("ul",t._l(s.photos,function(t){return a("li",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"imgs"}],key:t,attrs:{preview:e,alt:""}})])}),0)]):t._e()]),a("ul",{staticClass:"weui-media-box__info"},[a("li",{staticClass:"weui-media-box__info__meta"},[t._v(t._s(s.created_at))])]),t._m(1,!0)])])}),0)])]):t._e(),a("div",{staticClass:"weui-btn-area area"},[a("button",{staticClass:"weui-btn weui-btn_primary ly-btn_defalut",on:{click:t.reClose}},[t._v("返回")])])])},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"weui-panel__hd"},[a("div",{staticClass:"msgTxt"},[a("span",[t._v("补充信息")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"foot_info"},[a("p",[t._v("您补充信息已收到，我们会继续跟进。")])])}],l={props:["sendlist"],data:function(){return{crepair:["时间:","公司:","城市:","房屋:","区域:","项目:","内容:"],repair:["时间:","城市:","房屋:","区域:","项目:","内容:"],Complaint:["时间:","项目:","关联:","房屋:","类别:","标题:"],Ccomplaint:["时间:","公司:","城市:","项目:","关联:","类别:","标题:"],stateColor:"",comData:[],photos:[],type:"",repairMsg:{},addMsg:{},iscompany:!0}},created:function(){this.type=this.$route.params.type,console.log(this.type),"complaint"===this.type?("wuye"===this.$store.state.staffType?this.comData=this.Complaint:(this.iscompany=!1,this.comData=this.Ccomplaint),this.repairMsg=this.sendlist.complaint_info,this.addMsg=this.sendlist.complaint_additional,this.photos=this.sendlist.complaint_info.photos):("wuye"===this.$store.state.staffType?this.comData=this.repair:(this.iscompany=!1,this.comData=this.crepair),this.repairMsg=this.sendlist.repair_info,this.addMsg=this.sendlist.repair_additional,this.photos=this.sendlist.repair_info.photos)},methods:{reClose:function(){this.$router.push({name:"StaffRepair",params:this.type})}}},r=l,n=(a("b2e1"),a("2877")),o=Object(n["a"])(r,e,i,!1,null,"7c32ff28",null);s["a"]=o.exports},ce7b:function(t,s,a){},f037:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"weui-cells weui-cells_form mar_bott mar_top0 ",attrs:{id:"uploader"}},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__bd"},[a("div",{staticClass:"weui-uploader"},[a("div",{staticClass:"weui-uploader__hd"},[a("p",{staticClass:"weui-uploader__title titleImg"},[t._v("上传照片 "),t.isCount?a("span",{staticClass:"countImg"},[t._v("(最多5张)")]):a("span",{staticClass:"countImg"},[t._v("(非必选  最多8张)")])])]),a("div",{staticClass:"weui-uploader__bd"},[a("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"},on:{click:function(s){return t.handelGallery(s)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ishidden,expression:"ishidden"}],staticClass:"weui-uploader__input-box uploadImg"},[a("input",{staticClass:"weui-uploader__input",attrs:{id:"uploaderCustomInput",name:"img[]",type:"file",accept:"image/*",multiple:""}})])])])])])])},i=[],l=a("4455"),r=l["a"],n=(a("f368"),a("2877")),o=Object(n["a"])(r,e,i,!1,null,"7e27ba3f",null);s["a"]=o.exports},f368:function(t,s,a){"use strict";var e=a("c280"),i=a.n(e);i.a}}]);