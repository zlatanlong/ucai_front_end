webpackJsonp([16],{rqbd:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=t("olkN"),o={name:"login",data:function(){return{formInline:{email:"",password:""},ruleInline:{email:[{required:!0,message:"请填写邮箱.",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:"blur"}],password:[{required:!0,message:"请填写密码.",trigger:"blur"},{type:"string",min:6,message:"密码不会少于6位",trigger:"blur"}]}}},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate(function(e){e?r.$http.get("/login/user",{params:{email:r.formInline.email,password:r.formInline.password}}).then(function(e){0===e.data.code?(r.$Message.success("登录成功!"),s.a.setIfLoginAction(e.data.data),r.$router.go(0),r.$router.push("/dishes"),r.$Loading.finish()):104===e.data.code?r.$Message.error("邮箱错误!"):101===e.data.code?r.$Message.error("密码错误!"):102===e.data.code?r.$Message.error("用户未激活，请查看邮箱激活!"):103===e.data.code?r.$Message.error("用户已经被查封"):r.$Message.error("登录失败!")},function(e){console.log(e),r.$Message.error("服务器连接失败!")}):(r.$Message.error("登录失败!"),r.$Loading.error())})},toRegister:function(){this.$router.push("/register")}},created:function(){var e=this;this.$http.get("/user/get").then(function(r){0===r.data.code&&e.$router.push("/")}).catch(function(e){console.log(e)})}},n={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"center",align:"middle"}},[t("Col",{attrs:{xs:22,sm:10,md:9,lg:7}},[t("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline}},[t("FormItem",{attrs:{prop:"email"}},[t("Input",{attrs:{type:"text",placeholder:"邮箱",size:"large",clearable:""},model:{value:e.formInline.email,callback:function(r){e.$set(e.formInline,"email",r)},expression:"formInline.email"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"密码",size:"large",clearable:""},model:{value:e.formInline.password,callback:function(r){e.$set(e.formInline,"password",r)},expression:"formInline.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",[t("Button",{staticStyle:{"margin-left":"4%"},attrs:{type:"primary"},on:{click:function(r){e.handleSubmit("formInline")}}},[e._v("登录")]),e._v(" "),t("Button",{staticStyle:{float:"right","margin-right":"4%"},on:{click:e.toRegister}},[e._v("前去注册")])],1)],1)],1)],1)},staticRenderFns:[]};var a=t("VU/8")(o,n,!1,function(e){t("yEri")},"data-v-525b6849",null);r.default=a.exports},yEri:function(e,r){}});
//# sourceMappingURL=16.a4569a9ecdf9672a6b75.js.map