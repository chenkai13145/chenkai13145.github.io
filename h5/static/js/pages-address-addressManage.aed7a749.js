(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressManage"],{"22e2":function(t,e,i){"use strict";i.r(e);var s=i("352e"),a=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=a.a},"352e":function(t,e,i){"use strict";var s=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("5176"));i("7f7f"),i("28a5");var n=s(i("f963")),o=s(i("7f0f")),r=s(i("736b")),d=new o.default,l={data:function(){return{addressId:"",addressList:[],direction:"",cityPickerValueDefault:[0,0,1],themeColor:"#007AFF",pickerText:"选择省/市/区",Default:!1}},components:{mpvueCityPicker:n.default},onLoad:function(t){var e="新增收货地址";if("edit"===t.type){e="编辑收货地址",this.addressId=JSON.parse(t.data),console.log(this.addressId);var i=this;i.addressId&&d.submit({request:{s:["USERADDRESSSELFGET",[{id:i.addressId}]]},callback:function(t){var e=r.default.checkError(t,"s",function(t,e){uni.showToast({title:e,icon:"none"})});console.log(e),i.addressList=e.s;var s=e.s.province,a=e.s.city,n=e.s.district;i.pickerText=s+"-"+a+"-"+n,1==i.addressList.default?i.Default=!0:i.Default=!1},error:function(t){r.default.err("err",t,1)}})}this.manageType=t.type,uni.setNavigationBarTitle({title:e})},methods:{switchChange:function(t){this.addressList.default=t.detail,1==t.detail.value?this.addressList.default=1:this.addressList.default=0,console.log(t.detail)},showMulLinkageThreePicker:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(t){console.log(t);var e=t.label;this.pickerText=e;var i=e.split("-");this.addressList.province=i[0],this.addressList.city=i[1],this.addressList.district=i[2]},chooseLocation:function(){var t=this;uni.chooseLocation({success:function(e){t.direction=e.name,console.log("位置名称："+e.name),console.log("详细地址："+e.address),console.log("纬度："+e.latitude),console.log("经度："+e.longitude),t.addressList.longitude=e.longitude,t.addressList.latitude=e.latitude}})},submit:function(){var t=this,e=(0,a.default)({},t.addressList);e.consignee&&e.phone&&e.province&&e.city&&e.district&&e.details&&e.longitude&&e.latitude?(uni.showLoading({title:"请稍等..."}),t.addressId?d.submit({request:{add:["USERADDRESSSELFEDIT",[e]]},callback:function(t){var e=r.default.checkError(t,"add",function(t,e){uni.showToast({title:e,icon:"none"})});e.add&&uni.showToast({title:"修改成功",success:function(){setTimeout(function(){uni.navigateBack({url:"../address/address"})},2e3)}})},error:function(t){r.default.err("err",t,1)}}):d.submit({request:{add:["USERADDRESSSELFADD",[e]]},callback:function(t){var e=r.default.checkError(t,"add",function(t,e){uni.showToast({title:e,icon:"none"})});e.add&&uni.showToast({title:"添加成功",success:function(){setTimeout(function(){uni.navigateBack({url:"../address/address"})},2e3)}})},error:function(t){r.default.err("err",t,1)}})):uni.showToast({title:"有未完成项",icon:"none"})}}};e.default=l},7954:function(t,e,i){var s=i("949e");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=i("4f06").default;a("6943bd0a",s,!0,{sourceMap:!1,shadowMode:!1})},"8fd8":function(t,e,i){"use strict";i.r(e);var s=i("baab"),a=i("22e2");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("d1db");var o=i("2877"),r=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,"0667f63e",null);e["default"]=r.exports},"949e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-0667f63e]{background:#f8f8f8;padding-top:%?16?%}.row[data-v-0667f63e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.row .tit[data-v-0667f63e]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#303133}.row .input[data-v-0667f63e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;color:#6d6d72;margin-left:%?20?%}.row .icon-shouhuodizhi[data-v-0667f63e]{font-size:%?36?%;color:#909399}.default-row[data-v-0667f63e]{margin-top:%?16?%}.default-row .tit[data-v-0667f63e]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.default-row uni-switch[data-v-0667f63e]{-webkit-transform:translateX(%?16?%) scale(.9);-ms-transform:translateX(%?16?%) scale(.9);transform:translateX(%?16?%) scale(.9)}.add-btn[data-v-0667f63e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;-webkit-box-shadow:1px 2px 5px rgba(219,63,96,.4);box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-0667f63e]{background:#f8f8f8}',""])},baab:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("联系人")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:t.addressList.consignee,callback:function(e){t.$set(t.addressList,"consignee",e)},expression:"addressList.consignee"}})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机号")]),i("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder"},model:{value:t.addressList.phone,callback:function(e){t.$set(t.addressList,"phone",e)},expression:"addressList.phone"}})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("地区")]),i("v-uni-text",{staticClass:"input",on:{click:function(e){e=t.$handleEvent(e),t.showMulLinkageThreePicker(e)}}},[t._v(t._s(t.pickerText))])],1),i("v-uni-view",{staticClass:"row b-b",on:{click:function(e){e=t.$handleEvent(e),t.chooseLocation(e)}}},[i("v-uni-text",{staticClass:"tit"},[t._v("地址定位")]),i("v-uni-text",{staticClass:"input"},[t._v(t._s(t.direction))]),i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"})],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("详细地址")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"详细地址","placeholder-class":"placeholder"},model:{value:t.addressList.details,callback:function(e){t.$set(t.addressList,"details",e)},expression:"addressList.details"}})],1),i("v-uni-view",{staticClass:"row default-row"},[i("v-uni-text",{staticClass:"tit"},[t._v("设为默认")]),i("v-uni-switch",{attrs:{checked:t.Default,color:"#fa436a"},on:{change:function(e){e=t.$handleEvent(e),t.switchChange(e)}}})],1),i("v-uni-button",{staticClass:"add-btn",on:{click:function(e){e=t.$handleEvent(e),t.submit()}}},[t._v("提交")]),i("mpvue-city-picker",{ref:"mpvueCityPicker",attrs:{themeColor:t.themeColor,pickerValueDefault:t.cityPickerValueDefault},on:{onConfirm:function(e){e=t.$handleEvent(e),t.onConfirm(e)}}})],1)},a=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return a})},d1db:function(t,e,i){"use strict";var s=i("7954"),a=i.n(s);a.a}}]);