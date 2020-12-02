(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{475:function(v,_,e){"use strict";e.r(_);var n=e(42),t=Object(n.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"前端默认开启增强模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端默认开启增强模式"}},[v._v("#")]),v._v(" 前端默认开启增强模式")]),v._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[v._v("WARNING")]),v._v(" "),e("p",[e("code",[v._v("knife4j")]),v._v(" 版本>2.0.1 使用此规则")])]),v._v(" "),e("p",[e("strong",[v._v("自2.0.6版本后,Knife4j的增强模式可以由后端进行配置,Knife4j提供了更加符合Spring Boot以及OpenAPI规范的方式进行使用,推荐开发者升级使用,文档请移步"),e("RouterLink",{attrs:{to:"/knife4j/enhance.html"}},[v._v("增强模式")])],1)]),v._v(" "),e("p",[e("code",[v._v("knife4j")]),v._v("所提供Swagger-Ui默认是访问Springfox-Swagger所提供的"),e("code",[v._v("/v2/api-docs")]),v._v("接口,从开源至今,一直默认访问的就是该地址")]),v._v(" "),e("p",[v._v("但随着版本的更新迭代,使用的开发者越来越多,"),e("code",[v._v("knife4j")]),v._v("也响应支持了一些特有的增强功能，增强功能主要包括：")]),v._v(" "),e("ul",[e("li",[v._v("接口分组排序")]),v._v(" "),e("li",[v._v("接口排序")]),v._v(" "),e("li",[v._v("参数自动忽略")]),v._v(" "),e("li",[v._v("针对"),e("code",[v._v("@RequestBody")]),v._v(" Map类型的请求提供动态字段注释")]),v._v(" "),e("li",[v._v("给接口添加作者信息")]),v._v(" "),e("li",[v._v("自定义Markdown文档")]),v._v(" "),e("li",[v._v("文档权限过滤")]),v._v(" "),e("li",[v._v("more...")])]),v._v(" "),e("p",[v._v("同时也保留了一些个性化的配置特性,用于"),e("code",[v._v("knife4j")]),v._v("的文档调试使用,如下图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"/knife4j/images/knife4j/set.png",alt:""}})]),v._v(" "),e("p",[v._v("在以前的做法,开发者是先访问"),e("code",[v._v("doc.html")]),v._v(",然后在个性化配置中勾选 启用Knife4j提供的增强功能")]),v._v(" "),e("p",[v._v("勾选后,重新刷新页面,此时,"),e("code",[v._v("knife4j")]),v._v("的ui界面会访问"),e("code",[v._v("knife4j")]),v._v("提供的接口地址"),e("code",[v._v("/v2/api-docs-ext")]),v._v(" ,"),e("code",[v._v("knife4j")]),v._v("提供的增强功能扩展属性都会从这个接口中返回,前端ui会解析增强部分并且在页面中体现")]),v._v(" "),e("p",[e("strong",[v._v("提供这样的方式主要原因是")]),v._v("：")]),v._v(" "),e("p",[v._v("1、原本Knife4j-spring-ui所替代的角色是"),e("code",[v._v("springfox-swagger-ui")]),v._v(",一开始的愿景也是希望开发者能够无缝集成,减少软件集成的学习成本,在Java的Maven Pom文件中直接引入jar包就可以完成集成(前提是你已经集成了springfox-swagger)并使用，这种体验对于开发者来说是再简单不过的")]),v._v(" "),e("p",[v._v("2、另外是Knife4j还在发展中,强制使用自己所提供的功能对于各个软件的兼容难免会存在问题,所以把Knife4j所提供的增强功能使用权也是交给开发者,让开发者做选择。")]),v._v(" "),e("p",[e("strong",[v._v("现在")])]),v._v(" "),e("p",[v._v("上面说了默认规则,那么在增强模式下,能否默认在前端界面就开启呢?")]),v._v(" "),e("blockquote",[e("p",[v._v("有时候我们确实需要"),e("code",[v._v("knife4j")]),v._v("所提供的增强功能,但是每次在打开后都需要个性化设置界面勾选启用增强会很繁琐,特别是和别人接口对接的情况下,别人希望看到的例如排序、忽略参数等特性能直接体现")])]),v._v(" "),e("p",[e("code",[v._v("knife4j")]),v._v("针对这样的需求提供了解决方法,但是有些前提条件是开发者需要首先确保的，主要注意点：")]),v._v(" "),e("p",[v._v("1、Java后端必须在"),e("code",[v._v("@EnableSwagger2")]),v._v("的基础上再添加"),e("code",[v._v("@EnableKnife4j")]),v._v("增强注解,代码示例如下：")]),v._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[v._v("@Configuration")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[v._v("@EnableSwagger2")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[v._v("@EnableKnife4j")]),v._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("public")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("class")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[v._v("SwaggerConfiguration")]),v._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n    \n "),e("span",{pre:!0,attrs:{class:"token comment"}},[v._v("//more..")]),v._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n")])])]),e("p",[v._v("2、如果你使用Spring Security、Shiro这类权限框架时,需要对接口地址"),e("code",[v._v("/v2/api-docs-ext")]),v._v("进行放权")]),v._v(" "),e("p",[e("strong",[v._v("最后")])]),v._v(" "),e("p",[v._v("以上操作完成后,在界面端直接访问地址："),e("code",[v._v("http://host:port/doc.html#/plus")])]),v._v(" "),e("p",[v._v("以上地址告诉"),e("code",[v._v("knife4j")]),v._v("的前端界面后端增强功能万事俱备,前端可以使用了")])])}),[],!1,null,null,null);_.default=t.exports}}]);