(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{767:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"language-dart line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BottomNavigationBar")]),s._v("（"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Key")]),s._v(" key，\n        @ required "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BottomNavigationBarItem")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" items，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//放入导航栏的控件item列表长度items必须至少为2，每个项目的图标和标题不得为空，")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ValueChanged")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v(" int "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" onTap，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//点击导航栏子item的时候的")]),s._v("\n        int currentIndex："),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当前活动BottomNavigationBarItem的项目 索引。")]),s._v("\n        double elevation："),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置z 轴坐标，设置了并没有什么效果")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BottomNavigationBarType")]),s._v(" type，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//底部导航栏的类型，有fixed和shifting两个类型，不同类型显示效果不一样")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" fixedColor，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中的时候的字体颜色，不能跟selectedItemColor 一起用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" backgroundColor，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//导航栏背景颜色")]),s._v("\n        double iconSize："),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24.0")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// icon的大小 ,设置了并木有效果")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" selectedItemColor，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中的时候的字体颜色，不能跟fixedColor 一起用")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" unselectedItemColor，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未选中BottomNavigationBarItem标签 的字体大小")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IconThemeData")]),s._v(" selectedIconTheme： "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IconThemeData")]),s._v("（），"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中时的子Item的样式，这个不能跟BottomNavigationBarItem Icon 的colors 一起用，否则会以Icon 的colors为准，主题设置的不会生效，并且icon必须为官方的icon为主，否则也无法生效")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IconThemeData")]),s._v(" unselectedIconTheme： "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IconThemeData")]),s._v("（），              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未选中时的BottomNavigationBarItem.icon s中图标的大小，不透明度和颜色")]),s._v("\n        double selectedFontSize： "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.0")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中的tab的字体的大小")]),s._v("\n        double unselectedFontSize： "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.0")]),s._v("，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未选中BottomNavigationBarItem标签 的字体大小")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextStyle")]),s._v(" selectedLabelStyle，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中的时候的字体样式，设置了并没有生效")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TextStyle")]),s._v(" unselectedLabelStyle，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//未选中时的字体样式，设置了并没有生效")]),s._v("\n        bool showSelectedLabels，"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否为未选择的BottomNavigationBarItem显示标签")]),s._v("\n        bool showUnselectedLabels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//是否为选定的BottomNavigationBarItem显示标签")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("）\n\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BottomNavigationBarItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token metadata function"}},[s._v("@required")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置icon图标")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置标签控件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Widget")]),s._v(" activeIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//选中的时候的标签控件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Color")]),s._v(" backgroundColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//BottomNavigationBarType为shifting时的背景颜色")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);