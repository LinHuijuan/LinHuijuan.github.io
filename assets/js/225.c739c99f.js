(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{901:function(a,t,s){"use strict";s.r(t);var r=s(17),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"基于typescript从零重构axios-三"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于typescript从零重构axios-三"}},[a._v("#")]),a._v(" 基于TypeScript从零重构axios（三）")]),a._v(" "),s("p",[a._v("[TOC]")]),a._v(" "),s("h2",{attrs:{id:"六、配置化实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六、配置化实现"}},[a._v("#")]),a._v(" 六、配置化实现")]),a._v(" "),s("blockquote",[s("p",[a._v("让 axios 支持一些默认配置，实现了配置的合并，根据不同的属性采用不同的合并策略，并且扩展了 axios.create 方法扩展默认配置，生成新的实例。")])]),a._v(" "),s("h3",{attrs:{id:"_6-1-合并配置的设计与实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-合并配置的设计与实现"}},[a._v("#")]),a._v(" 6.1 合并配置的设计与实现")]),a._v(" "),s("h4",{attrs:{id:"_6-1-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-需求分析"}},[a._v("#")]),a._v(" 6.1.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_6-1-2-默认配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-默认配置"}},[a._v("#")]),a._v(" 6.1.2 默认配置")]),a._v(" "),s("h4",{attrs:{id:"_6-1-3-配置合并策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-配置合并策略"}},[a._v("#")]),a._v(" 6.1.3 配置合并策略")]),a._v(" "),s("h4",{attrs:{id:"_6-1-4-flatten-headers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-4-flatten-headers"}},[a._v("#")]),a._v(" 6.1.4 flatten headers")]),a._v(" "),s("h3",{attrs:{id:"_6-2-请求和响应配置化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-请求和响应配置化"}},[a._v("#")]),a._v(" 6.2 请求和响应配置化")]),a._v(" "),s("h3",{attrs:{id:"_6-2-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-需求分析"}},[a._v("#")]),a._v(" 6.2.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_6-2-2-修改默认配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-修改默认配置"}},[a._v("#")]),a._v(" 6.2.2 修改默认配置")]),a._v(" "),s("h4",{attrs:{id:"_6-2-3-transform-逻辑重构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-transform-逻辑重构"}},[a._v("#")]),a._v(" 6.2.3 transform 逻辑重构")]),a._v(" "),s("h3",{attrs:{id:"_6-3-扩展axios-create-静态接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-扩展axios-create-静态接口"}},[a._v("#")]),a._v(" 6.3 扩展axios.create 静态接口")]),a._v(" "),s("h4",{attrs:{id:"_6-3-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-需求分析"}},[a._v("#")]),a._v(" 6.3.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_6-3-2-静态方法扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-静态方法扩展"}},[a._v("#")]),a._v(" 6.3.2 静态方法扩展")]),a._v(" "),s("h2",{attrs:{id:"七、取消功能的设计和实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#七、取消功能的设计和实现"}},[a._v("#")]),a._v(" 七、取消功能的设计和实现")]),a._v(" "),s("h3",{attrs:{id:"_7-1-取消功能的设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-取消功能的设计"}},[a._v("#")]),a._v(" 7.1 取消功能的设计")]),a._v(" "),s("h4",{attrs:{id:"_7-1-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1-需求分析"}},[a._v("#")]),a._v(" 7.1.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_7-1-2-异步分离的设计方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2-异步分离的设计方案"}},[a._v("#")]),a._v(" 7.1.2 异步分离的设计方案")]),a._v(" "),s("h3",{attrs:{id:"_7-2-取消功能的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-取消功能的实现"}},[a._v("#")]),a._v(" 7.2 取消功能的实现")]),a._v(" "),s("h4",{attrs:{id:"_7-2-1-canceltoken-类实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-1-canceltoken-类实现"}},[a._v("#")]),a._v(" 7.2.1 CancelToken 类实现")]),a._v(" "),s("h4",{attrs:{id:"_7-2-2-扩展静态接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-2-扩展静态接口"}},[a._v("#")]),a._v(" 7.2.2 扩展静态接口")]),a._v(" "),s("h4",{attrs:{id:"_7-2-3-cancel类的实现及axios的扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-3-cancel类的实现及axios的扩展"}},[a._v("#")]),a._v(" 7.2.3 Cancel类的实现及axios的扩展")]),a._v(" "),s("h4",{attrs:{id:"_7-2-4-额外逻辑实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-4-额外逻辑实现"}},[a._v("#")]),a._v(" 7.2.4 额外逻辑实现")]),a._v(" "),s("h2",{attrs:{id:"八、更多功能实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八、更多功能实现"}},[a._v("#")]),a._v(" 八、更多功能实现")]),a._v(" "),s("blockquote",[s("p",[a._v("实现 axios 更多的功能，包括 XSRF 防御、上传、http 认证授权、withCredentials、自定义参数序列化、自定义合法状态码、自定义合法状态码等，百分百实现官方 axio 在浏览器端的功能。")])]),a._v(" "),s("h3",{attrs:{id:"_8-1-withcredentials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-withcredentials"}},[a._v("#")]),a._v(" 8.1 withCredentials")]),a._v(" "),s("h4",{attrs:{id:"_8-1-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-1-需求分析"}},[a._v("#")]),a._v(" 8.1.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-1-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-2-实现"}},[a._v("#")]),a._v(" 8.1.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-2-xsrf-防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-xsrf-防御"}},[a._v("#")]),a._v(" 8.2 xsrf 防御")]),a._v(" "),s("h4",{attrs:{id:"_8-2-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-1-需求分析"}},[a._v("#")]),a._v(" 8.2.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-2-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-2-实现"}},[a._v("#")]),a._v(" 8.2.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-3-上传和下载的进度监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-上传和下载的进度监控"}},[a._v("#")]),a._v(" 8.3 上传和下载的进度监控")]),a._v(" "),s("h4",{attrs:{id:"_8-3-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-1-需求分析"}},[a._v("#")]),a._v(" 8.3.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-3-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-2-实现"}},[a._v("#")]),a._v(" 8.3.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-4-http授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-http授权"}},[a._v("#")]),a._v(" 8.4 HTTP授权")]),a._v(" "),s("h4",{attrs:{id:"_8-4-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-1-需求分析"}},[a._v("#")]),a._v(" 8.4.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-4-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-2-实现"}},[a._v("#")]),a._v(" 8.4.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-5-自定义合法状态码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-自定义合法状态码"}},[a._v("#")]),a._v(" 8.5 自定义合法状态码")]),a._v(" "),s("h4",{attrs:{id:"_8-5-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-1-需求分析"}},[a._v("#")]),a._v(" 8.5.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-5-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-2-实现"}},[a._v("#")]),a._v(" 8.5.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-6-自定义参数序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-自定义参数序列化"}},[a._v("#")]),a._v(" 8.6 自定义参数序列化")]),a._v(" "),s("h4",{attrs:{id:"_8-6-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-1-需求分析"}},[a._v("#")]),a._v(" 8.6.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-6-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-2-实现"}},[a._v("#")]),a._v(" 8.6.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-7-baseurl-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-baseurl-需求分析"}},[a._v("#")]),a._v(" 8.7 baseURL 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-7-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-1-需求分析"}},[a._v("#")]),a._v(" 8.7.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-7-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-7-2-实现"}},[a._v("#")]),a._v(" 8.7.2 实现")]),a._v(" "),s("h3",{attrs:{id:"_8-8-静态方法扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-8-静态方法扩展"}},[a._v("#")]),a._v(" 8.8 静态方法扩展")]),a._v(" "),s("h4",{attrs:{id:"_8-8-1-需求分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-8-1-需求分析"}},[a._v("#")]),a._v(" 8.8.1 需求分析")]),a._v(" "),s("h4",{attrs:{id:"_8-8-2-实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-8-2-实现"}},[a._v("#")]),a._v(" 8.8.2 实现")])])}),[],!1,null,null,null);t.default=_.exports}}]);