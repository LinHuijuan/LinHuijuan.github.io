(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{673:function(t,a,s){t.exports=s.p+"assets/img/deep-vue.5a2797b5.jpg"},908:function(t,a,s){"use strict";s.r(a);var e=s(17),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"深入浅出vue-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#深入浅出vue-js"}},[t._v("#")]),t._v(" 深入浅出Vue.js")]),t._v(" "),e("p",[e("img",{attrs:{src:s(673),alt:""}})]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("元编程思想")])]),t._v(" "),e("p",[t._v("该书根据版本2.5.2撰写。")]),t._v(" "),e("p",[t._v("分层是为了灵活适应不同需求，即可以只用最核心的视图层渲染功能来快速开发，或者使用一整套全家桶来开发大型应用。")])]),t._v(" "),e("p",[t._v("[TOC]")]),t._v(" "),e("h2",{attrs:{id:"一、vue-js的响应原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、vue-js的响应原理"}},[t._v("#")]),t._v(" 一、Vue.js的响应原理")]),t._v(" "),e("blockquote",[e("p",[t._v("理解为什么修改数据视图会自动更新。")])]),t._v(" "),e("ul",[e("li",[t._v("变化侦测即侦测数据的变化。当数据变化时，通知视图进行相应更新。\n"),e("ul",[e("li",[t._v("push类型。\n"),e("ul",[e("li",[t._v("Vue。一个状态所绑定的依赖不再是具体的DOM节点，而是一个组件。当状态变化后，会通知到组件，组件内部再使用虚拟DOM进行比对，从而大大降低依赖数量，降低依赖追踪所消耗的内存。")]),t._v(" "),e("li",[t._v("可进行更细粒度的更新。但是粒度越细，每个状态所绑定的依赖就越多，依赖追踪在内存的开销就越大。")])])]),t._v(" "),e("li",[t._v("pull类型。\n"),e("ul",[e("li",[t._v("Angular-脏检查、React-虚拟DOM。")]),t._v(" "),e("li",[t._v("当状态发生变化时，不知道哪个状态变了，只能暴力比对找出需要重新渲染的DOM节点。")])])])])])]),t._v(" "),e("h3",{attrs:{id:"_1-1-object变化侦测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-object变化侦测"}},[t._v("#")]),t._v(" 1.1 Object变化侦测")]),t._v(" "),e("h3",{attrs:{id:"_1-2-array变化侦测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-array变化侦测"}},[t._v("#")]),t._v(" 1.2 Array变化侦测")]),t._v(" "),e("h3",{attrs:{id:"_1-3-相关api实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-相关api实现原理"}},[t._v("#")]),t._v(" 1.3 相关API实现原理")]),t._v(" "),e("h4",{attrs:{id:"_1-3-1-vm-watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-vm-watch"}},[t._v("#")]),t._v(" 1.3.1 vm.$watch")]),t._v(" "),e("h4",{attrs:{id:"_1-3-2-vm-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-vm-set"}},[t._v("#")]),t._v(" 1.3.2 vm.$set")]),t._v(" "),e("h4",{attrs:{id:"_1-3-3-vm-delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-vm-delete"}},[t._v("#")]),t._v(" 1.3.3 vm.$delete")]),t._v(" "),e("h2",{attrs:{id:"二、虚拟dom-virtual-dom-的概念和原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、虚拟dom-virtual-dom-的概念和原理"}},[t._v("#")]),t._v(" 二、虚拟DOM(Virtual DOM)的概念和原理")]),t._v(" "),e("h2",{attrs:{id:"三、模板编译原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、模板编译原理"}},[t._v("#")]),t._v(" 三、模板编译原理")]),t._v(" "),e("blockquote",[e("p",[t._v("理解Vue.js的模板是如何生效的。")])]),t._v(" "),e("h3",{attrs:{id:"_3-1-模板编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-模板编译"}},[t._v("#")]),t._v(" 3.1 模板编译")]),t._v(" "),e("h3",{attrs:{id:"_3-2-解析器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-解析器"}},[t._v("#")]),t._v(" 3.2 解析器")]),t._v(" "),e("h3",{attrs:{id:"_3-3-优化器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-优化器"}},[t._v("#")]),t._v(" 3.3 优化器")]),t._v(" "),e("h3",{attrs:{id:"_3-4-代码生成器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-代码生成器"}},[t._v("#")]),t._v(" 3.4 代码生成器")]),t._v(" "),e("h2",{attrs:{id:"四、vue-js整体项目结构与架构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、vue-js整体项目结构与架构设计"}},[t._v("#")]),t._v(" 四、Vue.js整体项目结构与架构设计")]),t._v(" "),e("h3",{attrs:{id:"_4-1-目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-目录结构"}},[t._v("#")]),t._v(" 4.1 目录结构")]),t._v(" "),e("h3",{attrs:{id:"_4-2-架构设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-架构设计"}},[t._v("#")]),t._v(" 4.2 架构设计")]),t._v(" "),e("h2",{attrs:{id:"五、生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、生命周期"}},[t._v("#")]),t._v(" 五、生命周期")]),t._v(" "),e("blockquote",[e("p",[t._v("深入理解Vue.js的生命周期，不同的生命周期钩子之间有什么不同，不同的生命周期之间Vue.js内部到底发生了什么。")])]),t._v(" "),e("h2",{attrs:{id:"六、api内部实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、api内部实现原理"}},[t._v("#")]),t._v(" 六、API内部实现原理")]),t._v(" "),e("h3",{attrs:{id:"_6-1-数据相关的实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-数据相关的实例方法"}},[t._v("#")]),t._v(" 6.1 数据相关的实例方法")]),t._v(" "),e("h3",{attrs:{id:"_6-2-事件相关的实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-事件相关的实例方法"}},[t._v("#")]),t._v(" 6.2 事件相关的实例方法")]),t._v(" "),e("h4",{attrs:{id:"_6-2-1-vm-on"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-vm-on"}},[t._v("#")]),t._v(" 6.2.1 vm.$on")]),t._v(" "),e("h4",{attrs:{id:"_6-2-2-vm-off"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-vm-off"}},[t._v("#")]),t._v(" 6.2.2 vm.$off")]),t._v(" "),e("h4",{attrs:{id:"_6-2-3-vm-once"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-vm-once"}},[t._v("#")]),t._v(" 6.2.3 vm.$once")]),t._v(" "),e("h4",{attrs:{id:"_6-2-4-vm-emit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-4-vm-emit"}},[t._v("#")]),t._v(" 6.2.4 vm.$emit")]),t._v(" "),e("h3",{attrs:{id:"_6-3-生命周期相关的实例方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-生命周期相关的实例方法"}},[t._v("#")]),t._v(" 6.3 生命周期相关的实例方法")]),t._v(" "),e("h4",{attrs:{id:"_6-3-1-vm-forceupdate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-vm-forceupdate"}},[t._v("#")]),t._v(" 6.3.1 vm.$forceUpdate")]),t._v(" "),e("h4",{attrs:{id:"_6-3-2-vm-destroy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-vm-destroy"}},[t._v("#")]),t._v(" 6.3.2 vm.$destroy")]),t._v(" "),e("h4",{attrs:{id:"_6-3-3-vm-nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-3-vm-nexttick"}},[t._v("#")]),t._v(" 6.3.3 vm.$nextTick")]),t._v(" "),e("h4",{attrs:{id:"_6-3-4-vm-mount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-4-vm-mount"}},[t._v("#")]),t._v(" 6.3.4 vm.$mount")]),t._v(" "),e("h3",{attrs:{id:"_6-4-全局api的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-全局api的实现原理"}},[t._v("#")]),t._v(" 6.4 全局API的实现原理")]),t._v(" "),e("h4",{attrs:{id:"_6-4-1-vue-extend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-vue-extend"}},[t._v("#")]),t._v(" 6.4.1 Vue.extend")]),t._v(" "),e("h4",{attrs:{id:"_6-4-2-vue-nexttick"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-vue-nexttick"}},[t._v("#")]),t._v(" 6.4.2 Vue.nextTick")]),t._v(" "),e("h4",{attrs:{id:"_6-4-3-vue-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-3-vue-set"}},[t._v("#")]),t._v(" 6.4.3 Vue.set")]),t._v(" "),e("h4",{attrs:{id:"_6-4-4-vue-delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-4-vue-delete"}},[t._v("#")]),t._v(" 6.4.4 Vue.delete")]),t._v(" "),e("h4",{attrs:{id:"_6-4-5-vue-directive"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-5-vue-directive"}},[t._v("#")]),t._v(" 6.4.5 Vue.directive")]),t._v(" "),e("h4",{attrs:{id:"_6-4-6-vue-filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-6-vue-filter"}},[t._v("#")]),t._v(" 6.4.6 Vue.filter")]),t._v(" "),e("h4",{attrs:{id:"_6-4-7-vue-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-7-vue-component"}},[t._v("#")]),t._v(" 6.4.7 Vue.component")]),t._v(" "),e("h4",{attrs:{id:"_6-4-8-vue-use"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-8-vue-use"}},[t._v("#")]),t._v(" 6.4.8 Vue.use")]),t._v(" "),e("h4",{attrs:{id:"_6-4-9-vue-mixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-9-vue-mixin"}},[t._v("#")]),t._v(" 6.4.9 Vue.mixin")]),t._v(" "),e("h4",{attrs:{id:"_6-4-10-vue-compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-10-vue-compile"}},[t._v("#")]),t._v(" 6.4.10 Vue.compile")]),t._v(" "),e("h4",{attrs:{id:"_6-4-11-vue-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-11-vue-version"}},[t._v("#")]),t._v(" 6.4.11 Vue.version")]),t._v(" "),e("h2",{attrs:{id:"七、指令的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七、指令的实现原理"}},[t._v("#")]),t._v(" 七、指令的实现原理")]),t._v(" "),e("h2",{attrs:{id:"八、过滤器的实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八、过滤器的实现原理"}},[t._v("#")]),t._v(" 八、过滤器的实现原理")]),t._v(" "),e("h2",{attrs:{id:"九、最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#九、最佳实践"}},[t._v("#")]),t._v(" 九、最佳实践")]),t._v(" "),e("blockquote",[e("p",[t._v("编码阶段：")]),t._v(" "),e("p",[t._v("• 尽量减少data中的数据，data中的数据都会增加getter和setter，会收集对应的watcher")]),t._v(" "),e("p",[t._v("• v-if和v-for不能连用")]),t._v(" "),e("p",[t._v("• 如果需要使用v-for给每项元素绑定事件时使用事件代理")]),t._v(" "),e("p",[t._v("• SPA 页面采用keep-alive缓存组件")]),t._v(" "),e("p",[t._v("• 在更多的情况下，使用v-if替代v-show")]),t._v(" "),e("p",[t._v("• key保证唯一")]),t._v(" "),e("p",[t._v("• 使用路由懒加载、异步组件")]),t._v(" "),e("p",[t._v("• 防抖、节流")]),t._v(" "),e("p",[t._v("• 第三方模块按需导入")]),t._v(" "),e("p",[t._v("• 长列表滚动到可视区域动态加载")]),t._v(" "),e("p",[t._v("• 图片懒加载")])]),t._v(" "),e("blockquote",[e("p",[t._v("SEO优化")]),t._v(" "),e("p",[t._v("• 预渲染")]),t._v(" "),e("p",[t._v("• 服务端渲染SSR")])]),t._v(" "),e("blockquote",[e("p",[t._v("打包优化")]),t._v(" "),e("p",[t._v("• 压缩代码")]),t._v(" "),e("p",[t._v("• Tree Shaking/Scope Hoisting")]),t._v(" "),e("p",[t._v("• 使用cdn加载第三方模块")]),t._v(" "),e("p",[t._v("• 多线程打包happypack")]),t._v(" "),e("p",[t._v("• splitChunks抽离公共文件")]),t._v(" "),e("p",[t._v("• sourceMap优化")])]),t._v(" "),e("blockquote",[e("p",[t._v("用户体验")]),t._v(" "),e("p",[t._v("• 骨架屏")]),t._v(" "),e("p",[t._v("• PWA")]),t._v(" "),e("p",[t._v("• 使用缓存(客户端缓存、服务端缓存)优化")]),t._v(" "),e("p",[t._v("• 服务端开启gzip压缩")])]),t._v(" "),e("h3",{attrs:{id:"_9-1-为列表渲染设置属性key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-为列表渲染设置属性key"}},[t._v("#")]),t._v(" 9.1 为列表渲染设置属性key")]),t._v(" "),e("p",[t._v("在更新子节点时，需要从旧虚拟节点列表中查找与新虚拟节点相同的节点进行更新。查找过程若设置属性key，则查找速度会快很多。")]),t._v(" "),e("h3",{attrs:{id:"_9-2-在-v-if-v-if-else-v-else-中使用key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-在-v-if-v-if-else-v-else-中使用key"}},[t._v("#")]),t._v(" 9.2 在 v-if/v-if-else/v-else 中使用key")]),t._v(" "),e("p",[t._v("默认情况下，vue会尽可能高效更新DOM，在相同类型元素之间切换时，会修补已存在的元素，而不是将旧元素移除后在原位置添新元素。如果本不相同的元素被识别为相同，则会出现意料外的情况。添加key，则会认为是两个不同的节点。")]),t._v(" "),e("h3",{attrs:{id:"_9-3-路由切换组件不变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-路由切换组件不变"}},[t._v("#")]),t._v(" 9.3 路由切换组件不变")]),t._v(" "),e("blockquote",[e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/detail/:id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'detail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Detail\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("从路由/detail/1切换到/detail/2时，组件未发生变化，则组件会进行复用，生命周期钩子不会重新触发。")])]),t._v(" "),e("h4",{attrs:{id:"_9-3-1-路由导航守卫beforerouteupdate-最推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-1-路由导航守卫beforerouteupdate-最推荐"}},[t._v("#")]),t._v(" 9.3.1 路由导航守卫beforeRouteUpdate(最推荐)")]),t._v(" "),e("p",[t._v("该守卫在当前路由改变且组件被复用时调用。")]),t._v(" "),e("h4",{attrs:{id:"_9-3-2-观察-route对象的变化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-2-观察-route对象的变化"}},[t._v("#")]),t._v(" 9.3.2 观察$route对象的变化")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("watch")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route.query.id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求个人描述信息")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$route.query.page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求列表")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h4",{attrs:{id:"_9-3-3-为router-view组件添加属性key-简单粗暴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-3-为router-view组件添加属性key-简单粗暴"}},[t._v("#")]),t._v(" 9.3.3 为router-view组件添加属性key(简单粗暴)")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$route.fullPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("利用虚拟DOM在渲染时通过key来对比两个节点是否相同的原理。")]),t._v(" "),e("li",[t._v("每次切换路由组件时都会被销毁并且重新创建，非常浪费性能。")])]),t._v(" "),e("h3",{attrs:{id:"_9-4-为所有路由统一添加query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-为所有路由统一添加query"}},[t._v("#")]),t._v(" 9.4 为所有路由统一添加query")]),t._v(" "),e("h4",{attrs:{id:"_9-4-1-使用全局守卫beforeeach"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-1-使用全局守卫beforeeach"}},[t._v("#")]),t._v(" 9.4.1 使用全局守卫beforeEach")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("idy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IDY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("idy "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("to"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("缺点：每次切换路由时，全局守卫beforeEach会执行两次。")]),t._v(" "),e("h4",{attrs:{id:"_9-4-2-使用函数劫持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-2-使用函数劫持"}},[t._v("#")]),t._v(" 9.4.2 使用函数劫持")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("idy")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'IDY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" transitionTo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transitionTo\n\nrouter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("transitionTo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbrot")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("transitionTo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onComplete"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" onAbrot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("ul",[e("li",[t._v("通过拦截router.history.transitionTo方法，在vue-router内部在切换路由之前将参数添加到query中。")]),t._v(" "),e("li",[t._v("缺点：修改vue-router内部方法是个危险操作。")])]),t._v(" "),e("h3",{attrs:{id:"_9-5-区分-vuex-与-props-的使用边界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-区分-vuex-与-props-的使用边界"}},[t._v("#")]),t._v(" 9.5 区分 Vuex 与 props 的使用边界")]),t._v(" "),e("ul",[e("li",[t._v("业务组件使用维护状态，方便通信。")]),t._v(" "),e("li",[t._v("通用组件使用props通信，只需要父子之间进行通信，与业务组件解耦。")])]),t._v(" "),e("h3",{attrs:{id:"_9-6-避免v-if与v-for一起使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-避免v-if与v-for一起使用"}},[t._v("#")]),t._v(" 9.6 避免v-if与v-for一起使用")]),t._v(" "),e("p",[t._v("原因：v-for比v-if具有更高的优先级。")]),t._v(" "),e("p",[t._v("解决：在计算属性上遍历并过滤掉不需要渲染的数据。")]),t._v(" "),e("p",[t._v("好处：渲染更高效；解耦渲染层的逻辑，可维护性更强。")]),t._v(" "),e("h3",{attrs:{id:"_9-7-为组件样式设置作用域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-为组件样式设置作用域"}},[t._v("#")]),t._v(" 9.7 为组件样式设置作用域")]),t._v(" "),e("blockquote",[e("p",[t._v("最佳实践是只有顶级App组件和布局组件中的样式可以是全局的，其他所有组件都应该是有作用域的。")]),t._v(" "),e("p",[t._v("scoped特性、CSS Moudles")])]),t._v(" "),e("div",{staticClass:"language-vue line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("[$style.button]"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        lhj\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"_9-8-避免在scoped中使用元素选择器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-避免在scoped中使用元素选择器"}},[t._v("#")]),t._v(" 9.8 避免在scoped中使用元素选择器")]),t._v(" "),e("p",[t._v("在scoped样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。")]),t._v(" "),e("h3",{attrs:{id:"_9-9-自闭合组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-9-自闭合组件"}},[t._v("#")]),t._v(" 9.9 自闭合组件")]),t._v(" "),e("ul",[e("li",[t._v("自闭合组件表示刻意没有内容，代码更简洁。")]),t._v(" "),e("li",[t._v("HTML不支持自闭合的自定义元素。")])]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在单文件组件、字符串模板和JSX中 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在DOM模板中 --\x3e")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("my-component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);