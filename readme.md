# 暴风项目

- 技术栈：HTML(5)+CSS(3)+JS
- soft软件：sublime/Visual Studio Code/webstorme
- 其它环境：服务器端环境（phpstudy）

## 作用
基于移动互联网的发展，人们迫切希望能够存在一个在线影音网站。提供了在线观看视频功能。
后期登录、注册、上传视频、冲会员功能...后期开发中

## 开发流程

1.调研 2.产品经理（策划稿）-> UI

产品经理主导项目实施（想法）和UI的头和Web前端头和后端的头

web开发上游（UI和产品经理）

- 在对应目录下的地址栏 输入 cmd 回车
- tree /f 生成目录树
- 右键-> 标记
- 拖拽你想复制的文字
- 回车

## 关于项目结构
- js/images/css 都属于静态资源（固定不变的） static

--------------------
│  readme.md    项目说明文档
│
├─static	静态文件夹
│  ├─css	样式文件夹
│  ├─images	静态图片文件夹
│  └─js		js文件夹
└─uploads	后期要上传资源的文件夹


## 开始开发
- html需要注意事项
	1. 要写TDK（title,description,keywords）,作用：html文件能够被网站搜索到（首先根据网页的TDK）
	2. 样式写到head（因为css不会影响页面往下继续加载），js如果没有特殊要求放到body尾标签紧挨（因为js有阻塞的特点）特殊情况：html5shiv.js
	3. 尽量不能出现空标签

- 命名规范( 团队要求的风格 )
class名，用小写，如果多个单词用 _ 隔开。id名 则使用小驼峰式命名。
- 关于兼容
	1. 像阴影、圆角是可以用的
	2. 使用css3 的选择器要注意了。



