(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{832:function(t,s,a){"use strict";a.r(s);var n=a(17),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"弱类型的js隐式转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弱类型的js隐式转换"}},[t._v("#")]),t._v(" 弱类型的JS隐式转换")]),t._v(" "),a("blockquote",[a("p",[t._v("参考文献："),a("a",{attrs:{href:"https://github.com/jawil/blog/issues/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("从++[[]][+[]]+[+[]]==10?深入浅出弱类型JS的隐式转换"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h2",{attrs:{id:"一、强弱类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、强弱类型"}},[t._v("#")]),t._v(" 一、强弱类型")]),t._v(" "),a("ul",[a("li",[t._v("强类型\n"),a("ul",[a("li",[t._v("每个变量和对象都必须具有声明类型，他们是在编译的时候就确定类型的数据，在执行时类型不能更改。")])])]),t._v(" "),a("li",[t._v("弱类型\n"),a("ul",[a("li",[t._v("在执行的时候才会确定类型。")])])]),t._v(" "),a("li",[t._v("强类型安全，而且效率高。弱类型相比而言不安全 ，但它"),a("strong",[t._v("让不正确的类型可以通过隐式转换得到正确类型，就好像所有运算能进行运算一样")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"二、ecmascript-运算符优先级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、ecmascript-运算符优先级"}},[t._v("#")]),t._v(" 二、ECMAScript 运算符优先级")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("运算符")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v(". [] ()")]),t._v(" "),a("td",[t._v("字段访问、数组下标、函数调用以及表达式分组")])]),t._v(" "),a("tr",[a("td",[t._v("++ --  - + ~ ! delete new typeof void")]),t._v(" "),a("td",[t._v("一元运算符、返回数据类型、对象创建、未定义值")])]),t._v(" "),a("tr",[a("td",[t._v("* / %")]),t._v(" "),a("td",[t._v("乘法、除法、取模")])]),t._v(" "),a("tr",[a("td",[t._v("+ - +")]),t._v(" "),a("td",[t._v("加法、减法、字符串连接")])]),t._v(" "),a("tr",[a("td",[t._v("<< >> >>>")]),t._v(" "),a("td",[t._v("移位")])]),t._v(" "),a("tr",[a("td",[t._v("< <= > >= instanceof")]),t._v(" "),a("td",[t._v("小于、小于等于、大于、大于等于、instanceof")])]),t._v(" "),a("tr",[a("td",[t._v("== != "),a("code",[t._v("===")]),t._v(" "),a("code",[t._v("!==")])]),t._v(" "),a("td",[t._v("等于、不等于、严格相等、非严格相等")])]),t._v(" "),a("tr",[a("td",[t._v("&")]),t._v(" "),a("td",[t._v("按位与")])]),t._v(" "),a("tr",[a("td",[t._v("^")]),t._v(" "),a("td",[t._v("按位异或")])]),t._v(" "),a("tr",[a("td",[t._v("&&")]),t._v(" "),a("td",[t._v("逻辑与")])]),t._v(" "),a("tr",[a("td",[t._v("?:")]),t._v(" "),a("td",[t._v("条件")])]),t._v(" "),a("tr",[a("td",[t._v("= oP=")]),t._v(" "),a("td",[t._v("赋值、运算赋值")])]),t._v(" "),a("tr",[a("td",[t._v(",")]),t._v(" "),a("td",[t._v("多重求值")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-1一元运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1一元运算符"}},[t._v("#")]),t._v(" 2.1一元运算符")]),t._v(" "),a("p",[t._v("一元运算符只有一个参数，即要操作的对象或值。它们是 ECMAScript 中最简单的运算符。")]),t._v(" "),a("h4",{attrs:{id:"_2-1-1一元-和一元-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1一元-和一元-运算符"}},[t._v("#")]),t._v(" 2.1.1一元 + 和一元 - 运算符")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("将操作数转换为Number类型，其中一元-运算符还会反转其正负（如果操作符为NaN，仍为NaN。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v('计算字符串的方式与 parseInt() 相似，主要的不同是只有对以 "0x" 开头的字符串（表示十六进制数字），一元运算符才能把它转换成十进制的值')]),t._v(" "),a("ul",[a("li",[t._v('用一元加法转换 "010"，得到的总是 10，而 "0xB" 将被转换成 11。')])])])]),t._v(" "),a("h4",{attrs:{id:"_2-1-2-前增量运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-前增量运算符"}},[t._v("#")]),t._v(" 2.1.2++前增量运算符")]),t._v(" "),a("p",[t._v("数值上+1。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-运算符"}},[t._v("#")]),t._v(" 2.2+ - 运算符")]),t._v(" "),a("h4",{attrs:{id:"_2-2-1-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-运算符"}},[t._v("#")]),t._v(" 2.2.1+ 运算符")]),t._v(" "),a("ul",[a("li",[t._v("特殊行为\n"),a("ul",[a("li",[t._v("某个运算数是 NaN，那么结果为 NaN。")]),t._v(" "),a("li",[t._v("-Infinity 加 -Infinity，结果为 -Infinity。")]),t._v(" "),a("li",[t._v("Infinity 加 -Infinity，结果为 NaN。")]),t._v(" "),a("li",[t._v("+0 加 +0，结果为 +0。")]),t._v(" "),a("li",[t._v("-0 加 +0，结果为 +0。")]),t._v(" "),a("li",[t._v("-0 加 -0，结果为 -0。")])])]),t._v(" "),a("li",[a("strong",[a("a",{attrs:{href:"http://yanhaijing.com/es5/#null",target:"_blank",rel:"noopener noreferrer"}},[t._v("ECMAScripts5规范"),a("OutboundLink")],1),t._v("：如果只有一个运算数是字符串，把另一个运算数转换成字符串，结果是两个字符串连接成的字符串。")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"11"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"11"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("转数值：只对null、''、false、数值字符串有效。")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"169"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// num1 num2 num3 num4 => 0 0 0 169")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-2-2-运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-运算符"}},[t._v("#")]),t._v(" 2.2.2- 运算符")]),t._v(" "),a("ul",[a("li",[t._v("特殊行为\n"),a("ul",[a("li",[t._v("某个运算数是 NaN，那么结果为 NaN。")]),t._v(" "),a("li",[t._v("Infinity 减 Infinity，结果为 NaN。")]),t._v(" "),a("li",[t._v("-Infinity 减 -Infinity，结果为 NaN。")]),t._v(" "),a("li",[t._v("Infinity 减 -Infinity，结果为 Infinity。")]),t._v(" "),a("li",[t._v("-Infinity 减 Infinity，结果为 -Infinity。")]),t._v(" "),a("li",[t._v("+0 减 +0，结果为 +0。")]),t._v(" "),a("li",[t._v("-0 减 -0，结果为 -0。")]),t._v(" "),a("li",[t._v("+0 减 -0，结果为 +0。")]),t._v(" "),a("li",[t._v("某个运算符不是数字，那么结果为 NaN。")])])]),t._v(" "),a("li",[a("strong",[t._v("规范：如果有一个不是数字，会调用 ToNumber 方法按照规则转化成数字类型，然后进行相减。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-3-类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-类型转换"}},[t._v("#")]),t._v(" 2.3 类型转换")]),t._v(" "),a("h4",{attrs:{id:"_2-3-1-显式类型转换-强制类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-显式类型转换-强制类型转换"}},[t._v("#")]),t._v(" 2.3.1 显式类型转换（强制类型转换）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Number()")])]),t._v(" "),a("li",[a("p",[t._v("parseInt()  可以用来去掉px")])]),t._v(" "),a("li",[a("p",[t._v("parseFloat()")])])]),t._v(" "),a("h4",{attrs:{id:"_2-3-2-隐式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-隐式类型转换"}},[t._v("#")]),t._v(" 2.3.2 隐式类型转换")]),t._v(" "),a("blockquote",[a("p",[t._v("参考教程："),a("a",{attrs:{href:"https://juejin.im/post/5a7172d9f265da3e3245cbca",target:"_blank",rel:"noopener noreferrer"}},[t._v("你所忽略的js隐式转换"),a("OutboundLink")],1)]),t._v(" "),a("ol",[a("li",[t._v("将值转为原始值，"),a("code",[t._v("ToPrimitive()")])]),t._v(" "),a("li",[t._v("将值转为数字，"),a("code",[t._v("ToNumber()")])]),t._v(" "),a("li",[t._v("将值转为字符串，"),a("code",[t._v("ToString()")])])])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("+")]),t._v("\t200 + '3'\t\t变成字符串")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("- * / %")]),t._v("\t'200' - 3     变成数字")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0 null的二进制表示都是0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("++ --")]),t._v("\t变成数字")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("> <")]),t._v(" \t数字的比较 、字符串的比较（Object遇到"),a("code",[t._v("> <")]),t._v("会转换成字符串比较）")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("!")]),t._v("\t取反\t把右边的数据类型转成布尔值")])])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("new Number（）")]),t._v("是一个内置的函数构造函数。 虽然它看起来像一个数字，但它并不是一个真正的数字：它有一堆额外的功能，是一个对象。")]),t._v(" "),a("p",[t._v("当我们使用"),a("code",[t._v("==")]),t._v("运算符时，"),a("code",[t._v("==")]),t._v("会引发隐式类型转换，右侧的对象类型会自动拆箱为"),a("code",[t._v("Number")]),t._v("类型，返回"),a("code",[t._v("true")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// answer1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("num1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// answer2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shift\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shift\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("h5",{attrs:{id:"_2-3-2-1-布尔值转数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-1-布尔值转数值"}},[t._v("#")]),t._v(" 2.3.2.1 布尔值转数值")]),t._v(" "),a("h5",{attrs:{id:"_2-3-2-2-字符串和数字-字符串转数字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-2-字符串和数字-字符串转数字"}},[t._v("#")]),t._v(" 2.3.2.2 字符串和数字，字符串转数字")]),t._v(" "),a("h5",{attrs:{id:"_2-3-2-3-对象-优先用valueof-其次tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-3-对象-优先用valueof-其次tostring"}},[t._v("#")]),t._v(" 2.3.2.3 对象，优先用valueOf()，其次toString()")]),t._v(" "),a("blockquote",[a("h6",{attrs:{id:"严格比较运算符-与比较运算符-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严格比较运算符-与比较运算符-的区别"}},[t._v("#")]),t._v(" 严格比较运算符"),a("code",[t._v("===")]),t._v("与比较运算符"),a("code",[t._v("==")]),t._v("的区别")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。")])]),t._v(" "),a("li",[a("p",[t._v("== 执行类型转换的规则如下：（数字>字符串>对象）")]),t._v(" "),a("p",[t._v("如果一个运算数是 Boolean 值，在检查相等性之前，把它转换成数字值。false 转换成 0，true 为 1。")]),t._v(" "),a("p",[t._v("如果一个运算数是字符串，另一个是数字，在检查相等性之前，要尝试把字符串转换成数字。")]),t._v(" "),a("p",[t._v("如果一个运算数是对象，另一个是字符串，在检查相等性之前，要尝试把对象转换成字符串。")]),t._v(" "),a("p",[t._v("如果一个运算数是对象，另一个是数字，在检查相等性之前，要尝试把对象转换成数字。")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);