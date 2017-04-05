# CarDetection

### 4.1

练习使用Webpack。

These files in CarDetection/practice_webpack:

**entry.js**

**module.js**

**bundle.js** 

**style.css** 

**webpack.config.js**

are created for webpack learning practice [Webpack中文指南](http://webpackdoc.com/usage.html).

### 4.4 

用Express + Webpack + React.js 搭建了环境并跑通了系统，实现了第一个React Component: headerBanner.js。

#### 注意：

- Webpack.config.js配置项中每一项的用途。
- 路径引用和路径配置问题。
    import组件、require CSS等文件时的相对路径./ ../。
    webpack.config.js中的output配置项与express工程下的配置static路径的对应关系。
- 目录结构，尤其是public/javascripts/下的目录结构设计，将routers，components分开，有利于模块化，组件化编程。写好的组件统一引入到/routers/中的相应页面。
- 使用webpack plugin--HtmlWebpackPlugin，可以将你自己写的template.jade转换成相应的html文件并自动引入相应的打包后生成的css和js文件。

#### 添加导航栏组件navigation.js:
这个组件与headBanner.js的定义方式不同：

后者是直接将jsx表达式作为一个箭头函数的返回值赋给一个const常量HeaderBanner然后export。而前者是，定义一个“class”(ES6),将jsx表达式作为该class的render()函数的返回值，这个class继承自Component.所以在targetSearch.js中import该组件的方式也不一样：
import const时需要大括号而import navigation.js不需要大括号。

- 如何实现导航栏项目单击时的背景色变化？
- 为什么要用class定义navigation组件？
用class...extends定义navigation组件，可以在组件中定义ComponentDidMount函数，绑定一些事件处理函数，实现单击更换背景颜色等功能。

- react-router与Express都可以路由，那区别是？

- searchTarget.js中，可以用`ReactDOM.render`实现页面布局，为什么要用`class TargetSearch extends Component`定义一个TargetSearch组件？
需要路由，用react-router;方便组件化。

- 在`ReactDOM.render()`的第一个参数中用Router实现路由后，访问相应的url如`http://localhost:3002/targetSearch#/`nonmotor可以访问到，但是单击按钮访问不到--在li的a标签中也要相应设置`href="/targetSearch#/motor"`等，表示url跳转到/targetSearch#/motor等。相当于：Router的设置，是设置每个url对应的页面应该渲染成的样子；href是控制单击链接时的跳转。


